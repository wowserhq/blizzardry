module Blizzardry
  class Vec3f < BinData::Record
    endian :little

    float :x
    float :y
    float :z
  end
end
