module Blizzardry
  class BLP
    require 'blizzardry/blp/libblp'

    def initialize(file)
      @file = file
      @handle = LibBLP.blp_processFile(@file)
    end

    def close
      Blizzardry::LibC.fclose(@file)
    end

    def width(mipmap = 0)
      LibBLP.blp_width(@handle, mipmap)
    end

    def height(mipmap = 0)
      LibBLP.blp_height(@handle, mipmap)
    end

    def data
      LibBLP.blp_convert(@file, @handle, 0).read_bytes(width * height * 4)
    end

    def pixels
      data.unpack('N*')
    end

    class << self

      def open(path)
        file = Blizzardry::LibC.fopen(path, 'r')
        return if file.null?

        blp = new(file)

        if block_given?
          yield blp
          blp.close
          nil
        else
          blp
        end
      end

    end

  end
end
