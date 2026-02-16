'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './SectionWrapper.module.css';

interface SectionWrapperProps {
    id: string;
    className?: string;
    children: React.ReactNode;
    dark?: boolean;
}

export default function SectionWrapper({ id, className = '', children, dark }: SectionWrapperProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.section
            id={id}
            ref={ref}
            className={`section ${className} ${dark ? styles.dark : ''}`}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="container">{children}</div>
        </motion.section>
    );
}
