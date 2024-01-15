import { Drawer, Box } from "@mui/material";
import NavLinks from "./NavLinks";

const Sidebar = ({ isDrawerOpen, drawerClose }) => {
  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={drawerClose}>
      <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
        <NavLinks />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
