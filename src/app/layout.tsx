import type { Metadata } from 'next';
import { Inter, Source_Code_Pro } from 'next/font/google';
import '../styles/globals.css';
import { Sidebar } from '@/components/share/Sidebar';

const inter = Inter({ subsets: ['latin'] });

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'UI Component Collections',
  description: 'UI components that made with Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${sourceCodePro.variable}`}>
        <main className="flex relative">
          <Sidebar />
          <section className="flex-grow min-h-screen w-[calc(100vw-280px)] py-4 px-10">
            <div className="max-w-7xl w-full mx-auto">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
