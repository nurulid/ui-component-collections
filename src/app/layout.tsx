import type { Metadata } from 'next';
import { Inter, Source_Code_Pro, Inconsolata, Teko } from 'next/font/google';
import '../styles/globals.css';
import { Sidebar } from '@/components/shared/Sidebar';

const inter = Inter({ subsets: ['latin'] });

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code',
  weight: ['400'],
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  weight: "400",
});

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  weight: "500",
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
      <body className={`${inter.className} ${sourceCodePro.variable} ${inconsolata.variable} ${teko.variable}`}>
        <main className="flex relative">
          <Sidebar />
          <section className="flex-grow min-h-screen min-w-[800px] py-4 px-10">
            <div className="max-w-7xl w-full mx-auto">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
