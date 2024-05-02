import type { Metadata } from 'next';

import './globals.css';

import { HomeLayout } from '@/components/layout';

import { METADATA } from '@/utils/constants/metadata';
import TanStackQueryProvider from '@/utils/context/TanStackQueryProvider';
import ThemeProviderContext from '@/utils/context/theme';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.NEXT_PUBLIC_URL || ''
  ),
  title: `${METADATA.creator} ${METADATA.exTitle}`,
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  icons: METADATA.profile,
  // openGraph: {
  //   images: METADATA.profile,
  //   url: METADATA.openGraph.url,
  //   siteName: METADATA.openGraph.siteName,
  //   locale: METADATA.openGraph.locale,
  //   type: 'website',
  // },
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
          <ThemeProviderContext>
            <HomeLayout>{children}</HomeLayout>
          </ThemeProviderContext>
        </TanStackQueryProvider>
      </body>
    </html>
  );
}
