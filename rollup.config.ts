import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import license from "rollup-plugin-license";
import type { RollupOptions } from "rollup";

const isProduction = process.env.NODE_ENV !== "development";
const NODE_ENV = isProduction ? "production" : "development";
process.env.NODE_ENV = NODE_ENV;

const outDir = "lib";
const licensePlugin = license({
  banner: {
    content: `/*!
 * <%= pkg.name %> v<%= pkg.version %>
 * Author: <%= pkg.author %>
 * License: <%= pkg.license %>
 * Build: <%= moment().format('YYYY-MM-DD HH:mm:ss') %>
 */
`,
  },
});
const terserPlugin = terser();

const config: RollupOptions[] = [
  {
    input: "src/index.ts",
    output: [
      {
        dir: outDir,
        entryFileNames: "index.mjs",
        format: "esm",
        banner: "",
      },
      {
        dir: outDir,
        entryFileNames: "index.min.mjs",
        format: "esm",
        plugins: [terserPlugin],
      },
      {
        dir: outDir,
        entryFileNames: "index.cjs",
        format: "cjs",
      },
      {
        dir: outDir,
        entryFileNames: "index.min.cjs",
        format: "cjs",
        plugins: [terserPlugin],
      },
    ],
    plugins: [nodeResolve(), commonjs(), json(), typescript(), licensePlugin],
    external: ["serve-static", "vite"]
  },
  {
    input: "src/index.ts",
    output: [{ file: "lib/index.d.ts", format: "es" }],
    plugins: [dts(), licensePlugin],
  },
];

export default config;
