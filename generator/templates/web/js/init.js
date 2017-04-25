 /**
  * Init jud instance depending on the url params.
  * There are three ways to load jud bundles, depends on the
  * parameter 'loader' in the url:
  *
  *   + xhr: use XMLHttpRequest. Parameter 'page' should be
  *   the bundle's url.
  *   + source: use the transformed code itself. 'page' should
  *   be the transformed jud bundle.
  *
  * @param {String} bundle - It has different meaning depends on
  *   the type of loader.
  */
  

  
 (function () {
   function getUrlParam(key) {
     var reg = new RegExp('[?|&]' + key + '=([^&]+)')
     var match = location.search.match(reg)
     return match && match[1]
   }
   var loader = getUrlParam('loader') || 'xhr';
   var page = getUrlParam('page') || '../dist/index.js';
   window.jud.init({
     appId: location.href
     , loader: loader
     , source: page
     , rootId: 'jud'
   })
 })();

