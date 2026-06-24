import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 moonwalker-bg">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <footer className="relative z-10 py-8 px-6 text-center border-t border-white/10">
          <p className="text-secondary text-[15px]">
            This is the archive — where I began. My current work and live
            projects are at{" "}
            <a
              href="https://uditraj.site"
              target="_blank"
              rel="noopener"
              className="text-french-rose-500 font-semibold hover:underline"
            >
              Udit Raj's portfolio &amp; workshop (uditraj.site)
            </a>
            .
          </p>
          <p className="text-secondary/60 text-[13px] mt-2">
            © Udit Raj · Built with React &amp; Three.js
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
