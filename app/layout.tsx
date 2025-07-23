import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "App Landing Page using Next.js",
};
const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900", "200", "600", "800"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
