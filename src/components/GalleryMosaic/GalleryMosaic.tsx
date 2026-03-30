'use client';

import React, { useState } from 'react';
import styles from './GalleryMosaic.module.css';

const galleryImages = [
  'F1','F3','F4','F5','F6','F7','F8','F9','F10',
  'F11','F12','F13','F14','F15','F16','F17','F18','F19','F20',
  'F21','F22','F23','F24','F25','F26','F27','F28','F29','F30',
  'F31','F32','F33','F34','F35','F36','F37','F38',
  'ibvet1','ibvet2','ibvet3','ibvet5','ibvet6','ibvet7','ibvet8','ibvet9'
];

export function GalleryMosaicSection() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="galeria" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Nossa galeria</h2>
          <p className={styles.subheading}>Momentos do nosso trabalho com equinos</p>
        </div>

        {/* Wrapper que controla a altura colapsada */}
        <div className={`${styles.mosaicWrapper} ${expanded ? styles.mosaicExpanded : ''}`}>
          <div className={styles.mosaicGrid}>
            {galleryImages.map((name) => {
              const src = `/gallery/${name}.jpg`;
              return (
                <div
                  key={name}
                  className={styles.mosaicItem}
                  onClick={() => setLightboxSrc(src)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Foto ${name}`}
                    className={styles.photo}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>

          {/* Overlay de gradiente — visível apenas quando colapsado */}
          {!expanded && (
            <div className={styles.fadeOverlay}>
              <button
                className={styles.verMaisBtn}
                onClick={() => setExpanded(true)}
              >
                Ver mais fotos
              </button>
            </div>
          )}
        </div>

        {/* Botão "Ver menos" aparece abaixo quando expandido */}
        {expanded && (
          <div className={styles.verMenosWrapper}>
            <button
              className={styles.verMenosBtn}
              onClick={() => {
                setExpanded(false);
                document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver menos ↑
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div className={styles.lightboxOverlay} onClick={() => setLightboxSrc(null)}>
          <button className={styles.lightboxClose} onClick={() => setLightboxSrc(null)}>✕</button>
          <div className={styles.lightboxImageWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightboxSrc}
              alt="Foto ampliada"
              className={styles.lightboxPhoto}
            />
          </div>
        </div>
      )}
    </section>
  );
}
