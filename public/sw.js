if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"0d26171bda74e1467e2e355c6b9ec500"},{url:"/_next/static/H057HEsJ_-x8QIxd-F-W-/_buildManifest.js",revision:"1339bb383c3b024c4bbd430ab648226a"},{url:"/_next/static/H057HEsJ_-x8QIxd-F-W-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/173-80f7c8f32e9749c7.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.d8ec56f1948566fd.js",revision:"d8ec56f1948566fd"},{url:"/_next/static/chunks/23-02bf0d04872578a2.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/341-6f7ddbc625447367.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/365-589a6d14c6be9c92.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/391-b69b72ef94166a69.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/46-2a7d2d8d8a2f9c22.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/4bd1b696-579a07be86d67e23.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/517-3c966ed5e3c0cb37.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/553-bb5728a9d5ad344a.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/565-f138581b05571045.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/627-93721145942d77bb.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/63-d7b74de5e6008ee3.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/651-aa214178a05f622a.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/837-98a0c87dbd9328a6.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/app/(homepage)/@modal/default-5a0f3d57f659ba5a.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/app/(homepage)/@modal/getphonepass/page-1e180be3831c7ba9.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/app/(homepage)/@modal/login/page-e7e00b9a9e64e758.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/app/(homepage)/@modal/register/page-3eb01c817d2d0abe.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/app/(homepage)/default-0c9356a4a992ac07.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/app/(homepage)/layout-90bf822aba5e81a0.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/app/(homepage)/page-53075f0d5d0ff26b.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/app/_not-found/page-25043f599366b9d8.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/app/dashboard/(role)/@shopowner/page-fe5027e8fa539f23.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/app/dashboard/(role)/@user/page-d18acee159953470.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/app/dashboard/(role)/layout-474aa699ff9a659f.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/app/dashboard/(role)/page-2e9e538a37a6fc70.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/app/dashboard/layout-eac7c850c0b6b1de.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/app/layout-15bc15852b0bed4c.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/framework-d29117d969504448.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/main-8d52b2267641362e.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/main-app-102bf7aff6a74f2c.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/pages/_app-60989c630625b0d6.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/pages/_error-8a20a8cc0e244b4c.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-63f43e6280c3894f.js",revision:"H057HEsJ_-x8QIxd-F-W-"},{url:"/_next/static/css/435556af49dbb5ce.css",revision:"435556af49dbb5ce"},{url:"/_next/static/css/c54330da61be2bd9.css",revision:"c54330da61be2bd9"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/IRANSansX-Black.114cf8c8.woff",revision:"114cf8c8"},{url:"/_next/static/media/IRANSansX-Black.b41ffa2d.woff2",revision:"b41ffa2d"},{url:"/_next/static/media/IRANSansX-Bold.b041de77.woff2",revision:"b041de77"},{url:"/_next/static/media/IRANSansX-Bold.cca1b695.woff",revision:"cca1b695"},{url:"/_next/static/media/IRANSansX-DemiBold.217d371b.woff2",revision:"217d371b"},{url:"/_next/static/media/IRANSansX-DemiBold.723c49a8.woff",revision:"723c49a8"},{url:"/_next/static/media/IRANSansX-ExtraBold.4bc6e86f.woff2",revision:"4bc6e86f"},{url:"/_next/static/media/IRANSansX-ExtraBold.c409dce3.woff",revision:"c409dce3"},{url:"/_next/static/media/IRANSansX-Light.3d495247.woff2",revision:"3d495247"},{url:"/_next/static/media/IRANSansX-Light.a6ceacc1.woff",revision:"a6ceacc1"},{url:"/_next/static/media/IRANSansX-Medium.9f135166.woff",revision:"9f135166"},{url:"/_next/static/media/IRANSansX-Medium.e49fd8da.woff2",revision:"e49fd8da"},{url:"/_next/static/media/IRANSansX-Regular.bb104f07.woff2",revision:"bb104f07"},{url:"/_next/static/media/IRANSansX-Regular.f0d7c305.woff",revision:"f0d7c305"},{url:"/_next/static/media/IRANSansX-Thin.1c1ec088.woff2",revision:"1c1ec088"},{url:"/_next/static/media/IRANSansX-Thin.ac5cf1e7.woff",revision:"ac5cf1e7"},{url:"/_next/static/media/IRANSansX-UltraLight.31bce077.woff",revision:"31bce077"},{url:"/_next/static/media/IRANSansX-UltraLight.cfa8ff44.woff2",revision:"cfa8ff44"},{url:"/_next/static/media/Union.ae53a145.png",revision:"ae53a145"},{url:"/_next/static/media/Union.ae53a145.png",revision:"73c8f0278c381f799f1753aaabfe9995"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/logo.png",revision:"cfbc739b36e1c8536fc5ceb905e6bda7"},{url:"/manifest.json",revision:"04bce1bf31d1d76169fd47d7b8fe853b"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
