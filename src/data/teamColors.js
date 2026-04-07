/**
 * Team colors for badge rendering.
 * Maps team code → { bg, text } for the circular badge.
 */
const teamColors = {
  // Champions League / Multi-league teams
  RMA: { bg: "#ffffff", text: "#1a1a2e" },
  BAR: { bg: "#a50044", text: "#ffffff" },
  MCI: { bg: "#6cabdd", text: "#1c2c5b" },
  LIV: { bg: "#c8102e", text: "#ffffff" },
  ARS: { bg: "#ef0107", text: "#ffffff" },
  CHE: { bg: "#034694", text: "#ffffff" },
  MUN: { bg: "#da291c", text: "#ffffff" },
  TOT: { bg: "#132257", text: "#ffffff" },
  NEW: { bg: "#241f20", text: "#ffffff" },
  AVL: { bg: "#670e36", text: "#95bfe5" },

  // La Liga
  ATM: { bg: "#cb3524", text: "#ffffff" },
  SEV: { bg: "#d40e2a", text: "#ffffff" },
  RSO: { bg: "#143c8b", text: "#ffffff" },
  BET: { bg: "#00954c", text: "#ffffff" },
  VAL: { bg: "#ee3524", text: "#ffffff" },
  VIL: { bg: "#fde607", text: "#005295" },

  // Bundesliga
  BAY: { bg: "#dc052d", text: "#ffffff" },
  BVB: { bg: "#fde100", text: "#000000" },
  RBL: { bg: "#dd0741", text: "#ffffff" },
  B04: { bg: "#e32221", text: "#000000" },
  WOB: { bg: "#65b32e", text: "#ffffff" },

  // Serie A
  INT: { bg: "#010e80", text: "#ffffff" },
  ACM: { bg: "#fb090b", text: "#000000" },
  JUV: { bg: "#000000", text: "#ffffff" },
  NAP: { bg: "#12a0d7", text: "#ffffff" },
  ROM: { bg: "#8e1f2f", text: "#f0bc42" },

  // Ligue 1
  PSG: { bg: "#004170", text: "#ffffff" },
  OM:  { bg: "#2faee0", text: "#ffffff" },
  OL:  { bg: "#1b4f9b", text: "#ffffff" },
  LIL: { bg: "#e2001a", text: "#ffffff" },
  MON: { bg: "#e7192e", text: "#ffffff" },

  // Liga MX
  AME: { bg: "#fecb07", text: "#1a3461" },
  CHV: { bg: "#e4002b", text: "#ffffff" },
  TIG: { bg: "#fdb913", text: "#003da5" },
  MTY: { bg: "#003da5", text: "#ffffff" },
  CAZ: { bg: "#0055a5", text: "#ffffff" },
  PUM: { bg: "#1a2857", text: "#c5a126" },

  // Eredivisie
  AJX: { bg: "#d2122e", text: "#ffffff" },
  PSV: { bg: "#ee1c25", text: "#ffffff" },
  FEY: { bg: "#ee1b2d", text: "#ffffff" },
  AZ:  { bg: "#e40613", text: "#ffffff" },

  // Liga Portugal
  SLB: { bg: "#e2001a", text: "#ffffff" },
  FCP: { bg: "#003f87", text: "#ffffff" },
  SCP: { bg: "#00843d", text: "#ffffff" },
  SCB: { bg: "#212121", text: "#ffffff" },

  // MLS
  LAF: { bg: "#000000", text: "#c39e6d" },
  INT2: { bg: "#f7b5cd", text: "#231f20" },
  ATL: { bg: "#80000a", text: "#a19060" },
  SEA: { bg: "#5d9741", text: "#ffffff" },

  // Copa Libertadores
  BOC: { bg: "#003b7a", text: "#f7d117" },
  RIV: { bg: "#e41e2b", text: "#ffffff" },
  FLA: { bg: "#e82e35", text: "#000000" },
  PAL: { bg: "#006437", text: "#ffffff" },
};

/** Fallback for unknown teams */
const defaultColor = { bg: "#333344", text: "#ffffff" };

export function getTeamColor(code) {
  return teamColors[code] || defaultColor;
}

export default teamColors;
