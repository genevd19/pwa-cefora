const version="1.0.0"

self.addEventListener("install", event => {
    console.log("INSTALL service worker version" + version)
    return self.skipWaiting()
})

self.addEventListener("activate", event => {
    console.log("ACTIVATE service worker version" + version)
    return self.skipWaiting()
    //return self.skipWaiting()
})
self.addEventListener('fetch', function () {
//met en ecoute le services
})
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log('ok, workbox chargé');
    workbox.precaching.precacheAndRoute([
        {"url" : "index.html"
        },
        {"url" : "style.css"
        },
        {"url" : "manifest.json"
        },
        {"url" : "favicon.ico"
        },
        {"url" : "icon-96-96.png"
        },
        {"url" : "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css"
        }   
    ])

    workbox.routing.registerRoute (
        /(.*)\.(?:png|gif|jpg|css)$/,
        new workbox.strategies.CacheFirst({
            cacheName: 'design-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 50,
                    maxAgeSeconds: 30*24*60*60 //30 days
                })
            ]
        })
    )
} else {
    console.log('OOh, workbox non chargé');
    
}