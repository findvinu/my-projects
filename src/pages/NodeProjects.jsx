import * as React from "react";
import { Grid, Container, Typography } from "@mui/material";
import { CardLayout } from "../components/Card";
import MyPofo from "../assets/images/my-pofo.png";

const cardsData = [
  {
    title: "My Pofo",
    image: MyPofo,
    description:
      "In this React app layout, decompose it into smaller UI components and employ built-in useEffect, useState, and useCallback hooks for managing state and side effects.",
    link: "https://findvinu.github.io/my-pofo/",
    github: "https://github.com/findvinu/emailer2-html",
  },
];
const NodeProjects = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" component="h4" mt={3}>
        Node Projects
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

export default NodeProjects;
