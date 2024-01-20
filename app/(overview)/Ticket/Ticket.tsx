"use client";

import { useSearchParams } from "next/navigation";
import Cart from "../../components/Cart";
import QATeacher from "./QATeacher/QATeacher";
import TabBtn from "./TabBtn";

const Ticket = () => {
  const tabName = useSearchParams().get("tab");
  const QATeacherLable = "سوال از مربی‌های دوره";
  const QAGptLable = "سوال از ربات QGPT";
  return (
    <div className="p-6">
      <Cart title="درخواست پشتیبانی">
        <p className="my-3 p-3 text-sm leading-[23.8px] font-normal">
          بررسی کدی که نوشتید و رفع خطا توسط خودتون یکی از مفیدترین کارها برای
          پیشرفت مهارت برنامه‌نویسیه! اگر به اندازه کافی تلاش کردید و وقت خوبی
          برای رفع خطا گذاشتید و به نتیجه نرسیدید، ما اینجاییم که در فرایند
          دیباگ کردن بهتون کمک کنیم.
        </p>
        <div className="rounded-lg overflow-hidden text-lg font-bold text-qu-gray-600 flex items-center shadow-md">
          <TabBtn title={QAGptLable} />
          <TabBtn title={QATeacherLable} />
        </div>
        <div className="my-5 mx-3">
          {tabName === QATeacherLable && <QATeacher />}
        </div>
      </Cart>
    </div>
  );
};

export default Ticket;
