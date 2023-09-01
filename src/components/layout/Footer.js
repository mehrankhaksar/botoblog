import React from "react";

import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box component="footer" width="100%">
      <Typography
        component="p"
        variant="p"
        fontWeight={700}
        color="primary"
        textAlign="center"
        bgcolor="white"
        py={2}
      >
        پروژه وبلاگ با GraphQL | دوره ری‌اکت سایت بوتواستارت
      </Typography>
    </Box>
  );
}

export default Footer;
