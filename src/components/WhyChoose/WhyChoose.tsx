'use client';

import { Briefcase, Package, Rocket, Cpu, Headphones, CreditCard } from 'lucide-react';
import { WHY_CHOOSE } from '@/lib/constants';
import SectionWrapper from '@/components/ui/SectionWrapper';
import styles from './WhyChoose.module.css';

const iconMap: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase size={20} />,
    Package: <Package size={20} />,
    Rocket: <Rocket size={20} />,
    Cpu: <Cpu size={20} />,
    HeadphonesIcon: <Headphones size={20} />,
    CreditCard: <CreditCard size={20} />,
};

export default function WhyChoose() {
    return (
        <SectionWrapper id="why-choose">
            <div className="section-label">✦ Why Us</div>
            <h2 className="section-title">Why Choose AWATAR9</h2>
            <p className="section-subtitle">
                We don&apos;t just build bots We build long-term AI systems
            </p>

            <div className={styles.grid}>
                {WHY_CHOOSE.map((item) => (
                    <div key={item.text} className={`glass-card ${styles.card}`}>
                        <div
                            className={styles.cardIcon}
                            style={{
                                color: item.color,
                                background: `${item.color}15`
                            } as React.CSSProperties}
                        >
                            {iconMap[item.icon]}
                        </div>
                        <div className={styles.cardText}>{item.text}</div>
                    </div>
                ))}
            </div>

            <p className={styles.tagline}>
                We don&apos;t just build bots
                <br />
                We build long-term AI systems
            </p>
        </SectionWrapper>
    );
}
