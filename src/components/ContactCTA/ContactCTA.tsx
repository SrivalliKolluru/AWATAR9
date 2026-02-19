'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';
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
        const message = formData.get('message') as string;

        try {
            // Check if Supabase is initialized
            if (!supabase) {
                throw new Error('Database connection not configured. Please check your environment variables.');
            }

            // 1. Save to Supabase (Client-Side)
            const { error: supabaseError } = await supabase
                .from('contacts')
                .insert([{ name, email, message }]);

            if (supabaseError) {
                console.error('Supabase Error:', supabaseError);
                throw new Error(supabaseError.message || 'Failed to save message');
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

                        <textarea
                            className={`${styles.input} ${styles.textarea}`}
                            placeholder="Tell us about your project or challenge..."
                            required
                            name="message"
                            id="contact-message"
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
