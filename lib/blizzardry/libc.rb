module Blizzardry
  module LibC
    extend FFI::Library

    ffi_lib :libc

    attach_function :fopen,  [:string, :string], :pointer
    attach_function :fclose, [:pointer], :bool
  end
end
