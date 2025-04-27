import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "YNV Solutions",
  description: "Created by YNV Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&family=Inter&family=Montserrat:wght@800&family=Raleway:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <GoogleAnalytics gaId="G-CF1B8M886E" />
      </body>
    </html>
  );
}
