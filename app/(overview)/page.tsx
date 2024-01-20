import { Suspense } from "react";
import Ticket from "./Ticket/Ticket";

export default function Home() {
  return (
    <main dir="rtl">
      <Suspense>
        <Ticket />
      </Suspense>
    </main>
  );
}
