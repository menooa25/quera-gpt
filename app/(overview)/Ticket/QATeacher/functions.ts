export const validateFileIsUnderXmb = (file: File[]) => {
  if (!file || !file[0]) return true;
  return (
    file[0].size < 2 * 1024 * 1024 || "حجم فایل باید کمتر از 2 مگابایت باشد"
  );
};
export const validateQuestionType = (value: string) => {
  if (value === "0") {
    return "لطفا نوع مسئله را انتخاب نمایید";
  }
  return true;
};
