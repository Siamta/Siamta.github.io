importScripts("https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js")

const { NetworkFirst, StaleWhileRevalidate } = workbox.strategies
const { registerRoute } = workbox.routing
const { precacheAndRoute } = workbox.precaching

// Cache images.
registerRoute(/\.(?:png|gif|jpg|jpeg|webp|avif|ico|svg)$/, new NetworkFirst())

// Cache Google Fonts stylesheets.
registerRoute(/^https:\/\/fonts\.googleapis\.com/, new StaleWhileRevalidate())

// Cache Google Fonts webfont files.
registerRoute(/^https:\/\/fonts\.gstatic\.com/, new StaleWhileRevalidate())

// Cache js and css files.
registerRoute(/\.(?:js|css)$/, new NetworkFirst())

// Cache URLs.
precacheAndRoute(
  [
    {
      url: "/index.html",
      revision: "21306e",
    },
  ],
  {
    cleanUrls: true,
  },
)
