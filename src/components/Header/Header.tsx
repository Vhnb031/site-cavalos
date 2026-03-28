'use client';

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Button } from '../Button/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Início", anchor: "#inicio" },
    { label: "Serviços", anchor: "#servicos" },
    { label: "Equipamentos", anchor: "#equipamentos" },
    { label: "Equipe", anchor: "#equipe" },
    { label: "Artigos & Vídeos", anchor: "#conteudo" },
    { label: "Contato", anchor: "#contato" }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* Pode ser substituído por <Image src="/Logo.png" /> quando a imagem estiver em public/ */}
          <span>VET Equine</span>
        </div>
        <nav className={styles.nav}>
          {navItems.map(item => (
            <a key={item.anchor} href={item.anchor} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <a href="#contato">
            <Button variant="primary" size="sm">Agendar Atendimento</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
