"use client";
import { SideBarData } from "../../config/SideBarData";
import NavigationLink from "./NavigationLink";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SideBar = ({ isMobile = false, isOpen = true, onClose, collapsed }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {isMobile && isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden "
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 ${collapsed ? "w-[80px]" : "w-[270px] lg:w-[19.5%]"} bg-white text-[#4b5563] transform transition-all duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:relative lg:translate-x-0
        `}
      >
        <nav className="h-full flex flex-col">
          <div className="absolute -top-11 -right-20 w-34 h-34 rounded-full opacity-10 pointer-events-none circle"></div>

          <div className="flex flex-col items-center justify-center gap-3 p-5 border-b border-white/15 ">
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="profile"
                width={100}
                height={100}
                className="w-10 h-10"
              />
            </Link>
            {!collapsed && (
              <div className="px-4">
                <h2 className="text-lg font-semibold text-[#14ADD6] text-center">
                  BUSY ERP
                </h2>
                <p className="text-xs text-[#262626] text-center">
                  Accounting System
                </p>
              </div>
            )}
          </div>

          <ul className="relative flex-1 p-3 space-y-0.5 overflow-y-auto no-scrollbar">

            {SideBarData.map((section, index) => (
              <div key={index}>
                {!collapsed && (
                  <p className="px-3 py-2 text-[#14ADD6] uppercase tracking-widest text-[10px] font-semibold">
                    {section.section}
                  </p>
                )}

                <div className="space-y-1">
                  {section.items.map((item, i) => (
                    <NavigationLink key={i} {...item} collapsed={collapsed} />
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
