
import "./globals.css";


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
          </main>
        {/* </Providers> */}
      </body>
    </html>
  );
}
