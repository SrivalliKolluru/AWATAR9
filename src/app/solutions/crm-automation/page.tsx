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
                    <Link 
                        href="/#solutions" 
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '12px', 
                            color: 'var(--color-text-dim)', 
                            textDecoration: 'none',
                            fontSize: '18px',
                            fontWeight: '600',
                            transition: 'all 0.2s',
                            width: 'fit-content'
                        }}
                    >
                        <ArrowLeft size={24} />
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
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                    <Link 
                        href="/#contact"
                        className="cta-button"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '16px 32px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            borderRadius: '50px',
                            background: 'linear-gradient(135deg, #4dffb5, #00d4aa)',
                            color: '#000',
                            textDecoration: 'none',
                            boxShadow: '0 8px 20px rgba(77, 255, 181, 0.3)',
                            transition: 'transform 0.2s, box-shadow 0.2s'
                        }}
                    >
                        <span>Learn More</span>
                        <Zap size={20} />
                    </Link>
                </div>
            </SectionWrapper>
        </main>
    );
}
