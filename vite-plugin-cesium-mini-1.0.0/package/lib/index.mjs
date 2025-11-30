/*!
 * vite-plugin-cesium-mini v0.0.1
 * Author: 4Nameless4 <nameless9744@gmail.com>
 * License: MIT
 * Build: 2025-11-30 12:01:44
 */

import path from 'node:path';
import fs from 'node:fs/promises';
import serveStatic from 'serve-static';

/**
 * @param baseUrl default: cesium
 * @param sourceBaseUrl default: node_modules/cesium/Build/Cesium
 */
function cesiumMini(options) {
    const { sourceBaseUrl = "node_modules/cesium/Build", baseUrl = "cesium" } = options || {};
    const buildSourceDir = "CesiumUnminified";
    const devSourceDir = "Cesium";
    let isBuild = false;
    let CESIUM_BASE_URL = path.posix.join("/", baseUrl);
    let outDir = "";
    const res = {
        name: "vite-plugin-cesium-simple",
        config(c, { command }) {
            const base = c.base || "";
            isBuild = command === "build";
            CESIUM_BASE_URL = path.posix.join("/", base, baseUrl, "/");
            return {
                define: {
                    CESIUM_BASE_URL: JSON.stringify(CESIUM_BASE_URL),
                },
            };
        },
        configResolved(c) {
            outDir = c.build.outDir;
        },
        configureServer({ middlewares }) {
            middlewares.use(CESIUM_BASE_URL, serveStatic(path.posix.join(sourceBaseUrl, devSourceDir), {
                setHeaders: (res) => {
                    res.setHeader("Access-Control-Allow-Origin", "*");
                },
            }));
        },
        async writeBundle() {
            if (isBuild) {
                console.log(outDir);
                try {
                    await Promise.allSettled(["Assets", "ThirdParty", "Workers", "Widgets"].map((dir) => fs.cp(path.posix.join(sourceBaseUrl, buildSourceDir, dir), path.posix.join(outDir, baseUrl, dir), {
                        recursive: true,
                    })));
                }
                catch (err) {
                    console.error("copy failed", err);
                }
            }
        },
    };
    return res;
}

export { cesiumMini as default };
