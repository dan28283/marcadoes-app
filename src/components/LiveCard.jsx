import { useState, useEffect } from "react";
import { leagues } from "../data/mockData";

/**
 * Live match card — shows animated minute counter, pulsing green dot,
 * and a score that flashes briefly on simulated goals.
 */
export default function LiveCard({ match }) {
  const [minute, setMinute] = useState(match.minute);
  const [flash, setFlash] = useState(false);
  const [prevScore, setPrevScore] = useState(
    `${match.homeScore}-${match.awayScore}`
  );

  const league = leagues.find((l) => l.id === match.league);

  // Animate the minute counter — tick every second
  useEffect(() => {
    const id = setInterval(() => {
      setMinute((m) => (m < 90 ? m + 1 : m));
    }, 60000); // increment every 60s to feel realistic
    return () => clearInterval(id);
  }, []);

  // Flash score when it changes (goal detected on re-render)
  useEffect(() => {
    const currentScore = `${match.homeScore}-${match.awayScore}`;
    if (currentScore !== prevScore) {
      setFlash(true);
      setPrevScore(currentScore);
      const t = setTimeout(() => setFlash(false), 1200);
      return () => clearTimeout(t);
    }
  }, [match.homeScore, match.awayScore, prevScore]);

  // Latest event for "last action" label
  const lastEvent = match.events?.[match.events.length - 1];

  return (
    <div className="match-card match-card--live">
      {/* League badge */}
      <div className="match-card__league">
        <span className="live-dot" />
        <span>{league?.shortName ?? match.league}</span>
        <span className="match-card__minute">{minute}&apos;</span>
        <span className="match-card__half">{match.half}</span>
      </div>

      {/* Scoreboard */}
      <div className="match-card__body">
        <div className="match-card__team match-card__team--home">
          <span className="team-code">{match.home.code}</span>
          <span className="team-name">{match.home.name}</span>
        </div>

        <div className={`match-card__score ${flash ? "score--flash" : ""}`}>
          {match.homeScore} – {match.awayScore}
        </div>

        <div className="match-card__team match-card__team--away">
          <span className="team-code">{match.away.code}</span>
          <span className="team-name">{match.away.name}</span>
        </div>
      </div>

      {/* Last event */}
      {lastEvent && (
        <div className="match-card__event">
          ⚽ {lastEvent.player} {lastEvent.minute}&apos;
        </div>
      )}
    </div>
  );
}
