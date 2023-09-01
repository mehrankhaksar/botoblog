import React from "react";

import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_AUTHOR } from "../../graphql/queries";

import sanitizeHtml from "sanitize-html";

import { Box, Grid, Avatar, Typography } from "@mui/material";

import { toast } from "react-toastify";

import Loader from "../elements/Loader";
import CardElement from "../elements/CardElement";

function AuthorDetailsPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR, {
    variables: { slug },
  });

  React.useEffect(() => {
    if (error !== undefined)
      toast.error("مشکلی رخ داده‌است.", {
        rtl: true,
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }, [error]);

  return (
    <Box
      component="section"
      flex={1}
      bgcolor="white"
      p={2}
      borderRadius={3}
      boxShadow="0 5px 10px rgba(0,0,0,0.1)"
    >
      {loading ? (
        <Box
          component="div"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Loader width={150} height={150} />
        </Box>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box
              component="div"
              display="flex"
              flexDirection="column"
              alignItems="center"
              bgcolor="white"
              p={2}
              borderRadius={3}
              boxShadow="0 5px 10px rgba(0,0,0,0.1)"
            >
              <Box
                component="div"
                mb={1}
                p={0.5}
                border="4px solid"
                borderColor="primary.main"
                borderRadius="100%"
              >
                <Avatar
                  sx={{ width: 200, height: 200 }}
                  src={data.author.avatar.url}
                  alt={data.author.slug}
                />
              </Box>
              <Typography component="h3" variant="h5" fontWeight={700}>
                {data.author.name}
              </Typography>
              <Typography
                component="span"
                variant="p"
                fontWeight={700}
                color="text.secondary"
              >
                {data.author.field}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box
              component="div"
              bgcolor="white"
              p={2}
              borderRadius={3}
              boxShadow="0 5px 10px rgba(0,0,0,0.1)"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data.author.description.html),
              }}
            ></Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="div"
              bgcolor="white"
              p={2}
              borderRadius={3}
              boxShadow="0 5px 10px rgba(0,0,0,0.1)"
            >
              <Typography component="h4" variant="h6" fontWeight={700} mb={2}>
                مقالات {data.author.name}
              </Typography>
              <Grid container spacing={3}>
                {data.author.blogs.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <CardElement {...item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default AuthorDetailsPage;
