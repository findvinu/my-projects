import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export const CardLayout = ({ title, image, description, link }) => {
  return (
    <Card sx={{ minHeight: 330 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <NavLink to={link}>Learn More</NavLink>
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Card;
