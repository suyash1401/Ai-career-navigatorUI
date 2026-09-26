import React from 'react';

export const ProgressBar = ({ 
  value, 
  max = 100, 
  variant = "cyan", 
  height = 8, 
  showLabel = false, 
  label = "", 
  animated = true 
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  const getGradient = () => {
    switch (variant) {
      case "cyan":
        return 'var(--grad-cyan-blue)';
      case "purple":
        return 'var(--grad-blue-purple)';
      case "emerald":
        return 'var(--grad-emerald-cyan)';
      case "amber":
        return 'linear-gradient(90deg, #f59e0b 0%, #ef4444 100%)';
      case "rose":
        return 'linear-gradient(90deg, #f43f5e 0%, #be123c 100%)';
      case "dynamic":
        if (percentage >= 80) return 'var(--grad-emerald-cyan)';
        if (percentage >= 60) return 'var(--grad-cyan-blue)';
        if (percentage >= 40) return 'linear-gradient(90deg, #f59e0b 0%, #3b82f6 100%)';
        return 'linear-gradient(90deg, #f43f5e 0%, #f59e0b 100%)';
      default:
        return 'var(--grad-cyan-blue)';
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {showLabel && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '0.78rem' }}>
          <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{label}</span>
          <span style={{ color: '#fff', fontWeight: 700 }}>{percentage}%</span>
        </div>
      )}
      <div style={{
        width: '100%',
        height: `${height}px`,
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '999px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          width: `${percentage}%`,
          height: '100%',
          background: getGradient(),
          borderRadius: '999px',
          transition: animated ? 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
          boxShadow: percentage > 70 ? '0 0 10px rgba(6, 182, 212, 0.4)' : 'none'
        }} />
      </div>
    </div>
  );
};
