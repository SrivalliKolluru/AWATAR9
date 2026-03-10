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
                            gap: '8px', 
                            color: 'var(--color-text-dim)', 
                            textDecoration: 'none',
                            fontSize: '14px',
                            transition: 'color 0.2s'
                        }}
                    >
                        <ArrowLeft size={20} />
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

                <div style={{ position: 'relative', width: '100%', marginBottom: '60px' }}>
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

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                    gap: '24px' 
                }}>
                    <div className="glass-card" style={{ padding: '32px', borderRadius: '20px' }}>
                        <div style={{ color: '#ff6b6b', marginBottom: '20px' }}>
                            <Target size={24} />
                        </div>
                        <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Smart Prospecting</h3>
                        <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                            AI-driven search to identify prospects that perfectly match your Ideal Customer Profile.
                        </p>
                    </div>
                    <div className="glass-card" style={{ padding: '32px', borderRadius: '20px' }}>
                        <div style={{ color: '#4dffb5', marginBottom: '20px' }}>
                            <Users size={24} />
                        </div>
                        <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Automated Outreach</h3>
                        <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                            Personalized initial contact and follow-ups across multiple channels automatically.
                        </p>
                    </div>
                    <div className="glass-card" style={{ padding: '32px', borderRadius: '20px' }}>
                        <div style={{ color: '#6ea8ff', marginBottom: '20px' }}>
                            <Zap size={24} />
                        </div>
                        <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Instant Qualification</h3>
                        <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                            Real-time lead scoring and qualification so your team only talks to ready-to-buy prospects.
                        </p>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
