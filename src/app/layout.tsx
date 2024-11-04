import React from 'react';

import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';
import { Inter, Kodchasan, KoHo } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { QueryProviders } from '@/providers/query-provider';
import { SheetProvider } from '@/providers/sheet-provider';
import { Toaster } from '@/components/ui/sonner';

const kodchasanFont = Kodchasan({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-kodchasan',
});

const interFont = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const kohoFont = KoHo({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-koho',
});

export const metadata: Metadata = {
  title: 'Flux',
  description: 'Flux: Finance manager for the future',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="./favicon.png" sizes="any" />
        </head>
        <body
          className={cn(
            kodchasanFont.variable,
            kohoFont.variable,
            interFont.variable,
            interFont.className,
          )}
        >
          <QueryProviders>
            <div className="grid grid-cols-12 grid-rows-[80px] gap-4 h-full content-start">
              <ThemeProvider
                defaultTheme="system"
                attribute="class"
                enableSystem
              >
                <SheetProvider>
                  {children}
                  <Toaster />
                </SheetProvider>
              </ThemeProvider>
            </div>
          </QueryProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
