import * as React from "react";
import { Grid, Container, Typography } from "@mui/material";
import { CardLayout } from "../components/Card";
import ReactImage from "../assets/images/react.jpg";
import JSImage from "../assets/images/js.jpg";
import TSImage from "../assets/images/typescript.png";
import NodeJSImage from "../assets/images/node.jpeg";
import HTMLImage from "../assets/images/HTML5.jpg";
import Wordpress from "../assets/images/WordPress-Logo.png";

const cardsData = [
  {
    title: "React Projects",
    image: ReactImage,
    description:
      "React is a popular JavaScript library for building user interfaces, known for its declarative and component-based approach. React projects often leverage a virtual DOM to efficiently update and render UI components, providing a smooth and responsive user experience.",
    link: "/react-projects",
  },
  {
    title: "Javascript Project",
    image: JSImage,
    description:
      "JavaScript is a versatile programming language that powers dynamic and interactive web applications. Its versatility extends to server-side development with Node.js, making it a full-stack language.",
    link: "/js-projects",
  },
  {
    title: "Typescript Project",
    image: TSImage,
    description:
      "TypeScript is a statically-typed superset of JavaScript that adds optional static typing to the language. This enables developers to catch errors early in the development process and enhances code quality.",
    link: "/ts-projects",
  },
  {
    title: "NodeJs Project",
    image: NodeJSImage,
    description:
      "Node.js is a server-side JavaScript runtime that allows developers to build scalable and high-performance applications. Leveraging the event-driven, non-blocking I/O model, Node.js is well-suited for real-time applications and APIs.",
    link: "/node-projects",
  },
  {
    title: "HTML Layout",
    image: HTMLImage,
    description:
      "HTML is a markup language for creating the structure of web pages. In its simplest form, an HTML document starts with <html> and includes a basic structure with a head (<head>) and a body (<body>).",
    link: "/html-projects",
  },
  {
    title: "Wordpress Website",
    image: Wordpress,
    description:
      "Customized WordPress theme, fixed UI bugs, and maintained CSS for a responsive and visually appealing user interface.",
    link: "/wordpress-projects",
  },
];
const Dashboard = () => {
  return (
    <>
      <Container maxWidth="xl">
        <div className="myProjectText">
          Build a project with React using Vite, react-router, context, Material
          UI. Implement user profile page fetching data from Git API, utilizing
          react createContext, useEffect, useState hooks.
        </div>

        <Typography variant="h4" component="h4" mt={3}>
          Projects
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {cardsData.map((cardData) => (
            <Grid item xs={12} sm={6} lg={4} key={cardData.title}>
              <CardLayout
                title={cardData.title}
                image={cardData.image}
                description={cardData.description}
                link={cardData.link}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
