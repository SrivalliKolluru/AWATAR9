'use client';

import { ArrowLeft, Play, Settings, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { BASE_PATH } from '@/lib/constants';
import styles from './page.module.css';

export default function CRMAutomationPage() {
    return (
        <main className={styles.main}>
            <SectionWrapper id="crm-automation">
                <div className={styles.header}>
                    <Link href="/#solutions" className={styles.backLink}>
                        <ArrowLeft size={20} />
                        <span>Back to Solutions</span>
                    </Link>
                    <div className={styles.titleContainer}>
                        <div className="section-label">✦ Solution Overview</div>
                        <h1 className="section-title">CRM Automation Bots</h1>
                        <p className={styles.description}>
                            Streamline your sales pipeline and customer management with intelligent AI agents that handle the heavy lifting.
                        </p>
                    </div>
                </div>

                <div className={styles.videoContainer}>
                    <div className={`glass-card ${styles.videoWrapper}`}>
                        <video
                            className={styles.video}
                            src="../../videos/crm-automation.mp4"
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            Your browser does not support the video tag.
                        </video>
                        <div className={styles.videoOverlay}>
                            <div className={styles.playBadge}>
                                <Play fill="currentColor" size={24} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.featuresGrid}>
                    <div className={`glass-card ${styles.featureCard}`}>
                        <div className={styles.featureIcon} style={{ color: '#4dffb5' }}>
                            <Zap size={24} />
                        </div>
                        <h3>Instant Response</h3>
                        <p>Automatically update records as soon as events happen in your CRM.</p>
                    </div>
                    <div className={`glass-card ${styles.featureCard}`}>
                        <div className={styles.featureIcon} style={{ color: '#6ea8ff' }}>
                            <Settings size={24} />
                        </div>
                        <h3>Custom Workflows</h3>
                        <p>Tailored automation that fits your specific business processes perfectly.</p>
                    </div>
                    <div className={`glass-card ${styles.featureCard}`}>
                        <div className={styles.featureIcon} style={{ color: '#c77dff' }}>
                            <Shield size={24} />
                        </div>
                        <h3>Data Accuracy</h3>
                        <p>Reduce human error by letting AI handle data entry and synchronization.</p>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
