"use strict";var precacheConfig=[["/admin/index.html","899bc983429c103c1c3d6cd89a262d01"],["/admin/static/css/main.7d25d446.css","6241410c2c260ef0e6c0522732b8b97c"],["/admin/static/media/EditorImage.0d19412d.less","0d19412d92eae41cf862bbab28fcca6c"],["/admin/static/media/index.1901b1b2.less","1901b1b2022eb64724054c960abfae78"],["/admin/static/media/index.1bf3c59e.less","1bf3c59e6bd36c047a7cb8ae57df0f05"],["/admin/static/media/index.2c5cf56e.less","2c5cf56e94ff6230158a7cb34bf83c49"],["/admin/static/media/index.7b5f4410.less","7b5f44109b94a079c907135e7f9637fc"],["/admin/static/media/index.b6d73de0.less","b6d73de0fd404b874bdb945de3fb3751"],["/admin/static/media/index.b9747b5a.less","b9747b5aff92141f505e93f3ba8733bd"],["/admin/static/media/index.c20285b1.less","c20285b14f8b9d3d88a554dea7cb3b7b"],["/admin/static/media/index.cb9468d3.less","cb9468d3cbff4a05d4256c8d69aca1b9"],["/admin/static/media/index.e617ee40.less","e617ee407ec1b6c3e6d7a2ed2a5719a5"],["/admin/static/media/index.f109a338.less","f109a33848893b236b31b0b37e4548e7"],["/admin/static/media/index.fe4d6bf1.less","fe4d6bf1f8724a27573c986f6ea59e70"],["/admin/static/media/selfimpro.c4cd9412.png","c4cd9412fc87690886b86d0b184e962e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/admin/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});