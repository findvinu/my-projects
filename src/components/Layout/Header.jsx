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
import Logo from "../../assets/images/logo.png";

const pages = [
  { linkName: "Dashboard", link: "/my-projects" },
  { linkName: "Profile", link: "/profile" },
];
const settings = [
  { linkName: "Dashboard", link: "/my-projects" },
  { linkName: "Profile", link: "/profile" },
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
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to={"/my-projects"}>
              <Avatar src={Logo} alt="logo" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages?.map((page) => (
              <NavLink
                key={page.linkName}
                to={page.link}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                sx={{ p: 2 }}
              >
                <Typography textAlign="center">{page.linkName}</Typography>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={ctx.gitData?.avatar_url} />
              </IconButton>
            </Tooltip>
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
            <Box sx={{ ml: 2, mt: 1 }}>{ctx.gitData?.name}</Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
