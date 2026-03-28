import React from 'react';
import { Section } from '../Section/Section';
import { ContactForm } from '../Forms/Forms';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer id="contato" className={styles.footerContainer}>
      <Section variant="dark">
        <div className={styles.footerGrid}>
          <div className={styles.footerInfo}>
            <h2>VET - Veterinary Equine Team</h2>
            <p>Equipe especializada em medicina e odontologia equina.</p>
            <div className={styles.contactDetails}>
               <p>E-mail: contato@vetequineteam.com.br</p>
               <p>Telefone: (31) 0000-0000</p>
               <p>Atendimento em todo o Brasil</p>
            </div>
          </div>
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Agende um atendimento</h3>
            <p className={styles.formDesc}>Preencha os dados abaixo e nossa equipe entrará em contato para agendar o melhor horário para você e seu cavalo.</p>
            <ContactForm />
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p>© VET - Veterinary Equine Team. Todos os direitos reservados.</p>
        </div>
      </Section>
    </footer>
  );
}
