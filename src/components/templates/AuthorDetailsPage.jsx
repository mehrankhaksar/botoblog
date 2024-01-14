import React from "react";

import { useParams, useNavigate } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_AUTHOR } from "../../graphql/queries";

import sanitizeHtml from "sanitize-html";

import {
  Paper,
  IconButton,
  Grid,
  Box,
  Avatar,
  Typography,
} from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

import { toast } from "react-toastify";

import CustomLoading from "../elements/CustomLoading";
import CustomCard from "../elements/CustomCard";

const AuthorDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_AUTHOR, {
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
    <Paper
      component="section"
      sx={{ height: "100%", position: "relative", p: 2.5 }}
      elevation={0}
    >
      <IconButton sx={{ position: "absolute", top: 10, right: 10 }}>
        <ArrowBackIosNewRoundedIcon onClick={() => navigate(-1)} />
      </IconButton>
      {loading ? (
        <CustomLoading width={100} height={100} />
      ) : (
        <Grid container justifyContent="center" spacing={2.5}>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              component="div"
              display="inline-block"
              mb={1.5}
              p={0.5}
              border="4px solid"
              borderColor="primary.main"
              borderRadius="100%"
            >
              <Avatar
                sx={{ width: 150, height: 150 }}
                src={data.author.avatar.url}
                alt={data.author.name}
              />
            </Box>
            <Typography component="h3" variant="h5" fontWeight={800}>
              {data.author.name}
            </Typography>
            <Typography
              component="span"
              fontWeight={700}
              color="text.secondary"
            >
              {data.author.field}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography
              component="p"
              variant="p"
              fontWeight={500}
              textAlign="justify"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data.author.description.html),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography component="h4" variant="h6" fontWeight={800} mb={2.5}>
              مقالات {data.author.name}
            </Typography>
            <Grid container spacing={2.5}>
              {data.author.blogs.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <CustomCard {...item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default AuthorDetailsPage;
