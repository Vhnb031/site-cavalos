'use client';

import React from 'react';
import { Section } from '../Section/Section';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Sections.module.css';

export function HeroSection() {
  const textAnim = useScrollAnimation('fadeInUp');
  const imgAnim = useScrollAnimation('scaleIn', 0.2);

  return (
    <Section id="inicio" variant="hero">
      <div className={styles.heroGrid}>
        <div ref={textAnim.elementRef} className={`${styles.heroLeft} ${textAnim.animationClass}`}>
          <h1 className={styles.heroHeading}>Cuidando da saúde e performance do seu cavalo com excelência</h1>
          <p className={styles.heroSubheading}>A VET – Veterinary Equine Team é referência em odontologia equina, clínica e cirurgia, atendendo cavalos atletas e de lazer com ciência, experiência e respeito ao animal.</p>
          <div className={styles.heroActions}>
            <a href="#contato"><Button variant="primary" size="lg">Agendar Avaliação</Button></a>
            <a href="#contato"><Button variant="secondary" size="lg">Entrar em Contato</Button></a>
          </div>
          <div className={styles.trustBadges}>
            <span>+15 anos de experiência</span>
            <span>Equipe multidisciplinar</span>
            <span>Atendimento em todo o Brasil</span>
          </div>
        </div>
        <div ref={imgAnim.elementRef} className={`${styles.heroRight} ${imgAnim.animationClass}`}>
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroPlaceholder}>Pessoa cavalgando um cavalo branco</div>
            <Card variant="surfaceLight" className={styles.heroOverlay}>
              <p>Odontologia Equina, Cirurgia e Diagnóstico Avançado em um só time.</p>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function GallerySection() {
  const anim = useScrollAnimation('fadeInUp');

  return (
    <Section id="momentos" variant="base">
      <div className={styles.sectionHeader} ref={anim.elementRef}>
        <h2>Momentos que conectam cavalo, cavaleiro e ciência</h2>
        <p>Registro de atendimentos, cursos e bastidores do cuidado diário com os equinos.</p>
      </div>
      <div className={styles.galleryGrid}>
        {[
          { title: "Atendimento odontológico em campo" },
          { title: "Avaliação de marcha e biomecânica" },
          { title: "Treinamentos e cursos para veterinários" }
        ].map((item, idx) => (
          <Card key={idx} variant="base" className={styles.galleryCard}>
            <div className={styles.imagePlaceholder}>Imagem: {item.title}</div>
            <h3 className={styles.galleryTitle}>{item.title}</h3>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function FeatureDarkSection() {
  const anim = useScrollAnimation('fadeInUp');

  return (
    <Section id="equipamentos" variant="dark">
      <div className={styles.featureGrid}>
        <div className={styles.featureImageWrapper}>
          <div className={styles.imagePlaceholderBase}>Dois cavalos correndo em um campo ao pôr do sol</div>
        </div>
        <div className={styles.featureContent} ref={anim.elementRef}>
          <h2>Tecnologia e estrutura avançada a serviço do seu cavalo</h2>
          <p>Utilizamos equipamentos modernos para diagnóstico preciso e tratamentos mais seguros.</p>
          <div className={styles.benefitsGrid}>
            {[
              { title: 'Tomografia Computadorizada (CT)', text: 'Equipamentos específicos para equinos.' },
              { title: 'Ressonância Magnética (MRI)', text: 'Focada em cabeça e membros.' },
              { title: 'Diagnóstico por imagem completo', text: 'Endoscopia, ultrassonografia, radiologia digital e termografia.' }
            ].map(benefit => (
              <div key={benefit.title} className={styles.benefitItem}>
                <div className={styles.iconPlaceholder}>+</div>
                <div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ServicesSection() {
  return (
    <Section id="servicos" variant="base">
      <div className={styles.sectionHeader}>
        <h2>O que fazemos pela saúde do seu cavalo</h2>
        <p>Atuação completa, da prevenção ao tratamento de alta complexidade.</p>
      </div>
      <div className={styles.servicesGrid}>
        {[
          { title: 'Odontologia Equina', desc: 'Avaliação, correções e tratamentos avançados.' },
          { title: 'Clínica Geral e Ortopedia', desc: 'Diagnóstico e manejo de lesões e doenças.' },
          { title: 'Cirurgia e Anestesiologia', desc: 'Procedimentos cirúrgicos com segurança.' },
          { title: 'Oftalmologia', desc: 'Cuidados com a visão e estruturas oculares.' },
          { title: 'Fisioterapia e Reabilitação', desc: 'Retorno seguro às atividades.' },
          { title: 'Endocrinologia e Gastroenterologia', desc: 'Controle metabólico e digestivo.' }
        ].map(s => (
          <div key={s.title} className={styles.serviceCircle}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function TeamSection() {
  return (
    <Section id="equipe" variant="light">
      <div className={styles.sectionHeader}>
        <h2>Nossa equipe VET</h2>
        <p>Um time multidisciplinar de veterinários e especialistas dedicados exclusivamente a equinos.</p>
      </div>
      <div className={styles.teamGrid}>
        {[
          { name: "Mitzem Sathler Bretas", role: "Diretor VET – Cirurgia e Odontologia Equina Advanced" },
          { name: "Guilherme Nunes Assis", role: "Clínica, Cirurgia e Odontologia Equina" },
          { name: "Daniel Antunes Pousa Faria", role: "Reprodução, Clínica e Cirurgia" },
          { name: "Equipe de Diagnóstico por Imagem", role: "CT, MRI, Radiologia, Termografia" }
        ].map(member => (
          <Card key={member.name} variant="base">
             <div className={styles.avatarPlaceholder} />
             <h3>{member.name}</h3>
             <p>{member.role}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

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
