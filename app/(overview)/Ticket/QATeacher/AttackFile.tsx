"use client";

import { MdAttachFile } from "react-icons/md";
import { useState } from "react";
interface Props {
  register: any;
}
const AttachFile = ({ register }: Props) => {
  const [fileId] = useState("fileInputId");

  return (
    <>
      <div>
        <label
          htmlFor={fileId}
          className="flex-1 input flex cursor-pointer justify-between text-black text-opacity-35"
        >
          <span>ضمیمه پاسخ ارسالی</span>
          <MdAttachFile className="text-black text-opacity-35" size={20} />
        </label>
      </div>

      <input {...register} id={fileId} accept="image/*" type="file" hidden />
    </>
  );
};

export default AttachFile;
