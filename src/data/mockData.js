/**
 * Mock data for MARCADORES — structured to mirror a real API response.
 * Each match has: id, league, home/away teams, scores, status, minute, kickoff, and probabilities.
 * Swap this file for an API adapter when connecting to a live data source.
 */

// ─── League definitions ──────────────────────────────────────────────
export const leagues = [
  { id: "ucl", name: "Champions League", shortName: "UCL", emoji: "🏆" },
  { id: "laliga", name: "La Liga", shortName: "LaLiga", emoji: "🇪🇸" },
  { id: "epl", name: "Premier League", shortName: "EPL", emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { id: "bundesliga", name: "Bundesliga", shortName: "BUN", emoji: "🇩🇪" },
  { id: "seriea", name: "Serie A", shortName: "SerA", emoji: "🇮🇹" },
  { id: "ligue1", name: "Ligue 1", shortName: "L1", emoji: "🇫🇷" },
  { id: "ligamx", name: "Liga MX", shortName: "LMX", emoji: "🇲🇽" },
];

// ─── Match statuses ──────────────────────────────────────────────────
// "live" | "upcoming" | "finished"

// ─── Live matches ────────────────────────────────────────────────────
export const liveMatches = [
  {
    id: "live-1",
    league: "ucl",
    home: { name: "Real Madrid", code: "RMA" },
    away: { name: "Man City", code: "MCI" },
    homeScore: 2,
    awayScore: 1,
    status: "live",
    minute: 67,
    half: "2H",
    events: [
      { type: "goal", team: "home", player: "Vinícius Jr.", minute: 12 },
      { type: "goal", team: "away", player: "Haaland", minute: 34 },
      { type: "goal", team: "home", player: "Bellingham", minute: 58 },
    ],
  },
  {
    id: "live-2",
    league: "epl",
    home: { name: "Arsenal", code: "ARS" },
    away: { name: "Liverpool", code: "LIV" },
    homeScore: 1,
    awayScore: 1,
    status: "live",
    minute: 42,
    half: "1H",
    events: [
      { type: "goal", team: "home", player: "Saka", minute: 18 },
      { type: "goal", team: "away", player: "Salah", minute: 31 },
    ],
  },
  {
    id: "live-3",
    league: "laliga",
    home: { name: "Barcelona", code: "BAR" },
    away: { name: "Atl. Madrid", code: "ATM" },
    homeScore: 3,
    awayScore: 0,
    status: "live",
    minute: 78,
    half: "2H",
    events: [
      { type: "goal", team: "home", player: "Lamine Yamal", minute: 15 },
      { type: "goal", team: "home", player: "Lewandowski", minute: 44 },
      { type: "goal", team: "home", player: "Raphinha", minute: 72 },
    ],
  },
  {
    id: "live-4",
    league: "bundesliga",
    home: { name: "Bayern Munich", code: "BAY" },
    away: { name: "Dortmund", code: "BVB" },
    homeScore: 1,
    awayScore: 2,
    status: "live",
    minute: 55,
    half: "2H",
    events: [
      { type: "goal", team: "away", player: "Adeyemi", minute: 10 },
      { type: "goal", team: "home", player: "Musiala", minute: 28 },
      { type: "goal", team: "away", player: "Brandt", minute: 51 },
    ],
  },
  {
    id: "live-5",
    league: "seriea",
    home: { name: "Inter Milan", code: "INT" },
    away: { name: "AC Milan", code: "ACM" },
    homeScore: 0,
    awayScore: 0,
    status: "live",
    minute: 23,
    half: "1H",
    events: [],
  },
  {
    id: "live-6",
    league: "ligue1",
    home: { name: "PSG", code: "PSG" },
    away: { name: "Marseille", code: "OM" },
    homeScore: 2,
    awayScore: 1,
    status: "live",
    minute: 88,
    half: "2H",
    events: [
      { type: "goal", team: "home", player: "Dembélé", minute: 22 },
      { type: "goal", team: "away", player: "Greenwood", minute: 56 },
      { type: "goal", team: "home", player: "Barcola", minute: 79 },
    ],
  },
  {
    id: "live-7",
    league: "ligamx",
    home: { name: "Club América", code: "AME" },
    away: { name: "Chivas", code: "CHV" },
    homeScore: 1,
    awayScore: 1,
    status: "live",
    minute: 36,
    half: "1H",
    events: [
      { type: "goal", team: "home", player: "Henry Martín", minute: 14 },
      { type: "goal", team: "away", player: "Chicharito", minute: 29 },
    ],
  },
];

// ─── Upcoming matches ────────────────────────────────────────────────
export const upcomingMatches = [
  {
    id: "up-1",
    league: "ucl",
    home: { name: "PSG", code: "PSG" },
    away: { name: "Bayern Munich", code: "BAY" },
    status: "upcoming",
    kickoff: "2026-04-08T20:00:00Z",
    probability: { home: 35, draw: 25, away: 40 },
  },
  {
    id: "up-2",
    league: "ucl",
    home: { name: "Inter Milan", code: "INT" },
    away: { name: "Barcelona", code: "BAR" },
    status: "upcoming",
    kickoff: "2026-04-08T20:00:00Z",
    probability: { home: 30, draw: 28, away: 42 },
  },
  {
    id: "up-3",
    league: "epl",
    home: { name: "Man United", code: "MUN" },
    away: { name: "Chelsea", code: "CHE" },
    status: "upcoming",
    kickoff: "2026-04-08T17:30:00Z",
    probability: { home: 38, draw: 30, away: 32 },
  },
  {
    id: "up-4",
    league: "laliga",
    home: { name: "Real Sociedad", code: "RSO" },
    away: { name: "Sevilla", code: "SEV" },
    status: "upcoming",
    kickoff: "2026-04-08T19:00:00Z",
    probability: { home: 45, draw: 28, away: 27 },
  },
  {
    id: "up-5",
    league: "bundesliga",
    home: { name: "RB Leipzig", code: "RBL" },
    away: { name: "Leverkusen", code: "B04" },
    status: "upcoming",
    kickoff: "2026-04-09T18:30:00Z",
    probability: { home: 32, draw: 26, away: 42 },
  },
  {
    id: "up-6",
    league: "seriea",
    home: { name: "Juventus", code: "JUV" },
    away: { name: "Napoli", code: "NAP" },
    status: "upcoming",
    kickoff: "2026-04-09T19:45:00Z",
    probability: { home: 40, draw: 30, away: 30 },
  },
  {
    id: "up-7",
    league: "ligue1",
    home: { name: "Monaco", code: "MON" },
    away: { name: "Lyon", code: "OL" },
    status: "upcoming",
    kickoff: "2026-04-09T20:00:00Z",
    probability: { home: 48, draw: 25, away: 27 },
  },
  {
    id: "up-8",
    league: "ligamx",
    home: { name: "Tigres", code: "TIG" },
    away: { name: "Monterrey", code: "MTY" },
    status: "upcoming",
    kickoff: "2026-04-08T02:00:00Z",
    probability: { home: 44, draw: 26, away: 30 },
  },
  {
    id: "up-9",
    league: "epl",
    home: { name: "Tottenham", code: "TOT" },
    away: { name: "Newcastle", code: "NEW" },
    status: "upcoming",
    kickoff: "2026-04-09T15:00:00Z",
    probability: { home: 36, draw: 28, away: 36 },
  },
];

// ─── Finished matches (last 7 days) ─────────────────────────────────
export const finishedMatches = [
  {
    id: "fin-1",
    league: "ucl",
    home: { name: "Real Madrid", code: "RMA" },
    away: { name: "Arsenal", code: "ARS" },
    homeScore: 3,
    awayScore: 2,
    status: "finished",
    date: "2026-04-06",
    events: [
      { type: "goal", team: "home", player: "Vinícius Jr.", minute: 11 },
      { type: "goal", team: "away", player: "Saka", minute: 25 },
      { type: "goal", team: "home", player: "Bellingham", minute: 53 },
      { type: "goal", team: "away", player: "Havertz", minute: 67 },
      { type: "goal", team: "home", player: "Mbappé", minute: 89 },
    ],
  },
  {
    id: "fin-2",
    league: "epl",
    home: { name: "Liverpool", code: "LIV" },
    away: { name: "Man City", code: "MCI" },
    homeScore: 2,
    awayScore: 0,
    status: "finished",
    date: "2026-04-05",
    events: [
      { type: "goal", team: "home", player: "Salah", minute: 38 },
      { type: "goal", team: "home", player: "Díaz", minute: 74 },
    ],
  },
  {
    id: "fin-3",
    league: "laliga",
    home: { name: "Atl. Madrid", code: "ATM" },
    away: { name: "Real Betis", code: "BET" },
    homeScore: 1,
    awayScore: 0,
    status: "finished",
    date: "2026-04-05",
    events: [
      { type: "goal", team: "home", player: "Griezmann", minute: 62 },
    ],
  },
  {
    id: "fin-4",
    league: "bundesliga",
    home: { name: "Leverkusen", code: "B04" },
    away: { name: "Wolfsburg", code: "WOB" },
    homeScore: 4,
    awayScore: 1,
    status: "finished",
    date: "2026-04-04",
    events: [
      { type: "goal", team: "home", player: "Wirtz", minute: 7 },
      { type: "goal", team: "home", player: "Schick", minute: 29 },
      { type: "goal", team: "away", player: "Wind", minute: 41 },
      { type: "goal", team: "home", player: "Wirtz", minute: 56 },
      { type: "goal", team: "home", player: "Grimaldo", minute: 78 },
    ],
  },
  {
    id: "fin-5",
    league: "seriea",
    home: { name: "Napoli", code: "NAP" },
    away: { name: "Roma", code: "ROM" },
    homeScore: 2,
    awayScore: 2,
    status: "finished",
    date: "2026-04-04",
    events: [
      { type: "goal", team: "home", player: "Osimhen", minute: 15 },
      { type: "goal", team: "away", player: "Dybala", minute: 33 },
      { type: "goal", team: "home", player: "Kvara", minute: 60 },
      { type: "goal", team: "away", player: "Lukaku", minute: 85 },
    ],
  },
  {
    id: "fin-6",
    league: "ligue1",
    home: { name: "Lyon", code: "OL" },
    away: { name: "Lille", code: "LIL" },
    homeScore: 0,
    awayScore: 1,
    status: "finished",
    date: "2026-04-03",
    events: [
      { type: "goal", team: "away", player: "David", minute: 72 },
    ],
  },
  {
    id: "fin-7",
    league: "ligamx",
    home: { name: "Cruz Azul", code: "CAZ" },
    away: { name: "Pumas", code: "PUM" },
    homeScore: 3,
    awayScore: 1,
    status: "finished",
    date: "2026-04-03",
    events: [
      { type: "goal", team: "home", player: "Giménez", minute: 20 },
      { type: "goal", team: "away", player: "Dinenno", minute: 44 },
      { type: "goal", team: "home", player: "Rodríguez", minute: 58 },
      { type: "goal", team: "home", player: "Giménez", minute: 81 },
    ],
  },
  {
    id: "fin-8",
    league: "epl",
    home: { name: "Chelsea", code: "CHE" },
    away: { name: "Aston Villa", code: "AVL" },
    homeScore: 1,
    awayScore: 3,
    status: "finished",
    date: "2026-04-02",
    events: [
      { type: "goal", team: "away", player: "Watkins", minute: 12 },
      { type: "goal", team: "home", player: "Palmer", minute: 37 },
      { type: "goal", team: "away", player: "Rogers", minute: 64 },
      { type: "goal", team: "away", player: "Watkins", minute: 88 },
    ],
  },
  {
    id: "fin-9",
    league: "laliga",
    home: { name: "Valencia", code: "VAL" },
    away: { name: "Villarreal", code: "VIL" },
    homeScore: 2,
    awayScore: 2,
    status: "finished",
    date: "2026-04-01",
    events: [
      { type: "goal", team: "away", player: "Gerard Moreno", minute: 5 },
      { type: "goal", team: "home", player: "Hugo Duro", minute: 30 },
      { type: "goal", team: "away", player: "Pino", minute: 55 },
      { type: "goal", team: "home", player: "Hugo Duro", minute: 90 },
    ],
  },
  {
    id: "fin-10",
    league: "ucl",
    home: { name: "Dortmund", code: "BVB" },
    away: { name: "Atl. Madrid", code: "ATM" },
    homeScore: 4,
    awayScore: 2,
    status: "finished",
    date: "2026-04-01",
    events: [
      { type: "goal", team: "home", player: "Adeyemi", minute: 8 },
      { type: "goal", team: "home", player: "Brandt", minute: 23 },
      { type: "goal", team: "away", player: "Griezmann", minute: 36 },
      { type: "goal", team: "home", player: "Füllkrug", minute: 59 },
      { type: "goal", team: "away", player: "Morata", minute: 71 },
      { type: "goal", team: "home", player: "Sancho", minute: 82 },
    ],
  },
];

/**
 * Simulates an API fetch — returns all matches grouped by status.
 * Replace this function with a real API call when ready.
 */
export function fetchMatches() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        live: liveMatches,
        upcoming: upcomingMatches,
        finished: finishedMatches,
        lastUpdated: new Date().toISOString(),
      });
    }, 300); // simulate network latency
  });
}
