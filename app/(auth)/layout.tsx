"use client"
import { error } from "console";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navlinks = [
        {name:"Register", href:"/register"},
        {name:"Login", href:"/login"},
        {name:"ForgotPassword", href:"/forgotpassword"}

]

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname = usePathname()
    return (
      <html lang="en" data-theme='winter'>
        <div>
          {navlinks.map((links)=>{
            const isActive = pathname.startsWith(links.href)
            return(
              <Link href={links.href} 
              key={links.name}
              className={isActive ? "font-bold mr-5 p-7" : "text-blue-500 py-5 mr-5"}
              >
                {links.name}
              </Link>
            )
          })}
        </div>
        <body>{children}</body>
      </html>
    );
  }