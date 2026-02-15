import "./globals.css";

export const metadata = {
  title: "Rachel Ma - Portfolio",
  description: "Rachel Ma's Portfolio Website",
  // Next.js 会自动识别 app/icon.svg，不需要手动指定
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        {children}
      </body>
    </html>
  );
}
