import React from "react";

import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../../graphql/queries";

import {
  Paper,
  Typography,
  Grid,
  Button,
  Avatar,
  Divider,
} from "@mui/material";

import CustomLoading from "../elements/CustomLoading";

const Authors = () => {
  const { loading, data } = useQuery(GET_AUTHORS);

  return (
    <Paper component="div" sx={{ p: 2.5 }} elevation={0}>
      <Typography component="h3" variant="h5" fontWeight={700} mb={2.5}>
        نویسنده‌ها
      </Typography>
      {loading ? (
        <CustomLoading width={50} height={50} />
      ) : (
        <Grid container spacing={2.5}>
          {data.authors.map((item, index) => (
            <React.Fragment key={item.id}>
              <Grid item xs={12}>
                <Link to={`/authors/${item.slug}`}>
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                    fullWidth
                    type="button"
                  >
                    <Avatar src={item.avatar.url} alt={item.name} />
                    <Typography
                      component="h4"
                      fontWeight={800}
                      color="text.secondary"
                    >
                      {item.name}
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              {data.authors.length - 1 !== index && (
                <Grid item xs={12}>
                  <Divider variant="middle" />
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>
      )}
    </Paper>
  );
};

export default Authors;
