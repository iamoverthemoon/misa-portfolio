import { useEffect, useState } from "react";
import { projects } from "./data/projects";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

// Minimal hash routing: "#/projects/<slug>" opens a case study, any other
// hash (e.g. "#work") is a section anchor on the home page.
function useHash() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return hash;
}

function App() {
  const hash = useHash();
  const slug = hash.match(/^#\/projects\/([\w-]+)/)?.[1];
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (hash.length > 1) {
      // Returning from a case study: scroll to the section once Home has rendered.
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash, project]);

  return (
    <div className="min-h-screen bg-paper text-ink">
      {project ? <ProjectDetail project={project} /> : <Home />}
    </div>
  );
}

export default App;
