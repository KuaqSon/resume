import React from "react";
import { Box } from "grommet";

function Home() {
  return (
    <Box height={{min: "100vh"}} justify="center">
      <Box animation={{type: "zoomOut", duration: 1000, size: "large"}}>
        <div className="container greeting-container">
          <div className="greeting-sm text-outline">Hello, my name is</div>
          <div className="greeting-main text-outline">Quang Son Nguyen</div>
          <div className="greeting-second text-outline">I'm a web developer</div>
        </div>
      </Box>
    </Box>
  );
}

export default Home;
