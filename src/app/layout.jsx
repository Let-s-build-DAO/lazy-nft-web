import { Inter } from "next/font/google";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";
import FooterNav from "@/components/FooterNav";
import Nav from "@/components/Nav";
import Providers from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lazy Nft",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main>
            <Nav />
            {/* <HeaderNav /> */}
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
