import { CracoConfig } from "craco__craco";
import path from "path";

const config: CracoConfig = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
};

export default config;
