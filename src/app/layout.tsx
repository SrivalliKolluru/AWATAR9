import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Chatbot from '@/components/Chatbot/Chatbot';

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
        'At AWATAR9, we Bulid AI Agents to assist you in Automating your repetitive tasks. Ready-made and custom AI bots that think, act, and deliver results.',
    keywords: [
        'Srivalli AI agents',
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
            'We Build AI Agents That Works For You. Ready-made and custom AI solutions for real business challenges.',
        url: 'https://SrivalliKolluru.github.io/AWATAR9',
        siteName: 'AWATAR9',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AWATAR9 — Designing AI That Delivers',
        description:
            'We Build AI Agents That Works For You. Ready-made and custom AI solutions for real business challenges.',
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
                <Chatbot />
            </body>
        </html>
    );
}
