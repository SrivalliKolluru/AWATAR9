'use client';

import { APPROACH_STEPS } from '@/lib/constants';
import SectionWrapper from '@/components/ui/SectionWrapper';
import styles from './OurApproach.module.css';

export default function OurApproach() {
    return (
        <SectionWrapper id="approach">
            <div className="section-label">✦ Our Process</div>
            <h2 className="section-title">Our Approach</h2>
            <p className="section-subtitle">
                We follow a simple, proven process to deliver AI solutions that work.
            </p>

            <div className={styles.steps}>
                {APPROACH_STEPS.map((step) => (
                    <div key={step.step} className={`glass-card ${styles.step}`}>
                        <div className={styles.stepNumber}>{step.step}</div>
                        <div className={styles.stepTitle}>{step.title}</div>
                    </div>
                ))}
            </div>

            <p className={styles.tagline}>
                No complexity. No confusion.
                <br />
                <strong>Just results.</strong>
            </p>
        </SectionWrapper>
    );
}
