English | [中文](./README.zh-CN.md)

# Vite Plugin for Cesium

A Vite plugin to handle CesiumJS static assets.
It automatically copies Cesium's static files (Assets, Workers, ThirdParty, Widgets) to the build directory and correctly sets window.CESIUM_BASE_URL, independent of Vite's base configuration.

## How to use

Install the plugin with NPM:

```
npm install --save-dev vite-plugin-cesium-mini
```

```js
import { defineConfig } from "vite";
import cesium from "vite-plugin-cesium-mini";

export default defineConfig({
  plugins: [cesium()],
});
```

## Options

### baseUrl

- Type: string
- Default: cesium
- Description: Target directory for Cesium static files in the build output.

### sourceBaseUrl

- Type: string
- Default: node_modules/cesium/Build
- Description: Source path of Cesium static assets to copy.

### Example usage:

```js
cesium({
  baseUrl: "static/cesium",
  sourceBaseUrl: "node_modules/cesium/Build",
});
```

## Build output structure example

```text
dist/
  cesium/       ← the baseUrl option
    Assets/     ← from `sourceBaseUrl`/Assets
    ThirdParty/ ← from `sourceBaseUrl`/ThirdParty
    Workers/    ← from `sourceBaseUrl`/Workers
    Widgets/    ← from `sourceBaseUrl`/Widgets
  assets/
  index.html
```
