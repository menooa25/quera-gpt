"use client";

const Question = () => {
  return (
    <div>
      <span className="text-lg font-bold mb-1">متن</span>
      <textarea
        dir="rtl"
        className="text-right input block min-h-[116px] w-full"
        placeholder="لطفا مشکلی که باهاش مواجه شدید رو اینجا توضیح بدید. همچنین بخش‌های اصلی کدتون رو هم شرح بدید."
      />
    </div>
  );
};

export default Question;