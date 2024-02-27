import { Grid } from "@mui/material";

import Authors from "../modules/Authors";
import Blogs from "../modules/Blogs";

const HomePage = () => {
  return (
    <Grid component="section" container height="100%" spacing={2.5}>
      <Grid item xs={12} sm={5} md={3}>
        <Authors />
      </Grid>
      <Grid item xs={12} sm={7} md={9}>
        <Blogs />
      </Grid>
    </Grid>
  );
};

export default HomePage;
