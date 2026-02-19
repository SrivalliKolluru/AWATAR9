'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { supabase } from '@/lib/supabase';
import styles from './ContactCTA.module.css';

export default function ContactCTA() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const company = formData.get('company') as string;
        const message = formData.get('message') as string;

        try {
            // 1. Save directly to Supabase
            if (!supabase) {
                const isGitHubPages = typeof window !== 'undefined' && window.location.hostname.includes('github.io');
                const errorMessage = isGitHubPages
                    ? 'Database not configured. Please ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in GitHub Secrets.'
                    : 'Database not configured. Please check your .env.local file and restart the dev server.';
                throw new Error(errorMessage);
            }

            const { error: supabaseError } = await supabase
                .from('contacts')
                .insert([{ name, email, company, message }]);

            if (supabaseError) {
                throw new Error(supabaseError.message || 'Failed to save to database');
            }

            // 2. Send email notification via API (only works locally, skipped on GitHub Pages)
            const isLocal = typeof window !== 'undefined' && window.location.hostname === 'localhost';
            if (isLocal) {
                try {
                    await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name, email, company, message }),
                    });
                } catch {
                    // Email notification failure is non-fatal — DB save already succeeded
                    console.warn('Email notification skipped (API not available)');
                }
            }

            setSubmitted(true);
        } catch (err: any) {
            setError(err.message || 'Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SectionWrapper id="contact" dark>
            <div className={styles.contactBg} />
            <div className={styles.inner}>
                <div className="section-label">✦ Get Started</div>
                <h2 className="section-title">Let&apos;s Build Your AI Workforce</h2>
                <p className="section-subtitle" style={{ margin: '0 auto' }}>
                    Ready to transform your business with AI? Let&apos;s talk
                </p>

                {submitted ? (
                    <div className={styles.successMessage}>
                        <div className={styles.successIcon}>
                            <CheckCircle size={32} />
                        </div>
                        <h3>Message Sent!</h3>
                        <p>We&apos;ll get back to you within 24 hours</p>
                    </div>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Your Name"
                                required
                                name="name"
                                id="contact-name"
                            />
                            <input
                                type="email"
                                className={styles.input}
                                placeholder="Your Email"
                                required
                                name="email"
                                id="contact-email"
                            />
                        </div>

                        <div className={styles.inputGroup} style={{ marginTop: '1rem' }}>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Company Name (Optional)"
                                name="company"
                                id="contact-company"
                            />
                        </div>

                        <textarea
                            className={`${styles.input} ${styles.textarea}`}
                            placeholder="Tell us about your project or challenge..."
                            required
                            name="message"
                            id="contact-message"
                            style={{ marginTop: '1rem' }}
                        />
                        {error && <p className={styles.errorMessage}>{error}</p>}
                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                            {!loading && <Send size={18} />}
                        </button>
                    </form>
                )}
            </div>
        </SectionWrapper>
    );
}
