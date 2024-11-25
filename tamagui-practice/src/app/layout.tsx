import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';

// Components
import { TamaguiProvider } from '@/providers';
import '../styles/globals.css'

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'minifurs',
  description: 'E-commerce app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <SessionProvider refetchInterval={10 * 60} refetchOnWindowFocus={false}>
          <TamaguiProvider>{children}</TamaguiProvider>
        </SessionProvider>
      </body>
    </html >
  );
}
