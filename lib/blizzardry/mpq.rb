module Blizzardry
  class MPQ
    require 'blizzardry/mpq/file'
    require 'blizzardry/mpq/libstorm'

    READ_ONLY = 0x00000100

    def initialize(handle)
      @handle = handle
    end

    def patch(archive, prefix = nil)
      LibStorm.SFileOpenPatchArchive(@handle, archive, prefix, 0)
    end

    def patched?
      LibStorm.SFileIsPatchedArchive(@handle)
    end

    def close
      LibStorm.SFileCloseArchive(@handle)
    end

    def contains?(filename)
      LibStorm.SFileHasFile(@handle, filename)
    end

    def find(query)
      results = []
      result = LibStorm::SearchResult.new

      handle = LibStorm.SFileFindFirstFile(@handle, query, result, nil)
      unless handle.null?
        results << result[:filename].to_s
        yield results.last if block_given?

        while LibStorm.SFileFindNextFile(handle, result)
          results << result[:filename].to_s
          yield results.last if block_given?
        end
      end
      results
    ensure
      LibStorm.SFileFindClose(handle)
    end

    def [](filename)
      handle = FFI::MemoryPointer.new :pointer
      if LibStorm.SFileOpenFileEx(@handle, filename, 0, handle)
        File.new(handle.read_pointer)
      end
    end

    def extract(filename, local)
      LibStorm.SFileExtractFile(@handle, filename, local, 0)
    end

    class << self

      private :new

      def open(archives, flags: 0, prefix: nil)
        archives = Array(archives)
        base = archives.shift
        flags |= READ_ONLY if archives.any?

        handle = FFI::MemoryPointer.new :pointer
        return unless LibStorm.SFileOpenArchive(base, 0, flags, handle)

        mpq = new(handle.read_pointer)

        archives.each do |archive|
          mpq.patch(archive, prefix)
        end

        if block_given?
          yield mpq
          mpq.close
          nil
        else
          mpq
        end
      end

    end

  end
end
