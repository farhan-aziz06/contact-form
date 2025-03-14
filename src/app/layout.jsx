import { Poppins, Open_Sans,Mulish } from "next/font/google";
import "./globals.css";

// Configure Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Configure Open Sans
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans", // Optional: Define a CSS variable
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: "700", // Bold weight
  variable: "--font-mulish-bold", // Optional: Define a CSS variable
});

export const metadata = {
  title: "Project Task",
  description: "Let's do it",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}