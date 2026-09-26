import React from 'react';
import { CheckCircle2, Clock, Sparkles, Database, Globe, Network } from 'lucide-react';

export const ResearchBadge = ({ type, text, size = "md" }) => {
  const sizeClasses = size === "sm" ? "text-xs py-0.5 px-2" : "text-xs py-1 px-2.5";

  switch (type) {
    case "completed":
      return (
        <span className={`badge badge-completed ${sizeClasses}`}>
          <CheckCircle2 size={12} className="text-emerald-400" />
          <span>{text || "Completed Research"}</span>
        </span>
      );
    case "current":
      return (
        <span className={`badge badge-current ${sizeClasses}`}>
          <Sparkles size={12} className="text-cyan-400 animate-spin-slow" />
          <span>{text || "Current Research"}</span>
        </span>
      );
    case "planned":
      return (
        <span className={`badge badge-planned ${sizeClasses}`}>
          <Clock size={12} className="text-purple-400" />
          <span>{text || "Planned Component"}</span>
        </span>
      );
    case "onet":
      return (
        <span className={`badge badge-onet ${sizeClasses}`}>
          <Database size={11} className="text-blue-400" />
          <span>O*NET {text ? `• ${text}` : ""}</span>
        </span>
      );
    case "esco":
      return (
        <span className={`badge badge-esco ${sizeClasses}`}>
          <Globe size={11} className="text-amber-400" />
          <span>ESCO {text ? `• ${text}` : ""}</span>
        </span>
      );
    case "canonical":
      return (
        <span className={`badge badge-canonical ${sizeClasses}`}>
          <Network size={11} className="text-purple-400" />
          <span>Canonical {text ? `• ${text}` : ""}</span>
        </span>
      );
    default:
      return (
        <span className={`badge badge-current ${sizeClasses}`}>
          <span>{text}</span>
        </span>
      );
  }
};
