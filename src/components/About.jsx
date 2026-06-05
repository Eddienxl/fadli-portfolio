import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [selectedCert, setSelectedCert] = useState(null);

  const certData = [
    { title: "Membangun Proyek Deep Learning Tingkat Mahir", image: "/images/Membangun Proyek Deep Learning Tingkat Mahir.pdf" },
    { title: "Belajar Fundamental Deep Learning", image: "/images/Belajar Fundamental Deep Learning.pdf" },
    { title: "Belajar Machine Learning untuk Pemula", image: "/images/Belajar Machine Learning Untuk Pemula.pdf" },
    { title: "Belajar Dasar AI", image: "/images/Belajar Dasar AI.pdf" },
    { title: "Memulai Pemrograman dengan Python", image: "/images/Memulai Pemrograman dengan Python.pdf" }
  ];

  const content = {
    experience: (
      <div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Work Experience</h3>
        <div style={{ marginBottom: '25px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Full-stack Developer</h4>
            <span style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: 500 }}>Jan 2026 - Mar 2026</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '10px' }}>PT PLN (Persero)</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Architected and developed SIMOVI (Sistem Informasi Monitoring Maturity Level & Evidensi HSSE). Built full-stack system and executed User Acceptance Testing (UAT) ensuring operational positive impact.</p>
        </div>
      </div>
    ),
    education: (
      <div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Education</h3>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Universitas Islam Negeri Sultan Syarif Kasim Riau</h4>
            <span style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: 500 }}>2023 - 2027</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Sarjana Teknik, Computer Science</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '10px' }}>Currently in semester 6. Active in developing AI and web-based solutions for enterprise problems.</p>
        </div>
      </div>
    ),
    programs: (
      <div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Scholarships & Programs</h3>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>AI Engineer Pathway</h4>
            <span style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: 500 }}>Jan 2026 - Present</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '10px' }}>Coding Camp powered by DBS Foundation</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Selected as a representative for digital talent scholarship in Artificial Intelligence. Implementing Machine Learning, Deep Learning, and Data Pattern Analysis.</p>
        </div>
      </div>
    ),
    certificates: (
      <div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Certifications</h3>
        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {certData.map((cert, idx) => (
            <li key={idx} className="glass" style={{ padding: '20px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent-blue)', fontSize: '1.5rem' }}>★</span>
                <div>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.1rem' }}>{cert.title}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Dicoding Indonesia</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCert(cert.image)}
                style={{ 
                  background: 'rgba(59, 130, 246, 0.1)', 
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  color: 'var(--accent-blue)',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  width: 'fit-content',
                  marginLeft: '35px',
                  fontWeight: 500,
                  fontSize: '0.85rem'
                }}
                onMouseOver={e => e.target.style.background = 'rgba(59, 130, 246, 0.2)'}
                onMouseOut={e => e.target.style.background = 'rgba(59, 130, 246, 0.1)'}
              >
                View Certificate
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  };

  return (
    <>
      <section id="about" className="section-container">
        <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        
        <div className="glass" style={{ display: 'flex', borderRadius: '16px', overflow: 'hidden', minHeight: '400px' }}>
          {/* Sidebar Tabs */}
          <div style={{ width: '30%', borderRight: '1px solid var(--border-glass)', padding: '20px 0' }}>
            <button className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}>Experience</button>
            <button className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>Education</button>
            <button className={`tab-btn ${activeTab === 'programs' ? 'active' : ''}`} onClick={() => setActiveTab('programs')}>Programs</button>
            <button className={`tab-btn ${activeTab === 'certificates' ? 'active' : ''}`} onClick={() => setActiveTab('certificates')}>Certificates</button>
          </div>
          
          {/* Content Area */}
          <div style={{ width: '70%', padding: '40px' }}>
            {content[activeTab]}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)'
          }}
          onClick={() => setSelectedCert(null)}
        >
          <div 
            style={{ position: 'relative', maxWidth: '900px', width: '100%' }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCert(null)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
            <iframe 
              src={selectedCert} 
              title="Certificate" 
              style={{ width: '100%', height: '80vh', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: 'none', background: 'white' }} 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default About;
