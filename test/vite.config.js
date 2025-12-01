import { defineConfig } from "vite";
import cesium from "vite-plugin-cesium-assets";

export default defineConfig({
  plugins: [cesium()],
});
