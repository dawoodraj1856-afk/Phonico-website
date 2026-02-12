"use client";
import { useState } from "react";

export default function PeopleSlider() {
  const people = [
    { name: "Ali Khan", work: "UI Designer", img: "https://i.pravatar.cc/300?img=1" },
    { name: "Sara Ahmed", work: "Frontend Dev", img: "https://i.pravatar.cc/300?img=2" },
    { name: "Usman Tariq", work: "Backend Dev", img: "https://i.pravatar.cc/300?img=3" },
    { name: "Ayesha Noor", work: "Product Manager", img: "https://i.pravatar.cc/300?img=4" },
    { name: "Bilal Shah", work: "Mobile App Dev", img: "https://i.pravatar.cc/300?img=5" },
    { name: "Hina Iqbal", work: "UX Researcher", img: "https://i.pravatar.cc/300?img=6" },
    { name: "Hamza Malik", work: "DevOps Engineer", img: "https://i.pravatar.cc/300?img=7" },
    { name: "Zain Raza", work: "QA Engineer", img: "https://i.pravatar.cc/300?img=8" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
    }
    return 3; // Desktop
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Update visibleCount on resize
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setVisibleCount(getVisibleCount());
    });
  }

  const visiblePeople = people.slice(activeIndex, activeIndex + visibleCount);

  return (
    <div className="w-full py-20 bg-gray-50 mt-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center gap-4 transition-all duration-500 flex-wrap md:flex-nowrap">
          {visiblePeople.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 text-center w-full sm:w-80 md:w-72"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-28 h-28 rounded-full mx-auto object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="text-gray-500 text-sm">{p.work}</p>
            </div>
          ))}
        </div>

        {/* INDICATORS */}
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          {people.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const newIndex = i <= people.length - visibleCount ? i : people.length - visibleCount;
                setActiveIndex(newIndex);
              }}
              className={`w-3 h-3 rounded-full transition ${
                i >= activeIndex && i < activeIndex + visibleCount
                  ? "bg-black scale-110"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
