import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  compiler: {
    // react-code-blocks renders through styled-components; this enables the
    // SWC transform so class names match between server and client render.
    styledComponents: true,
  },
};

const withMDX = createMDX({
  // Add markdown plugins here
});

export default withMDX(nextConfig);
