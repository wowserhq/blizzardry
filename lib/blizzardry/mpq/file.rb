module Blizzardry
  class MPQ::File

    def initialize(handle)
      @handle = handle
    end

    def name
      buffer = FFI::MemoryPointer.new 260
      MPQ::LibStorm.SFileGetFileName(@handle, buffer)
      buffer.read_string
    end

    def size
      MPQ::LibStorm.SFileGetFileSize(@handle, nil)
    end

    def read
      buffer = FFI::MemoryPointer.new :char, size
      read = FFI::MemoryPointer.new :pointer
      if MPQ::LibStorm.SFileReadFile(@handle, buffer, buffer.size, read, nil)
        buffer.read_bytes size
      end
    end

  end
end
