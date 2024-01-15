import React, { useState, useContext } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { NavLink } from "react-router-dom";
import { GitContext } from "../../../context/fetchApiContextProvider";
import CircleIcon from "@mui/icons-material/Circle";
import { links } from "./links";

const NavLinks = () => {
  const [open, setOpen] = useState(false);
  const ctx = useContext(GitContext);

  const handleClick = () => {
    setOpen(!open);
  };

  const renderSubLinks = (subLinks) => (
    <Collapse in={open} timeout="auto" unmountOnExit>
      {subLinks?.map((subLink, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <RadioButtonCheckedIcon />
              </ListItemIcon>
              <NavLink
                to={subLink.link}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                {subLink.linkName}
              </NavLink>
            </ListItemButton>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </Collapse>
  );

  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img
              src={ctx.gitData?.avatar_url}
              alt="phpto"
              style={{ width: "100%" }}
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={ctx.gitData?.name}
          secondary={ctx.gitData?.company}
        />
      </ListItem>
      <Divider />
      {links?.map((link, index) => (
        <React.Fragment key={index}>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText primary={link.linkName} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Divider />
          {renderSubLinks(link.subLinks)}
        </React.Fragment>
      ))}
    </List>
  );
};

export default NavLinks;
