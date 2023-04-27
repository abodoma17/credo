// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"97gWQ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _web3 = require("web3");
var _web3Default = parcelHelpers.interopDefault(_web3);
var _bootstrapCss = require("bootstrap/dist/css/bootstrap.css");
var _batchesJson = require("../build/contracts/Batches.json");
var _batchesJsonDefault = parcelHelpers.interopDefault(_batchesJson);
const CONTRACT_ADDRESS = (0, _batchesJsonDefault.default).networks["5777"].address;
const CONTRACT_ABI = (0, _batchesJsonDefault.default).abi;
const web3 = new (0, _web3Default.default)((0, _web3Default.default).givenProvider || "http://127.0.0.1:7545");
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
let account;
const accountEl = document.getElementById("account");
const batchesEl = document.getElementById("batches");
document.getElementById("button1").onclick = createBat;
async function createBat() {
    const batchNum = parseInt(document.getElementById("inputBatch").value);
    console.log(batchNum);
    await contract.methods._createBatch(batchNum).send({
        from: account
    });
    console.log("done");
}
const main = async ()=>{
    const accounts = await web3.eth.requestAccounts();
    account = accounts[0];
    accountEl.innerText = account;
};
main();

},{"web3":"caAX1","bootstrap/dist/css/bootstrap.css":"jJvnD","../build/contracts/Batches.json":"cOTXN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jJvnD":[function() {},{}],"cOTXN":[function(require,module,exports) {
module.exports = JSON.parse('{"contractName":"Batches","abi":[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"batches","outputs":[{"internalType":"uint256","name":"batchNumber","type":"uint256"},{"internalType":"address","name":"ownerAddress","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_batchNumber","type":"uint256"}],"name":"_createBatch","outputs":[],"stateMutability":"nonpayable","type":"function"}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.8.19+commit.7dd6d404\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_batchNumber\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"_createBatch\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"batches\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"batchNumber\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"ownerAddress\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"owner\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"kind\\":\\"dev\\",\\"methods\\":{},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{},\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"project:/contracts/Batches.sol\\":\\"Batches\\"},\\"evmVersion\\":\\"paris\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\"},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"project:/contracts/Batches.sol\\":{\\"keccak256\\":\\"0x42f2aaddd9bcf845fa3540949878ebdf8a57f98d5e98dfa44369cffec8053932\\",\\"license\\":\\"SEE LICENSE IN LICENSE\\",\\"urls\\":[\\"bzz-raw://0a96b52a2550b31d6a039cef65c52704e5a77f67ad170986480f27a31dd76f45\\",\\"dweb:/ipfs/QmWDsXriqeTAmN2LwSSV46VvWHHYiR3DZWysmexSkiDfMA\\"]}},\\"version\\":1}","bytecode":"0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561005057600080fd5b50610307806100606000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632e00e43d146100465780638da5cb5b14610062578063b32c4d8d14610080575b600080fd5b610060600480360381019061005b9190610210565b6100b1565b005b61006a61015d565b604051610077919061027e565b60405180910390f35b61009a60048036038101906100959190610210565b610181565b6040516100a89291906102a8565b60405180910390f35b600160405180604001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff1681525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6001818154811061019157600080fd5b90600052602060002090600202016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b600080fd5b6000819050919050565b6101ed816101da565b81146101f857600080fd5b50565b60008135905061020a816101e4565b92915050565b600060208284031215610226576102256101d5565b5b6000610234848285016101fb565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102688261023d565b9050919050565b6102788161025d565b82525050565b6000602082019050610293600083018461026f565b92915050565b6102a2816101da565b82525050565b60006040820190506102bd6000830185610299565b6102ca602083018461026f565b939250505056fea26469706673582212201280e90a794564ff0cffb00f22bfeccab5c49347ae48f14293f38393f5da293764736f6c63430008130033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100415760003560e01c80632e00e43d146100465780638da5cb5b14610062578063b32c4d8d14610080575b600080fd5b610060600480360381019061005b9190610210565b6100b1565b005b61006a61015d565b604051610077919061027e565b60405180910390f35b61009a60048036038101906100959190610210565b610181565b6040516100a89291906102a8565b60405180910390f35b600160405180604001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff1681525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6001818154811061019157600080fd5b90600052602060002090600202016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b600080fd5b6000819050919050565b6101ed816101da565b81146101f857600080fd5b50565b60008135905061020a816101e4565b92915050565b600060208284031215610226576102256101d5565b5b6000610234848285016101fb565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102688261023d565b9050919050565b6102788161025d565b82525050565b6000602082019050610293600083018461026f565b92915050565b6102a2816101da565b82525050565b60006040820190506102bd6000830185610299565b6102ca602083018461026f565b939250505056fea26469706673582212201280e90a794564ff0cffb00f22bfeccab5c49347ae48f14293f38393f5da293764736f6c63430008130033","immutableReferences":{},"generatedSources":[],"deployedGeneratedSources":[{"ast":{"nodeType":"YulBlock","src":"0:2070:15","statements":[{"body":{"nodeType":"YulBlock","src":"47:35:15","statements":[{"nodeType":"YulAssignment","src":"57:19:15","value":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"73:2:15","type":"","value":"64"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"67:5:15"},"nodeType":"YulFunctionCall","src":"67:9:15"},"variableNames":[{"name":"memPtr","nodeType":"YulIdentifier","src":"57:6:15"}]}]},"name":"allocate_unbounded","nodeType":"YulFunctionDefinition","returnVariables":[{"name":"memPtr","nodeType":"YulTypedName","src":"40:6:15","type":""}],"src":"7:75:15"},{"body":{"nodeType":"YulBlock","src":"177:28:15","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"194:1:15","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"197:1:15","type":"","value":"0"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"187:6:15"},"nodeType":"YulFunctionCall","src":"187:12:15"},"nodeType":"YulExpressionStatement","src":"187:12:15"}]},"name":"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b","nodeType":"YulFunctionDefinition","src":"88:117:15"},{"body":{"nodeType":"YulBlock","src":"300:28:15","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"317:1:15","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"320:1:15","type":"","value":"0"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"310:6:15"},"nodeType":"YulFunctionCall","src":"310:12:15"},"nodeType":"YulExpressionStatement","src":"310:12:15"}]},"name":"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db","nodeType":"YulFunctionDefinition","src":"211:117:15"},{"body":{"nodeType":"YulBlock","src":"379:32:15","statements":[{"nodeType":"YulAssignment","src":"389:16:15","value":{"name":"value","nodeType":"YulIdentifier","src":"400:5:15"},"variableNames":[{"name":"cleaned","nodeType":"YulIdentifier","src":"389:7:15"}]}]},"name":"cleanup_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"361:5:15","type":""}],"returnVariables":[{"name":"cleaned","nodeType":"YulTypedName","src":"371:7:15","type":""}],"src":"334:77:15"},{"body":{"nodeType":"YulBlock","src":"460:79:15","statements":[{"body":{"nodeType":"YulBlock","src":"517:16:15","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"526:1:15","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"529:1:15","type":"","value":"0"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"519:6:15"},"nodeType":"YulFunctionCall","src":"519:12:15"},"nodeType":"YulExpressionStatement","src":"519:12:15"}]},"condition":{"arguments":[{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"483:5:15"},{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"508:5:15"}],"functionName":{"name":"cleanup_t_uint256","nodeType":"YulIdentifier","src":"490:17:15"},"nodeType":"YulFunctionCall","src":"490:24:15"}],"functionName":{"name":"eq","nodeType":"YulIdentifier","src":"480:2:15"},"nodeType":"YulFunctionCall","src":"480:35:15"}],"functionName":{"name":"iszero","nodeType":"YulIdentifier","src":"473:6:15"},"nodeType":"YulFunctionCall","src":"473:43:15"},"nodeType":"YulIf","src":"470:63:15"}]},"name":"validator_revert_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"453:5:15","type":""}],"src":"417:122:15"},{"body":{"nodeType":"YulBlock","src":"597:87:15","statements":[{"nodeType":"YulAssignment","src":"607:29:15","value":{"arguments":[{"name":"offset","nodeType":"YulIdentifier","src":"629:6:15"}],"functionName":{"name":"calldataload","nodeType":"YulIdentifier","src":"616:12:15"},"nodeType":"YulFunctionCall","src":"616:20:15"},"variableNames":[{"name":"value","nodeType":"YulIdentifier","src":"607:5:15"}]},{"expression":{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"672:5:15"}],"functionName":{"name":"validator_revert_t_uint256","nodeType":"YulIdentifier","src":"645:26:15"},"nodeType":"YulFunctionCall","src":"645:33:15"},"nodeType":"YulExpressionStatement","src":"645:33:15"}]},"name":"abi_decode_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"offset","nodeType":"YulTypedName","src":"575:6:15","type":""},{"name":"end","nodeType":"YulTypedName","src":"583:3:15","type":""}],"returnVariables":[{"name":"value","nodeType":"YulTypedName","src":"591:5:15","type":""}],"src":"545:139:15"},{"body":{"nodeType":"YulBlock","src":"756:263:15","statements":[{"body":{"nodeType":"YulBlock","src":"802:83:15","statements":[{"expression":{"arguments":[],"functionName":{"name":"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b","nodeType":"YulIdentifier","src":"804:77:15"},"nodeType":"YulFunctionCall","src":"804:79:15"},"nodeType":"YulExpressionStatement","src":"804:79:15"}]},"condition":{"arguments":[{"arguments":[{"name":"dataEnd","nodeType":"YulIdentifier","src":"777:7:15"},{"name":"headStart","nodeType":"YulIdentifier","src":"786:9:15"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"773:3:15"},"nodeType":"YulFunctionCall","src":"773:23:15"},{"kind":"number","nodeType":"YulLiteral","src":"798:2:15","type":"","value":"32"}],"functionName":{"name":"slt","nodeType":"YulIdentifier","src":"769:3:15"},"nodeType":"YulFunctionCall","src":"769:32:15"},"nodeType":"YulIf","src":"766:119:15"},{"nodeType":"YulBlock","src":"895:117:15","statements":[{"nodeType":"YulVariableDeclaration","src":"910:15:15","value":{"kind":"number","nodeType":"YulLiteral","src":"924:1:15","type":"","value":"0"},"variables":[{"name":"offset","nodeType":"YulTypedName","src":"914:6:15","type":""}]},{"nodeType":"YulAssignment","src":"939:63:15","value":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"974:9:15"},{"name":"offset","nodeType":"YulIdentifier","src":"985:6:15"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"970:3:15"},"nodeType":"YulFunctionCall","src":"970:22:15"},{"name":"dataEnd","nodeType":"YulIdentifier","src":"994:7:15"}],"functionName":{"name":"abi_decode_t_uint256","nodeType":"YulIdentifier","src":"949:20:15"},"nodeType":"YulFunctionCall","src":"949:53:15"},"variableNames":[{"name":"value0","nodeType":"YulIdentifier","src":"939:6:15"}]}]}]},"name":"abi_decode_tuple_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"726:9:15","type":""},{"name":"dataEnd","nodeType":"YulTypedName","src":"737:7:15","type":""}],"returnVariables":[{"name":"value0","nodeType":"YulTypedName","src":"749:6:15","type":""}],"src":"690:329:15"},{"body":{"nodeType":"YulBlock","src":"1070:81:15","statements":[{"nodeType":"YulAssignment","src":"1080:65:15","value":{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"1095:5:15"},{"kind":"number","nodeType":"YulLiteral","src":"1102:42:15","type":"","value":"0xffffffffffffffffffffffffffffffffffffffff"}],"functionName":{"name":"and","nodeType":"YulIdentifier","src":"1091:3:15"},"nodeType":"YulFunctionCall","src":"1091:54:15"},"variableNames":[{"name":"cleaned","nodeType":"YulIdentifier","src":"1080:7:15"}]}]},"name":"cleanup_t_uint160","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"1052:5:15","type":""}],"returnVariables":[{"name":"cleaned","nodeType":"YulTypedName","src":"1062:7:15","type":""}],"src":"1025:126:15"},{"body":{"nodeType":"YulBlock","src":"1202:51:15","statements":[{"nodeType":"YulAssignment","src":"1212:35:15","value":{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"1241:5:15"}],"functionName":{"name":"cleanup_t_uint160","nodeType":"YulIdentifier","src":"1223:17:15"},"nodeType":"YulFunctionCall","src":"1223:24:15"},"variableNames":[{"name":"cleaned","nodeType":"YulIdentifier","src":"1212:7:15"}]}]},"name":"cleanup_t_address","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"1184:5:15","type":""}],"returnVariables":[{"name":"cleaned","nodeType":"YulTypedName","src":"1194:7:15","type":""}],"src":"1157:96:15"},{"body":{"nodeType":"YulBlock","src":"1324:53:15","statements":[{"expression":{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"1341:3:15"},{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"1364:5:15"}],"functionName":{"name":"cleanup_t_address","nodeType":"YulIdentifier","src":"1346:17:15"},"nodeType":"YulFunctionCall","src":"1346:24:15"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"1334:6:15"},"nodeType":"YulFunctionCall","src":"1334:37:15"},"nodeType":"YulExpressionStatement","src":"1334:37:15"}]},"name":"abi_encode_t_address_to_t_address_fromStack","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"1312:5:15","type":""},{"name":"pos","nodeType":"YulTypedName","src":"1319:3:15","type":""}],"src":"1259:118:15"},{"body":{"nodeType":"YulBlock","src":"1481:124:15","statements":[{"nodeType":"YulAssignment","src":"1491:26:15","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1503:9:15"},{"kind":"number","nodeType":"YulLiteral","src":"1514:2:15","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1499:3:15"},"nodeType":"YulFunctionCall","src":"1499:18:15"},"variableNames":[{"name":"tail","nodeType":"YulIdentifier","src":"1491:4:15"}]},{"expression":{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"1571:6:15"},{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1584:9:15"},{"kind":"number","nodeType":"YulLiteral","src":"1595:1:15","type":"","value":"0"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1580:3:15"},"nodeType":"YulFunctionCall","src":"1580:17:15"}],"functionName":{"name":"abi_encode_t_address_to_t_address_fromStack","nodeType":"YulIdentifier","src":"1527:43:15"},"nodeType":"YulFunctionCall","src":"1527:71:15"},"nodeType":"YulExpressionStatement","src":"1527:71:15"}]},"name":"abi_encode_tuple_t_address__to_t_address__fromStack_reversed","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"1453:9:15","type":""},{"name":"value0","nodeType":"YulTypedName","src":"1465:6:15","type":""}],"returnVariables":[{"name":"tail","nodeType":"YulTypedName","src":"1476:4:15","type":""}],"src":"1383:222:15"},{"body":{"nodeType":"YulBlock","src":"1676:53:15","statements":[{"expression":{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"1693:3:15"},{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"1716:5:15"}],"functionName":{"name":"cleanup_t_uint256","nodeType":"YulIdentifier","src":"1698:17:15"},"nodeType":"YulFunctionCall","src":"1698:24:15"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"1686:6:15"},"nodeType":"YulFunctionCall","src":"1686:37:15"},"nodeType":"YulExpressionStatement","src":"1686:37:15"}]},"name":"abi_encode_t_uint256_to_t_uint256_fromStack","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"1664:5:15","type":""},{"name":"pos","nodeType":"YulTypedName","src":"1671:3:15","type":""}],"src":"1611:118:15"},{"body":{"nodeType":"YulBlock","src":"1861:206:15","statements":[{"nodeType":"YulAssignment","src":"1871:26:15","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1883:9:15"},{"kind":"number","nodeType":"YulLiteral","src":"1894:2:15","type":"","value":"64"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1879:3:15"},"nodeType":"YulFunctionCall","src":"1879:18:15"},"variableNames":[{"name":"tail","nodeType":"YulIdentifier","src":"1871:4:15"}]},{"expression":{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"1951:6:15"},{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1964:9:15"},{"kind":"number","nodeType":"YulLiteral","src":"1975:1:15","type":"","value":"0"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1960:3:15"},"nodeType":"YulFunctionCall","src":"1960:17:15"}],"functionName":{"name":"abi_encode_t_uint256_to_t_uint256_fromStack","nodeType":"YulIdentifier","src":"1907:43:15"},"nodeType":"YulFunctionCall","src":"1907:71:15"},"nodeType":"YulExpressionStatement","src":"1907:71:15"},{"expression":{"arguments":[{"name":"value1","nodeType":"YulIdentifier","src":"2032:6:15"},{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"2045:9:15"},{"kind":"number","nodeType":"YulLiteral","src":"2056:2:15","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"2041:3:15"},"nodeType":"YulFunctionCall","src":"2041:18:15"}],"functionName":{"name":"abi_encode_t_address_to_t_address_fromStack","nodeType":"YulIdentifier","src":"1988:43:15"},"nodeType":"YulFunctionCall","src":"1988:72:15"},"nodeType":"YulExpressionStatement","src":"1988:72:15"}]},"name":"abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"1825:9:15","type":""},{"name":"value1","nodeType":"YulTypedName","src":"1837:6:15","type":""},{"name":"value0","nodeType":"YulTypedName","src":"1845:6:15","type":""}],"returnVariables":[{"name":"tail","nodeType":"YulTypedName","src":"1856:4:15","type":""}],"src":"1735:332:15"}]},"contents":"{\\n\\n    function allocate_unbounded() -> memPtr {\\n        memPtr := mload(64)\\n    }\\n\\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\\n        revert(0, 0)\\n    }\\n\\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\\n        revert(0, 0)\\n    }\\n\\n    function cleanup_t_uint256(value) -> cleaned {\\n        cleaned := value\\n    }\\n\\n    function validator_revert_t_uint256(value) {\\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\\n    }\\n\\n    function abi_decode_t_uint256(offset, end) -> value {\\n        value := calldataload(offset)\\n        validator_revert_t_uint256(value)\\n    }\\n\\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\\n\\n        {\\n\\n            let offset := 0\\n\\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\\n        }\\n\\n    }\\n\\n    function cleanup_t_uint160(value) -> cleaned {\\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\\n    }\\n\\n    function cleanup_t_address(value) -> cleaned {\\n        cleaned := cleanup_t_uint160(value)\\n    }\\n\\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\\n        mstore(pos, cleanup_t_address(value))\\n    }\\n\\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\\n        tail := add(headStart, 32)\\n\\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\\n\\n    }\\n\\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\\n        mstore(pos, cleanup_t_uint256(value))\\n    }\\n\\n    function abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed(headStart , value1, value0) -> tail {\\n        tail := add(headStart, 64)\\n\\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\\n\\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\\n\\n    }\\n\\n}\\n","id":15,"language":"Yul","name":"#utility.yul"}],"sourceMap":"88:544:13:-:0;;;179:10;156:33;;;;;;;;;;;;;;;;;;;;88:544;;;;;;;;;;;;;;;;","deployedSourceMap":"88:544:13:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;514:115;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;156:33;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;408:22;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;:::-;;;;;;;;514:115;576:7;589:31;;;;;;;;595:12;589:31;;;;609:10;589:31;;;;;576:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;514:115;:::o;156:33::-;;;;;;;;;;;;:::o;408:22::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;88:117:15:-;197:1;194;187:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:126::-;1062:7;1102:42;1095:5;1091:54;1080:65;;1025:126;;;:::o;1157:96::-;1194:7;1223:24;1241:5;1223:24;:::i;:::-;1212:35;;1157:96;;;:::o;1259:118::-;1346:24;1364:5;1346:24;:::i;:::-;1341:3;1334:37;1259:118;;:::o;1383:222::-;1476:4;1514:2;1503:9;1499:18;1491:26;;1527:71;1595:1;1584:9;1580:17;1571:6;1527:71;:::i;:::-;1383:222;;;;:::o;1611:118::-;1698:24;1716:5;1698:24;:::i;:::-;1693:3;1686:37;1611:118;;:::o;1735:332::-;1856:4;1894:2;1883:9;1879:18;1871:26;;1907:71;1975:1;1964:9;1960:17;1951:6;1907:71;:::i;:::-;1988:72;2056:2;2045:9;2041:18;2032:6;1988:72;:::i;:::-;1735:332;;;;;:::o","source":"// SPDX-License-Identifier: SEE LICENSE IN LICENSE\\r\\npragma solidity >=0.4.22 <0.9.0;\\r\\n\\r\\ncontract Batches {\\r\\n    //Owner of the invoker of the contract\\r\\n    address public owner = msg.sender;\\r\\n    \\r\\n    //Struct (object) batch contains batchNumber and owner\'s address\\r\\n    struct Batch {\\r\\n        uint256 batchNumber;\\r\\n        address ownerAddress;\\r\\n    }\\r\\n\\r\\n    //Array of batches that has dynamic size\\r\\n    Batch[] public batches;\\r\\n\\r\\n    //Creates batch, adds to array of batches -> address taken from above\\r\\n    function _createBatch(uint256 _batchNumber) public {\\r\\n        batches.push(Batch(_batchNumber, msg.sender));\\r\\n    }\\r\\n}","sourcePath":"D:\\\\Grad Project\\\\Project 2\\\\NFT\\\\credo\\\\contracts\\\\Batches.sol","ast":{"absolutePath":"project:/contracts/Batches.sol","exportedSymbols":{"Batches":[2859]},"id":2860,"license":"SEE LICENSE IN LICENSE","nodeType":"SourceUnit","nodes":[{"id":2829,"literals":["solidity",">=","0.4",".22","<","0.9",".0"],"nodeType":"PragmaDirective","src":"52:32:13"},{"abstract":false,"baseContracts":[],"canonicalName":"Batches","contractDependencies":[],"contractKind":"contract","fullyImplemented":true,"id":2859,"linearizedBaseContracts":[2859],"name":"Batches","nameLocation":"97:7:13","nodeType":"ContractDefinition","nodes":[{"constant":false,"functionSelector":"8da5cb5b","id":2833,"mutability":"mutable","name":"owner","nameLocation":"171:5:13","nodeType":"VariableDeclaration","scope":2859,"src":"156:33:13","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":2830,"name":"address","nodeType":"ElementaryTypeName","src":"156:7:13","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":{"expression":{"id":2831,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"179:3:13","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":2832,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberLocation":"183:6:13","memberName":"sender","nodeType":"MemberAccess","src":"179:10:13","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"public"},{"canonicalName":"Batches.Batch","id":2838,"members":[{"constant":false,"id":2835,"mutability":"mutable","name":"batchNumber","nameLocation":"304:11:13","nodeType":"VariableDeclaration","scope":2838,"src":"296:19:13","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":2834,"name":"uint256","nodeType":"ElementaryTypeName","src":"296:7:13","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"constant":false,"id":2837,"mutability":"mutable","name":"ownerAddress","nameLocation":"334:12:13","nodeType":"VariableDeclaration","scope":2838,"src":"326:20:13","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":2836,"name":"address","nodeType":"ElementaryTypeName","src":"326:7:13","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"name":"Batch","nameLocation":"279:5:13","nodeType":"StructDefinition","scope":2859,"src":"272:82:13","visibility":"public"},{"constant":false,"functionSelector":"b32c4d8d","id":2842,"mutability":"mutable","name":"batches","nameLocation":"423:7:13","nodeType":"VariableDeclaration","scope":2859,"src":"408:22:13","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Batch_$2838_storage_$dyn_storage","typeString":"struct Batches.Batch[]"},"typeName":{"baseType":{"id":2840,"nodeType":"UserDefinedTypeName","pathNode":{"id":2839,"name":"Batch","nameLocations":["408:5:13"],"nodeType":"IdentifierPath","referencedDeclaration":2838,"src":"408:5:13"},"referencedDeclaration":2838,"src":"408:5:13","typeDescriptions":{"typeIdentifier":"t_struct$_Batch_$2838_storage_ptr","typeString":"struct Batches.Batch"}},"id":2841,"nodeType":"ArrayTypeName","src":"408:7:13","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Batch_$2838_storage_$dyn_storage_ptr","typeString":"struct Batches.Batch[]"}},"visibility":"public"},{"body":{"id":2857,"nodeType":"Block","src":"565:64:13","statements":[{"expression":{"arguments":[{"arguments":[{"id":2851,"name":"_batchNumber","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":2844,"src":"595:12:13","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"expression":{"id":2852,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"609:3:13","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":2853,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberLocation":"613:6:13","memberName":"sender","nodeType":"MemberAccess","src":"609:10:13","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address","typeString":"address"}],"id":2850,"name":"Batch","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":2838,"src":"589:5:13","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Batch_$2838_storage_ptr_$","typeString":"type(struct Batches.Batch storage pointer)"}},"id":2854,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"nameLocations":[],"names":[],"nodeType":"FunctionCall","src":"589:31:13","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_struct$_Batch_$2838_memory_ptr","typeString":"struct Batches.Batch memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_struct$_Batch_$2838_memory_ptr","typeString":"struct Batches.Batch memory"}],"expression":{"id":2847,"name":"batches","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":2842,"src":"576:7:13","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Batch_$2838_storage_$dyn_storage","typeString":"struct Batches.Batch storage ref[] storage ref"}},"id":2849,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberLocation":"584:4:13","memberName":"push","nodeType":"MemberAccess","src":"576:12:13","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_array$_t_struct$_Batch_$2838_storage_$dyn_storage_ptr_$_t_struct$_Batch_$2838_storage_$returns$__$attached_to$_t_array$_t_struct$_Batch_$2838_storage_$dyn_storage_ptr_$","typeString":"function (struct Batches.Batch storage ref[] storage pointer,struct Batches.Batch storage ref)"}},"id":2855,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"nameLocations":[],"names":[],"nodeType":"FunctionCall","src":"576:45:13","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":2856,"nodeType":"ExpressionStatement","src":"576:45:13"}]},"functionSelector":"2e00e43d","id":2858,"implemented":true,"kind":"function","modifiers":[],"name":"_createBatch","nameLocation":"523:12:13","nodeType":"FunctionDefinition","parameters":{"id":2845,"nodeType":"ParameterList","parameters":[{"constant":false,"id":2844,"mutability":"mutable","name":"_batchNumber","nameLocation":"544:12:13","nodeType":"VariableDeclaration","scope":2858,"src":"536:20:13","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":2843,"name":"uint256","nodeType":"ElementaryTypeName","src":"536:7:13","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"535:22:13"},"returnParameters":{"id":2846,"nodeType":"ParameterList","parameters":[],"src":"565:0:13"},"scope":2859,"src":"514:115:13","stateMutability":"nonpayable","virtual":false,"visibility":"public"}],"scope":2860,"src":"88:544:13","usedErrors":[]}],"src":"52:580:13"},"compiler":{"name":"solc","version":"0.8.19+commit.7dd6d404.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{},"address":"0x54Ac46128cc2B723D0272AA29CEb59a2EB772B37","transactionHash":"0xccba2a1ec7fde6fc67ad593dc1896e189ed0155c2731e65d0cd1d36fa2241cbe"}},"schemaVersion":"3.4.13","updatedAt":"2023-04-27T01:18:04.295Z","networkType":"ethereum","devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}}');

},{}]},["97gWQ","bB7Pu"], "bB7Pu", "parcelRequiree8ef")

//# sourceMappingURL=index.3d214d75.js.map
