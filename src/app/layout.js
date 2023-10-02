import "./globals.css";
import localFont from "next/font/local";
import { PT_Sans_Narrow } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

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
      <Script>
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#7e0c0c" />
      </Head>

      <body className={`${ptsans.variable} ${deutschlander.variable}`}>
        {children}
      </body>
    </html>
  );
}
