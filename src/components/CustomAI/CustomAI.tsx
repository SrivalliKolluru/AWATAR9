'use client';

import { CUSTOM_AI_STEPS } from '@/lib/constants';
import SectionWrapper from '@/components/ui/SectionWrapper';
import styles from './CustomAI.module.css';

export default function CustomAI() {
    return (
        <SectionWrapper id="custom-ai" dark>
            <div className="section-label">✦ Custom Solutions</div>
            <h2 className="section-title">Custom AI. Built for Your Exact Business Need.</h2>
            <p className="section-subtitle">
                Every business is different. Every workflow is unique. Every goal needs a
                tailored AI solution. If you have a specific challenge, we will build the answer.
            </p>

            <div className={styles.timeline}>
                {CUSTOM_AI_STEPS.map((step) => (
                    <div key={step.step} className={styles.timelineItem}>
                        <div className={styles.timelineNumber}>{step.step}</div>
                        <div className={styles.timelineContent}>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.highlight}>
                <div className={`glass-card ${styles.highlightCard}`}>
                    <h4>Available 24/7</h4>
                    <p>No breaks. No delays.</p>
                </div>
                <div className={`glass-card ${styles.highlightCard}`}>
                    <h4>Digital Employee</h4>
                    <p>Thinks, acts, and works with you.</p>
                </div>
                <div className={`glass-card ${styles.highlightCard}`}>
                    <h4>Fully Maintained</h4>
                    <p>Ongoing support &amp; optimization.</p>
                </div>
            </div>
        </SectionWrapper>
    );
}
