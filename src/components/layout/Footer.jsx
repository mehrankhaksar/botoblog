import { Paper, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Paper component="footer" elevation={0}>
      <Typography
        component="p"
        variant="p"
        fontWeight={700}
        color="primary"
        textAlign="center"
        py={2.5}
      >
        پروژه وبلاگ با GraphQL | دوره ری‌اکت سایت بوتواستارت
      </Typography>
    </Paper>
  );
};

export default Footer;
