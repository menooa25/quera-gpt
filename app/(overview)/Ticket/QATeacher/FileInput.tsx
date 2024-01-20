"use client";

import { MdAttachFile } from "react-icons/md";
import { useState } from "react";
const FileInput = () => {
  const [fileId] = useState("fileInputId");
  return (
    <>
      <div className="">
        <label
          htmlFor={fileId}
          className="flex-1 input flex justify-between text-black text-opacity-35"
        >
          <span>ضمیمه پاسخ ارسالی</span>
          <MdAttachFile className="text-black text-opacity-35" size={20} />
        </label>
      </div>

      <input id={fileId} type="file" hidden />
    </>
  );
};

export default FileInput;
