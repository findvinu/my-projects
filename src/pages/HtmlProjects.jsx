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
    link: "https://htmlpreview.github.io/?https://github.com/findvinu/html_assignment/blob/main/index.html",
  },
  {
    title: "TXT Basic Plan Layout",
    image: TXTPlanLayout,
    description:
      "Design the 'TXT Basic Plan' layout for Truck X Talent. Make the email template responsive for all devices, including mobiles.",
    link: "https://htmlpreview.github.io/?https://github.com/findvinu/txt_buy_now/blob/main/plan_basic.html",
  },
  {
    title: "Beauty Landing Page Layout",
    image: BeautyLyout,
    description:
      "Craft a Mumbai-based beauty company landing page for .NET. Ensure email template responsiveness across all devices, including mobiles.",
    link: "https://htmlpreview.github.io/?https://github.com/findvinu/beauty_landing_page_layout/blob/main/index.html",
  },
  {
    title: "Emailer-1",
    image: Emailer1,
    description:
      "Create a 640px-wide email template for Truck X Talent. Ensure responsiveness across all devices, including mobiles.",
    link: "https://htmlpreview.github.io/?https://github.com/findvinu/emailer1-html/blob/main/index.html",
  },
  {
    title: "Emailer-2",
    image: Emailer2,
    description:
      "Craft a 640px-wide email template for Truck X Talent, ensuring compatibility with Outlook, Gmail, and Yahoo. Also, ensure responsiveness across all devices, including mobiles.",
    link: "https://htmlpreview.github.io/?https://github.com/findvinu/emailer2-html/blob/main/emailer-16.html",
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
              innerLink
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HtmlProjects;
