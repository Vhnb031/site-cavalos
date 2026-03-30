'use client';

import React from 'react';
import styles from './TeamCarousel.module.css';

const teamMembers = [
  {
    name: 'Mitzem Sathler Bretas',
    credential: 'CRMV/MG 7153 · Diretor VET',
    specialty: 'Cirurgia, Odontologia Equina Advanced, CT e MRI (Cabeça e Membros)',
    email: 'mitzem@vetequineteam.com',
    phone: '+55 (31) 99999-6610',
  },
  {
    name: 'Guilherme Nunes Assis',
    credential: 'CRMV/MG 14336',
    specialty: 'Clínica, Cirurgia e Odontologia Equina',
    email: 'guilherme@vetequineteam.com',
    phone: '+55 (31) 99676-6610',
  },
  {
    name: 'Daniel Antunes Pousa Faria',
    credential: 'CRMV/MG 14535',
    specialty: 'Reprodução, Clínica, Cirurgia e Odontologia Equina',
    email: 'daniel@vetequineteam.com',
    phone: '+55 (84) 98191-0300',
  },
  {
    name: 'Agmar Junior',
    credential: 'CRMV/MG 14535',
    specialty: 'Clínica, Cirurgia e Odontologia Equina',
    email: 'agmar@vetequineteam.com',
    phone: '+55 (31) 99936-4476',
  },
  {
    name: 'Javier Gomez Gutierréz',
    credential: 'Odontólogo · TP 80156557 (Colômbia)',
    specialty: 'Odontologia Equina e Ortodontia',
    email: 'javiergomezfjgg@hotmail.com',
    phone: '+57 (321) 492-6112',
  },
  {
    name: 'Regina Maria Santiago',
    credential: 'CRMV/CE 1363',
    specialty: 'Clínica, Ortopedia e Acupuntura Veterinária',
    email: 'remaria81@hotmail.com',
    phone: '+55 (85) 99118-1412',
  },
  {
    name: 'Cátia Nascimento',
    credential: 'CRMV/CE 1625',
    specialty: 'Clínica, Cirurgia, Endoscopia Advanced e Radiologia Digital',
    email: 'catianascimentovet@gmail.com',
    phone: '+55 (85) 99981-7844',
  },
  {
    name: 'Priscila Fantini',
    credential: 'CRMV/MG 9580',
    specialty: 'Clínica, Ortopedia e Termografia',
    email: 'fantinivet@yahoo.com.br',
    phone: '+55 (31) 99428-8822',
  },
  {
    name: 'Eutálio Luiz Mariani Pimenta',
    credential: 'CRMV/MG 9077',
    specialty: 'Anestesiologia Veterinária',
    email: '',
    phone: '+55 (31) 97812-7162',
  },
  {
    name: 'Gustavo de Oliveira Fulgêncio',
    credential: 'CRMV/MG 7076',
    specialty: 'Oftalmologia Veterinária',
    email: 'fulgenciobr@yahoo.com.br',
    phone: '+55 (31) 99106-8669',
  },
  {
    name: 'Frederico Mesquita',
    credential: 'CRMV/MG 8397',
    specialty: 'Clínica, Ortopedia e Radiologia Digital',
    email: 'fredveter@hotmail.com',
    phone: '+55 (31) 98497-3350',
  },
  {
    name: 'Maria Elisa Hass',
    credential: 'CRMV/MG 10402',
    specialty: 'Clínica e Radiologia Digital',
    email: 'mariaeliza07@hotmail.com',
    phone: '+55 (31) 98497-3861',
  },
  {
    name: 'Rodrigo Caiana Machado',
    credential: 'CRMV/SP 20594',
    specialty: 'Biotecnologia da Reprodução',
    email: '',
    phone: '+55 (32) 99964-4068',
  },
  {
    name: 'Martinho Sathler Bretas',
    credential: 'CRMV/MG 1572',
    specialty: 'Consultoria de Gestão e Zootecnia · Técnico ABCCMM',
    email: 'martan.marchador@gmail.com',
    phone: '+55 (31) 99976-9057',
  },
  {
    name: 'Humberto Augusto Ferreira',
    credential: 'CRMV/MG 9902',
    specialty: 'Clínica e Cirurgia',
    email: 'humbertoaf@email.com',
    phone: '+55 (31) 99164-3529',
  },
  {
    name: 'Bruno Zambelli Loiacono',
    credential: 'CRMV/MG 10549',
    specialty: 'Clínica, Cirurgia e Radiologia Digital',
    email: 'bzambelli@gmail.com',
    phone: '+55 (11) 95558-4110',
  },
  {
    name: 'Solange Correa Mikail',
    credential: 'Termografista',
    specialty: 'Termografia',
    email: 'mikail@termovet.com.br',
    phone: '+55 (11) 99902-7507',
  },
  {
    name: 'Rafaela Simoes Pires Esteves Jacques',
    credential: 'CRMV 11288',
    specialty: 'Clínica Médica e Odontologia Equina',
    email: 'rafa.spej@hotmail.com',
    phone: '+55 (53) 98125-0567',
  },
  {
    name: 'Arnaldo José Hentz',
    credential: 'CRMV/SP 13950',
    specialty: 'Anestesiologia Veterinária',
    email: 'arnaldohentz@hotmail.com',
    phone: '+55 (11) 97613-0031',
  },
  {
    name: 'Carla Michel Omura',
    credential: 'CRMV/SP',
    specialty: 'Odontologia Equina Advanced',
    email: 'vetbella@gmail.com',
    phone: '+55 (11) 97860-6622',
  },
];

function TeamCard({ member }: { member: typeof teamMembers[0] }) {
  // Iniciais para o avatar placeholder
  const initials = member.name
    .split(' ')
    .slice(0, 2)
    .map(n => n[0])
    .join('');

  return (
    <div className={styles.card}>
      <div className={styles.avatarWrapper}>
        <div className={styles.avatarInitials}>{initials}</div>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.memberName}>{member.name}</h3>
        <span className={styles.credential}>{member.credential}</span>
        <p className={styles.specialty}>{member.specialty}</p>
        <div className={styles.contacts}>
          {member.phone && (
            <a href={`tel:${member.phone.replace(/\D/g, '')}`} className={styles.contactLink}>
              📞 {member.phone}
            </a>
          )}
          {member.email && (
            <a href={`mailto:${member.email}`} className={styles.contactLink}>
              ✉ {member.email}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <section id="equipe" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Nossa Equipe VET</h2>
        <p className={styles.subheading}>
          Um time multidisciplinar de veterinários e especialistas dedicados exclusivamente a equinos.
        </p>
      </div>

      {/* Track com duplicação para loop infinito */}
      <div className={styles.trackOuter}>
        <div className={styles.track}>
          {/* Renderiza duas vezes para o loop contínuo */}
          {[...teamMembers, ...teamMembers].map((m, i) => (
            <TeamCard key={`${m.name}-${i}`} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
