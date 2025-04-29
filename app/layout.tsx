

import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Anthony Dimojiaku",
  description: "Capable and Reliable Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./Ellipse.svg" />

      <body
      className="min-h-screen antialiased"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
