import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Home.module.css'

const Navigation: React.FC = () => {
    return (
        <nav>
            <div className={styles.header}>
                <Link className={styles.headerNames} href="/shop">
                    Shop
                </Link>
                <Link className={styles.headerNames} href="/recipes">
                    Recipes
                </Link>
                <Link className={styles.headerNames} href="/learn">
                    Learn
                </Link>
                <Link className={styles.headerNames} href="/blog">
                    Blog
                </Link>
                <Link className={styles.headerNames} href="/about">
                    About
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;