if(!self.define){let i,n={};const e=(e,o)=>(e=new URL(e+".js",o).href,n[e]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=n,document.head.appendChild(i)}else i=e,importScripts(e),n()})).then((()=>{let i=n[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(o,l)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let s={};const u=i=>e(i,r),c={module:{uri:r},exports:s,require:u};n[r]=Promise.all(o.map((i=>c[i]||u(i)))).then((i=>(l(...i),s)))}}define(["./workbox-3e911b1d"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"favicon.ico",revision:null},{url:"images/favicons/android-chrome-192x192.png",revision:null},{url:"images/favicons/android-chrome-512x512.png",revision:null},{url:"images/favicons/apple-touch-icon.png",revision:null},{url:"images/favicons/favicon-16x16.png",revision:null},{url:"images/favicons/favicon-32x32.png",revision:null},{url:"images/logo.png",revision:null},{url:"index-BBY4JbT5.css",revision:null},{url:"index-JGmZRQc5.js",revision:null},{url:"index.html",revision:null},{url:"registerSW.js",revision:null},{url:"manifest.webmanifest",revision:"e57519dc24452dd48c7ffef5c56827b1"}],{}),i.cleanupOutdatedCaches(),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html")))}));
