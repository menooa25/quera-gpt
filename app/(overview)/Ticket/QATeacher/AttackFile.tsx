"use client";
import { MdAttachFile, MdInsertDriveFile } from "react-icons/md";
import { useEffect, useState } from "react";
interface Props {
  register: any;
  file: File[];
}
const AttachFile = ({ register, file }: Props) => {
  const [fileId] = useState("fileInputId");
  const [fileSelected, setFileSelected] = useState(false);
  useEffect(() => {
    if (file && file[0]?.size > 3) setFileSelected(true);
  }, [file]);
  return (
    <>
      <div>
        <label
          htmlFor={fileId}
          className="flex-1 input flex cursor-pointer justify-between text-black text-opacity-35"
        >
          {fileSelected ? (
            <MdInsertDriveFile className="text-qu-gray-500" size={20} />
          ) : (
            <span>ضمیمه پاسخ ارسالی</span>
          )}
          <MdAttachFile className="text-black text-opacity-35" size={20} />
        </label>
      </div>

      <input {...register} id={fileId} type="file" hidden />
    </>
  );
};

export default AttachFile;
