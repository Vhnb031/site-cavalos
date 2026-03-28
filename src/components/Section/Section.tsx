import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'base' | 'hero' | 'dark' | 'light';
}

export function Section({ id, children, className = '', variant = 'base' }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${styles[variant]} ${className}`}>
      <div className={styles.container}>
        {children}
      </div>
    </section>
  );
}
