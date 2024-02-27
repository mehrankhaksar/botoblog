import React from "react";

import { useParams, useNavigate } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_BLOG } from "../../graphql/queries";

import sanitizeHtml from "sanitize-html";

import {
  Paper,
  Grid,
  Typography,
  IconButton,
  Box,
  Avatar,
} from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

import { toast } from "react-toastify";

import CustomLoading from "../elements/CustomLoading";
import Comments from "../modules/Comments";
import CustomForm from "../elements/CustomForm";

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_BLOG, {
    variables: { slug },
  });

  React.useEffect(() => {
    if (error !== undefined) {
      toast.error("مشکلی در سرور رخ داده‌است", {
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
      navigate(-1);
    }
  }, [error]);

  return (
    <Paper component="section" sx={{ height: "100%", p: 2.5 }} elevation={0}>
      {loading ? (
        <CustomLoading width={100} height={100} />
      ) : (
        <Grid container spacing={2.5}>
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
            <IconButton>
              <ArrowBackIosNewRoundedIcon onClick={() => navigate(-1)} />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="img"
              width="100%"
              height="100%"
              borderRadius={2.5}
              src={data.blog.cover.url}
              alt={slug}
            />
          </Grid>
          <Grid item display="flex" alignItems="center" gap={1.5}>
            <Avatar
              sx={{ width: 75, height: 75 }}
              src={data.blog.author.avatar.url}
              alt={data.blog.author.name}
            />
            <Box component="div">
              <Typography component="h4" variant="h6" fontWeight={800}>
                {data.blog.author.name}
              </Typography>
              <Typography
                component="span"
                fontWeight={700}
                color="text.secondary"
              >
                {data.blog.author.field}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component="p"
              variant="p"
              fontWeight={500}
              textAlign="justify"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data.blog.content.html),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Comments slug={slug} />
          </Grid>
          <Grid item xs={12}>
            <CustomForm slug={slug} />
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default BlogDetailsPage;
