/*!
 * vite-plugin-cesium-mini v0.0.1
 * Author: 4Nameless4 <nameless9744@gmail.com>
 * License: MIT
 * Build: 2025-11-30 12:01:44
 */
import e from"node:path";import i from"node:fs/promises";import o from"serve-static";function s(s){const{sourceBaseUrl:r="node_modules/cesium/Build",baseUrl:n="cesium"}=s||{};let t=!1,l=e.posix.join("/",n),c="";return{name:"vite-plugin-cesium-simple",config(i,{command:o}){const s=i.base||"";return t="build"===o,l=e.posix.join("/",s,n,"/"),{define:{CESIUM_BASE_URL:JSON.stringify(l)}}},configResolved(e){c=e.build.outDir},configureServer({middlewares:i}){i.use(l,o(e.posix.join(r,"Cesium"),{setHeaders:e=>{e.setHeader("Access-Control-Allow-Origin","*")}}))},async writeBundle(){if(t){console.log(c);try{await Promise.allSettled(["Assets","ThirdParty","Workers","Widgets"].map(o=>i.cp(e.posix.join(r,"CesiumUnminified",o),e.posix.join(c,n,o),{recursive:!0})))}catch(e){console.error("copy failed",e)}}}}}export{s as default};
