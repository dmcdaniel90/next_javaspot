import type { Metadata } from "next";
import { Karla, Sacramento } from "next/font/google";
import "./globals.css";

const karla = Karla(
  {
    variable: "--font-karla",
    subsets: ["latin"],
    weight: ["300", "400", "700"],
  },
);

const sacramento = Sacramento({
  variable: "--font-sacramento",
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "JavaSpot",
  description: "Find local coffee spots near you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
