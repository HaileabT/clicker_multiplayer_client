import type { Metadata } from "next";
import {Nunito_Sans} from 'next/font/google';
import "./globals.css";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import { NextFont } from "next/dist/compiled/@next/font";

const haile: Author = {
  name: "Haileab Tesfaye"
}
const habte: Author = {
  name: "Habtemariam Bereket"
}

const inter: NextFont = Nunito_Sans({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Clicker Multiplayer",
  description: "Online clicker mutiplayer game",
  authors: [haile, habte], 
  keywords: ["Game", "Multiplayer", "Clicker", "Competition"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased, ${inter.className} h-[100svh] overflow-hidden flex justify-center bg-bg_white`}
      >
        {children}
      </body>
    </html>
  );
}
