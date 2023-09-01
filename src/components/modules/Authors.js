import React from "react";

import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../../graphql/queries";

import { Box, Typography, Grid, Avatar, Divider } from "@mui/material";

import Loader from "../elements/Loader";

function Authors() {
  const { loading, data } = useQuery(GET_AUTHORS);

  return (
    <Box
      component="div"
      bgcolor="white"
      p={2}
      borderRadius={3}
      boxShadow="0 5px 10px rgba(0,0,0,0.1)"
    >
      <Typography component="h3" variant="h5" fontWeight={700} mb={3}>
        نویسنده‌ها
      </Typography>
      {loading ? (
        <Box display="flex" justifyContent="center">
          <Loader width={85} height={85} />
        </Box>
      ) : (
        <Grid container spacing={2}>
          {data.authors.map((item, index) => (
            <>
              <Grid item xs={12}>
                <Link to={`/authors/${item.slug}`}>
                  <Box display="flex" alignItems="center">
                    <Avatar sx={{ marginRight: 1 }} src={item.avatar.url} />
                    <Typography
                      component="h4"
                      variant="h6"
                      fontWeight={700}
                      color="text.secondary"
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Link>
              </Grid>
              {index !== data.authors.length - 1 && (
                <Grid item xs={12}>
                  <Divider variant="middle" />
                </Grid>
              )}
            </>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Authors;
