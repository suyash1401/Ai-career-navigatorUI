import React, { useState, useMemo } from 'react';
import { networkData } from '../data/networkData';
import { Network, Sparkles, Filter, Info, Eye, Layers } from 'lucide-react';

export const CareerNetwork = ({ onSelectCareer }) => {
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [activeCluster, setActiveCluster] = useState("all");

  // Coordinate positions for nodes in a clean aesthetic layout
  const nodeCoordinates = useMemo(() => ({
    // Left Column: Technologies (Emerald)
    "tech-1": { x: 90, y: 110 },
    "tech-7": { x: 90, y: 190 },
    "tech-5": { x: 90, y: 270 },
    "tech-3": { x: 90, y: 350 },
    "tech-2": { x: 90, y: 430 },
    "tech-8": { x: 90, y: 510 },
    "tech-4": { x: 90, y: 590 },
    "tech-6": { x: 90, y: 670 },

    // Center Column: Core Skills (Cyan)
    "skl-1": { x: 420, y: 140 },
    "skl-7": { x: 420, y: 230 },
    "skl-6": { x: 420, y: 320 },
    "skl-2": { x: 420, y: 410 },
    "skl-3": { x: 420, y: 500 },
    "skl-5": { x: 420, y: 590 },
    "skl-4": { x: 420, y: 680 },

    // Right Column: Occupations (Purple)
    "occ-1": { x: 770, y: 140 },
    "occ-7": { x: 770, y: 230 },
    "occ-5": { x: 770, y: 330 },
    "occ-2": { x: 770, y: 430 },
    "occ-3": { x: 770, y: 530 },
    "occ-6": { x: 770, y: 620 },
    "occ-4": { x: 770, y: 700 }
  }), []);

  // Filter nodes based on cluster
  const filteredNodes = useMemo(() => {
    if (activeCluster === "all") return networkData.nodes;
    return networkData.nodes.filter(n => n.cluster === activeCluster);
  }, [activeCluster]);

  const activeNodeId = hoveredNodeId || selectedNodeId;

  // Connected links & neighbor nodes for the active node
  const connectedLinks = useMemo(() => {
    if (!activeNodeId) return [];
    return networkData.links.filter(
      l => l.source === activeNodeId || l.target === activeNodeId
    );
  }, [activeNodeId]);

  const connectedNodeIds = useMemo(() => {
    if (!activeNodeId) return new Set();
    const set = new Set([activeNodeId]);
    connectedLinks.forEach(l => {
      set.add(l.source);
      set.add(l.target);
    });
    return set;
  }, [activeNodeId, connectedLinks]);

  const selectedNode = networkData.nodes.find(n => n.id === activeNodeId);

  const getNodeColor = (type) => {
    switch (type) {
      case "technology": return "#10b981"; // Emerald
      case "skill": return "#06b6d4";      // Cyan
      case "occupation": return "#a855f7"; // Purple
      default: return "#3b82f6";
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header and Cluster Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
            Occupation-Skill-Technology Knowledge Graph
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Hover or click any node to trace relationships between underlying technologies, canonical skills, and occupational roles.
          </p>
        </div>

        {/* Cluster Filter Buttons */}
        <div style={{ display: 'flex', gap: '6px', background: 'rgba(255, 255, 255, 0.04)', padding: '4px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
          {[
            { id: "all", label: "All Nodes" },
            { id: "software", label: "Software Systems" },
            { id: "ai_data", label: "AI & Data" },
            { id: "cloud", label: "Cloud & DevOps" }
          ].map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCluster(c.id)}
              className="btn btn-sm btn-ghost"
              style={{
                fontSize: '0.76rem',
                padding: '4px 10px',
                background: activeCluster === c.id ? 'rgba(6, 182, 212, 0.2)' : 'transparent',
                color: activeCluster === c.id ? '#fff' : 'var(--text-secondary)',
                border: activeCluster === c.id ? '1px solid var(--accent-cyan)' : 'none'
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Network Legend */}
      <div style={{ display: 'flex', gap: '24px', fontSize: '0.78rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)' }} />
          <span style={{ color: '#fff', fontWeight: 600 }}>Technologies & Tools</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#06b6d4', boxShadow: '0 0 8px rgba(6, 182, 212, 0.6)' }} />
          <span style={{ color: '#fff', fontWeight: 600 }}>Canonical Skills</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#a855f7', boxShadow: '0 0 8px rgba(168, 85, 247, 0.6)' }} />
          <span style={{ color: '#fff', fontWeight: 600 }}>Target Occupations</span>
        </div>
      </div>

      {/* Main Interactive Graph & Inspector Split */}
      <div style={{ display: 'grid', gridTemplateColumns: selectedNode ? '1fr 300px' : '1fr', gap: '18px' }}>
        {/* SVG Graph Canvas */}
        <div
          className="glass-card"
          style={{
            position: 'relative',
            overflow: 'hidden',
            padding: '16px',
            background: 'rgba(9, 13, 22, 0.95)',
            border: '1px solid var(--border-medium)'
          }}
        >
          <svg
            viewBox="0 0 900 780"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          >
            <defs>
              <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
              </linearGradient>
              <filter id="glowEffect" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Render Links */}
            {networkData.links.map((link, idx) => {
              const srcCoord = nodeCoordinates[link.source];
              const tgtCoord = nodeCoordinates[link.target];
              if (!srcCoord || !tgtCoord) return null;

              const isLinkActive = activeNodeId && (link.source === activeNodeId || link.target === activeNodeId);
              const isFaded = activeNodeId && !isLinkActive;

              // Quadratic bezier curve path
              const dx = tgtCoord.x - srcCoord.x;
              const cx1 = srcCoord.x + dx * 0.5;
              const cy1 = srcCoord.y;
              const cx2 = srcCoord.x + dx * 0.5;
              const cy2 = tgtCoord.y;
              const pathD = `M ${srcCoord.x} ${srcCoord.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${tgtCoord.x} ${tgtCoord.y}`;

              return (
                <g key={idx}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isLinkActive ? '#22d3ee' : 'rgba(255, 255, 255, 0.12)'}
                    strokeWidth={isLinkActive ? 2.5 : 1}
                    strokeDasharray={isLinkActive ? 'none' : '4 4'}
                    opacity={isFaded ? 0.08 : 0.8}
                    style={{ transition: 'all 0.25s' }}
                  />
                  {isLinkActive && (
                    <circle r="3" fill="#22d3ee">
                      <animateMotion path={pathD} dur="2.5s" repeatCount="indefinite" />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* Render Nodes */}
            {networkData.nodes.map((node) => {
              const coord = nodeCoordinates[node.id];
              if (!coord) return null;

              const isSelected = selectedNodeId === node.id;
              const isHovered = hoveredNodeId === node.id;
              const isConnected = connectedNodeIds.has(node.id);
              const isFaded = activeNodeId && !isConnected;

              const color = getNodeColor(node.type);
              const radius = node.type === "occupation" ? 18 : node.type === "skill" ? 16 : 14;

              return (
                <g
                  key={node.id}
                  transform={`translate(${coord.x}, ${coord.y})`}
                  style={{ cursor: 'pointer', transition: 'opacity 0.25s' }}
                  opacity={isFaded ? 0.2 : 1}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => setSelectedNodeId(node.id === selectedNodeId ? null : node.id)}
                >
                  {/* Outer pulse when active */}
                  {(isSelected || isHovered) && (
                    <circle
                      r={radius + 8}
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      opacity="0.6"
                      filter="url(#glowEffect)"
                    />
                  )}

                  {/* Main Node Circle */}
                  <circle
                    r={radius}
                    fill="#0d1527"
                    stroke={color}
                    strokeWidth={isSelected || isHovered ? 3 : 2}
                    filter={isSelected || isHovered ? "url(#glowEffect)" : undefined}
                  />

                  {/* Inner Node Dot */}
                  <circle
                    r={radius * 0.45}
                    fill={color}
                    opacity={0.8}
                  />

                  {/* Label Text */}
                  <text
                    x={node.type === "occupation" ? radius + 10 : node.type === "technology" ? -(radius + 10) : 0}
                    y={node.type === "skill" ? -(radius + 8) : 5}
                    textAnchor={node.type === "occupation" ? "start" : node.type === "technology" ? "end" : "middle"}
                    fill={isSelected || isHovered ? '#fff' : '#cbd5e1'}
                    fontSize="11"
                    fontWeight={isSelected || isHovered ? "700" : "500"}
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Node Inspector Side Panel */}
        {selectedNode && (
          <div className="glass-card animate-slide-in" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: `${getNodeColor(selectedNode.type)}22`,
                  color: getNodeColor(selectedNode.type)
                }}>
                  {selectedNode.type}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Cluster: {selectedNode.cluster}
                </span>
              </div>

              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>
                {selectedNode.label}
              </h4>

              {selectedNode.oNet && (
                <div style={{ fontSize: '0.74rem', color: 'var(--accent-cyan)', marginBottom: '8px' }}>
                  O*NET Code: {selectedNode.oNet}
                </div>
              )}
              {selectedNode.canonical && (
                <div style={{ fontSize: '0.74rem', color: 'var(--accent-purple)', marginBottom: '8px' }}>
                  Canonical ID: {selectedNode.canonical}
                </div>
              )}

              {/* Connected Relationships List */}
              <div style={{ marginTop: '16px', borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#fff', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Connected Edges ({connectedLinks.length})
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '320px', overflowY: 'auto' }}>
                  {connectedLinks.map((link, idx) => {
                    const otherNodeId = link.source === selectedNode.id ? link.target : link.source;
                    const otherNode = networkData.nodes.find(n => n.id === otherNodeId);
                    if (!otherNode) return null;

                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedNodeId(otherNode.id)}
                        style={{
                          padding: '8px 10px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-subtle)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff' }}>
                            {otherNode.label}
                          </div>
                          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                            {link.label} • {otherNode.type}
                          </div>
                        </div>
                        <span style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                          {Math.round(link.strength * 100)}%
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {selectedNode.type === "occupation" && onSelectCareer && (
              <div style={{ marginTop: '16px' }}>
                <button
                  onClick={() => onSelectCareer(selectedNode.id.replace('occ-', 'CAR-0'))}
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%' }}
                >
                  <span>Explore Career Profile</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
