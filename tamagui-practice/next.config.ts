import { withTamagui } from "@tamagui/next-plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = (defaultConfig) => {
  const config = {
    ...defaultConfig,
    // ...your configuration
  };
  const tamaguiPlugin = withTamagui({
    config: "./tamagui.config.ts",
    components: ["tamagui"],
  });
  return {
    ...config,
    ...tamaguiPlugin(config),
  };
};

export default nextConfig;
