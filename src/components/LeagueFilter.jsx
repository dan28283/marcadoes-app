import { useRef, useEffect } from "react";
import { leagues } from "../data/mockData";

/**
 * Horizontal scrollable league filter pills.
 * "All" is always the first option; tapping a pill filters matches by league.
 */
export default function LeagueFilter({ selected, onSelect }) {
  const scrollRef = useRef(null);

  // Scroll the active pill into view when selection changes
  useEffect(() => {
    const active = scrollRef.current?.querySelector("[data-active='true']");
    if (active) {
      active.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [selected]);

  return (
    <div className="league-filter" ref={scrollRef}>
      {/* "All" pill */}
      <button
        className={`pill ${selected === "all" ? "pill--active" : ""}`}
        data-active={selected === "all"}
        onClick={() => onSelect("all")}
      >
        ⚽ All
      </button>

      {leagues.map((league) => (
        <button
          key={league.id}
          className={`pill ${selected === league.id ? "pill--active" : ""}`}
          data-active={selected === league.id}
          onClick={() => onSelect(league.id)}
        >
          {league.emoji} {league.shortName}
        </button>
      ))}
    </div>
  );
}
