if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/bODMJA10W70JQI_JOUohB/_buildManifest.js",revision:"f2d4fb96e7b359b6f45ddcad574c4a36"},{url:"/_next/static/bODMJA10W70JQI_JOUohB/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_next/static/chunks/124-de766a6f3e0c9141.js",revision:"de766a6f3e0c9141"},{url:"/_next/static/chunks/1a48c3c1.5d5d01b8f7168f77.js",revision:"5d5d01b8f7168f77"},{url:"/_next/static/chunks/1bfc9850.8efc84c33ff95777.js",revision:"8efc84c33ff95777"},{url:"/_next/static/chunks/21-60c58d42425e9b7d.js",revision:"60c58d42425e9b7d"},{url:"/_next/static/chunks/252f366e.ae992f7131619c07.js",revision:"ae992f7131619c07"},{url:"/_next/static/chunks/653.c6107a691657e928.js",revision:"c6107a691657e928"},{url:"/_next/static/chunks/78e521c3.81389b5be91a908e.js",revision:"81389b5be91a908e"},{url:"/_next/static/chunks/7f0c75c1.3c6e261b218e4607.js",revision:"3c6e261b218e4607"},{url:"/_next/static/chunks/95b64a6e.523c17f58f736a2c.js",revision:"523c17f58f736a2c"},{url:"/_next/static/chunks/ae51ba48.cea800b521039fc9.js",revision:"cea800b521039fc9"},{url:"/_next/static/chunks/b98bc7c3.11eb1c85730addff.js",revision:"11eb1c85730addff"},{url:"/_next/static/chunks/d0c16330.c8197d46a197e6af.js",revision:"c8197d46a197e6af"},{url:"/_next/static/chunks/d64684d8.973a383d8097333f.js",revision:"973a383d8097333f"},{url:"/_next/static/chunks/framework-9b5d6ec4444c80fa.js",revision:"9b5d6ec4444c80fa"},{url:"/_next/static/chunks/main-147954219c425b3f.js",revision:"147954219c425b3f"},{url:"/_next/static/chunks/pages/_app-0f28f6392ae07ad7.js",revision:"0f28f6392ae07ad7"},{url:"/_next/static/chunks/pages/_error-7397496ca01950b1.js",revision:"7397496ca01950b1"},{url:"/_next/static/chunks/pages/auth/logo-c111d3e9a4bceb81.js",revision:"c111d3e9a4bceb81"},{url:"/_next/static/chunks/pages/auth/signin-b4048dfb2ad1f15f.js",revision:"b4048dfb2ad1f15f"},{url:"/_next/static/chunks/pages/calendar-9b8022d4a23a635d.js",revision:"9b8022d4a23a635d"},{url:"/_next/static/chunks/pages/chats-fa981065ad867d9f.js",revision:"fa981065ad867d9f"},{url:"/_next/static/chunks/pages/chats/chat-7c1cac0bf15fd1c9.js",revision:"7c1cac0bf15fd1c9"},{url:"/_next/static/chunks/pages/fallback-420d7553196b0171.js",revision:"420d7553196b0171"},{url:"/_next/static/chunks/pages/homework-a101684bce2def09.js",revision:"a101684bce2def09"},{url:"/_next/static/chunks/pages/index-278961bb61b74efb.js",revision:"278961bb61b74efb"},{url:"/_next/static/chunks/pages/notifications-39eaf9776bf6cb7e.js",revision:"39eaf9776bf6cb7e"},{url:"/_next/static/chunks/pages/student-34dfb83065951140.js",revision:"34dfb83065951140"},{url:"/_next/static/chunks/pages/student/medical-b3e92677fb546f48.js",revision:"b3e92677fb546f48"},{url:"/_next/static/chunks/pages/student/portfolio-57bd9d3f6ac5d5a7.js",revision:"57bd9d3f6ac5d5a7"},{url:"/_next/static/chunks/pages/student/profiles-80de151c7f32d906.js",revision:"80de151c7f32d906"},{url:"/_next/static/chunks/pages/welcome-964abaf945f25c12.js",revision:"964abaf945f25c12"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b67f3414f715c5f8.js",revision:"b67f3414f715c5f8"},{url:"/_next/static/css/9efcde9b8ce81d67.css",revision:"9efcde9b8ce81d67"},{url:"/apple-touch-icon.png",revision:"25bc7d1786c837eee7b688f5b3dacffd"},{url:"/favicon copy.ico",revision:"26b4ff0a4f75fb8afb4b534bb71e3460"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/firebase-messaging-sw.js",revision:"20b241a0abfd5be341ad039f6eb9af32"},{url:"/icon-192x192.png",revision:"337fadee5277b3dc00548a811a7a4f0a"},{url:"/icon-256x256.png",revision:"c8fe09cbdb4eab6e4e46c9e36b191c1a"},{url:"/icon-384x384.png",revision:"ea75fa82267f8b2cea937dc6f3304152"},{url:"/icon-512x512.png",revision:"5e42ebf3e6b5a4632e43b1846153804c"},{url:"/images/1.jpeg",revision:"b19d740e7e7773ff44bfd6843b3dc67b"},{url:"/images/boy.png",revision:"8bafcda90f0c4f8f2d2dc0beba4271b9"},{url:"/images/cloud.png",revision:"c3f229fd7c0fe739b8891e72fb8c63f3"},{url:"/images/generic.webp",revision:"c3f6f64c67ab9bf029a2afebffddfba2"},{url:"/images/girl.png",revision:"8d9cd7c3941883048993094ee5c5352b"},{url:"/images/jet.png",revision:"235fa18ae68d207f22c9bb24ea922c84"},{url:"/images/recess.png",revision:"dbb3d6003e24ae253773566a39fae028"},{url:"/images/subjects/atom.webp",revision:"bf165d3a3d4fad553fcf7c204a57f9e1"},{url:"/images/subjects/car.webp",revision:"85e3647394eff21002867d4b6041bc75"},{url:"/images/subjects/career.webp",revision:"8f517e42a0d2b6f10e5f26cbc43d1232"},{url:"/images/subjects/eng.webp",revision:"94c3ebcdc16fa8ce2dee6fb9639a149f"},{url:"/images/subjects/english.webp",revision:"6554712258233c6e8c26d1167c0f473b"},{url:"/images/subjects/env.webp",revision:"19385ca8b4bc49cea2dfcdbe6b3742e7"},{url:"/images/subjects/hyg.webp",revision:"cfcb08a625d3b889619d7cffd0d025fe"},{url:"/images/subjects/hygiene.webp",revision:"9dcda6a8f2b60c41eb38f817c0140daf"},{url:"/images/subjects/kiswahili.webp",revision:"38fd767628c1250a05006eb1ee5cd1cf"},{url:"/images/subjects/math.webp",revision:"fdf73eea03d862bf3b5f934a36b91f5f"},{url:"/images/subjects/re.webp",revision:"55a78a88c088b139a8d573f0fd5e21fe"},{url:"/images/subjects/science.webp",revision:"556d4b8e29e56ac7004ad5c71347fdc3"},{url:"/images/subjects/swa.webp",revision:"7187f87b1b3aca3e6689ac9f263fe4bd"},{url:"/images/waves.svg",revision:"88c3b647e24d60ae2139379443f47930"},{url:"/images/welcome1.png",revision:"0e65ea47fcdba22029675ab1244c2db8"},{url:"/images/welcome2.png",revision:"ea9213d8a8ec84b060ff5454f170347d"},{url:"/images/welcome3.png",revision:"d4f1cfa09d178a9e5aee2294ae14a8c6"},{url:"/manifest.json",revision:"34c035b6ec183a8a731d3006fd778261"},{url:"/maskable_icon_x128.png",revision:"e0e997a757565b365da8f5be2c05de48"},{url:"/maskable_icon_x192.png",revision:"d7b3d926c3eda55d657ec2e80092b975"},{url:"/maskable_icon_x384.png",revision:"f22429591013ae7cf6faff2c93e0aee7"},{url:"/maskable_icon_x48.png",revision:"9edd48213f04c32c85ee4f30a4afa21a"},{url:"/maskable_icon_x72.png",revision:"b48c4b270a199bedd78d907dd7d3ce22"},{url:"/maskable_icon_x96.png",revision:"3e73b1b94df25286230c9564526d0d69"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
