if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,r,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.81604ec582eadc9097b1.js",revision:"mryymsMLG8hEevWyqFH30"},{url:"/_next/static/chunks/framework.abffcf18e526b7c0dbcd.js",revision:"mryymsMLG8hEevWyqFH30"},{url:"/_next/static/chunks/main-9e5a8ab4970e8075e1cb.js",revision:"mryymsMLG8hEevWyqFH30"},{url:"/_next/static/chunks/pages/_app-6bd2bb0846beb0e755fa.js",revision:"mryymsMLG8hEevWyqFH30"},{url:"/_next/static/chunks/pages/_error-65369b246276a3d6d2ee.js",revision:"mryymsMLG8hEevWyqFH30"},{url:"/_next/static/chunks/pages/index-d328d94a29f7dac43a7f.js",revision:"mryymsMLG8hEevWyqFH30"},{url:"/_next/static/chunks/polyfills-aa54647e89713304033b.js",revision:"mryymsMLG8hEevWyqFH30"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"mryymsMLG8hEevWyqFH30"},{url:"/_next/static/css/6d8d5eb1764362a133c7.css",revision:"mryymsMLG8hEevWyqFH30"},{url:"/_next/static/css/d3a3f5a47bb4a9985275.css",revision:"mryymsMLG8hEevWyqFH30"},{url:"/_next/static/mryymsMLG8hEevWyqFH30/_buildManifest.js",revision:"mryymsMLG8hEevWyqFH30"},{url:"/_next/static/mryymsMLG8hEevWyqFH30/_ssgManifest.js",revision:"mryymsMLG8hEevWyqFH30"},{url:"/favicon.png",revision:"3b2c3bd0598fa10bbe6d6136d1e0a764"},{url:"/gifs/evoTag.gif",revision:"37c3f16b2b8563b6758a9569dee391ff"},{url:"/icons/body.svg",revision:"18605fdc494015a525f4371b41482be3"},{url:"/icons/close.svg",revision:"e02cfdb25a8a2cb442eb325640e86eb8"},{url:"/icons/eye.svg",revision:"b85f2bb9620fcdab7ade4224f13379a8"},{url:"/icons/icon-192x192.png",revision:"bf1f090bd08c51d6ecf7a59ef237dfef"},{url:"/icons/icon-256x256.png",revision:"49f320383dddf55769b069c3eb2910dd"},{url:"/icons/icon-384x384.png",revision:"00eebb6132031a7b821bb17b786765be"},{url:"/icons/icon-512x512.png",revision:"94058f83de17f3251681a666598fe404"},{url:"/icons/level-up.svg",revision:"7a547044b58e1d764b84be4ef7451179"},{url:"/icons/level.svg",revision:"298947622834f4453f39597afd8bc4a3"},{url:"/icons/levelup.svg",revision:"3ba674d767d3b3910c6bab00c20ccaf6"},{url:"/icons/noUser.svg",revision:"f35d9f2e443413c7588f10d724a3431b"},{url:"/manifest.json",revision:"0269979a5919d2a7d89ec706cf28a313"},{url:"/sounds/hatenna-cry.mp3",revision:"08775dd45b70fe36e671c8422a2a475a"},{url:"/sounds/hatterene-cry.mp3",revision:"085ebf31f5da7f572ae1ef3ee7b3854a"},{url:"/sounds/hattrem-cry.mp3",revision:"16e113a8bb7905995348c0f2af61f253"},{url:"/sounds/notification.mp3",revision:"28dadfdff0c916fb9a80d665a37fe93f"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:r})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));