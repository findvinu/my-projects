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
    <Card className="cardWrapper">
      <NavLink to={link} className="link">
        <CardActionArea>
          <div className="cardImgWrapper">
            <CardMedia component="img" image={image} alt="green iguana" />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </NavLink>
    </Card>
  );
};

export default Card;
