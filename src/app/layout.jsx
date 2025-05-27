
import "./globals.css";
import dynamic from 'next/dynamic';
import FooterNav from "@/components/FooterNav"
// import HeaderNav from "@/components/HeaderNav"
// import Providers from "./provider";


export const metadata = {
  title: "Let's Build DAO | Lazy Nft's",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Providers> */}
          <main>
            <div className="">
              {children}
            </div>
            <FooterNav />
          </main>
        {/* </Providers> */}
      </body>
    </html>
  );
}
