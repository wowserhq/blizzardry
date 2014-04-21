module Blizzardry
  class MPQ
    require 'blizzardry/mpq/file'
    require 'blizzardry/mpq/storm'

    def initialize(handle)
      @handle = handle
    end

    def patch(archive)
      Storm.SFileOpenPatchArchive(@handle, archive, nil, 0)
    end

    def patched?
      Storm.SFileIsPatchedArchive(@handle)
    end

    def close
      Storm.SFileCloseArchive(@handle)
    end

    def has?(filename)
      Storm.SFileHasFile(@handle, filename)
    end

    def find(query)
      result = Storm::SearchResult.new

      handle = Storm.SFileFindFirstFile(@handle, query, result, nil)
      unless handle.null?
        yield result[:filename].to_s

        while Storm.SFileFindNextFile(handle, result)
          yield result[:filename].to_s
        end
      end
    ensure
      Storm.SFileFindClose(handle)
    end

    def get(filename)
      handle = FFI::MemoryPointer.new :pointer
      if Storm.SFileOpenFileEx(@handle, filename, 0, handle)
        File.new(handle.read_pointer)
      end
    end

    def extract(filename, local)
      Storm.SFileExtractFile(@handle, filename, local, 0)
    end

    class << self

      private :new

      def open(archive)
        handle = FFI::MemoryPointer.new :pointer
        return unless Storm.SFileOpenArchive(archive, 0, 0, handle)

        mpq = new(handle.read_pointer)
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
