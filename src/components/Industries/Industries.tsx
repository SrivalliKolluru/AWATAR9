'use client';

import { INDUSTRIES } from '@/lib/constants';
import SectionWrapper from '@/components/ui/SectionWrapper';
import styles from './Industries.module.css';

export default function Industries() {
    return (
        <SectionWrapper id="industries" dark>
            <div className="section-label">✦ Industries</div>
            <h2 className="section-title">Who We Work With</h2>
            <p className="section-subtitle">
                If you use data, processes, or people — AI can help you.
            </p>

            <div className={styles.grid}>
                {INDUSTRIES.map((industry) => (
                    <div key={industry} className={`glass-card ${styles.tag}`}>
                        {industry}
                    </div>
                ))}
            </div>

            <p className={styles.tagline}>
                From startups to enterprises — we build AI that fits <strong>your scale</strong>.
            </p>
        </SectionWrapper>
    );
}
