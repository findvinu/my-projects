import React, { useContext } from "react";
import { GitContext } from "../context/fetchApiContextProvider";
import {
  Box,
  Grid,
  Paper,
  ListItem,
  List,
  Divider,
  ListItemText,
  Typography,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Profile = () => {
  const ctx = useContext(GitContext);

  return (
    <Container maxWidth="md" sx={{ pt: 3 }}>
      <Box
        sx={{
          flexGrow: 1,
          padding: "2rem",
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: ".5rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <img
                src={ctx.gitData?.avatar_url}
                alt="phpto"
                style={{ width: "100%" }}
              />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <List>
                <ListItem disablePadding>
                  <ListItemText
                    primary={`Name: ${ctx.gitData?.name}`}
                    sx={{ pt: 1, pb: 1, pr: 1, pl: 2 }}
                  />
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemText
                    primary={`Phone: ${ctx.gitData?.company}`}
                    sx={{ pt: 1, pb: 1, pr: 1, pl: 2 }}
                  />
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemText
                    primary={`Email: ${ctx.gitData?.blog}`}
                    sx={{ pt: 1, pb: 1, pr: 1, pl: 2 }}
                  />
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemText
                    primary={`Github Link: ${ctx.gitData?.html_url}`}
                    sx={{ pt: 1, pb: 1, pr: 1, pl: 2 }}
                  />
                  <Typography sx={{ pt: 1, pb: 1, pr: 1, pl: 2 }}></Typography>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemText
                    primary={`Username: ${ctx.gitData?.login}`}
                    sx={{ pt: 1, pb: 1, pr: 1, pl: 2 }}
                  />
                  <Typography sx={{ pt: 1, pb: 1, pr: 1, pl: 2 }}></Typography>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemText
                    primary={`City: ${ctx.gitData?.location}`}
                    sx={{ pt: 1, pb: 1, pr: 1, pl: 2 }}
                  />
                </ListItem>
              </List>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
