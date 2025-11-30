[English](./README.md) | 中文

# Cesium 的 Vite 插件

一个用于处理 CesiumJS 静态资源的 Vite 插件。
它会自动将 Cesium 的静态文件（Assets、Workers、ThirdParty、Widgets）复制到构建目录，并正确设置 window.CESIUM_BASE_URL，不受 Vite base 配置影响。

## 使用方法

通过 NPM 安装插件：

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

## 配置选项

### baseUrl

- 类型: string
- 默认值: cesium
- 说明: Target directory for Cesium static files in the build output.

### sourceBaseUrl

- 类型: string
- 默认值: node_modules/cesium/Build
- 说明: Source path of Cesium static assets to copy.

### 使用示例：

```js
cesium({
  baseUrl: "static/cesium",
  sourceBaseUrl: "node_modules/cesium/Build",
});
```

## 构建输出目录示例

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
