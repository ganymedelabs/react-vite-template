if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,l)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const u=e=>n(e,o),t={module:{uri:o},exports:s,require:u};i[o]=Promise.all(r.map((e=>t[e]||u(e)))).then((e=>(l(...e),s)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"images/favicons/android-chrome-192x192.png",revision:null},{url:"images/favicons/android-chrome-512x512.png",revision:null},{url:"images/favicons/apple-touch-icon.png",revision:null},{url:"images/favicons/favicon-16x16.png",revision:null},{url:"images/favicons/favicon-32x32.png",revision:null},{url:"images/logo.png",revision:null},{url:"index-6DRX_4Cg.js",revision:null},{url:"index-BKlr6yp3.css",revision:null},{url:"index.html",revision:null},{url:"registerSW.js",revision:null},{url:"manifest.webmanifest",revision:"16bbde2983a014645e428042c4ba8a91"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
