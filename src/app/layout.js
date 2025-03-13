import Nav from "./components/Nav";
import "./globals.css";
import { Poppins } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";

const poppins = Poppins({ subsets: ["latin"], weight: ["300"] });

export const metadata = {
  title: "PT portfolio",
  description: "Punnapa Thianchai portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"text-slate-800 " + poppins.className}>
        <Nav />
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
