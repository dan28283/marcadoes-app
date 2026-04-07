import { leagues } from "../data/mockData";

/**
 * Result card for finished matches — shows final score,
 * date, and goal scorers.
 */
export default function ResultCard({ match }) {
  const league = leagues.find((l) => l.id === match.league);

  // Determine the winner for visual emphasis
  const winner =
    match.homeScore > match.awayScore
      ? "home"
      : match.awayScore > match.homeScore
      ? "away"
      : "draw";

  // Format the match date
  const dateStr = new Date(match.date + "T00:00:00").toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="match-card match-card--result">
      {/* League + date */}
      <div className="match-card__league">
        <span>{league?.emoji} {league?.shortName ?? match.league}</span>
        <span className="match-card__date">FT · {dateStr}</span>
      </div>

      {/* Scoreboard */}
      <div className="match-card__body">
        <div className={`match-card__team match-card__team--home ${winner === "home" ? "team--winner" : ""}`}>
          <span className="team-code">{match.home.code}</span>
          <span className="team-name">{match.home.name}</span>
        </div>

        <div className="match-card__score match-card__score--final">
          {match.homeScore} – {match.awayScore}
        </div>

        <div className={`match-card__team match-card__team--away ${winner === "away" ? "team--winner" : ""}`}>
          <span className="team-code">{match.away.code}</span>
          <span className="team-name">{match.away.name}</span>
        </div>
      </div>

      {/* Goal scorers summary */}
      {match.events && match.events.length > 0 && (
        <div className="match-card__scorers">
          {match.events.map((evt, i) => (
            <span key={i} className="scorer">
              ⚽ {evt.player} {evt.minute}&apos;
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
