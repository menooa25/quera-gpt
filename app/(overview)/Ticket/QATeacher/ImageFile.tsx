"use client";
import Image from "next/image";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ImageFile = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div
      {...getRootProps()}
      className="w-full cursor-pointer border border-dashed rounded-md py-2 px-3 flex flex-col justify-center items-center   border-qu-gray-200"
    >
      <Image
        alt="image placeholder"
        src={"/image_placeholder.svg"}
        height={75}
        width={75}
      />
      <div className="mt-[10px] flex gap-x-2 ">
        <span className="text-black text-opacity-35">
          فایل تصویری خود را اینجا بیندازید یا
        </span>
        <span className="text-primary-600">انتخاب کنید</span>
      </div>
      <input {...getInputProps()} className="hidden" />
    </div>
  );
};

export default ImageFile;
