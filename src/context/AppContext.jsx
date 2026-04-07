import { createContext, useContext, useState, useEffect, useCallback } from "react";

const AppContext = createContext(null);

/**
 * Global state provider — manages favorites, theme, language, and match data.
 * Persists user preferences in localStorage.
 */
export function AppProvider({ children }) {
  // ── Theme (dark / light) ──────────────────────────────────────────
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("marcadores-theme") || "dark"
  );

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      localStorage.setItem("marcadores-theme", next);
      return next;
    });
  }, []);

  // Apply theme class to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // ── Language (es / en) ────────────────────────────────────────────
  const [lang, setLang] = useState(() =>
    localStorage.getItem("marcadores-lang") || "es"
  );

  const toggleLang = useCallback(() => {
    setLang((l) => {
      const next = l === "es" ? "en" : "es";
      localStorage.setItem("marcadores-lang", next);
      return next;
    });
  }, []);

  // ── Favorites (set of team codes) ─────────────────────────────────
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("marcadores-favorites");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const toggleFavorite = useCallback((teamCode) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(teamCode)) {
        next.delete(teamCode);
      } else {
        next.add(teamCode);
      }
      localStorage.setItem("marcadores-favorites", JSON.stringify([...next]));
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (teamCode) => favorites.has(teamCode),
    [favorites]
  );

  // ── Goal notification state ───────────────────────────────────────
  const [goalAlert, setGoalAlert] = useState(null);

  const showGoalAlert = useCallback((data) => {
    setGoalAlert(data);
    // Vibrate if supported
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200]);
    }
    setTimeout(() => setGoalAlert(null), 4000);
  }, []);

  const value = {
    theme,
    toggleTheme,
    lang,
    toggleLang,
    favorites,
    toggleFavorite,
    isFavorite,
    goalAlert,
    showGoalAlert,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
