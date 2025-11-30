/*!
 * vite-plugin-cesium-mini v1.0.0
 * Author: 4Nameless4 <nameless9744@gmail.com>
 * License: MIT
 * Build: 2025-11-30 13:53:31
 */

import { Plugin } from 'vite';

/**
 * @param baseUrl default: cesium
 * @param sourceBaseUrl default: node_modules/cesium/Build/Cesium
 */
declare function cesiumMini(options?: {
    baseUrl?: string;
    sourceBaseUrl?: string;
}): Plugin<any>;

export { cesiumMini as default };
