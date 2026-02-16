'use client';

import { Workflow, Bot, Plug, Cloud, GitBranch, Shield } from 'lucide-react';
import { TECH_STACK, TECH_BENEFITS } from '@/lib/constants';
import SectionWrapper from '@/components/ui/SectionWrapper';
import styles from './TechStack.module.css';

const iconMap: Record<string, React.ReactNode> = {
    Workflow: <Workflow size={28} />,
    Bot: <Bot size={28} />,
    Plug: <Plug size={28} />,
    Cloud: <Cloud size={28} />,
    GitBranch: <GitBranch size={28} />,
    Shield: <Shield size={28} />,
};

export default function TechStack() {
    return (
        <SectionWrapper id="technology">
            <div className="section-label">✦ Technology</div>
            <h2 className="section-title">Powered by Modern AI Technology</h2>
            <p className="section-subtitle">
                All our solutions use the latest automation and AI platforms for maximum
                performance and reliability.
            </p>

            <div className={styles.grid}>
                {TECH_STACK.map((tech) => (
                    <div key={tech.name} className={`glass-card ${styles.card}`}>
                        <div className={styles.cardIcon}>{iconMap[tech.icon]}</div>
                        <div className={styles.cardName}>{tech.name}</div>
                    </div>
                ))}
            </div>

            <div className={styles.benefits}>
                {TECH_BENEFITS.map((benefit) => (
                    <div key={benefit} className={styles.benefit}>
                        <div className={styles.benefitDot} />
                        {benefit}
                    </div>
                ))}
            </div>

            <p className={styles.growthText}>
                Your system grows with your business.
            </p>
        </SectionWrapper>
    );
}
