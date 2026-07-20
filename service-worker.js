const CACHE_NAME = 'ak-store-v4';
const STATIC_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './5972309290070511049.jpg',
    './5972309290070511051.jpg',
    './ai.jpg',
    './canva.jpg',
    './capcut.jpg',
    './chatGPT.jpg',
    './desinger.jpg',
    './flm.jpg',
    './freefire.jpg',
    './gemini.jpg',
    './netflix.jpg',
    './play.jpg',
    './plus.jpg',
    './shahid.jpg',
    './snap.jpg',
    './weekff.jpg',
    './yearff.jpg',
    './youtube.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

async function networkFirst(request) {
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
        }
        return response;
    } catch (error) {
        return (await caches.match(request)) || caches.match('./index.html');
    }
}

async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) return cachedResponse;

    try {
        const response = await fetch(request);
        if (response.ok && new URL(request.url).origin === self.location.origin) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
        }
        return response;
    } catch (error) {
        // Do not return index.html for a missing image or stylesheet.
        return Response.error();
    }
}

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    if (event.request.mode === 'navigate') {
        event.respondWith(networkFirst(event.request));
        return;
    }

    event.respondWith(cacheFirst(event.request));
});
