"use client";

import { Header } from "@/components";
import Content from "../components/Content";
export default function Home() {
  return (
    <main className="relative w-full max-w-[1330px] mx-auto px-3 flex flex-col lg:flex lg:flex-row lg:justify-center  xl:gap-40 lg:gap-4 ">
      <Header />
      <Content />
    </main>
  );
}
