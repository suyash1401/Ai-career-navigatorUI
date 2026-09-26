import React from 'react';

export const StatCard = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  progress, 
  variant = "cyan", 
  onClick 
}) => {
  const isCircular = typeof progress === 'number' && title.toLowerCase().includes('completion');

  // Colors based on variant
  const colors = {
    cyan: {
      accent: 'var(--accent-cyan)',
      glow: 'rgba(6, 182, 212, 0.2)',
      grad: 'var(--grad-cyan-blue)',
      border: 'rgba(6, 182, 212, 0.3)'
    },
    purple: {
      accent: 'var(--accent-purple)',
      glow: 'rgba(168, 85, 247, 0.2)',
      grad: 'var(--grad-blue-purple)',
      border: 'rgba(168, 85, 247, 0.3)'
    },
    emerald: {
      accent: 'var(--accent-emerald)',
      glow: 'rgba(16, 185, 129, 0.2)',
      grad: 'var(--grad-emerald-cyan)',
      border: 'rgba(16, 185, 129, 0.3)'
    },
    amber: {
      accent: 'var(--accent-amber)',
      glow: 'rgba(245, 158, 11, 0.2)',
      grad: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      border: 'rgba(245, 158, 11, 0.3)'
    }
  }[variant] || {
    accent: 'var(--accent-cyan)',
    glow: 'rgba(6, 182, 212, 0.2)',
    grad: 'var(--grad-cyan-blue)',
    border: 'rgba(6, 182, 212, 0.3)'
  };

  const circumference = 2 * Math.PI * 34;
  const strokeDashoffset = isCircular ? circumference - (progress / 100) * circumference : 0;

  return (
    <div
      onClick={onClick}
      className={`glass-card ${onClick ? 'glass-card-interactive' : ''}`}
      style={{
        padding: '20px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '145px'
      }}
    >
      {/* Background glow accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '90px',
        height: '90px',
        background: colors.glow,
        filter: 'blur(35px)',
        pointerEvents: 'none'
      }} />

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', zIndex: 1 }}>
        <div>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            {title}
          </span>
          <div style={{ fontSize: '1.9rem', fontWeight: 800, color: '#fff', marginTop: '6px', letterSpacing: '-0.02em' }}>
            {value}
          </div>
        </div>

        {isCircular ? (
          <div style={{ position: 'relative', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="78" height="78" style={{ transform: 'rotate(-90deg)' }}>
              <circle
                cx="39"
                cy="39"
                r="34"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="6"
                fill="transparent"
              />
              <circle
                cx="39"
                cy="39"
                r="34"
                stroke={colors.accent}
                strokeWidth="6"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
              />
            </svg>
            <span style={{ position: 'absolute', fontSize: '0.85rem', fontWeight: 800, color: '#fff' }}>
              {progress}%
            </span>
          </div>
        ) : (
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            background: `rgba(255, 255, 255, 0.05)`,
            border: `1px solid ${colors.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {Icon && <Icon size={20} style={{ color: colors.accent }} />}
          </div>
        )}
      </div>

      {/* Bottom Subtitle / Progress bar */}
      <div style={{ marginTop: '14px', zIndex: 1 }}>
        {typeof progress === 'number' && !isCircular && (
          <div style={{ marginBottom: '6px' }}>
            <div style={{
              width: '100%',
              height: '5px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.08)',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${progress}%`,
                height: '100%',
                background: colors.grad,
                borderRadius: '999px',
                transition: 'width 0.8s ease'
              }} />
            </div>
          </div>
        )}
        <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
          {subtitle}
        </div>
      </div>
    </div>
  );
};
