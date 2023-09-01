import React from "react";

import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "../../graphql/queries";

import { Box, Grid, Typography } from "@mui/material";

import Loader from "../elements/Loader";
import CardElement from "../elements/CardElement";

function Blogs() {
  const { loading, data } = useQuery(GET_BLOGS);

  return (
    <Box
      component="div"
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      bgcolor="white"
      p={2}
      borderRadius={3}
      boxShadow="0 5px 10px rgba(0,0,0,0.1)"
    >
      <Typography component="h3" variant="h5" fontWeight={700} mb={3}>
        مقالات
      </Typography>
      {loading ? (
        <Box
          width="100%"
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Loader width={150} height={150} />
        </Box>
      ) : (
        <Grid container spacing={3} width="100%" flex={1} pb={2}>
          {data.blogs.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <CardElement {...item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Blogs;
