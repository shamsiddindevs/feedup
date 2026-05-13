export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 h-[76px] flex items-center justify-between">
        
        {/* === CHAP TOMON: Logotip va Menyu === */}
        <div className="flex items-center gap-10">
          
          {/* Logo */}
          <a href="/" className="flex items-center justify-center bg-[#292C31] px-3 rounded-md h-[42px] cursor-pointer hover:opacity-90 transition-opacity">
            <span className="text-[#FFB800] font-black text-xl tracking-tighter mr-0.5">feed</span>
            <span className="bg-[#E31837] text-white font-bold text-[13px] rounded-full h-[26px] w-[26px] flex items-center justify-center pt-[1px]">up</span>
          </a>

          {/* Navigatsiya */}
          <nav className="hidden xl:flex items-center gap-6 font-medium text-[15px] text-[#5D5D5F]">
            <a href="#" className="hover:text-black transition-colors">Biz haqimizda</a>
            <a href="#" className="hover:text-black transition-colors">Menyu</a>
            <a href="#" className="hover:text-black transition-colors">Aksiyalar</a>
            <a href="#" className="hover:text-black transition-colors">Ish o'rinlari</a>
            <a href="#" className="hover:text-black transition-colors">Filiallar</a>
            <a href="#" className="hover:text-black transition-colors">Aloqa</a>
          </nav>
        </div>

        {/* === O'NG TOMON: Ikonkalar, Tugma va Telefon === */}
        <div className="flex items-center gap-7">
          
          {/* Ikonkalar qatori */}
        

          {/* Buyurtma tugmasi */}
          <button className="bg-[#E31837] text-white px-5 py-2.5 rounded-full font-medium text-[15px] hover:bg-red-700 transition-colors">
            Buyurtma turi
          </button>

          {/* Telefon raqami va ish vaqti */}
          <div className="flex flex-col text-right">
            <span className="font-bold text-gray-900 text-[17px] leading-tight">+998 71 200 22 11</span>
            <span className="text-[11px] text-[#A3A3A3] font-medium tracking-wide">Har kuni 09:00 dan 02:45 gacha</span>
          </div>
            <div className="flex items-center gap-5 text-gray-700">
            {/* Qidiruv */}
            <button className="hover:text-[#E31837] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
            {/* Savat */}
            <button className="hover:text-[#E31837] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            </button>
            {/* Sevimlilar (Yurak) */}
            <button className="hover:text-[#E31837] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </button>
            {/* Til (Globus) */}
            <button className="hover:text-[#E31837] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            </button>
            {/* Profil */}
            <button className="hover:text-[#E31837] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
            {/* Tungi rejim (Oy) */}
            <button className="hover:text-[#E31837] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}