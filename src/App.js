import React from "react";
import "./stylesheets/App.css";
import { Grommet, Box } from "grommet";

// Component
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HomeImage from "./components/HomeImage";

//Theme
import { customTheme } from "./theme";

function App() {
  return (
    <Grommet plain theme={customTheme}>
      <Header />
      <HomeImage />
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
