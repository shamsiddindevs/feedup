import { useState } from 'react';

export default function CategoryNav() {
  // Kategoriyalar ro'yxati
  const categories = [
    "Yangi mahsulotlar", "Kombo", "Lavash", "Burger", "Хот-дог", 
    "Sendvich", "Donar", "Salatlar", "Sous", "Mafin", 
    "Kofe", "Гарниры", "Напитки", "Дополнительно"
  ];

  // Qaysi kategoriya tanlanganini saqlash uchun state
  const [activeTab, setActiveTab] = useState("Yangi mahsulotlar");

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8 mt-10">
      
      {/* 1-QISM: Gorizontal menyu */}
      <div className="relative flex items-center">
        {/* Chap strelka */}
        <button className="pr-4 text-gray-500 hover:text-black transition-colors hidden sm:block">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>

        {/* Kategoriyalar ro'yxati (skroll qilinadigan) */}
        <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide py-2 flex-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-[15px] transition-all duration-100 ${
                activeTab === category
                  ? "border border-[#E31837] rounded-full px-5 py-2 font-medium text-gray-900"
                  : "font-normal text-[#5D5D5F] hover:text-black px-2 py-2"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* O'ng strelka */}
        <button className="pl-4 text-gray-500 hover:text-black transition-colors hidden sm:block">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      {/* 2-QISM: Sarlavha va chiziqlar */}
      <div className="flex items-center justify-center mt-12 mb-8 gap-6">
        <div className="flex-1 h-[1px] bg-red-200"></div>
        <h2 className="text-[32px] font-bold text-gray-900 tracking-tight">
          {activeTab}
        </h2>
        <div className="flex-1 h-[1px] bg-red-200"></div>
      </div>

    </div>
  );
}