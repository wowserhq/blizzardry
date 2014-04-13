module Blizzardry
  class M2::Skin < BinData::Record
    endian :little

    uint32 :id
    uint32 :indices_count
    uint32 :indices_offset
    uint32 :triangles_count
    uint32 :triangles_offset
    uint32 :properties_count
    uint32 :properties_offset
    uint32 :submeshes_count
    uint32 :submeshes_offset
    uint32 :texture_units_count
    uint32 :texture_units_offset
    uint32 :bones

    array :indices, type: :uint16, initial_length: :indices_count
    array :triangles, initial_length: lambda { triangles_count / 3 } do
      array type: :uint16, initial_length: 3
    end

  end
end
