import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-head" });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Charles Maina | Data, Technology, Public Health",
  description: "Biostatistics graduate and data analyst using data, technology and AI for public health and social impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${dm.variable}`}>
      <body>{children}</body>
    </html>
  );
}
