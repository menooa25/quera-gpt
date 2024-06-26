import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({ subsets: ["arabic", "latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Quera GPT",
  description: "Chat Gpt in Quera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
