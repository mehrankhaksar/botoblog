import React from "react";

import { useQuery } from "@apollo/client";
import { GET_BLOG_COMMENTS } from "../../graphql/queries";

import { Avatar, Box, Grid, Typography } from "@mui/material";

function Comments({ slug }) {
  const { data } = useQuery(GET_BLOG_COMMENTS, {
    variables: { slug },
  });

  return (
    <Box
      component="div"
      flex={1}
      bgcolor="white"
      p={2}
      borderRadius={3}
      boxShadow="0 5px 10px rgba(0,0,0,0.1)"
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            component="h4"
            variant="h5"
            fontWeight={700}
            color="primary"
          >
            نظرات
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {data && data.comments.length ? (
              data.comments.map((item) => (
                <Grid item xs={12} key={item.id}>
                  <Box
                    component="div"
                    p={2}
                    border="2px solid"
                    borderColor="grey.400"
                    borderRadius={2}
                  >
                    <Box
                      component="div"
                      display="flex"
                      alignItems="center"
                      mb={1}
                    >
                      <Avatar sx={{ marginRight: 0.5 }}>{item.name[0]}</Avatar>
                      <Typography component="span">{item.name}</Typography>
                    </Box>
                    <Typography fontWeight={500}>{item.text}</Typography>
                  </Box>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography
                  component="h3"
                  variant="h5"
                  color="white"
                  textAlign="center"
                  bgcolor="error.main"
                  p={1.5}
                  borderRadius={1.5}
                >
                  به این مقاله نظری داده نشده‌است
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Comments;
