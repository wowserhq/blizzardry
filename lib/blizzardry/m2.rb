module Blizzardry
  class M2 < BinData::Record
    require 'blizzardry/m2/skin'

    endian :little

    string :signature, length: 4, asserted_value: 'MD20'

    uint32 :version

    uint32 :names_count
    uint32 :names_offset

    uint32 :flags

    uint32 :sequences_count
    uint32 :sequences_offset
    uint32 :animations_count
    uint32 :animations_offset
    uint32 :animation_lookups_count
    uint32 :animation_lookups_offset
    uint32 :bones_count
    uint32 :bones_offset
    uint32 :key_bone_lookups_count
    uint32 :key_bone_lookups_offset
    uint32 :vertices_count
    uint32 :vertices_offset

    uint32 :view_count

    uint32 :colors_count
    uint32 :colors_offset
    uint32 :textures_count
    uint32 :textures_offset
    uint32 :transparencies_count
    uint32 :transparencies_offset
    uint32 :uv_animations_count
    uint32 :uv_animations_offset
    uint32 :replacable_textures_count
    uint32 :replacable_textures_offset
    uint32 :render_flags_count
    uint32 :render_flags_offset
    uint32 :bone_lookups_count
    uint32 :bone_lookups_offset
    uint32 :texture_lookups_count
    uint32 :texture_lookups_offset
    uint32 :texture_units_count
    uint32 :texture_units_offset
    uint32 :transparency_lookups_count
    uint32 :transparency_lookups_offset
    uint32 :uv_animation_lookups_count
    uint32 :uv_animation_lookups_offset

    vec3f  :min_vertex_box
    vec3f  :max_vertex_box
    float  :vertex_radius

    vec3f  :min_bounding_box
    vec3f  :max_bounding_box
    float  :bounding_radius

    uint32 :bounding_triangles_count
    uint32 :bounding_triangles_offset
    uint32 :bounding_vertices_count
    uint32 :bounding_vertices_offset
    uint32 :bounding_normals_count
    uint32 :bounding_normals_offset
    uint32 :attachments_count
    uint32 :attachments_offset
    uint32 :attachment_lookups_count
    uint32 :attachment_lookups_offset
    uint32 :events_count
    uint32 :events_offset
    uint32 :lights_count
    uint32 :lights_offset
    uint32 :cameras_count
    uint32 :cameras_offset
    uint32 :camera_lookups_count
    uint32 :camera_lookups_offset
    uint32 :ribbon_emitters_count
    uint32 :ribbon_emitters_offset
    uint32 :particle_emitters_count
    uint32 :particle_emitters_offset
    uint32 onlyif: lambda { flags == 8 }
    uint32 onlyif: lambda { flags == 8 }

    array :names, type: :stringz, initial_length: :names_count
    array :sequences, type: :uint32, initial_length: :sequences_count
    array :animations, initial_length: :animations_count do
      skip length: 0x40
    end
    array :animation_lookups, type: :uint16, initial_length: :animation_lookups_count

    array :vertices, initial_length: :vertices_count, adjust_offset: :vertices_offset do
      float3 :position
      array :bone_weights, type: :uint8, initial_length: 4
      array :bone_indices, type: :uint8, initial_length: 4
      float3 :normal
      float2 :texture_coords
      float2
    end

    array :textures, initial_length: :textures_count do
      uint32 :type
      uint32 :flags
      uint32 :filename_length
      uint32 :filename_offset
    end

  end
end
