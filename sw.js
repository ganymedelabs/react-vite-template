if(!self.define){let e,n={};const i=(i,o)=>(i=new URL(i+".js",o).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let r={};const u=e=>i(e,l),c={module:{uri:l},exports:r,require:u};n[l]=Promise.all(o.map((e=>c[e]||u(e)))).then((e=>(s(...e),r)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"favicon.ico",revision:null},{url:"images/favicons/android-chrome-192x192.png",revision:null},{url:"images/favicons/android-chrome-512x512.png",revision:null},{url:"images/favicons/apple-touch-icon.png",revision:null},{url:"images/favicons/favicon-16x16.png",revision:null},{url:"images/favicons/favicon-32x32.png",revision:null},{url:"images/logo.png",revision:null},{url:"index-D5FGU6wn.css",revision:null},{url:"index-OZZ7JY3o.js",revision:null},{url:"index.html",revision:null},{url:"manifest.webmanifest",revision:"e57519dc24452dd48c7ffef5c56827b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
