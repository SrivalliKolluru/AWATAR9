'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { FORM_ACCESS_KEY } from '@/lib/constants';
import styles from './ContactCTA.module.css'; // Assuming styles are imported from here

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

        // --- COMPANY EMAIL VALIDATION ---
        const personalEmailDomains = [
            'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
            'aol.com', 'icloud.com', 'zoho.com', 'yandex.com', 'mail.com', 'protonmail.com'
        ];

        const emailParts = email.split('@');
        if (emailParts.length === 2) {
            const domain = emailParts[1].toLowerCase();
            if (personalEmailDomains.includes(domain)) {
                setError('Invalid Email. Please only enter valid company mail IDs.');
                setLoading(false);
                return; // Stop submission
            }
        }
        // --------------------------------

        try {
            console.log('Routing form data to Sheets and Email...');

            const formDataObj = {
                name,
                email,
                company,
                message,
            };

            // 1. SILENT SAVE TO GOOGLE SHEETS
            // We catch any Google Script errors (like the email permission failure)
            // so it doesn't break the actual website submission, since the data IS being saved.
            try {
                await fetch('https://script.google.com/macros/s/AKfycbyGkYgwNc0X3cZA8umwpSzJ7fb1PYowk4RHUGCxK2tkTRJWBF_RELeK2goMkp06TQxi/exec', {
                    method: 'POST',
                    body: JSON.stringify(formDataObj),
                });
            } catch (sheetError) {
                console.warn('Silent Google Sheets error ignored:', sheetError);
            }

            // 2. SEND THE ACTUAL EMAIL VIA WEB3FORMS
            const web3FormsDataObj = {
                access_key: FORM_ACCESS_KEY,
                subject: `New Message from ${name} via AWATAR9`,
                from_name: 'AWATAR9 Contact Form',
                ...formDataObj
            };

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(web3FormsDataObj),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                console.error('Web3Forms Error:', result);
                throw new Error(result.message || 'Failed to send email notification');
            }

            console.log('Message sent successfully:', result);
            setSubmitted(true);
        } catch (err: any) {
            console.error('Submission error:', err);
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
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                                <label htmlFor="contact-name" style={{ fontSize: '0.82rem', color: '#a0aec0', fontWeight: 500 }}>
                                    Your Name <span style={{ color: '#f56565' }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="Your Name"
                                    required
                                    name="name"
                                    id="contact-name"
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                                <label htmlFor="contact-email" style={{ fontSize: '0.82rem', color: '#a0aec0', fontWeight: 500 }}>
                                    Your Email <span style={{ color: '#f56565' }}>*</span>
                                </label>
                                <input
                                    type="email"
                                    className={styles.input}
                                    placeholder="Your Email"
                                    required
                                    name="email"
                                    id="contact-email"
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1rem' }}>
                            <label htmlFor="contact-company" style={{ fontSize: '0.82rem', color: '#a0aec0', fontWeight: 500 }}>
                                Company Name <span style={{ color: '#f56565' }}>*</span>
                            </label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Company Name"
                                name="company"
                                id="contact-company"
                                required
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1rem' }}>
                            <label htmlFor="contact-message" style={{ fontSize: '0.82rem', color: '#a0aec0', fontWeight: 500 }}>
                                Message <span style={{ color: '#f56565' }}>*</span>
                            </label>
                            <textarea
                                className={`${styles.input} ${styles.textarea}`}
                                placeholder="Tell us about your project or challenge..."
                                required
                                name="message"
                                id="contact-message"
                            />
                        </div>
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
