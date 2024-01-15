import * as React from "react";
import Profile from "./Profile";
import { Grid, Container, Typography } from "@mui/material";
import { CardLayout } from "../components/Card";
import ReactImage from "../assets/images/react.jpg";
import JSImage from "../assets/images/js.jpg";
import TSImage from "../assets/images/typescript.png";
import NodeJSImage from "../assets/images/node.jpeg";
import HTMLImage from "../assets/images/HTML5.jpg";

const cardsData = [
  {
    title: "React Projects",
    image: ReactImage,
    description:
      "React is a popular JavaScript library for building user interfaces, known for its declarative and component-based approach. React projects often leverage a virtual DOM to efficiently update and render UI components, providing a smooth and responsive user experience.",
    link: "https://findvinu.github.io/dukaan-app/",
  },
  {
    title: "Javascript Project",
    image: JSImage,
    description:
      "JavaScript is a versatile programming language that powers dynamic and interactive web applications. Its versatility extends to server-side development with Node.js, making it a full-stack language.",
    link: "",
  },
  {
    title: "Typescript Project",
    image: TSImage,
    description:
      "TypeScript is a statically-typed superset of JavaScript that adds optional static typing to the language. This enables developers to catch errors early in the development process and enhances code quality.",
    link: "https://findvinu.github.io/typescript-todo/",
  },
  {
    title: "NodeJs Project",
    image: NodeJSImage,
    description:
      "Node.js is a server-side JavaScript runtime that allows developers to build scalable and high-performance applications. Leveraging the event-driven, non-blocking I/O model, Node.js is well-suited for real-time applications and APIs.",
    link: "",
  },
  {
    title: "HTML Layout",
    image: HTMLImage,
    description:
      "HTML is a markup language for creating the structure of web pages. In its simplest form, an HTML document starts with <html> and includes a basic structure with a head (<head>) and a body (<body>).",
    link: "https://htmlpreview.github.io/?https://github.com/findvinu/html_assignment/blob/main/index.html",
  },
];
const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" component="h4" mt={5}>
        Top Projects
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {cardsData.map((cardData) => (
          <Grid item xs={4}>
            <CardLayout
              title={cardData.title}
              image={cardData.image}
              description={cardData.description}
              link={cardData.link}
            />
          </Grid>
        ))}
      </Grid>
      {/*   <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={4}>
          <CardLayout />
        </Grid>
        <Grid item xs={4}>
          <CardLayout />
        </Grid>
        <Grid item xs={4}>
          <CardLayout />
        </Grid>
      </Grid> */}
    </Container>
  );
};

export default Dashboard;
