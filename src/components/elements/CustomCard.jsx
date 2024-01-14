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

const CustomCard = ({ author, cover, title, slug }) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: "0 5px 10px rgba(0,0,0,0.1)" }}>
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} alt={author.name} />}
          title={
            <Typography component="h3" fontWeight={800} color="text.secondary">
              {author.name}
            </Typography>
          }
        />
      )}
      <CardMedia component="img" height={200} image={cover.url} alt={slug} />
      <CardContent>
        <Typography component="h4" variant="h6" fontWeight={700}>
          {title}
        </Typography>
      </CardContent>
      <Divider sx={{ marginBottom: 2.5 }} variant="middle" />
      <CardActions>
        <Link style={{ width: "100%" }} to={`/blogs/${slug}`}>
          <Button
            sx={{ fontWeight: 800, borderRadius: 5 }}
            variant="outlined"
            fullWidth
            size="large"
            type="button"
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
