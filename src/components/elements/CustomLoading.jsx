import { Box } from "@mui/material";

import { TailSpin } from "react-loader-spinner";

function CustomLoading({ width, height }) {
  return (
    <Box
      component="div"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <TailSpin width={width} height={height} color="#1976d2" />
    </Box>
  );
}

export default CustomLoading;
