if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let o={};const u=e=>i(e,l),c={module:{uri:l},exports:o,require:u};n[l]=Promise.all(s.map((e=>c[e]||u(e)))).then((e=>(r(...e),o)))}}define(["./workbox-def37861"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"images/favicons/android-chrome-192x192.png",revision:null},{url:"images/favicons/android-chrome-512x512.png",revision:null},{url:"images/favicons/apple-touch-icon.png",revision:null},{url:"images/favicons/favicon-16x16.png",revision:null},{url:"images/favicons/favicon-32x32.png",revision:null},{url:"images/logo.png",revision:null},{url:"index-D5FGU6wn.css",revision:null},{url:"index-d6sjZt4d.js",revision:null},{url:"index.html",revision:null},{url:"registerSW.js",revision:null},{url:"manifest.webmanifest",revision:"16bbde2983a014645e428042c4ba8a91"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>e.pathname.endsWith(".css")),new e.StaleWhileRevalidate({cacheName:"css-cache",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute((({url:e})=>e.pathname.endsWith(".js")),new e.StaleWhileRevalidate({cacheName:"js-cache",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:2592e3})]}),"GET")}));
