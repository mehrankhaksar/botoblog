import React from "react";

import { TailSpin } from "react-loader-spinner";

function Loader({ width, height }) {
  return <TailSpin width={width} height={height} color="#1976d2" />;
}

export default Loader;
