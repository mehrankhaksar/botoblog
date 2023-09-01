import React from "react";

import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  CardMedia,
  CardContent,
  Divider,
  CardActions,
  Button,
} from "@mui/material";

function CardElement({ author, cover, title, slug }) {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: "0 5px 10px rgba(0,0,0,0.1)" }}>
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} />}
          title={
            <Typography
              component="h3"
              variant="h6"
              fontWeight={700}
              color="text.secondary"
            >
              {author.name}
            </Typography>
          }
        />
      )}
      <CardMedia component="img" image={cover.url} height="200" alt={slug} />
      <CardContent>
        <Typography component="h4" variant="h6" fontWeight={700}>
          {title}
        </Typography>
      </CardContent>
      <Divider sx={{ marginBottom: 2 }} variant="middle" />
      <CardActions>
        <Link to={`/blogs/${slug}`} style={{ width: "100%" }}>
          <Button
            sx={{ fontWeight: 800, borderRadius: 5 }}
            variant="outlined"
            fullWidth
            size="large"
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CardElement;
