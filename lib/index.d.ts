/*!
 * vite-plugin-cesium-assets v1.0.0
 * Author: 4Nameless4 <nameless9744@gmail.com>
 * License: MIT
 * Build: 2025-12-04 20:34:17
 */

import { Plugin } from 'vite';

/**
 * @param baseUrl default: cesium
 * @param sourceBaseUrl default: node_modules/cesium/Build/Cesium
 */
declare function cesiumAssets(options?: {
    baseUrl?: string;
    sourceBaseUrl?: string;
}): Plugin<any>;

export { cesiumAssets as default };
