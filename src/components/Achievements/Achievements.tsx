'use client';

import { Clock, Minimize2, Zap, CheckCircle, Rocket, DollarSign } from 'lucide-react';
import { ACHIEVEMENTS } from '@/lib/constants';
import SectionWrapper from '@/components/ui/SectionWrapper';
import styles from './Achievements.module.css';

const iconMap: Record<string, React.ReactNode> = {
    Clock: <Clock size={22} />,
    Minimize2: <Minimize2 size={22} />,
    Zap: <Zap size={22} />,
    CheckCircle: <CheckCircle size={22} />,
    Rocket: <Rocket size={22} />,
    DollarSign: <DollarSign size={22} />,
};

export default function Achievements() {
    return (
        <SectionWrapper id="achievements" dark>
            <div className="section-label">✦ Results</div>
            <h2 className="section-title">What We Help You Achieve</h2>
            <p className="section-subtitle">
                With AWATAR9, your team focuses on strategy. Our AI handles execution.
            </p>

            <div className={styles.grid}>
                {ACHIEVEMENTS.map((item) => (
                    <div key={item.text} className={`glass-card ${styles.card}`}>
                        <div className={styles.cardIcon}>{iconMap[item.icon]}</div>
                        <div className={styles.cardText}>{item.text}</div>
                    </div>
                ))}
            </div>

            <p className={styles.tagline}>
                Your team focuses on <strong>strategy</strong>.
                <br />
                Our AI handles <strong>execution</strong>.
            </p>
        </SectionWrapper>
    );
}
