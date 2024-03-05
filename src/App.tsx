import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
