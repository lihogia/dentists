import { Analytics } from '@vercel/analytics/react';
import "@/src/app/ui/globals.css";
import type { Metadata } from "next";
import { inter, opensans, lusitana } from '@/src/app/ui/fonts';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: "Dental Office Management Tool",
  description: "Detal Office Application",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${opensans.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
