/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5c57e5afb10acd9357946d4b46e99103"
  },
  {
    "url": "assets/css/0.styles.00dee76e.css",
    "revision": "79c22f5c34ed7922eb6e3e06f850d902"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.967cfba5.js",
    "revision": "44aa4b52f3cdd0b25083fd897bab5f87"
  },
  {
    "url": "assets/js/11.1806bbd7.js",
    "revision": "25d2a53cac08f3b2887052bb079dc61e"
  },
  {
    "url": "assets/js/12.a066fc58.js",
    "revision": "4398653e587a65709371affcbade959e"
  },
  {
    "url": "assets/js/13.d0df3d6f.js",
    "revision": "6591638e966b271bbb266d1318131541"
  },
  {
    "url": "assets/js/14.0f4e27fb.js",
    "revision": "0ca08c179be5107ec387385a281d2965"
  },
  {
    "url": "assets/js/15.77d01d97.js",
    "revision": "cdd124e0ba9b1c11d5129fb8c1d09148"
  },
  {
    "url": "assets/js/16.a017da8c.js",
    "revision": "c16c936570f1f908cea7e5030c99243b"
  },
  {
    "url": "assets/js/17.d7700725.js",
    "revision": "d03637d63ed0ab0f85c407634d8cfa19"
  },
  {
    "url": "assets/js/18.100c83ec.js",
    "revision": "5cfeb235f2f459f9c23f282d16b5fb20"
  },
  {
    "url": "assets/js/19.503e247d.js",
    "revision": "0da94e3ffe72e0f171df6143761f9936"
  },
  {
    "url": "assets/js/2.1901594a.js",
    "revision": "02861f73bd4ec1358da5b1837f9c1313"
  },
  {
    "url": "assets/js/20.c2dfd6bd.js",
    "revision": "31bfe7f27540bda5085ac2f2c4d6a0d7"
  },
  {
    "url": "assets/js/21.f2e484a3.js",
    "revision": "d614bff1de9530d2a0b8c9de180204ed"
  },
  {
    "url": "assets/js/3.8e3852ee.js",
    "revision": "5fed8fc9b7bb23b5420a9748d875453c"
  },
  {
    "url": "assets/js/4.1912b1d1.js",
    "revision": "6dde4e6cfc7f0f38c901221155ca84cb"
  },
  {
    "url": "assets/js/5.cdd0e708.js",
    "revision": "39370562d43317d0f046af2f4f02d215"
  },
  {
    "url": "assets/js/6.0d345af3.js",
    "revision": "f6ed883c67c42f95f0e9a8de3176cc0f"
  },
  {
    "url": "assets/js/7.f67eeb58.js",
    "revision": "7f089585f59ba2f55782c86a9f4d43aa"
  },
  {
    "url": "assets/js/8.8fcde645.js",
    "revision": "38ff4e009aed08fd6df0f0829732ef4c"
  },
  {
    "url": "assets/js/9.da5a381e.js",
    "revision": "d1ea58a601cb1e3899b6c5ded6a6fd7b"
  },
  {
    "url": "assets/js/app.2c3a68ab.js",
    "revision": "003e49d57c8b3eb9b866fe2334ea8d20"
  },
  {
    "url": "guide/index.html",
    "revision": "3edcf976f540b7d06d8c8b91f67c0cb8"
  },
  {
    "url": "guide/integrate-with-gitlab-ci.html",
    "revision": "7716cabaad86aa371dba87a30d4dac8f"
  },
  {
    "url": "guide/integrate-with-jenkins.html",
    "revision": "7e516d7c6af74545c201f1821bb89426"
  },
  {
    "url": "guide/jenkins-android.html",
    "revision": "e9859704c7c7025a568ffad99408a36a"
  },
  {
    "url": "guide/jenkins-ios.html",
    "revision": "4400208cd1fe226b01e8aadabeb336ac"
  },
  {
    "url": "guide/jenkins-web.html",
    "revision": "085981057e705da8494605465fedc6c7"
  },
  {
    "url": "guide/reliable-cli.html",
    "revision": "5e19d2e52dc012ffc599966f6217d62f"
  },
  {
    "url": "guide/reliable-web-deploy.html",
    "revision": "e0107ad8cbd3b1efc2755770a4627809"
  },
  {
    "url": "index.html",
    "revision": "d3f13b0111bf6dcfbf0817e8532df815"
  },
  {
    "url": "logo/reliable.svg",
    "revision": "b34e8a8f81b1ba112b58e859061f289c"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "f5a699a99ecced25bb75dc9c57f945d1"
  },
  {
    "url": "zh/guide/integrate-with-gitlab-ci.html",
    "revision": "80d11bd4bae782a77f71740393dab336"
  },
  {
    "url": "zh/guide/integrate-with-jenkins.html",
    "revision": "733a06bea6e535eb0662f32fdec4790b"
  },
  {
    "url": "zh/guide/jenkins-android.html",
    "revision": "ad240938ca813e72d2b84182cf3a2428"
  },
  {
    "url": "zh/guide/jenkins-ios.html",
    "revision": "70d9c6404f8682189eedaf7671e72c2b"
  },
  {
    "url": "zh/guide/jenkins-web.html",
    "revision": "6a654960ef449f834793265c4af70da8"
  },
  {
    "url": "zh/guide/reliable-cli.html",
    "revision": "9eb0d1066291b8b031d4eda1c417319f"
  },
  {
    "url": "zh/guide/reliable-web-deploy.html",
    "revision": "07f82974b63a18c419a08680d0ef525c"
  },
  {
    "url": "zh/index.html",
    "revision": "b1037a588006c8eebc3ef4597851e97a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
