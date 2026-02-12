"use client";

import { useState } from "react";

export default function AccordionPage() {
  const [open, setOpen] = useState<number | null>(null);

  const data = [
    {
      title: "What is an eSIM?",
      content:
        "An eSIM is a digital SIM that lets you activate a mobile plan without using a physical SIM card.",
    },
    {
      title: "Is coverage available nationwide?",
      content:
        "Yes, you can enjoy uninterrupted connectivity across the USA with wide network coverage.",
    },
    {
      title: "How fast is the internet?",
      content:
        "You get high-speed data suitable for browsing, streaming and video calls.",
    },
    {
      title: "Can I use it on any device?",
      content:
        "Most modern smartphones support eSIM. Please check your device compatibility.",
    },
    {
      title: "How do I activate my plan?",
      content:
        "Simply scan the QR code or follow the activation instructions sent to your email.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-gray-600">
          Everything you need to know before getting started
        </p>
      </div>

      <div className="pb-20">
        <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {data.map((item, index) => (
            <div
              key={index}
              className={`border rounded-lg overflow-hidden bg-white shadow-sm
                ${index === data.length - 1 && data.length % 2 !== 0 ? "md:col-span-2 md:max-w-full" : ""}
              `}
              style={{ minHeight: "120px" }} // ✅ Increase accordion height
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-4 font-semibold text-left bg-white text-lg"
              >
                <span className="mr-2 font-bold">{index + 1}.</span>{" "}
                {item.title}
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    open === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {open === index && (
                <div className="p-6 text-gray-600 border-t text-base">
                  {item.content}
                </div> // ✅ Increased padding
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
