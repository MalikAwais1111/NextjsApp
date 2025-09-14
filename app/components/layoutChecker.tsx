'use client';

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function LayoutChecker({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname === '/login' || pathname === '/signup';

  if (hideLayout) return <>{children}</>;

  return (
    <div>
        <Navbar/>
      {children}
      <Footer/>
    </div>
  );
}