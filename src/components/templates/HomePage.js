import React from "react";

import { Grid } from "@mui/material";

import Authors from "../modules/Authors";
import Blogs from "../modules/Blogs";

function HomePage() {
  return (
    <Grid container width="100%" height="100%" spacing={2}>
      <Grid item xs={12} sm={5} md={3}>
        <Authors />
      </Grid>
      <Grid item xs={12} sm={7} md={9} height="100%">
        <Blogs />
      </Grid>
    </Grid>
  );
}

export default HomePage;
