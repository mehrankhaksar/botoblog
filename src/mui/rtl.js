import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugins from "stylis-plugin-rtl";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugins],
});

export default cacheRtl;
