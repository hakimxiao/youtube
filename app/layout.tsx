import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Youtube Web API",
  description: "Create By NextJs Ts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-blue-300 to-violet-300">
        {children}
      </body>
    </html>
  );
}
