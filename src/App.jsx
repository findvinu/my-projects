import React, { useState } from "react";
import { Header, Sidebar } from "./components/Layout";
import { Routing } from "./Routing";
import { Container } from "@mui/material";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerOpenHandler = () => {
    setIsDrawerOpen(true);
  };

  const drawerCloseHandler = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Header drawerOpen={drawerOpenHandler} />
      <Sidebar
        isDrawerOpen={isDrawerOpen}
        drawerOpen={drawerOpenHandler}
        drawerClose={drawerCloseHandler}
      />
      <Container maxWidth={false} sx={{ pt: 3 }}>
        <Container maxWidth="md" sx={{ pt: 3 }}>
          <Routing />
        </Container>
      </Container>
    </>
  );
}

export default App;
