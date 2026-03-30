'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '../Button/Button';
import styles from './Header.module.css';

const navItems = [
  { label: 'Início', anchor: '#inicio' },
  { label: 'Serviços', anchor: '#servicos' },
  { label: 'Equipamentos', anchor: '#equipamentos' },
  { label: 'Equipe', anchor: '#equipe' },
  { label: 'Artigos & Vídeos', anchor: '#conteudo' },
  { label: 'Contato', anchor: '#contato' },
];

export function Header() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const goingDown = current > lastScrollY.current;

      setAtTop(current < 20);

      if (current < 80) {
        // Perto do topo: sempre visível
        setVisible(true);
      } else if (goingDown) {
        // Rolando para baixo: esconde
        setVisible(false);
        setMenuOpen(false);
      } else {
        // Qualquer scroll para cima: aparece
        setVisible(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        ${styles.wrapper}
        ${visible ? styles.visible : styles.hidden}
        ${atTop ? styles.atTop : styles.scrolled}
      `}
    >
      <div className={styles.bubble}>
        {/* Logo */}
        <a href="#inicio" className={styles.logoLink}>
          <Image
            src="/Logo branca 2.png"
            alt="VET Equine Team"
            width={120}
            height={50}
            style={{ objectFit: 'contain' }}
            priority
          />
        </a>

        {/* Nav desktop */}
        <nav className={styles.nav}>
          {navItems.map(item => (
            <a key={item.anchor} href={item.anchor} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <a href="#contato">
            <Button variant="primary" size="sm">Agendar</Button>
          </a>
        </div>

        {/* Hamburger mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span className={menuOpen ? styles.barOpen1 : styles.bar} />
          <span className={menuOpen ? styles.barOpen2 : styles.bar} />
          <span className={menuOpen ? styles.barOpen3 : styles.bar} />
        </button>
      </div>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map(item => (
            <a
              key={item.anchor}
              href={item.anchor}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setMenuOpen(false)}>
            <Button variant="primary" size="md">Agendar Atendimento</Button>
          </a>
        </div>
      )}
    </header>
  );
}
