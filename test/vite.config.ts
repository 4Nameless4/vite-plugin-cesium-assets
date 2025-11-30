import { defineConfig } from "vite";
import cesium from "vite-plugin-cesium-mini";

export default defineConfig({
  plugins: [cesium()],
});
