import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const links = [
    { name: 'fadli_prt', icon: <FaInstagram size={20} />, url: 'https://instagram.com/fadli_prt' },
    { name: 'Ahmad Fadli Pratama', icon: <FaLinkedin size={20} />, url: 'https://linkedin.com/in/ahmad-fadli-pratama' },
    { name: 'Eddienxl', icon: <FaGithub size={20} />, url: 'https://github.com/Eddienxl' },
    { name: 'ahmadfadlipratama407@gmail.com', icon: <FaEnvelope size={20} />, url: 'mailto:ahmadfadlipratama407@gmail.com' }
  ];

  return (
    <section id="contact" style={{ padding: '80px 24px 40px', marginTop: '50px' }}>
      <div className="section-container" style={{ textAlign: 'center', paddingTop: '0' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px' }}>CONNECT</span>
          <div style={{ height: '1px', width: '40px', background: 'var(--border-glass)' }}></div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', maxWidth: '800px', margin: '0 auto' }}>
          {links.map((link, idx) => (
            <a 
              key={idx}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '999px',
                color: 'var(--text-primary)',
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              <span style={{ color: 'var(--text-secondary)' }}>{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
        
        <p style={{ color: 'var(--border-glass)', marginTop: '80px', fontSize: '0.8rem' }}>
          © 2026 Ahmad Fadli Pratama.
        </p>
      </div>
    </section>
  );
};

export default Contact;
