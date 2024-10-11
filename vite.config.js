import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "way-ye",
      project: "3d-portfolio",
    }),
  ],
  optimizeDeps: {
    exclude: ["chunk-TMN6WMU6.js"],
  },

  build: {
    sourcemap: true,
  },
});
