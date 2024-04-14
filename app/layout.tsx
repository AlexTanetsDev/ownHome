import type { Metadata } from 'next';
import { Montserrat, Roboto, El_Messiri } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const montserrat = Montserrat({ weight: ['400', '500', '600'], subsets: ['cyrillic'], variable: '--font-montserrat' });
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-roboto' });
const messiri = El_Messiri({ weight: ['400', '500'], subsets: ['cyrillic'], variable: '--font-messiri' });
export const metadata: Metadata = {
  title: 'Власний дім',
  description: 'Агенство нерухомості в самосу сердці Києва',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      <body className={`${roboto.variable} ${montserrat.variable}  ${messiri.variable} h-full scroll-auto`}>
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
