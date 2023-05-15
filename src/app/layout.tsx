import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Afshin Nahian Tripto",
  description: `Hey I'm Afshin Nahian Tripto, I'm a fullstack web developer from Dhaka, Bangladesh 👨‍💻`,
  image: "https://i.postimg.cc/DypWTYth/triptex-portfolio-v2.png",
  "theme-color": "#4949f3",
  keywords:
    "freelancer, dhaka, web developer, bangladesh, web developer, react, html, css, front end, javascript, node, cpanel, next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          </Providers>
          <Footer />
      </body>
    </html>
  );
}
