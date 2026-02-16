'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.heroBg} />

            <div className={styles.heroContent}>
                <motion.div
                    className={styles.heroLabel}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    variants={fadeUp}
                >
                    ✦ Designing AI That Delivers
                </motion.div>

                <motion.h1
                    className={styles.heroTitle}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    variants={fadeUp}
                >
                    We Build <span className="highlight">AI That Works</span> for You
                </motion.h1>

                <motion.p
                    className={styles.heroDescription}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    variants={fadeUp}
                >
                    At AWATAR9, we design smart AI agents for real business challenges.
                    Our bots don&apos;t just automate — they think, they act, they deliver results.
                </motion.p>

                <motion.div
                    className={styles.heroActions}
                    initial="hidden"
                    animate="visible"
                    custom={3}
                    variants={fadeUp}
                >
                    <a href="#contact" className={styles.heroPrimary}>
                        Let&apos;s Build Your AI
                        <ArrowRight size={18} />
                    </a>
                    <a href="#solutions" className={styles.heroSecondary}>
                        Explore Solutions
                        <ChevronDown size={18} />
                    </a>
                </motion.div>

                <motion.div
                    className={styles.heroStats}
                    initial="hidden"
                    animate="visible"
                    custom={4}
                    variants={fadeUp}
                >
                    <div className={styles.stat}>
                        <div className={styles.statValue}>24/7</div>
                        <div className={styles.statLabel}>AI Availability</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>7+</div>
                        <div className={styles.statLabel}>Ready-Made Bots</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>100%</div>
                        <div className={styles.statLabel}>Customizable</div>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
