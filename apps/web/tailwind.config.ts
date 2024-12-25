import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    // for jamsr-ui
    "../../node_modules/@jamsr-ui/**/dist/*.{js,jsx,mjs}",
  ],
  theme: {},
  presets: [sharedConfig],
} satisfies Config;
