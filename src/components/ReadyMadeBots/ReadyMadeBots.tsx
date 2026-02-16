'use client';

import { Target, Users, TrendingUp, Database, Settings, Search, Headphones } from 'lucide-react';
import { BOT_CATEGORIES } from '@/lib/constants';
import SectionWrapper from '@/components/ui/SectionWrapper';
import styles from './ReadyMadeBots.module.css';

const iconMap: Record<string, React.ReactNode> = {
    Target: <Target size={24} />,
    Users: <Users size={24} />,
    TrendingUp: <TrendingUp size={24} />,
    Database: <Database size={24} />,
    Settings: <Settings size={24} />,
    Search: <Search size={24} />,
    Headphones: <Headphones size={24} />,
};

export default function ReadyMadeBots() {
    return (
        <SectionWrapper id="solutions">
            <div className={styles.sectionHeader}>
                <div className="section-label">✦ Ready-Made Solutions</div>
                <h2 className="section-title">Ready-Made AI Bots. Customized for You.</h2>
                <p className={styles.tagline}>
                    Not one-size-fits-all AI. We have already built powerful AI bots for common
                    business needs. These ready-made bots can be quickly deployed for your workflow.
                </p>
            </div>

            <div className={styles.grid}>
                {BOT_CATEGORIES.map((bot) => (
                    <div key={bot.title} className={`glass-card ${styles.card}`}>
                        <div className={styles.cardIcon}>{iconMap[bot.icon]}</div>
                        <h3 className={styles.cardTitle}>{bot.title}</h3>
                        <p className={styles.cardDescription}>{bot.description}</p>
                    </div>
                ))}
            </div>

            <div className={styles.emphasis}>
                You don&apos;t start from zero. You start from a proven system.
                <br />
                <span className={styles.emphasisSub}>Fast. Reliable. Scalable.</span>
            </div>
        </SectionWrapper>
    );
}
