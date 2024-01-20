"use client";
import { MdAttachFile } from "react-icons/md";
const FileInput = () => {
  return (
    <>
      <div className="">
        <label
          htmlFor={"file"}
          className="flex-1 input flex justify-between text-black text-opacity-35"
        >
          <span>ضمیمه پاسخ ارسالی</span>
          <MdAttachFile className="text-black text-opacity-35" size={20} />
        </label>
      </div>

      <input id="file" type="file" hidden />
    </>
  );
};

export default FileInput;
