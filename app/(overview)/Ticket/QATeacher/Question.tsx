"use client";
interface Props {
  register: any;
}
const Question = ({ register }: Props) => {
  return (
    <textarea
      {...register}
      dir="rtl"
      className="text-right input block min-h-[116px] w-full"
      placeholder="لطفا مشکلی که باهاش مواجه شدید رو اینجا توضیح بدید. همچنین بخش‌های اصلی کدتون رو هم شرح بدید."
    />
  );
};

export default Question;
