import { useState, useEffect, useCallback } from "react";
import { fetchMatches } from "./data/mockData";
import LeagueFilter from "./components/LeagueFilter";
import LiveCard from "./components/LiveCard";
import UpcomingCard from "./components/UpcomingCard";
import ResultCard from "./components/ResultCard";

/* ── Tabs configuration ────────────────────────────────────────────── */
const TABS = [
  { id: "live", label: "Live" },
  { id: "upcoming", label: "Upcoming" },
  { id: "results", label: "Results" },
];

const REFRESH_INTERVAL = 30_000; // 30 seconds

/* ═══════════════════════════════════════════════════════════════════ */
export default function App() {
  const [tab, setTab] = useState("live");
  const [league, setLeague] = useState("all");
  const [data, setData] = useState({ live: [], upcoming: [], finished: [] });
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch (or re-fetch) match data
  const loadData = useCallback(async () => {
    const result = await fetchMatches();
    setData(result);
    setLastUpdated(new Date());
    setLoading(false);
  }, []);

  // Initial load + auto-refresh every 30s
  useEffect(() => {
    loadData();
    const id = setInterval(loadData, REFRESH_INTERVAL);
    return () => clearInterval(id);
  }, [loadData]);

  // Filter matches by selected league
  const filterByLeague = (matches) =>
    league === "all" ? matches : matches.filter((m) => m.league === league);

  const liveFiltered = filterByLeague(data.live);
  const upcomingFiltered = filterByLeague(data.upcoming);
  const finishedFiltered = filterByLeague(data.finished);

  // Formatted timestamp
  const timeStamp = lastUpdated
    ? lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    : "—";

  return (
    <div className="app">
      {/* ── Sticky Header ──────────────────────────────────────────── */}
      <header className="header">
        <h1 className="header__title">MARCADORES</h1>
        <p className="header__subtitle">Live Football Scores</p>
      </header>

      {/* ── League Filter Pills ────────────────────────────────────── */}
      <LeagueFilter selected={league} onSelect={setLeague} />

      {/* ── Tab Bar ────────────────────────────────────────────────── */}
      <nav className="tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`tabs__btn ${tab === t.id ? "tabs__btn--active" : ""}`}
            onClick={() => setTab(t.id)}
          >
            {t.id === "live" && <span className="live-dot live-dot--tab" />}
            {t.label}
            {t.id === "live" && liveFiltered.length > 0 && (
              <span className="tabs__count">{liveFiltered.length}</span>
            )}
          </button>
        ))}
      </nav>

      {/* ── Content ────────────────────────────────────────────────── */}
      <main className="content">
        {loading ? (
          <div className="empty">Loading matches…</div>
        ) : (
          <>
            {/* Live Tab */}
            {tab === "live" && (
              <section className="tab-panel">
                {liveFiltered.length === 0 ? (
                  <div className="empty">No live matches right now</div>
                ) : (
                  liveFiltered.map((m) => <LiveCard key={m.id} match={m} />)
                )}
              </section>
            )}

            {/* Upcoming Tab */}
            {tab === "upcoming" && (
              <section className="tab-panel">
                {upcomingFiltered.length === 0 ? (
                  <div className="empty">No upcoming matches</div>
                ) : (
                  upcomingFiltered.map((m) => <UpcomingCard key={m.id} match={m} />)
                )}
              </section>
            )}

            {/* Results Tab */}
            {tab === "results" && (
              <section className="tab-panel">
                {finishedFiltered.length === 0 ? (
                  <div className="empty">No results yet</div>
                ) : (
                  finishedFiltered.map((m) => <ResultCard key={m.id} match={m} />)
                )}
              </section>
            )}
          </>
        )}
      </main>

      {/* ── Footer / Last updated ──────────────────────────────────── */}
      <footer className="footer">
        <span>Last updated: {timeStamp}</span>
        <span className="footer__refresh" onClick={loadData}>↻ Refresh</span>
      </footer>
    </div>
  );
}
