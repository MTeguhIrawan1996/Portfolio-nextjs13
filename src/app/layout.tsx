import type { Metadata } from 'next';

import './globals.css';

import { HomeLayout } from '@/components/layout';

import { METADATA } from '@/utils/constants/metadata';
import TanStackQueryProvider from '@/utils/context/TanStackQueryProvider';
import { ThemeProvider } from '@/utils/context/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.NEXT_PUBLIC_URL || ''
  ),
  // title: `${METADATA.creator} ${METADATA.exTitle}`,
  title: {
    absolute: '',
    default: `${METADATA.exTitle} ${METADATA.creator}`,
    template: `${METADATA.exTitle} %s`,
  },
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='id' suppressHydrationWarning={true}>
      <body>
        <TanStackQueryProvider>
          {/* <ThemeProviderContext> */}
          <ThemeProvider>
            <HomeLayout>{children}</HomeLayout>
          </ThemeProvider>
          {/* </ThemeProviderContext> */}
        </TanStackQueryProvider>
      </body>
    </html>
  );
}
