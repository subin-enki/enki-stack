import type { Metadata } from 'next';
import './globals.css';
import '@mantine/core/styles.css';
import { AppProvider } from '@/provider';
import { ColorSchemeScript } from '@mantine/core';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
