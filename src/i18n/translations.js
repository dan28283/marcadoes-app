/**
 * Translations for MARCADORES — Spanish and English.
 * Add keys here when new UI text is needed.
 */
const translations = {
  es: {
    // Header
    appName: "MARCADORES",
    subtitle: "Resultados de Fútbol en Vivo",

    // Tabs
    live: "En Vivo",
    upcoming: "Próximos",
    results: "Resultados",
    standings: "Posiciones",
    scorers: "Goleadores",

    // Filters
    all: "Todos",
    myTeams: "Mis Equipos",

    // Empty states
    noLive: "No hay partidos en vivo ahora",
    noUpcoming: "No hay próximos partidos",
    noResults: "No hay resultados aún",
    noFavorites: "No tienes equipos favoritos. Toca la ★ para agregar.",
    noSearchResults: "No se encontraron resultados",

    // Match detail
    matchDetail: "Detalle del Partido",
    lineup: "Alineación",
    stats: "Estadísticas",
    timeline: "Cronología",
    possession: "Posesión",
    shots: "Tiros",
    shotsOnTarget: "Tiros al arco",
    corners: "Córners",
    fouls: "Faltas",
    yellowCards: "Tarjetas amarillas",
    redCards: "Tarjetas rojas",
    offsides: "Fueras de juego",

    // Standings
    team: "Equipo",
    played: "PJ",
    won: "PG",
    drawn: "PE",
    lost: "PP",
    goalsFor: "GF",
    goalsAgainst: "GC",
    goalDiff: "DG",
    points: "PTS",

    // Top Scorers
    player: "Jugador",
    goals: "Goles",
    assists: "Asist.",
    matches: "PJ",

    // Misc
    lastUpdated: "Última actualización",
    refresh: "Actualizar",
    search: "Buscar equipos o partidos...",
    goal: "GOL",
    fullTime: "FT",
    halfTime: "HT",
    vs: "VS",
    back: "Volver",
    lightMode: "Modo claro",
    darkMode: "Modo oscuro",
    language: "EN",
    odds: "Cuotas",
    loading: "Cargando partidos…",
    pullToRefresh: "Arrastra para actualizar",
    release: "Suelta para actualizar",
    refreshing: "Actualizando…",
  },
  en: {
    appName: "MARCADORES",
    subtitle: "Live Football Scores",

    live: "Live",
    upcoming: "Upcoming",
    results: "Results",
    standings: "Standings",
    scorers: "Scorers",

    all: "All",
    myTeams: "My Teams",

    noLive: "No live matches right now",
    noUpcoming: "No upcoming matches",
    noResults: "No results yet",
    noFavorites: "No favorite teams yet. Tap ★ to add.",
    noSearchResults: "No results found",

    matchDetail: "Match Detail",
    lineup: "Lineup",
    stats: "Statistics",
    timeline: "Timeline",
    possession: "Possession",
    shots: "Shots",
    shotsOnTarget: "Shots on target",
    corners: "Corners",
    fouls: "Fouls",
    yellowCards: "Yellow cards",
    redCards: "Red cards",
    offsides: "Offsides",

    team: "Team",
    played: "MP",
    won: "W",
    drawn: "D",
    lost: "L",
    goalsFor: "GF",
    goalsAgainst: "GA",
    goalDiff: "GD",
    points: "PTS",

    player: "Player",
    goals: "Goals",
    assists: "Assists",
    matches: "MP",

    lastUpdated: "Last updated",
    refresh: "Refresh",
    search: "Search teams or matches...",
    goal: "GOAL",
    fullTime: "FT",
    halfTime: "HT",
    vs: "VS",
    back: "Back",
    lightMode: "Light mode",
    darkMode: "Dark mode",
    language: "ES",
    odds: "Odds",
    loading: "Loading matches…",
    pullToRefresh: "Pull to refresh",
    release: "Release to refresh",
    refreshing: "Refreshing…",
  },
};

/**
 * Returns the translation function for the given language code.
 */
export function t(lang, key) {
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}

export default translations;
