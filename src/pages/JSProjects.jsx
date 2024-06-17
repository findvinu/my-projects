import * as React from "react";
import { Grid, Container, Typography } from "@mui/material";
import { CardLayout } from "../components/Card";
import BMICalculator from "../assets/images/BMI-calculator.png";
import GuessNumber from "../assets/images/guess-number.png";

const cardsData = [
  {
    title: "BMI-calculator",
    image: BMICalculator,
    description:
      "Develop a BMI calculator that allows users to input their height in centimeters and weight in kilograms. The calculator will then compute the BMI (Body Mass Index) based on these inputs and display the result to the user.",
    link: "https://htmlpreview.github.io/?https://github.com/findvinu/BMI-calculator/blob/main/index.html",
  },
  {
    title: "Guess-the-Number",
    image: GuessNumber,
    description:
      "Develop a 'Guess the Number' game where the user enters a random number, and the game checks whether it matches the target number. It then updates the status accordingly, indicating whether the guess was too high, too low, or correct.",
    link: "https://htmlpreview.github.io/?https://github.com/findvinu/JS-Guess-the-Number/blob/main/index.html",
  },
];
const JSProjects = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" component="h4" mt={3}>
        Javascript Projects
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {cardsData.map((cardData) => (
          <Grid item xs={12} sm={6} lg={3} key={cardData.title}>
            <CardLayout
              title={cardData.title}
              image={cardData.image}
              description={cardData.description}
              link={cardData.link}
              innerLink
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JSProjects;
