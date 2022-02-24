import React from "react";
import "./stylesheets/App.css";
import AvatarImg from "./images/avatar.jpg";

const content = [
  {
    section: "PROFILE",
    subs: [
      {
        title: "OBJECTIVE",
        skills: [
          {
            desc: `Gaining valuable experience from practical works. Looking for opportunities to expand my knowledge and skills in programing`,
          },
        ],
      },
      {
        title: "PERSONAL QUALITIES",
        skills: [
          {
            desc: `Sociable, friendly and easy to make friends. Be able to work under pressure and adhere to strict deadlines. Enthusiastic to learn and undertake new challenges.`,
          },
        ],
      },
    ],
  },
  {
    section: "PROFICIENCY AND SKILLS",
    subs: [
      {
        title: "TECHNICAL SKILLS",
        skills: [
          {
            main: "Programming Languages",
            desc: "Python, Javascript, TypeScript, C#, HTML, CSS (SCSS).",
          },
          {
            main: "Frameworks & Libraries",
            desc: "Django, NodeJS, ExpressJs, ASP .NET & ASP .NETCORE, JQuery, ReactJS, Angular",
          },
        ],
      },
      {
        title: "SOFT SKILLS",
        skills: [
          {
            main: "COMMUNICATION",
            desc: "Through the process of learning at university, I have built the necessary communication skills for working flexibly.",
          },
          {
            main: "TEAM WORK",
            desc: "Be able to control and supervise activities of the group. Knowing how to motivate the team to achieve the best performance on work.",
          },
        ],
      },
    ],
  },
  {
    section: "EXPERIENCE AND PROJECTS",
    subs: [
      {
        title: "CAREER DISCOVERY & DEVELOPMENT PLATFORM",
        skills: [
          {
            main: "Main activities",
            desc: "Build a system to aggregate and provide a large number of quality jobs. Build a system for collecting, reviewing, and filtering millions of job listings. Developing a web-application that will connect consultants and job seekers so that they can increase success rates and discover and build a good career path.",
          },
          {
            main: "Python, Django, ReactJS, Data Crawler, Postgres",
            desc: "",
          },
        ],
      },
      {
        title: "ONLINE TUTORING SYSTEM",
        skills: [
          {
            main: "Main activities",
            desc: "Build a system to help students and teachers connect and arrange online learning sessions. Clusters of specific functions such as set up an available class schedule, booking classes, rating teachers, browsing teacher profiles, finding the right classes.",
          },
          {
            main: "NodeJS, ExpressJS, ReactJS, Ant Design, Sequelize ORM, Postgres",
            desc: "",
          },
        ],
      },
      {
        title: "PAYMENT PORTAL FOR A BLOCKCHAIN-BASED PLATFORM",
        skills: [
          {
            main: "Main activities",
            desc: "Build a web-app to serve the needs of fundraising, buying, tracking, referral for crypto projects.",
          },
          {
            main: "NodeJS, NestJS, ReactJS, Chakra UI, TypeORM, Postgres",
            desc: "",
          },
        ],
      },
      {
        title: "NEWS AGGREGATOR SYSTEM",
        skills: [
          {
            main: "Main activities",
            desc: "Build micro services systems to serve projects on aggregating news from many newspapers and magazines. Publish news to video on social platforms. Build a website to publish news aggregated into topics, collections, personalized.",
          },
          {
            main: "NodeJS, ExpressJS, NestJS, HTML, SCSS, JQUERY, MySQL",
            desc: "",
          },
        ],
      },
      {
        title: "SCHOOL MANAGEMENT PORTAL",
        skills: [
          {
            main: "Main activities",
            desc: "Build and scale frontend components for large system to manage student, trainer, lesson, certificate,...",
          },
          {
            main: "HTML, SCSS, JQUERY",
            desc: "",
          },
        ],
      },
      {
        title: "HOTEL BOOKING",
        skills: [
          {
            main: "Main activities",
            desc: "Build backend restful api and frontend components.",
          },
          {
            main: "ASP .NETCORE, ReactJS, Redux-Saga, Ant Design",
            desc: "",
          },
        ],
      },
      {
        title: "NBN & INTERNET MANAGEMENT",
        skills: [
          {
            main: "Main activities",
            desc: "Build backend api to connect and integrate with third party. Build single-page app for user can registration an internet service.",
          },
          {
            main: "ASP .NET, Angular 6",
            desc: "",
          },
        ],
      },
      {
        title: "PORTAL SUPPORT LAZADA, SHOPEE SELLER",
        skills: [
          {
            main: "Main activities",
            desc: "Design and build a backend service connect with Lazada and shoppe api also build an internal api crud the inventory. Build front end single page app have good UX for user.",
          },
          {
            main: "NodeJS, ExpressJS, ReactJs, Redux-Saga, Ant Design",
            desc: "",
          },
        ],
      },
    ],
  },
  {
    section: "EDUCATIONAL",
    subs: [
      {
        title: "SOFTWARE ENGINEERING",
        skills: [
          {
            main: "HO CHI MINH CITY UNIVERSITY OF SCIENCE",
            desc: "The Faculty of Information Technology (FIT)",
          },
        ],
      },
    ],
  },
];

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div style={{ backgroundImage: `url(${AvatarImg})` }} className="avatar_img"></div>
        <div className="author">
          <h1>NGUYỄN QUANG SƠN</h1>
          <div className="job_title">SOFTWARE ENGINEERING</div>
          <div className="contact">
            <div className="contact_item">
              <div className="contact_title">Address.</div>
              <div className="contact_cont">104/9 Nhat Chi Mai st, Tan Binh, Ho Chi Minh City</div>
            </div>
            <div className="contact_item">
              <div className="contact_title">Phone.</div>
              <div className="contact_cont">0378806905</div>
            </div>
            <div className="contact_item">
              <div className="contact_title">Email.</div>
              <div className="contact_cont">qson.ng@gmail.com</div>
            </div>
            <div className="contact_item">
              <div className="contact_title">Facebook.</div>
              <div className="contact_cont">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/quangson.nguyen.399">
                  quangson.nguyen.399
                </a>
              </div>
            </div>
            <div className="contact_item">
              <div className="contact_title">Github.</div>
              <div className="contact_cont">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/KuaqSon">
                  github.com/KuaqSon
                </a>
              </div>
            </div>
            <div className="contact_item">
              <div className="contact_title">Personal website.</div>
              <div className="contact_cont">
                <a target="_blank" rel="noopener noreferrer" href="https://nqson.com/">
                  nqson.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="container footer">Nguyễn Quang Sơn - Updated February 2022</div>;
};

const Main = () => {
  return (
    <div className="main">
      {content.map((c, index) => (
        <div key={index} className="container section">
          <div className="section_title">{c.section}</div>
          <div className="section_cont">
            {c.subs.map((s, sindex) => (
              <div key={sindex} className="subs">
                <div className="subs_title">{s.title}</div>
                <div className="subs_cont">
                  {s.skills.map((i, iindex) => (
                    <div key={iindex} className="skills">
                      {i.main && <div className="skill_main">{i.main}</div>}
                      <div className="skill_desc">{i.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
