import type { Metadata } from "next";
import { inter, opensans, lusitana } from '@/app/ui/fonts';
import "@/app/ui/globals.css";

export const metadata: Metadata = {
  title: "Dental Office Management Tool",
  description: "Detal Office Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${opensans.className} antialiased`}>{children}</body>
    </html>
  );
}
