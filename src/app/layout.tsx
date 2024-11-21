import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

const fontPoppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins", // Define a variável CSS
});

export const metadata: Metadata = {
  title: "NexConsult",
  icons: {
    icon: "/miniLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${fontPoppins.className}  w-full h-full  `}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
