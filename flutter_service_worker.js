'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7636ab214b9e778b8872001c6a3dd795",
"version.json": "2af8e76cea13fc292b76fbe895b4baa2",
"splash/img/light-2x.png": "caebe42bd2f338ea8b30cae31f3c5f55",
"splash/img/dark-4x.png": "b907b9b8c95d999168ca80a625e8e941",
"splash/img/light-3x.png": "a84b76bfc27ee992555c66cc82f7c51f",
"splash/img/dark-3x.png": "a84b76bfc27ee992555c66cc82f7c51f",
"splash/img/light-4x.png": "b907b9b8c95d999168ca80a625e8e941",
"splash/img/dark-2x.png": "caebe42bd2f338ea8b30cae31f3c5f55",
"splash/img/dark-1x.png": "e8ecb360bf39cebc2c8d3cd31fd07f26",
"splash/img/light-1x.png": "e8ecb360bf39cebc2c8d3cd31fd07f26",
"index.html": "1350f546a659402f1dff86854233f4ce",
"/": "1350f546a659402f1dff86854233f4ce",
"main.dart.js": "dad73405a88db849f8f1f98703f2182e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"loading.gif": "c41cdb25bfe35388dd1c8f0bc79fb164",
"favicon.png": "a1fff6fdb573c8133b07d563aa104cbc",
"icons/Icon-192.png": "8da78d21a9ef8c081f1b3b185d2b20ed",
"icons/Icon-maskable-192.png": "8da78d21a9ef8c081f1b3b185d2b20ed",
"icons/Icon-maskable-512.png": "b907b9b8c95d999168ca80a625e8e941",
"icons/Icon-512.png": "b907b9b8c95d999168ca80a625e8e941",
"manifest.json": "5b03a2a63f100b587e4f057504bf10e5",
".git/config": "38a81a99eab949faa496683aa8ffdc17",
".git/objects/61/388d5f4b90fa60e4542846f482b8c0d0a38aa1": "b557168c64d4bcafa9fd28b7f174fb93",
".git/objects/92/208020d27583d245a63952e236ddcdacdfe704": "9ec0ec7bf0f736d35ec0c4e7f8dfaf6d",
".git/objects/3e/433d912991f0cd82b1fbc0aadcb77b0c24f132": "028dafda78100a691b8fcd0262633932",
".git/objects/3b/9f93cb55660f93d618c3e2d7b4391092c6b732": "26ef874f1eb336cb0edd26782605e70d",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/60/e7f8d389c93fec6fb47ddc8558b37e1a1a0858": "91792a3044ba388080a208f6df09e403",
".git/objects/33/52511095f5fea73b93f5dd59abfbb009caa3d2": "aef311ea74c46853816a0f39323f3043",
".git/objects/ac/2fdbf8e944aa05949c78ae4e8dab2a6754a34e": "05ce3f1070ed692f9d28d1997b4077a3",
".git/objects/d0/44836c481b1590d818b5c1591545e4ef895d02": "1482077972edff10c3b895f7ce2808f8",
".git/objects/be/083326c9ff34344e1eb8e64a0180f0cd4fb5de": "037562ce8f115a9c6023fc0d651a8f04",
".git/objects/be/1a594c040d9220a3165e7395a4641bf73bcdd8": "2a8e87f5859209d4bf7dec3410a2daf3",
".git/objects/da/67ee40e6e56ed34e2d7369963c19a1816890cb": "0c9d096c3ce7e3e6876c71249bf7a4eb",
".git/objects/b4/8ad8c25608a3e2ba227a04228c49e3f94e3f64": "231cb64ec3cc5fe28388e49f11b58561",
".git/objects/d6/55c1abe1947eba60c0df28e2d4e3cfea9d183b": "ba518566e8882166620e9a8ce7fe6421",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/bfec60719fd7f9b190c1490c7e1b623a4f1b86": "11ed44054854e8d18b5e5062cac6c68b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/c07f60be7f5241ee827e509c9039e72a050cb4": "e77c9f03dea93e5e4a517d84b74467d0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/328d0e9f8894527f43518868b5c8cf26310962": "05dbca58c227fa1909d56719feb893c8",
".git/objects/c1/89a708f72cbf7fed529e75af62e3ccdba5bf80": "689aa0f02c2a1f54ec5659a77f548254",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/42/cc9e5345ae42ce95d047dc6b4b3c93b665258e": "5b32fdc476a4ad8d3d36f9e33f1b5801",
".git/objects/89/001e6f6d13cf741a9c9a498fa6db749c932713": "df9d2fa8da08a1d89a0f16c061a7631e",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/17/7208132643a20fd0511113d7310219a013c7c3": "a5230087c52d6c3cb5cac0e322d31581",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/7b150fcd64b2cc426174b6bcc5a7d46b7f19df": "b8f960f371084ac54d2cd9f53639e386",
".git/objects/81/6792d0e30995fd5e6e30653a244e65edba0c67": "94cfce5a6ff0d7d761fb8f2d72f8568e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/ac6e9ddbeb3f17f17187cb2c8a31c1a87173ad": "4293ad3523ff67c9555a0b007aa04f98",
".git/objects/00/b424bf66848f8a9677aa9399732a7f14eb366c": "2ce5dd010ca47d412db4e6bc9e2e2c67",
".git/objects/5d/af7cd48cffa70dfa1c28915b0200c6b2b7bdfa": "bf3674f3c0a0e157b8f7efbb3f8b2796",
".git/objects/5b/480eaf84d9cbe0d633920ca5a5d26ae3fe20e7": "99026770d5b165594573b6a653fbd05b",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/ba/bc30f82f96e4ed9289e7e0c1172b1b15cf2025": "b99bdf66618128bdfbbe717e727302ab",
".git/objects/ba/472d85424367607e9a894836d4444947add6eb": "485584d7ae13dc81522961c71c5b28c2",
".git/objects/a9/f1dd28e97e3a2572e7efe2a6acc629d1b57178": "ffe01c23e003a343a55726e17fe83663",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/00db7377c64093fb82d6e75ae0ef7fd6daa611": "d316152ed4b1918e5bf2927b54b87229",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f0/675f96ba8e1a7d711c9c6daea624bb30dca537": "138140095e940dc6b2ab04c110bd910d",
".git/objects/f7/aaa330ecb839010ec49474e317301847c10901": "a4226d68513d42f620fa0e7f38649640",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/f59b52488aba520f487b5ecf91261f8f2bc040": "099a1ed9823f09f178071fa0ba634635",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/83/e0d7e0418590b9dd5aa09f1d6dafb820e61abf": "9ce4eb6e4df39dab91fe5958b1e237a4",
".git/objects/4a/d5d9354d74e0532ecfe06fc7a59876fe01d93e": "ac19b8f3621a026b53e5d733647c0f14",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1c/18833a858410ac67344084ce02a1aa3b8e9aec": "8d3df2fd9dfdfb87dec7f6d62885e06c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ed5fd085e7661b82439b1153e162437c",
".git/logs/refs/heads/main": "ed5fd085e7661b82439b1153e162437c",
".git/logs/refs/remotes/origin/main": "1d8ea612b98402290546c42b19e91208",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "b3ac999231210135098986de9e448d55",
".git/refs/remotes/origin/main": "b3ac999231210135098986de9e448d55",
".git/index": "0356a6f9e43d00ec71b741b28e046cd4",
".git/COMMIT_EDITMSG": "cf50063bd1845008d6517fc11c9caecd",
".git/FETCH_HEAD": "8f1746686f9e5784937bc8a2732e3719",
"assets/AssetManifest.json": "0fc6f555aab32c21bda9401abdf77836",
"assets/NOTICES": "b7809189c1a5a12946be19bf790697a8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "549037c94851dfd6e34f280588a7320f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "800c01a8c1761c941fd614061fb92201",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "820c7fa5ef3f569494af81acabd2ab4c",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f49ad9ab1ab68ebbbeed64dda7b8d2ff",
"assets/fonts/MaterialIcons-Regular.otf": "e9a9d5b9a3088f75dca4867c3abde1a4",
"assets/assets/icon.png": "8a9b7af23913e7e415adbbabf765d61a",
"assets/assets/dotenv": "90c876fdac60af079ebf039f5738839e",
"assets/assets/appstore.png": "c6a4fcddb304cfdd88058c52f5440da3",
"assets/assets/placeholder.jpg": "0f4240f12b4b9aeae326441e0a413a0f",
"assets/assets/logo.png": "2a9636087c15d6a8491d4d069df75f58",
"assets/assets/google_play.png": "7592e3cc153ee8f531a16c146b821d4d",
"assets/assets/whatsapp.png": "6c4591090164213f17232d8a47213d60",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
