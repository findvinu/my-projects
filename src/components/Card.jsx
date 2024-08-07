import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { NavLink, Link } from "react-router-dom";

export const CardLayout = ({
  title,
  image,
  description,
  link,
  innerLink,
  github,
}) => {
  return (
    <Card className="cardWrapper">
      {innerLink ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <CardActionArea>
            <div className="cardImgWrapper">
              <CardMedia component="img" image={image} alt={title} />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ marginBottom: "10px" }}
              >
                {description}
              </Typography>
              {github && (
                <Link
                  className="link"
                  to="https://github.com/findvinu/dashboad-assignment"
                  target="_blank"
                >
                  https://github.com/findvinu/dashboad-assignment
                </Link>
              )}
            </CardContent>
          </CardActionArea>
        </a>
      ) : (
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
      )}
    </Card>
  );
};

export default Card;
