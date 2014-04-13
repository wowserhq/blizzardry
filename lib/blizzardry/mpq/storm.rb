module Blizzardry
  class MPQ::Storm
    extend FFI::Library

    ffi_lib :libstorm
    ffi_convention :stdcall

    class SearchResult < FFI::Struct
      layout :filename,    [:char, 260],
             :name,        :string,
             :hash_index,  :uint32,
             :block_index, :uint32,
             :file_size,   :uint32,
             :file_flags,  :uint32,
             :comp_size,   :uint32,
             :time_lo,     :uint32,
             :time_hi,     :uint32,
             :locale_id,   :uint32
    end

    typedef :pointer, :file
    typedef :pointer, :mpq
    typedef :pointer, :search_query

    # Manipulating MPQ archives
    attach_function :SFileOpenArchive,   [:string, :uint32, :uint32, :mpq], :bool
    # :SFileCreateArchive
    # :SFileAddListFile
    # :SFileSetLocale
    # :SFileGetLocale
    # :SFileFlushArchive
    attach_function :SFileCloseArchive,  [:mpq], :bool
    # :SFileSetMaxFileCount
    # :SFileCompactArchive
    # :SFileSetCompactCallback

    # Using patched archives
    # :SFileOpenPatchArchive Adds a patch archive for an existing open archive
    # :SFileIsPatchedArchive Determines if the open MPQ has patches

    # Reading files
    attach_function :SFileOpenFileEx,    [:mpq, :string, :uint, :file], :bool
    attach_function :SFileGetFileSize,   [:file, :pointer], :uint32
    # :SFileSetFilePointer Sets a new position within archive file
    attach_function :SFileReadFile,      [:file, :pointer, :uint32, :pointer, :pointer], :bool
    # :SFileCloseFile  Closes an open file
    attach_function :SFileHasFile,       [:mpq, :string], :bool
    attach_function :SFileGetFileName,   [:file, :pointer], :bool
    # :SFileGetFileInfo  Retrieves an information about open file or archive
    # :SFileVerifyFile Verifies a file against its extended attributes
    # :SFileVerifyArchive  Verifies the digital signature of an archive
    attach_function :SFileExtractFile,   [:mpq, :string, :string, :uint32], :bool

    # File searching
    attach_function :SFileFindFirstFile, [:mpq, :string, SearchResult.by_ref, :string], :search_query
    attach_function :SFileFindNextFile,  [:search_query, SearchResult.by_ref], :bool
    attach_function :SFileFindClose,     [:search_query], :bool
    # SListFileFindFirstFile  Finds a first line in the listfile that matches the specification
    # SListFileFindNextFile Finds a next line in the listfile that matches the specification
    # SListFileFindClose  Stops searching in the listfile
    # SFileEnumLocales  Enumerates all locales for a given file that are in the archive

    # Adding files to MPQ
    # SFileCreateFile Creates a new file in MPQ and prepares it for writing data
    # SFileWriteFile  Writes data to the file within MPQ
    # SFileFinishFile Finalizes writing file to the MPQ
    # SFileAddFileEx  Adds a file to the archive
    # SFileAddFile  Adds a data file to the archive (obsolete)
    # SFileAddWave  Adds a WAVE file to the archive (obsolete)
    # SFileRemoveFile Deletes a file from MPQ archive
    # SFileRenameFile Renames a file within MPQ archive
    # SFileSetFileLocale  Changes locale of a file in MPQ archive
    # SFileSetDataCompression Sets default compression method for adding a data file using SFileAddFile
    # SFileSetAddFileCallback Sets callback function that is called to inform the calling application about progress of adding file to the archive

    # Compression functions
    # SCompImplode  Compresses a data buffer using IMPLODE method (Pkware Data Compression Library)
    # SCompExplode  Decompresses a buffer that has been imploded by SCompImplode
    # SCompCompress Compresses a data buffer using any of the supported MPQ compressions
    # SCompDecompress Decompresses a data buffer that has been compressed by SCompCompress

    attach_function :GetLastError,       [], :uint32
  end
end
