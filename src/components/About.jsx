import React from "react";
import { Box, Text } from "grommet";
import SectionTitle from "./SectionTitle";
import Fade from "react-reveal/Fade";
import {
  Html5,
  Reactjs,
  Node,
  Diamond,
  Shield,
  SettingsOption,
  Windows,
  Css3
} from "grommet-icons";
import ImageCard from "./ImageCard";

function About() {
  return (
    <Box height={{ min: "100vh" }} id="about">
      <div className="container section-container">
        {SectionTitle("A little bit about me")}
        <Box
          direction="row-responsive"
          align="start"
          gap="large"
          justify="between"
        >
          <Box>
            <Fade bottom>
              <Box width={{ max: "768px" }}>
                <Text>
                  Hello! I'm Quang Son, a web developer based in Ho Chi Minh,
                  Viet Name who enjoys building things that live on the
                  internet. I develop exceptional websites and web apps that
                  provide intuitive, pixel-perfect user interfaces with
                  efficient and modern backends.
                </Text>
              </Box>
            </Fade>
            <Fade bottom>
              <Box pad={{ vertical: "medium" }}>
                <Text>
                  Here's a few technologies I've been working with recently:
                </Text>
                <div className="tech-types">
                  <Box width={{ min: "220px" }} pad={{ vertical: "small" }}>
                    <Box
                      direction="row"
                      gap="small"
                      pad={{ vertical: "xsmall" }}
                    >
                      <Html5 /> Javascript
                    </Box>
                    <Box
                      direction="row"
                      gap="small"
                      pad={{ vertical: "xsmall" }}
                    >
                      <Css3 /> HTML & CSS
                    </Box>
                    <Box
                      direction="row"
                      gap="small"
                      pad={{ vertical: "xsmall" }}
                    >
                      <Reactjs /> ReactJs
                    </Box>
                    <Box
                      direction="row"
                      gap="small"
                      pad={{ vertical: "xsmall" }}
                    >
                      <Shield /> Angular
                    </Box>
                  </Box>
                  <Box width={{ min: "220px" }} pad={{ vertical: "small" }}>
                    <Box
                      direction="row"
                      gap="small"
                      pad={{ vertical: "xsmall" }}
                    >
                      <Windows /> ASP.NET & ASP.NET Core
                    </Box>
                    <Box
                      direction="row"
                      gap="small"
                      pad={{ vertical: "xsmall" }}
                    >
                      <Node /> NodeJs
                    </Box>
                    <Box
                      direction="row"
                      gap="small"
                      pad={{ vertical: "xsmall" }}
                    >
                      <SettingsOption /> ExpressJs
                    </Box>
                    <Box
                      direction="row"
                      gap="small"
                      pad={{ vertical: "xsmall" }}
                    >
                      <Diamond /> Ruby on Rails
                    </Box>
                  </Box>
                </div>
              </Box>
            </Fade>
          </Box>
          <Fade right>
            <ImageCard />
          </Fade>
        </Box>
      </div>
    </Box>
  );
}

export default About;
