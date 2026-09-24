import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

const defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Kanban: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M6 5v11" /><path d="M12 5v6" /><path d="M18 5v14" />
  </svg>
);

export const Table: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M12 3v18" /><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" />
  </svg>
);

export const Workflow: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <rect width="8" height="8" x="3" y="3" rx="2" /><path d="M7 11v4a2 2 0 0 0 2 2h4" /><rect width="8" height="8" x="13" y="13" rx="2" />
  </svg>
);

export const MessageSquare: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const MessageSquareText: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 9h8" /><path d="M8 13h6" />
  </svg>
);

export const BarChart3: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
  </svg>
);

export const BarChart: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" />
  </svg>
);

export const ChevronLeft: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export const ChevronRight: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const ChevronDown: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ShieldCheck: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ShieldAlert: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="M12 8v4" /><path d="M12 16h.01" />
  </svg>
);

export const Zap: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const Plus: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M5 12h14" /><path d="M12 5v14" />
  </svg>
);

export const Search: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

export const Download: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export const Clock: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

export const SlidersHorizontal: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <line x1="21" x2="14" y1="4" y2="4" /><line x1="10" x2="3" y1="4" y2="4" /><line x1="21" x2="12" y1="12" y2="12" />
    <line x1="8" x2="3" y1="12" y2="12" /><line x1="21" x2="16" y1="20" y2="20" /><line x1="12" x2="3" y1="20" y2="20" />
    <line x1="14" x2="14" y1="2" y2="6" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="16" x2="16" y1="18" y2="22" />
  </svg>
);

export const Sliders: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <line x1="4" x2="4" y1="21" y2="14" /><line x1="4" x2="4" y1="10" y2="3" /><line x1="12" x2="12" y1="21" y2="12" />
    <line x1="12" x2="12" y1="8" y2="3" /><line x1="20" x2="20" y1="21" y2="16" /><line x1="20" x2="20" y1="12" y2="3" />
    <line x1="1" x2="7" y1="14" y2="14" /><line x1="9" x2="15" y1="8" y2="8" /><line x1="17" x2="23" y1="16" y2="16" />
  </svg>
);

export const Flame: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);

export const ArrowRight: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

export const ArrowDown: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <line x1="12" x2="12" y1="5" y2="19" /><polyline points="19 12 12 19 5 12" />
  </svg>
);

export const ArrowUpRight: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
  </svg>
);

export const ArrowUpDown: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="m21 16-4 4-4-4" /><path d="M17 20V4" /><path d="m3 8 4-4 4 4" /><path d="M7 4v16" />
  </svg>
);

export const ArrowUp: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="m5 12 7-7 7 7" /><path d="M12 19V5" />
  </svg>
);


export const ExternalLink: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

export const Sparkles: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
  </svg>
);

export const Filter: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

export const CheckCircle: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
  </svg>
);

export const CheckCircle2: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
  </svg>
);

export const AlertCircle: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

export const AlertTriangle: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" x2="12" y1="9" y2="13" /><line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
);

export const Info: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
  </svg>
);

export const Check: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Play: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <polygon points="6 3 20 12 6 21 6 3" />
  </svg>
);

export const RotateCcw: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

export const Mail: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const Phone: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const PhoneCall: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M14.05 2a9 9 0 0 1 8 7.94" /><path d="M14.05 6A5 5 0 0 1 18 10" />
  </svg>
);

export const Calendar: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

export const CalendarCheck: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
    <path d="m9 16 2 2 4-4" />
  </svg>
);

export const TrendingUp: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
  </svg>
);

export const DollarSign: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export const Users: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const User: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

export const RefreshCw: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </svg>
);


export const Bot: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <rect width="18" height="12" x="3" y="6" rx="2" /><path d="M9 12h.01" /><path d="M15 12h.01" /><path d="M12 2v4" />
  </svg>
);

export const Cpu: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" />
    <path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
  </svg>
);


export const Terminal: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" />
  </svg>
);

export const Settings: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const CheckSquare: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

export const Square: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
  </svg>
);

export const X: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
);

export const Building2: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" />
  </svg>
);

export const Globe: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
  </svg>
);

export const Save: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" /><path d="M7 3v4a1 1 0 0 0 1 1h7" />
  </svg>
);

export const Send: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
  </svg>
);

export const Layers: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
);

export const History: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export const Stethoscope: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

export const Dumbbell: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="m6.5 6.5 11 11" /><path d="m21 21-1-1" /><path d="m3 3 1 1" />
    <path d="m18 22 4-4" /><path d="m2 6 4-4" />
    <path d="m3 10 7-7" /><path d="m14 21 7-7" />
  </svg>
);

export const GraduationCap: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
    <path d="M22 10v6" />
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
  </svg>
);

export const CheckCheck: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M18 6 7 17l-5-5" /><path d="m22 10-7.5 7.5L13 16" />
  </svg>
);

export const FileSpreadsheet: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M8 13h2" /><path d="M14 13h2" /><path d="M8 17h2" /><path d="M14 17h2" />
  </svg>
);

export const Activity: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

export const Award: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...defaultProps} className={className} {...props}>
    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);


