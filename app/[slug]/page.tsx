"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Header from "../Home/header";
import Footer from "../Home/Footer";

export default function Page() {
  const params = useParams<{ slug: string }>();
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="min-h-60 w-full flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl  p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-[#ec3c65] mb-2">
            Name: {params.slug}
          </h1>

          <p className="text-lg mb-4">
            <span className="font-semibold capitalize">{params.slug}</span> [
            {count}] — Aj click krdo plz 😔
          </p>

          <button
            onClick={() => setCount(count + 1)}
            className="border-pink-400 border text-pink-400 hover:bg-[#ec3c65]  hover:text-[white] font-semibold px-6 py-2 rounded-full transition"
          >
            Click me {params.slug} please 😭
          </button>

          <p className="mt-4 text-sm text-gray-600">
            404 {params.slug} ni kiya na click 😎
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
