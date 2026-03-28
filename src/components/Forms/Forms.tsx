'use client';

import React, { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './Forms.module.css';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <div className={styles.successMessage}>Recebemos seu pedido de atendimento. Em breve entraremos em contato.</div>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Nome completo *</label>
        <input required minLength={3} type="text" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label>Telefone / WhatsApp *</label>
        <input required type="tel" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label>Tipo de atendimento *</label>
        <select required className={styles.input}>
           <option value="">Selecione...</option>
           <option value="odontologia">Odontologia Equina</option>
           <option value="clinica">Clínica Geral</option>
           <option value="cirurgia">Cirurgia</option>
           <option value="exame">Exame de Imagem</option>
           <option value="outro">Outro</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>Descreva brevemente o caso *</label>
        <textarea required minLength={10} className={styles.textarea}></textarea>
      </div>
      <Button type="submit" variant="primary" size="lg" className={styles.submitBtn}>Enviar pedido de atendimento</Button>
    </form>
  );
}

export function FloatingEmergencyButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className={styles.floatingButton} 
        onClick={() => setIsOpen(true)}
        aria-label="Urgência Veterinária"
      >
        URGÊNCIA VETERINÁRIA
      </button>

      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>✕</button>
            <h2>Atendimento de urgência</h2>
            <p className={styles.emergencyDesc}>Use este canal apenas em casos críticos, como cólicas, fraturas, quedas graves, dispneia ou hemorragias.</p>
            <form className={styles.form} onSubmit={(e) => { e.preventDefault(); alert("Enviado com sucesso!"); setIsOpen(false); }}>
              <div className={styles.formGroup}>
                <label>Nome do responsável *</label>
                <input required type="text" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label>Telefone *</label>
                <input required type="tel" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label>Tipo de urgência *</label>
                <select required className={styles.input}>
                  <option value="">Selecione...</option>
                  <option>Cólica</option>
                  <option>Fratura / Trauma grave</option>
                  <option>Queda grave</option>
                  <option>Hemorragia</option>
                </select>
              </div>
              <Button type="submit" variant="emergency" size="lg" className={styles.submitBtn}>Solicitar Urgência Agora</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
