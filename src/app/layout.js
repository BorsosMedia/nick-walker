import "./globals.css";
import localFont from "next/font/local";
import { PT_Sans_Narrow } from "next/font/google";
import gtm from "./gtm.js";
import metaPixel from './metaPixel.js';
import Image from 'next/image';

const deutschlander = localFont({
  src: "./assets/fonts/deutschlander.woff2",
  variable: "--font-deutschlander",
});

/* const ptsans = localFont({
  src: "./assets/fonts/ptsansregular.woff2",
  variable: "--font-ptsans",
}); */

export const metadata = {
  title: "Walker Nation - Nick Walker",
  description: "I support and inspire others that take the fitness journey",
};

const ptsans = PT_Sans_Narrow({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ptsans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script src={gtm}></script>
        <script async src={metaPixel} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#7e0c0c" />
      </head>

      <body className={`${ptsans.variable} ${deutschlander.variable}`}>
        <noscript>
          <Image alt='meta pixel' height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=320152884405204&ev=PageView&noscript=1" />
        </noscript>
        {children}
      </body>
    </html>
  );
}
