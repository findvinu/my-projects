import * as React from "react";
import { Grid, Container, Typography } from "@mui/material";
import { CardLayout } from "../components/Card";
import Todo from "../assets/images/todo.png";

const cardsData = [
  {
    title: "Todo",
    image: Todo,
    description:
      "In this React app layout, decompose it into smaller UI components and employ built-in useEffect, useState, and useCallback hooks for managing state and side effects.",
    link: "https://findvinu.github.io/typescript-todo/",
    github: "https://github.com/findvinu/typescript-todo",
  },
];
const TSProjects = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" component="h4" mt={3}>
        Typescript Projects
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {cardsData.map((cardData) => (
          <Grid item xs={12} sm={6} lg={3} key={cardData.title}>
            <CardLayout
              title={cardData.title}
              image={cardData.image}
              description={cardData.description}
              link={cardData.link}
              github={cardData.github}
              innerLink
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TSProjects;
