
import "./globals.css";
import dynamic from 'next/dynamic';
const HeaderNav = dynamic(() => import('@/components/HeaderNav'), { ssr: false });

import FooterNav from "@/components/FooterNav"
// import HeaderNav from "@/components/HeaderNav"
import Providers from "./provider";


export const metadata = {
  title: "Let's Build DAO | Lazy Nft's",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main>

            <HeaderNav />
            <div className="">
              {children}
            </div>
            <FooterNav />
          </main>
        </Providers>
      </body>
    </html>
  );
}
