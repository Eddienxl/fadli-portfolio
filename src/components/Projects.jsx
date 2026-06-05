import React, { useState } from 'react';

const Projects = () => {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <>
      <section id="portfolio" className="section-container">
        <h2 className="section-title">Featured <span className="text-gradient">Portfolio</span></h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
          <span className="glass-pill" style={{ background: 'var(--accent-blue)', color: 'white' }}>All</span>
          <span className="glass-pill" style={{ color: 'var(--text-secondary)', background: 'transparent' }}>Enterprise</span>
          <span className="glass-pill" style={{ color: 'var(--text-secondary)', background: 'transparent' }}>AI / ML</span>
        </div>

        <div className="glass" style={{ borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div 
            style={{ height: '400px', width: '100%', borderBottom: '1px solid var(--border-glass)', cursor: 'pointer', position: 'relative' }}
            onClick={() => setPreviewImage('/images/simovi.jpg')}
            title="Click to view full screenshot"
          >
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'rgba(0,0,0,0.6)',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 600,
              backdropFilter: 'blur(4px)'
            }}>
              🔍 Click to Expand
            </div>
            <img src="/images/simovi.jpg" alt="SIMOVI Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          <div style={{ padding: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <span className="glass-pill" style={{ marginBottom: '15px' }}>PT PLN (Persero)</span>
                <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>SIMOVI System</h3>
              </div>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px', maxWidth: '800px' }}>
              Sistem Informasi Monitoring Maturity Level & Evidensi HSSE. An enterprise-grade, comprehensive full-stack digital platform designed to rigorously monitor occupational health and safety metrics for state-owned enterprise PT PLN (Persero) UP2D Riau. Built from scratch with advanced data analytics capabilities.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.85rem' }}>React</span>
              <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.85rem' }}>Node.js</span>
              <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.85rem' }}>PostgreSQL</span>
              <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '0.85rem' }}>Data Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Preview Modal */}
      {previewImage && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.9)',
            backdropFilter: 'blur(8px)',
            padding: '40px'
          }}
          onClick={() => setPreviewImage(null)}
        >
          <button 
            onClick={() => setPreviewImage(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '2.5rem',
              cursor: 'pointer',
              zIndex: 10000
            }}
          >
            ×
          </button>
          
          <div 
            style={{ 
              width: '100%', 
              height: '100%', 
              overflowY: 'auto', 
              display: 'flex', 
              justifyContent: 'center',
              borderRadius: '8px'
            }}
            onClick={(e) => e.stopPropagation()} /* Prevent closing when clicking on the image itself */
          >
            <img 
              src={previewImage} 
              alt="Full Preview" 
              style={{ width: '100%', maxWidth: '1200px', height: 'auto', objectFit: 'contain' }} 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
