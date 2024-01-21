"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Cart from "../../components/Cart";
import QATeacherForm from "./QATeacher/QATeacherForm";
import TabBtn from "./TabBtn";
import { Suspense, useEffect } from "react";
import TitleContextProvider from "./TitleContextProvider";
import QAGPT from "./QAGPT/QAGPT";

const Ticket = () => {
  const tabName = useSearchParams().get("tab");
  const router = useRouter();
  const QATeacherLable = "سوال از مربی‌های دوره";
  const QAGptLable = "سوال از ربات QGPT";
  useEffect(() => {
    router.replace(`/?tab=${QATeacherLable}`);
  }, []);
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
          <Suspense>
            <TabBtn title={QAGptLable} />
            <TabBtn title={QATeacherLable} />
          </Suspense>
        </div>
        <div className="my-5 mx-3">
          <TitleContextProvider>
            {tabName === QATeacherLable && <QATeacherForm />}
            {tabName === QAGptLable && <QAGPT />}
          </TitleContextProvider>
        </div>
      </Cart>
    </div>
  );
};

export default Ticket;
