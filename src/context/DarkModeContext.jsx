import { createContext, useContext, useState, useMemo, useEffect } from "react";

const DarkModeContext = createContext();

const getSystemTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const getInitialMode = () => {
  const saved = localStorage.getItem("theme-mode");
  if (saved === "light" || saved === "dark" || saved === "system") return saved;
  return "system";
};

export function DarkModeProvider({ children }) {
  const [mode, setMode] = useState(getInitialMode);
  const [resolvedMode, setResolvedMode] = useState(() =>
    mode === "system" ? getSystemTheme() : mode
  );

  useEffect(() => {
    if (mode === "system") {
      const update = () => setResolvedMode(getSystemTheme());
      update();
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", update);
      return () =>
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .removeEventListener("change", update);
    } else {
      setResolvedMode(mode);
    }
  }, [mode]);

  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
    );
  };

  const value = useMemo(
    () => ({ mode, setMode, resolvedMode, toggleTheme }),
    [mode, resolvedMode]
  );

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}
