import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

export const SkillRadar = ({ 
  skills = [], 
  height = 320, 
  studentName = "Suyash Karandikar" 
}) => {
  // Compute aggregated category averages from skills
  const categories = ["Programming", "Web Development", "Database", "AI / ML", "Cloud", "Tools"];
  
  const radarData = categories.map(cat => {
    const matched = skills.filter(s => s.category.toLowerCase().includes(cat.toLowerCase().slice(0, 4)));
    const avg = matched.length > 0 
      ? Math.round(matched.reduce((acc, curr) => acc + curr.proficiency, 0) / matched.length)
      : 60;
    
    // Target benchmark for typical MCA graduates
    const benchmark = cat === "Programming" ? 85 
      : cat === "Database" ? 80 
      : cat === "Web Development" ? 75 
      : cat === "AI / ML" ? 70 
      : cat === "Cloud" ? 65 
      : 80;

    return {
      category: cat,
      current: avg,
      benchmark: benchmark
    };
  });

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          background: 'rgba(14, 23, 42, 0.95)',
          border: '1px solid rgba(6, 182, 212, 0.4)',
          borderRadius: '8px',
          padding: '8px 12px',
          fontSize: '0.78rem',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)'
        }}>
          <div style={{ fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
            {payload[0].payload.category}
          </div>
          <div style={{ color: 'var(--accent-cyan)' }}>
            Student Level: <b>{payload[0].value}%</b>
          </div>
          {payload[1] && (
            <div style={{ color: 'var(--text-muted)' }}>
              Industry Benchmark: <b>{payload[1].value}%</b>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '100%', height: `${height}px`, position: 'relative' }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
          <PolarGrid stroke="rgba(255, 255, 255, 0.12)" />
          <PolarAngleAxis 
            dataKey="category" 
            tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} 
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            stroke="rgba(255, 255, 255, 0.2)" 
            tick={{ fill: '#64748b', fontSize: 10 }}
          />
          <Radar
            name="Industry Benchmark"
            dataKey="benchmark"
            stroke="rgba(255, 255, 255, 0.3)"
            fill="rgba(255, 255, 255, 0.05)"
            fillOpacity={0.4}
            strokeDasharray="3 3"
          />
          <Radar
            name={studentName}
            dataKey="current"
            stroke="#06b6d4"
            fill="#06b6d4"
            fillOpacity={0.35}
            strokeWidth={2}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        fontSize: '0.72rem',
        marginTop: '-10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#06b6d4' }} />
          <span style={{ color: 'var(--text-secondary)' }}>Current Profile</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: 'rgba(255, 255, 255, 0.25)', border: '1px dashed #fff' }} />
          <span style={{ color: 'var(--text-muted)' }}>Industry Benchmark</span>
        </div>
      </div>
    </div>
  );
};
