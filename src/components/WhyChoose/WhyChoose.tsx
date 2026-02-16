'use client';

import { Briefcase, Package, Rocket, Cpu, Headphones, CreditCard } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import styles from './WhyChoose.module.css';

const items = [
    { text: 'Business-focused AI', icon: <Briefcase size={20} /> },
    { text: 'Ready + Custom solutions', icon: <Package size={20} /> },
    { text: 'Fast deployment', icon: <Rocket size={20} /> },
    { text: 'Modern technology', icon: <Cpu size={20} /> },
    { text: 'Dedicated support', icon: <Headphones size={20} /> },
    { text: 'Transparent pricing', icon: <CreditCard size={20} /> },
];

export default function WhyChoose() {
    return (
        <SectionWrapper id="why-choose">
            <div className="section-label">✦ Why Us</div>
            <h2 className="section-title">Why Choose AWATAR9</h2>
            <p className="section-subtitle">
                We don&apos;t just build bots. We build long-term AI systems.
            </p>

            <div className={styles.grid}>
                {items.map((item) => (
                    <div key={item.text} className={`glass-card ${styles.card}`}>
                        <div className={styles.cardIcon}>{item.icon}</div>
                        <div className={styles.cardText}>{item.text}</div>
                    </div>
                ))}
            </div>

            <p className={styles.tagline}>
                We don&apos;t just build bots.
                <br />
                We build <strong>long-term AI systems</strong>.
            </p>
        </SectionWrapper>
    );
}
