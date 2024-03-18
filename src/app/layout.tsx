import { Open_Sans } from 'next/font/google';
import './globals.css';
import { createClient } from '@/prismicio';
import type { Metadata, ResolvingMetadata } from 'next';

const opensans = Open_Sans({ subsets: ['latin'], variable: '--font-main' });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle('settings');

  return {
    title: page.data.projekte || 'Dietrich Schwarz Architekten AG',
    description: page.data.meta_description || 'Nachhaltiges Bauen und Planen',
    openGraph: {
      images: [page.data.og_image.url || ''],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={opensans.className}>
        <header>Your Header Here</header>
        {children}
        <footer>HUSO</footer>
      </body>
    </html>
  );
}
