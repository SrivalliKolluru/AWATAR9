'use client';

import { ArrowLeft, Play, Target, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { BASE_PATH } from '@/lib/constants';
import styles from '../crm-automation/page.module.css';

export default function LeadGenerationPage() {
    return (
        <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--color-bg)' }}>
            <SectionWrapper id="lead-generation">
                <div style={{ marginBottom: '40px' }}>
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
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-dim)'}
                    >
                        <ArrowLeft size={24} />
                        <span>Back to Solutions</span>
                    </Link>
                    <div style={{ marginTop: '24px' }}>
                        <div className="section-label">✦ Solution Overview</div>
                        <h1 className="section-title">Lead Generation Agents</h1>
                        <p style={{ 
                            color: 'var(--color-text-dim)', 
                            fontSize: '18px', 
                            maxWidth: '600px', 
                            lineHeight: '1.6',
                            marginTop: '16px'
                        }}>
                            Automate your prospecting and sales outreach. Our AI agents work 24/7 to find, qualify, and engage with high-potential leads for your business.
                        </p>
                    </div>
                </div>

                <div style={{ position: 'relative', width: '100%', marginBottom: '40px' }}>
                    <div className="glass-card" style={{ 
                        borderRadius: '24px', 
                        overflow: 'hidden', 
                        aspectRatio: '16/9',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                        <video
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            src="../../videos/lead-generation.mp4"
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
