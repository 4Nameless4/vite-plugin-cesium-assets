/*!
 * vite-plugin-cesium-mini v0.0.1
 * Author: 4Nameless4 <nameless9744@gmail.com>
 * License: MIT
 * Build: 2025-11-30 12:01:44
 */

import { Plugin } from 'vite';

/**
 * @param baseUrl default: cesium
 * @param sourceBaseUrl default: node_modules/cesium/Build/Cesium
 */
declare function cesiumMini(options?: {
    baseUrl?: string;
    sourceBaseUrl?: string;
}): Plugin;

export { cesiumMini as default };
