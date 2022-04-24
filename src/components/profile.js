import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import app_config from "../config";

const Profile = () => {
  const url = app_config.api_url;

  return (
    <Container>
      <Card>
        <CardContent>
          <Box component="div" sx={{ height: 200, display: "flex" }}>
            <img src={url + "/images/ada.jpg"} alt="Ada" />
            <Typography variant="h3"></Typography>
          </Box>

          <form className="mt-5">
            <Grid container spacing={10} className="mt-4 w-100">
              <Grid item md={6} xs={12}>
                <TextField label="Name" variant="outlined" />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField label="Name" variant="outlined" />
              </Grid>
            </Grid>
            <Grid container spacing={10} className="mt-4 w-100">
              <Grid item md={6} xs={12}>
                <TextField label="Name" variant="outlined" />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField label="Name" variant="outlined" />
              </Grid>
            </Grid>
            <Grid container spacing={10} className="mt-4 w-100">
              <Grid item md={6} xs={12}>
                <TextField label="Name" variant="outlined" />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField label="Name" variant="outlined" />
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
