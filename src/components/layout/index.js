import { Box, Container } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Box
      component="div"
      sx={{ overflowY: "auto", overflowX: "hidden" }}
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Header />
      <Box sx={{ flex: 1, py: "20px" }}>
        <Container
          maxWidth="lg"
          sx={{
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
