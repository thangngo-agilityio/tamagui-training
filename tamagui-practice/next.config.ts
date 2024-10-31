import { withTamagui } from "@tamagui/next-plugin";
import { NextConfig } from "next";

export default function (
  name: string,
  { defaultConfig }: { defaultConfig: NextConfig }
): NextConfig {
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
}
