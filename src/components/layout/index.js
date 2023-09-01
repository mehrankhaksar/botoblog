import React from "react";

import { Box, Container } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <Box
      component="div"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      overflowY="auto"
      overflowX="hidden"
    >
      <Header />
      <Box sx={{ width: "100%", flex: 1, py: "20px" }}>
        <Container
          maxWidth="lg"
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;
