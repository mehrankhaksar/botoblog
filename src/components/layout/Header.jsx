import { Link } from "react-router-dom";

import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Link to="/">
            <Typography component="h2" variant="h5" fontWeight="700">
              وبلاگ بوتواستارت
            </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
