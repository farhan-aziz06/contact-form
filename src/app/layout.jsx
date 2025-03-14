import { Poppins, Open_Sans,Mulish,} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-mulish-bold",
});

export const metadata = {
  title: "Project Task",
  description: "Let's do it",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${openSans.variable} ${mulish.variable}`}>
        {children}
      </body>
    </html>
  );
}