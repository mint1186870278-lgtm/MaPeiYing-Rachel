import "./globals.css";
import Script from "next/script";
import { Providers } from "./providers";

export const metadata = {
  title: "Rachel Ma - Portfolio",
  description: "Rachel Ma's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t!=='light');}catch(e){document.documentElement.classList.add('dark');}})();`}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
