import React from "react";

import { useParams, useNavigate } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_BLOG } from "../../graphql/queries";

import sanitizeHtml from "sanitize-html";

import { Box, Grid, Typography, Avatar } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

import { toast } from "react-toastify";

import Loader from "../elements/Loader";
import FormElement from "../elements/FormElement";
import Comments from "../modules/Comments";

function BlogDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_BLOG, {
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
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              component="h3"
              variant="h5"
              fontWeight={800}
              color="primary"
            >
              {data.blog.title}
            </Typography>
            <Box component="span" sx={{ cursor: "pointer" }}>
              <ArrowBackIosNewRoundedIcon onClick={() => navigate(-1)} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="img"
              width="100%"
              height="100%"
              borderRadius={2}
              src={data.blog.cover.url}
              alt={slug}
            />
          </Grid>
          <Grid item xs={12} display="flex" alignItems="center">
            <Avatar
              sx={{ width: 60, height: 60, marginRight: 1 }}
              src={data.blog.author.avatar.url}
              alt={data.blog.author.name}
            />
            <Box component="div">
              <Typography component="h4" variant="h6" fontWeight={700}>
                {data.blog.author.name}
              </Typography>
              <Typography
                component="span"
                variant="p"
                fontWeight={700}
                color="text.secondary"
              >
                {data.blog.author.field}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="div"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data.blog.content.html),
              }}
              fontWeight={500}
              textAlign="justify"
            />
          </Grid>
          <Grid item xs={12}>
            <Comments slug={slug} />
          </Grid>
          <Grid item xs={12}>
            <FormElement slug={slug} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default BlogDetailsPage;
