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
                <div className={styles.footerBottom} style={{ padding: '40px 0', borderTop: 'none' }}>
                    <p className={styles.copyright}>
                        &copy; {year} AWATAR9 All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
