import React from "react";
import "./App.css";
import { Grommet, Box } from "grommet";

// Component
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function App() {
  const { width, height } = useWindowSize();

  return (
    <Grommet plain>
      <Header />
      <Confetti
        numberOfPieces={40}
        initialVelocityY={100}
        width={width - 32}
        height={height}
        drawShape={ctx => {
          ctx.beginPath();
          for (let i = 0; i < 22; i++) {
            const angle = 0.35 * i;
            const x = (0.2 + 1.5 * angle) * Math.cos(angle);
            const y = (0.2 + 1.5 * angle) * Math.sin(angle);
            ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.closePath();
        }}
      />
      <Box
        width={{ max: "1500px" }}
        margin={{ horizontal: "auto", top: "100px" }}
      >
        <Home />
        <About />
        <Projects />
        <Contact />
      </Box>
      <Footer />
    </Grommet>
  );
}

export default App;
