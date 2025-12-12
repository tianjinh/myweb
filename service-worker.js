// 定义缓存名称，用于版本控制
const CACHE_NAME = 'offline-map-v1';

// 列出所有需要离线访问的文件，路径必须与服务器上的完全一致
const urlsToCache = [
  './',
  './index.html',
  // 根据你的实际情况，添加主要CSS和JS文件，例如：
  './qgis2web.css',
  './qgis2web.js',
  './leaflet/leaflet.css',
  './leaflet/leaflet.js',
  // 特别注意：必须包含你的地图数据文件，它们通常在 `data/` 目录下
  './data/layers.js',
  // 添加图标文件
  './icon-192.png',
  './icon-512.png'
];

// 安装阶段：预缓存列表中的资源[citation:6][citation:8]
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 激活阶段：可清理旧缓存[citation:6]
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 拦截请求阶段：优先使用缓存[citation:6][citation:10]
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果缓存中有，就直接返回
        if (response) {
          return response;
        }
        // 如果缓存中没有，则回退到网络请求
        // 对于离线应用，通常不缓存新请求，直接返回缓存主页
        return fetch(event.request).catch(() => caches.match('./index.html'));
      })
  );
});