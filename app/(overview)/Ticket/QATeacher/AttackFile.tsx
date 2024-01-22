"use client";
import { MdAttachFile, MdInsertDriveFile } from "react-icons/md";
import { useState } from "react";
interface Props {
  register: any;
}
const AttachFile = ({ register }: Props) => {
  const [fileId] = useState("fileInputId");
  const [fileSelected, setFileSelected] = useState(false);

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

      <input
        {...register}
        onChange={({ target: { value } }) =>
          value.length > 3 && setFileSelected(true)
        }
        id={fileId}
        accept="image/*"
        type="file"
        hidden
      />
    </>
  );
};

export default AttachFile;
