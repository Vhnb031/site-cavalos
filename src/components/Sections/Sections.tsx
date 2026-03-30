'use client';

import React, { useState } from 'react';
import { Section } from '../Section/Section';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Sections.module.css';

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
export function HeroSection() {
  const textAnim = useScrollAnimation('fadeInUp');
  const imgAnim = useScrollAnimation('scaleIn', 0.2);

  return (
    <Section id="inicio" variant="hero">
      <div className={styles.heroGrid}>
        {/* Coluna esquerda */}
        <div ref={textAnim.elementRef} className={`${styles.heroLeft} ${textAnim.animationClass}`}>
          <h1 className={styles.heroHeading}>
            Cuidando da saúde e performance do seu cavalo com excelência
          </h1>
          <p className={styles.heroSubheading}>
            A VET – Veterinary Equine Team é referência em odontologia equina, clínica e cirurgia,
            atendendo cavalos atletas e de lazer com ciência, experiência e respeito ao animal.
          </p>
          {/* Botões — trust badges removidos */}
          <div className={styles.heroActions}>
            <a href="#contato"><Button variant="primary" size="lg">Agendar Avaliação</Button></a>
            <a href="#contato"><Button variant="secondary" size="lg">Entrar em Contato</Button></a>
          </div>
        </div>

        {/* Coluna direita — imagem + overlay card no canto inferior-esquerdo */}
        <div ref={imgAnim.elementRef} className={`${styles.heroRight} ${imgAnim.animationClass}`}>
          <div className={styles.heroImageWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Cavalo Branco.png"
              alt="Cavalo branco sendo cuidado pela equipe VET"
              className={styles.heroPhoto}
            />

            {/* Bolha overlay — canto inferior-esquerdo, transbordando 16px */}
            <div className={styles.heroOverlay}>
              <p>Odontologia Equina, Cirurgia e Diagnóstico Avançado em um só time.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────
   STATS BRIDGE — números de autoridade entre dobras
───────────────────────────────────────────── */
export function StatsBridgeSection() {
  const stats = [
    { value: '+25 anos', label: 'de experiência' },
    { value: '+5.000', label: 'animais tratados' },
    { value: '+500', label: 'cirurgias de alta complexidade' },
    { value: '+200', label: 'haras e propriedades parceiras' },
  ];

  return (
    <div className={styles.statsBridge}>
      <div className={styles.statsBubble}>
        {stats.map((s) => (
          <div key={s.label} className={styles.statItem}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GALLERY (momentos)
───────────────────────────────────────────── */
export function GallerySection() {
  const anim = useScrollAnimation('fadeInUp');

  return (
    <Section id="momentos" variant="base">
      <div className={styles.sectionHeader} ref={anim.elementRef}>
        <h2>Momentos que conectam cavalo, cavaleiro e ciência</h2>
        <p>Registro de atendimentos e bastidores do cuidado diário com os equinos.</p>
      </div>
      <div className={styles.galleryGrid}>
        {[
          { title: 'Atendimento odontológico em campo',       src: '/gallery/ibvet2.jpg', large: false },
          { title: 'Avaliação de marcha e biomecânica',       src: '/Biomecanica.png',    large: true  },
          { title: 'Treinamentos e cursos para veterinários', src: '/gallery/F21.jpg',    large: false },
        ].map((item) => (
          <Card key={item.title} variant="base" className={styles.galleryCard}>
            {item.large ? (
              <div className={styles.galleryPhotoWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.title} className={styles.galleryPhotoZoom} />
              </div>
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={item.src} alt={item.title} className={styles.galleryPhoto} />
            )}
            <h3 className={styles.galleryTitle}>{item.title}</h3>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────
   EQUIPAMENTOS — tópicos em bolhas com sombra interna
───────────────────────────────────────────── */
export function FeatureDarkSection() {
  const anim = useScrollAnimation('fadeInUp');

  return (
    <Section id="equipamentos" variant="dark">
      <div className={styles.featureGrid}>
        <div className={styles.featureImageWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Cavalo Correndo 2.png"
            alt="Cavalos correndo em campo aberto"
            className={styles.featurePhoto}
          />
        </div>
        <div className={styles.featureContent} ref={anim.elementRef}>
          <h2>Tecnologia e estrutura avançada a serviço do seu cavalo</h2>
          <p>Utilizamos equipamentos modernos para diagnóstico preciso e tratamentos mais seguros.</p>
          <div className={styles.benefitsGrid}>
            {[
              { title: 'Tomografia Computadorizada (CT)', text: 'Equipamentos específicos para equinos.' },
              { title: 'Ressonância Magnética (MRI)', text: 'Focada em cabeça e membros.' },
              { title: 'Diagnóstico por imagem completo', text: 'Endoscopia, ultrassonografia, radiologia digital e termografia.' },
            ].map((benefit) => (
              /* bolha com sombra interna superior+esquerda */
              <div key={benefit.title} className={styles.benefitBubble}>
                <h4>{benefit.title}</h4>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────
   SERVIÇOS — grid 4 colunas com modal
───────────────────────────────────────────── */
const mainServices = [
  {
    icon: '🦷',
    title: 'Odontoplastia',
    desc: 'Retirada dos dentes de lobo e capas dentárias com precisão e segurança.',
  },
  {
    icon: '🔭',
    title: 'Oroscopia',
    desc: 'Exame endoscópico da cavidade oral para diagnóstico preciso.',
  },
  {
    icon: '🫁',
    title: 'Sinoscopia',
    desc: 'Avaliação dos seios paranasais com tecnologia de ponta.',
  },
];

const extraServices = [
  'Tratamento de Sinusites',
  'Tratamento de Fístulas Dentárias',
  'Cirurgias de Alta Complexidade da cavidade Oral / Dentária',
  'Cirurgia Geral',
  'Radiografias',
  'Ultrassom de ATM (Articulação temporo-mandibular)',
  'Cólicas',
  'Oftalmologia',
  'Cirurgias Plásticas de Reconstituição Facial',
  'Laudagem de TC – Tomografia Computadorizada da Cabeça e Pescoço',
  'Laudagem de MRI – Ressonância magnética da cabeça e pescoço',
];

export function ServicesSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Section id="servicos" variant="base">
        <div className={styles.servicesGrid4}>
          {/* Card de chamada — coluna 1 */}
          <div className={styles.serviceCallCard}>
            <div className={styles.serviceCallOverlay} />
            <div className={styles.serviceCallContent}>
              <h3 className={styles.serviceCallTitle}>Nossos Serviços</h3>
              <button
                className={styles.serviceCallBtn}
                onClick={() => setModalOpen(true)}
              >
                Ver mais serviços
              </button>
            </div>
          </div>

          {/* Cards de serviços — colunas 2, 3, 4 */}
          {mainServices.map((s) => (
            <div key={s.title} className={styles.serviceCard}>
              <span className={styles.serviceIcon}>{s.icon}</span>
              <h3 className={styles.serviceCardTitle}>{s.title}</h3>
              <p className={styles.serviceCardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Modal com serviços extras */}
      {modalOpen && (
        <div
          className={styles.servicesModalOverlay}
          onClick={() => setModalOpen(false)}
        >
          <div
            className={styles.servicesModal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.servicesModalClose}
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>
            <h2 className={styles.servicesModalTitle}>Todos os Serviços</h2>
            <p className={styles.servicesModalSubtitle}>
              Equipe especializada em medicina e odontologia equina de alta complexidade.
            </p>
            <ul className={styles.servicesModalList}>
              {extraServices.map((svc) => (
                <li key={svc} className={styles.servicesModalItem}>
                  <span className={styles.servicesModalDot} />
                  {svc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────
   EQUIPE
───────────────────────────────────────────── */

/* ─────────────────────────────────────────────
   CTA FINAL
───────────────────────────────────────────── */
export function CallToActionSection() {
  return (
    <Section variant="dark" id="cta">
      <div className={styles.ctaWrapper}>
        <h2>Pronto para cuidar melhor do seu cavalo?</h2>
        <p>Agende uma avaliação com a VET ou fale com nossa equipe para montar um plano sob medida.</p>
        <div className={styles.heroActions}>
          <a href="#contato"><Button variant="primary" size="lg">Agendar Atendimento</Button></a>
          <a href="#contato"><Button variant="secondary" size="lg">Enviar mensagem pelo WhatsApp</Button></a>
        </div>
      </div>
    </Section>
  );
}
