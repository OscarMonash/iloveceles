import { Inter } from "next/font/google";
import "./globals.css"; // <--- THIS IMPORT WAS LIKELY MISSING OR BROKEN

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "For Celes",
  description: "Happy Valentines Day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}