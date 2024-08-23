import * as React from "react";
import { Grid, Container, Typography } from "@mui/material";
import { CardLayout } from "../components/Card";
import HtmlLayout from "../assets/images/html_layout.png";
import BeautyLyout from "../assets/images/beauty-lyout.png";
import TXTPlanLayout from "../assets/images/TXT-plan-layout.png";
import Emailer1 from "../assets/images/TXT-Emailer.png";
import Emailer2 from "../assets/images/emailer2.png";

const cardsData = [
  {
    title: "Hubilo HTML Assignment",
    image: HtmlLayout,
    description:
      "Design a perfect HTML/CSS assignment layout with precision. Ensure the email template is responsive for all devices, including mobiles.",
    link: "https://findvinu.github.io/html_assignment/",
    github: "https://github.com/findvinu/html_assignment",
  },
  {
    title: "TXT Basic Plan Layout",
    image: TXTPlanLayout,
    description:
      "Design the 'TXT Basic Plan' layout for Truck X Talent. Make the email template responsive for all devices, including mobiles.",
    link: "https://findvinu.github.io/txt_buy_now/plan_basic.html",
    github: "https://github.com/findvinu/txt_buy_now",
  },
  {
    title: "Beauty Landing Page Layout",
    image: BeautyLyout,
    description:
      "Craft a Mumbai-based beauty company landing page for .NET. Ensure email template responsiveness across all devices, including mobiles.",
    link: "https://findvinu.github.io/beauty_landing_page_layout/",
    github: "https://github.com/findvinu/beauty_landing_page_layout",
  },
  {
    title: "Emailer-1",
    image: Emailer1,
    description:
      "Create a 640px-wide email template for Truck X Talent. Ensure responsiveness across all devices, including mobiles.",
    link: "https://findvinu.github.io/emailer1-html/",
    github: "https://github.com/findvinu/emailer1-html",
  },
  {
    title: "Emailer-2",
    image: Emailer2,
    description:
      "Craft a 640px-wide email template for Truck X Talent, ensuring compatibility with Outlook, Gmail, and Yahoo. Also, ensure responsiveness across all devices, including mobiles.",
    link: "https://findvinu.github.io/emailer2-html/emailer-16.html",
    github: "https://github.com/findvinu/emailer2-html",
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
