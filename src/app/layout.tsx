import { Open_Sans } from 'next/font/google';
import './globals.css';
import { createClient } from '@/prismicio';
import type { Metadata, ResolvingMetadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Bounded from '@/components/containers/Bounded';

const opensans = Open_Sans({ subsets: ['latin'], variable: '--font-main' });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settingsMeta = await client.getSingle('settings');

  return {
    title: settingsMeta.data.title || 'Dietrich Schwarz Architekten AG',
    description:
      settingsMeta.data?.meta_description || 'Nachhaltiges Bauen und Planen',
    openGraph: {
      images: [settingsMeta.data?.og_image?.url || ''],
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
        <Header />
        <Bounded as="main">{children}</Bounded>
        <Footer />
      </body>
    </html>
  );
}
