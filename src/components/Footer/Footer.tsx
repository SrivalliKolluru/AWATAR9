'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { BASE_PATH } from '@/lib/constants';
import styles from './Footer.module.css';

export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerInner}>
                    <div className={styles.footerBrand}>
                        <div className={styles.footerLogo}>
                            <div className={styles.logoIconWrapper}>
                                <Image
                                    src={`${BASE_PATH}/logo.png`}
                                    alt="AWATAR9 Icon"
                                    width={140}
                                    height={40}
                                    className={styles.logoImage}
                                />
                            </div>
                            <span className={styles.logoText}>
                                AWATAR
                                <span className={styles.logoNumber}>9</span>
                            </span>
                        </div>
                        <p className={styles.footerTagline}>
                            Designing AI That Delivers. We build smart AI agents for real
                            business challenges — ready-made and custom solutions.
                        </p>
                    </div>

                    <div className={styles.footerLinks}>
                        <div className={styles.footerColumn}>
                            <h4>Solutions</h4>
                            <a href="#solutions">Ready-Made Bots</a>
                            <a href="#custom-ai">Custom AI</a>
                            <a href="#technology">Technology</a>
                        </div>
                        <div className={styles.footerColumn}>
                            <h4>Company</h4>
                            <a href="#approach">Our Approach</a>
                            <a href="#industries">Industries</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        &copy; {year} AWATAR9. All rights reserved.
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                            <Linkedin size={16} />
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="Twitter">
                            <Twitter size={16} />
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="Email">
                            <Mail size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
