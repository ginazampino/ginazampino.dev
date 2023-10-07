import '@/styles/reset.css';
import '@/styles/globals.css';

import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import { Source_Sans_3 } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Gina Zampino | Design & Development',
    description:
        'My handmade websites are tailored for entrepreneurs and small businesses. All work produced locally in Raleigh-Durham, NC.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} ${sourceSans3.className}`}>
                {children}
            </body>
        </html>
    );
}
