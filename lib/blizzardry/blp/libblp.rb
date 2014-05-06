module Blizzardry
  module BLP::LibBLP
    extend FFI::Library

    ffi_lib :libblp

    attach_function :blp_processFile, [:pointer], :pointer
    attach_function :blp_convert,     [:pointer, :pointer, :uint], :pointer
    attach_function :blp_width,       [:pointer, :uint], :uint32
    attach_function :blp_height,      [:pointer, :uint], :uint32
  end
end
