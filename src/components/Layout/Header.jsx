import React, { useState, useEffect, useContext } from "react";
import {
  IconButton,
  AppBar,
  Toolbar,
  Box,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { GitContext } from "../../context/fetchApiContextProvider";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/vinuBytes.png";

const pages = [
  { linkName: "Dashboard", link: "/" },
  { linkName: "About Me", link: "/my-projects/profile" },
  // { linkName: "Projects", link:"" },
];
const settings = [
  { linkName: "React JS", link: "/my-projects/react-projects" },
  { linkName: "Javascript", link: "/my-projects/js-projects" },
  { linkName: "Typescript", link: "/my-projects/ts-projects" },
  { linkName: "Next JS", link: "/my-projects/node-projects" },
  { linkName: "HTML", link: "/my-projects/html-projects" },
];

const Header = ({ drawerOpen }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const ctx = useContext(GitContext);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={drawerOpen}
            sx={{ display: { md: "none", display: "flex" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to={"/my-projects"}>
              <Avatar
                src={Logo}
                alt="logo"
                sx={{ width: "30px", height: "30px" }}
              />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { md: "flex", display: "none" } }}>
            {pages?.map((page) => (
              <NavLink
                key={page.linkName}
                to={page.link}
                className={
                  (({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "",
                  "navLink")
                }
              >
                <Typography textAlign="center">{page.linkName}</Typography>
              </NavLink>
            ))}
            <NavLink
              to="/my-projects/#"
              className="navLink"
              onClick={handleOpenUserMenu}
            >
              <Typography textAlign="center">Projects</Typography>
            </NavLink>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings?.map((setting) => (
                <MenuItem key={setting.linkName} onClick={handleCloseUserMenu}>
                  <NavLink
                    to={setting.link}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <Typography textAlign="center">
                      {setting.linkName}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{ flexGrow: 0, marginLeft: "auto", display: { md: "flex" } }}
          >
            <Box
              sx={{
                mr: 2,
                mt: 1,
                display: { md: "flex", alignItems: "center", display: "none" },
              }}
            >
              {ctx.gitData?.name}
            </Box>
            <IconButton>
              <Avatar alt="My pic" src={ctx.gitData?.avatar_url} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
