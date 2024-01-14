import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../../graphql/queries";

import { Paper, Typography, Grid } from "@mui/material";

import CustomLoading from "../elements/CustomLoading";
import CustomCard from "../elements/CustomCard";

const Blogs = () => {
  const { loading, data } = useQuery(GET_BLOGS);

  return (
    <Paper component="div" sx={{ height: "100%", p: 2.5 }} elevation={0}>
      <Typography component="h3" variant="h5" fontWeight={700} mb={2.5}>
        مقالات
      </Typography>
      {loading ? (
        <CustomLoading width={100} height={100} />
      ) : (
        <Grid container spacing={2.5}>
          {data.blogs.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <CustomCard {...item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Paper>
  );
};

export default Blogs;
