"use client";
const FileInput = () => {
  return (
    <>
      <label for={"file"} className="input block text-black text-opacity-35">
        ضمیمه پاسخ ارسالی
      </label>
      <input id="file" type="file" hidden />
    </>
  );
};

export default FileInput;
