import * as React from "react";
import { Grid, Container, Typography } from "@mui/material";
import { CardLayout } from "../components/Card";
import TXT from "../assets/images/txt.png";
import Computronics from "../assets/images/computronics.png";
import Fabhr from "../assets/images/fabhr.png";
import Emailer1 from "../assets/images/TXT-Emailer.png";
import Emailer2 from "../assets/images/emailer2.png";

const cardsData = [
  {
    title: "TXT ELD",
    image: TXT,
    description:
      "TXTE Solutions specializes in providing innovative technology solutions, including software development, digital transformation, and IT consulting services to enhance business.",
    link: "https://www.txtesolutions.com/",
  },
  {
    title: "Computronics",
    image: Computronics,
    description:
      "Computronics provides cutting-edge IT solutions, including software development, hardware services, and tech support, to optimize business operations and drive digital transformation.",
    link: "https://computronics.in/",
  },
  {
    title: "Fabhr",
    image: Fabhr,
    description:
      "FabHR offers a comprehensive HR and payroll management software designed to streamline HR processes, enhance productivity, and automate payroll operations for businesses of all sizes.",
    link: "https://www.fabhr.in/",
  },
];
const HtmlProjects = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" component="h4" mt={3}>
        HTML Projects
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

export default HtmlProjects;
