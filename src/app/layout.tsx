import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-body',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-heading',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'AWATAR9 — Designing AI That Delivers',
    description:
        'At AWATAR9, we design smart AI agents for real business challenges. Ready-made and custom AI bots that think, act, and deliver results.',
    keywords: [
        'AI agents',
        'AI automation',
        'custom AI bots',
        'business automation',
        'lead generation AI',
        'recruitment AI',
        'CRM automation',
        'n8n workflows',
    ],
    openGraph: {
        title: 'AWATAR9 — Designing AI That Delivers',
        description:
            'We build AI that works for you. Ready-made and custom AI solutions for real business challenges.',
        url: 'https://saipraveenmolugu.github.io/Awatar9',
        siteName: 'AWATAR9',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AWATAR9 — Designing AI That Delivers',
        description:
            'We build AI that works for you. Ready-made and custom AI solutions for real business challenges.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
