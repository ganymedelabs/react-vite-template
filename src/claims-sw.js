/// <reference lib="webworker" />

/* eslint-disable no-restricted-globals */

import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";
import { NavigationRoute, registerRoute } from "workbox-routing";

precacheAndRoute(self.__WB_MANIFEST); // eslint-disable-line no-underscore-dangle

cleanupOutdatedCaches();

/** @type {RegExp[] | undefined} */
let allowlist;
if (import.meta.env.DEV) allowlist = [/^\/$/];

registerRoute(new NavigationRoute(createHandlerBoundToURL("index.html"), { allowlist }));

self.skipWaiting();
clientsClaim();
