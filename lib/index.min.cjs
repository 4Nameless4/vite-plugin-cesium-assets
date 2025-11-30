/*!
 * vite-plugin-cesium-mini v1.0.0
 * Author: 4Nameless4 <nameless9744@gmail.com>
 * License: MIT
 * Build: 2025-11-30 13:53:31
 */
"use strict";var e=require("node:path"),i=require("node:fs/promises"),s=require("serve-static");module.exports=function(r){const{sourceBaseUrl:o="node_modules/cesium/Build",baseUrl:n="cesium"}=r||{};let t=!1,u=e.posix.join("/",n),c="";return{name:"vite-plugin-cesium-simple",config(i,{command:s}){const r=i.base||"";return t="build"===s,u=e.posix.join("/",r,n,"/"),{define:{CESIUM_BASE_URL:JSON.stringify(u)}}},configResolved(e){c=e.build.outDir},configureServer({middlewares:i}){i.use(u,s(e.posix.join(o,"Cesium"),{setHeaders:e=>{e.setHeader("Access-Control-Allow-Origin","*")}}))},async writeBundle(){if(t){console.log(c);try{await Promise.allSettled(["Assets","ThirdParty","Workers","Widgets"].map(s=>i.cp(e.posix.join(o,"CesiumUnminified",s),e.posix.join(c,n,s),{recursive:!0})))}catch(e){console.error("copy failed",e)}}}}};
