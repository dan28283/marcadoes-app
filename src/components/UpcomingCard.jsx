import { leagues } from "../data/mockData";

/**
 * Upcoming match card — displays kickoff time and win-probability bar.
 */
export default function UpcomingCard({ match }) {
  const league = leagues.find((l) => l.id === match.league);

  // Format kickoff into a readable local time
  const kickoff = new Date(match.kickoff);
  const timeStr = kickoff.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateStr = kickoff.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const { home: pH, draw: pD, away: pA } = match.probability;

  return (
    <div className="match-card match-card--upcoming">
      {/* League + kickoff */}
      <div className="match-card__league">
        <span>{league?.emoji} {league?.shortName ?? match.league}</span>
        <span className="match-card__kickoff">
          {dateStr} · {timeStr}
        </span>
      </div>

      {/* Teams */}
      <div className="match-card__body">
        <div className="match-card__team match-card__team--home">
          <span className="team-code">{match.home.code}</span>
          <span className="team-name">{match.home.name}</span>
        </div>

        <div className="match-card__vs">VS</div>

        <div className="match-card__team match-card__team--away">
          <span className="team-code">{match.away.code}</span>
          <span className="team-name">{match.away.name}</span>
        </div>
      </div>

      {/* Win probability bar */}
      <div className="probability">
        <div className="probability__bar">
          <div
            className="probability__segment probability__segment--home"
            style={{ width: `${pH}%` }}
          />
          <div
            className="probability__segment probability__segment--draw"
            style={{ width: `${pD}%` }}
          />
          <div
            className="probability__segment probability__segment--away"
            style={{ width: `${pA}%` }}
          />
        </div>
        <div className="probability__labels">
          <span>{match.home.code} {pH}%</span>
          <span>Draw {pD}%</span>
          <span>{match.away.code} {pA}%</span>
        </div>
      </div>
    </div>
  );
}
