import { useQuery } from "@apollo/client";
import { GET_BLOG_COMMENTS } from "../../graphql/queries";

import { Paper, Typography, Grid, Box, Avatar } from "@mui/material";

const Comments = ({ slug }) => {
  const { data } = useQuery(GET_BLOG_COMMENTS, {
    variables: { slug },
  });

  return (
    <Paper component="div" sx={{ p: 2.5 }} elevation={2}>
      <Typography
        component="h4"
        variant="h5"
        fontWeight={700}
        color="primary"
        mb={2.5}
      >
        نظرات
      </Typography>
      <Grid container spacing={2.5}>
        {data && data.comments.length ? (
          data.comments.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Paper component="div" sx={{ p: 2.5 }} variant="outlined">
                <Box
                  component="div"
                  display="flex"
                  alignItems="center"
                  gap={0.5}
                  mb={1.5}
                >
                  <Avatar>{item.name[0]}</Avatar>
                  <Typography component="span" fontWeight={600}>
                    {item.name}
                  </Typography>
                </Box>
                <Typography component="p" variant="p" fontWeight={500}>
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography
              component="p"
              variant="p"
              fontWeight={500}
              color="white"
              textAlign="center"
              bgcolor="error.main"
              p={1.5}
              borderRadius={1.5}
            >
              به این مقاله نظری داده نشده است
            </Typography>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default Comments;
