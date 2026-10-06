import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const myReactProjects = [
  {
    title: "Conference expense planner",
    description: `The web page was developed as the final project for the Coursera course "Front-End Application Development with React." 
    It is a plant shop that allows users to select plants and view a shopping cart showing the total cost and details of the selected items.
    The web page was deployed on GitHub.`,
    getImageSrc: () => require("../images/conference_expense_planner.jpg"),
    tag: "React · JavaScript",
    url: "https://mklocampo.github.io/conference_event_planner/"
  },
  {
    title: "E-plants shopping",
    description: `Was built as the final project for the Coursera course "Front-End Application Development with React." 
    It is a plant-purchasing app that allows users to select plants and view a shopping cart displaying the total cost and details of the selected items. 
    The web page was deployed on GitHub.`,
    getImageSrc: () => require("../images/e-plants_shopping.jpg"),
    tag: "React · JavaScript",
    url: "https://mklocampo.github.io/e-plantShopping/"
  },
  {
    title: "Gift link",
    description: `This web page was created as part of the assessment for the "IBM Full-Stack JavaScript Developer Professional Certificate" specialization. 
    It manages a list of donated items and offers advanced search functionality to view item details—accessible only to users logged into the system. 
    It also supports user registration, with data stored in a MongoDB database. 
    The initial loading of the information takes some time, as it is hosted for free.
    The application's database is hosted on MongoDB Atlas, and the backend is deployed via Render, linked to GitHub.`,
    getImageSrc: () => require("../images/giftlink.jpg"),
    tag: "React · JavaScript",
    url: "https://mklocampo.github.io/giftlink-frontend/home.html"
  }
];

const myAngularProjects = [
  {
    title: "Cocktails",
    description: `Built during the course "Learn Angular Routing by building a Cocktails Application". 
    An application for learning how to configure routes to protect against unauthorized access.
    The web page was deployed on GitHub.`,
    getImageSrc: () => require("../images/cocktails-app.jpg"),
    tag: "Angular · JavaScript",
    url: "https://mklocampo.github.io/angular-cocktails-app/home"
  },
  {
    title: "Firebase authentication",
    description: `This web page was built as the final project for the course "Firebase Authentication: Build Secure Angular Apps". 
    Implementation of user registration and login forms using various authentication methods, such as username/password or external providers like Google.
    The web page was deployed on GitHub.`,
    getImageSrc: () => require("../images/authFirebase.jpg"),
    tag: "Angular · JavaScript",
    url: "https://mklocampo.github.io/angular-authFirebase/home"
  },
  
];

const myJavascriptProjects = [
  {
    title: "Portfolio",
    description: `It was created during the "Introduction to HTML, CSS, & JavaScript" course to work on the construction and design of a website and showcase various elements.
    The web page was deployed on GitHub.`,
    getImageSrc: () => require("../images/portfolio.jpg"),
    tag: "JavaScript",
    url: "https://mklocampo.github.io/Portfolio/"
  },
  {
    title: "Travel recommendation",
    description: `A website created as the final project for the "JavaScript Programming Essentials" course; 
    It is a travel agency site that allows users to search by beaches, temples, or countries, displaying information sourced from an array.
    The web page was deployed on GitHub.`,
    getImageSrc: () => require("../images/travelRecommendation.jpg"),
    tag: "JavaScript",
    url: "https://mklocampo.github.io/travelRecommendation/"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection id="projects-section"
      isDarkBackground
      backgroundColor="#0f172a"
      p={8}
      alignItems="center"
      spacing={4}
    >
      <Heading as="h1" color="#00DFD8" >
        React Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(1, minmax(0, 1fr))", md: "repeat(3, minmax(0, 1fr))" }}
        gridGap={8}
        pb="8"
      >
        {myReactProjects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            tag={project.tag}
            url={project.url}
          />
        ))}
      </Box>
      <Heading as="h1" color="#00DFD8" >
        Angular Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(1, minmax(0, 1fr))", md: "repeat(2, minmax(0, 1fr))" }}
        gridGap={8}
        pb="8"
      >
        {myAngularProjects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            tag={project.tag}
            url={project.url}
          />
        ))}
      </Box>
      <Heading as="h1" color="#00DFD8" >
        Javascript Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(1, minmax(0, 1fr))", md: "repeat(2, minmax(0, 1fr))" }}
        gridGap={8}
      >
        {myJavascriptProjects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            tag={project.tag}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
