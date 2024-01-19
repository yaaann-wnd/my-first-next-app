import { DM_Sans } from "next/font/google";
import "./globals.css";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "My first Next.js project",
  description: "My first Next.js project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
