import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recursive File System React",
  description:
    "Filesystem tree of arbitrary depth using NextJS Typescript and Recursion of a single component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-gray-800">
      <body
        className={`${montserrat.className} flex h-full flex-col text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
