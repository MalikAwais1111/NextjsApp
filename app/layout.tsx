import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import '../app/globals.css'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ReactQueryProvider from "./utils/providers/page";
// import { Provider } from "react-redux";
// import { store } from "./_liab/store";
import { StoreProvider } from "./storeprovider";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='winter'>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={rubik.className}>
          <StoreProvider>
            <Navbar/>
            <ReactQueryProvider>
            {children}
            </ReactQueryProvider>
            </StoreProvider>
            <Footer/>
      </body>
    </html>
  );
}
