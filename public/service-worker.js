// import workbox from a cdn to enable caching
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');

// pwa attempts to read from cache first and then send network requests only when neccessary
workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new workbox.strategies.CacheFirst()
  // can also use a network first strategy if app is connected to network
  // e.g. new workbox.strategies.NetworkFirst()
)
