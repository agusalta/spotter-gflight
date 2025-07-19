import Navbar from "./components/Navbar/Navbar";
import "./styles/App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";
import { getTheme } from "./utils/theme";
import Hero from "./components/Hero/Hero";

function AppContent() {
  const { resolvedMode } = useDarkMode();
  const theme = getTheme(resolvedMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main className="main-content">
        <Hero/>
      </main>
    </ThemeProvider>
  )
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;
