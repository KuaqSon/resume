import React from "react";
import { Box, Anchor } from "grommet";
import SectionTitle from "./SectionTitle";
import Fade from "react-reveal/Fade";
import "../stylesheets/project.css";
import { Github, Send } from "grommet-icons";

const projectsList = [
  {
    date: "06 August 2019",
    name: "Instadolo",
    gitUrl: "https://github.com/KuaqSon/instadolo",
    image_url:
      "https://raw.githubusercontent.com/KuaqSon/instadolo/master/demo_images/instadolo.png",
    demo_url: "https://kuaqson.github.io/instadolo/",
    specs: ["Reactjs", "Instagram", "Html & Css"],
    desc:
      "A small web apps help you download highest resolution versions of images from instagram post.",
    background: "#eef3f7"
  },
  {
    date: "10 September 2019",
    name: "Good Sleep",
    gitUrl: "https://github.com/KuaqSon/good-sleep",
    image_url:
      "https://raw.githubusercontent.com/KuaqSon/good-sleep/master/demo_images/goodsleep.png",
    demo_url: "https://kuaqson.github.io/good-sleep/",
    specs: ["Reactjs", "Datetime picker", "Html & Css"],
    desc:
      "This is a small web app that helps you calculate the time you go to bed and wake up to help you get a good night's sleep that will keep you awake the next day.",
    background: "#141e30"
  },
  {
    date: "09 September 2019",
    name: "Git Checkout",
    gitUrl: "https://github.com/KuaqSon/gcb-extension",
    image_url:
      "https://raw.githubusercontent.com/KuaqSon/gcb-extension/master/screenshots/demo.png",
    demo_url: "https://github.com/KuaqSon/gcb-extension/releases",
    specs: ["Reactjs", "Html & Css", "Chrome extension "],
    desc:
      "An extension version of develoveper-vn/gcb, Help you create git branch name faster and more compatible when working with git flow.",
    background: "#eee"
  }
];

const ProjectItem = ({
  name,
  gitUrl,
  image_url,
  demo_url,
  specs,
  desc,
  background,
  date
}) => (
  <Fade bottom>
    <div className="prj-item">
      <div className="prj-item__container">
        <div className="prj-item__img">
          <img
            src={image_url}
            alt={name}
            style={{ backgroundColor: background }}
          />
        </div>
        <div className="prj-item__content">
          <span className="prj-item__time">{date}</span>
          <div className="prj-item__title">{name}</div>

          <div className="prj-item__desc">{desc}</div>
          <Box gap="small" direction="row" margin={{ vertical: "small" }}>
            {specs &&
              specs.map(s => (
                <div
                  className="prj-item__spec"
                  key={`${s} + ${name}`}
                >{`[${s}]`}</div>
              ))}
          </Box>
          <Box gap="medium" direction="row-responsive">
            <Anchor
              label="Github Repository"
              icon={<Github />}
              href={gitUrl}
              target="_blank"
              color="brand"
            />
            <Anchor
              label="Live Demo"
              icon={<Send />}
              href={demo_url}
              target="_blank"
              color="brand"
            />
          </Box>
        </div>
      </div>
    </div>
  </Fade>
);

function Projects() {
  return (
    <Box height={{ min: "100vh" }} id="projects">
      <div className="container section-container">
        {SectionTitle("Here're some funny projects i've built")}
        <Box gap="medium" margin={{ vertical: "medium" }}>
          {projectsList.map(prj => (
            <ProjectItem
              key={prj.name}
              index={projectsList.indexOf(prj)}
              {...prj}
            />
          ))}
        </Box>
      </div>
    </Box>
  );
}

export default Projects;
