import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata = {
  title: "My first Next App",
  description: "Intro to Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <NavBar />
          <div className="min-h-screen bg-gray-800 text-white p-5">{children}</div>
          <Footer />
        </div>

      </body>
    </html>
  );
}
