import React, { useContext } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  Divider,
  IconButton,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import CloseIcon from "@mui/icons-material/Close";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { NavLink } from "react-router-dom";
import { GitContext } from "../../../context/fetchApiContextProvider";
import { links } from "./links";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
    "&.Mui-expanded": {
      "& .listHead": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        "& span": {
          fontWeight: "bold",
        },
      },
    },
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  padding: theme.spacing(0),
  "&.MuiAccordionSummary-root": {
    width: "100%",
    backgroundColor: "transparent",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    margin: theme.spacing(0),
  },
  "& .MuiAccordionSummary-content": {
    margin: theme.spacing(0),
    paddingLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  padding: theme.spacing(0),
  "& li": {
    "& .MuiListItemButton-root": {
      padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
    },

    "& a": {
      color: "#333",
      textDecoration: "none",
    },
  },
}));

const NavLinks = ({ drawerClose }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const ctx = useContext(GitContext);

  return (
    <>
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
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={drawerClose}
          >
            <CloseIcon />
          </IconButton>
        </ListItem>
        <Divider />

        {links?.map((link, index) => (
          <Accordion
            expanded={expanded === link.id}
            onChange={handleChange(link.id)}
          >
            <ListItemButton className="listHead">
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <ListItemText primary={link.linkName} />
                <Divider />
              </AccordionSummary>
            </ListItemButton>
            <AccordionDetails className="subLinks">
              {link.subLinks?.map((subLink, index) => (
                <React.Fragment key={index}>
                  <ListItem disablePadding>
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
            </AccordionDetails>
          </Accordion>
        ))}
      </List>
    </>
  );
};

export default NavLinks;
