
import "./globals.css";


export const metadata = {
  title: "Let's Build DAO | Lazy NFTs – Unlock Web3 Learning & Community",
  description:
    "Lazy NFTs by Let's Build DAO are more than collectibles – they're your pass to Web3 courses, exclusive events, and on-chain governance. Join the movement.",
  keywords: [
    "Let's Build DAO",
    "Lazy NFTs",
    "Web3 learning",
    "blockchain education",
    "DAO membership",
    "NFT access pass",
    "Web3 community",
    "crypto courses",
    "decentralized governance",
  ],
  author: "Let's Build DAO",
  openGraph: {
    title: "Let's Build DAO | Lazy NFTs – Unlock Web3 Learning & Community",
    description:
      "Gain access to Web3 courses, events, and governance through Lazy NFTs by Let's Build DAO. Your entry point into a thriving builder ecosystem.",
    url: "https://lazy.letsbuilddao.org/", // Replace with actual domain
    type: "website",
    images: [
      {
        url: "https://lazy.letsbuilddao.org/images/lazy-shot.png", // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "Lazy NFTs by Let's Build DAO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Let's Build DAO | Lazy NFTs",
    description:
      "Use Lazy NFTs to unlock Web3 education, events, and governance in Let's Build DAO.",
    images: ["https://lazy.letsbuilddao.org/images/lazy-shot.png"], // Replace with actual OG image URL
  },
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
