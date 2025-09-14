import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import '../app/globals.css'
import ReactQueryProvider from "./utils/providers/page";
import { StoreProvider } from "./storeprovider";
import LayoutChecker from "./components/layoutChecker";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Electro Next App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" data-theme="winter">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={rubik.className}>
        <StoreProvider>
          <ReactQueryProvider>
           <LayoutChecker>{children}</LayoutChecker> 
          </ReactQueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}