!function(e){var n={};function t(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(2),l=t.n(o);Nova.booting(function(e,n){n.beforeEach(function(e,n,t){setTimeout(function(){l()(0)},100),t()})})},function(e,n,t){(function(){"use strict";function t(e){for(var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],t={speed:500,minDuration:250,maxDuration:1500,cancelOnUserAction:!0,element:window,horizontal:!1,onComplete:void 0,passive:!0,offset:0},o=Object.keys(t),l=0;l<o.length;l++){var i=o[l];void 0!==n[i]&&(t[i]=n[i])}if(!t.cancelOnUserAction&&t.passive&&(t.passive=!1,n.passive&&console&&console.warn('animated-scroll-to:\n "passive" was set to "false" to prevent errors, as using "cancelOnUserAction: false" doesn\'t work with passive events.')),e instanceof HTMLElement)if(n.element&&n.element instanceof HTMLElement)e=t.horizontal?e.getBoundingClientRect().left+n.element.scrollLeft-n.element.getBoundingClientRect().left:e.getBoundingClientRect().top+n.element.scrollTop-n.element.getBoundingClientRect().top;else if(t.horizontal){var c=window.scrollX||document.documentElement.scrollLeft;e=c+e.getBoundingClientRect().left}else{var r=window.scrollY||document.documentElement.scrollTop;e=r+e.getBoundingClientRect().top}e+=t.offset,t.isWindow=t.element===window;var s=null,d=0,m=null;t.isWindow?t.horizontal?(s=window.scrollX||document.documentElement.scrollLeft,d=window.scrollY||document.documentElement.scrollTop,m=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)-window.innerWidth):(s=window.scrollY||document.documentElement.scrollTop,d=window.scrollX||document.documentElement.scrollLeft,m=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight):t.horizontal?(s=t.element.scrollLeft,m=t.element.scrollWidth-t.element.clientWidth):(s=t.element.scrollTop,m=t.element.scrollHeight-t.element.clientHeight),e>m&&(e=m);var u=e-s;if(0!==u){var a=Math.abs(Math.round(u/1e3*t.speed));a<t.minDuration?a=t.minDuration:a>t.maxDuration&&(a=t.maxDuration);var f=Date.now(),w=null,v=null,p={passive:t.passive};t.cancelOnUserAction?(v=function(){h(),cancelAnimationFrame(w)},window.addEventListener("keydown",v,p),window.addEventListener("mousedown",v,p)):(v=function(e){e.preventDefault()},window.addEventListener("scroll",v,p)),window.addEventListener("wheel",v,p),window.addEventListener("touchstart",v,p);var h=function(){window.removeEventListener("wheel",v,p),window.removeEventListener("touchstart",v,p),t.cancelOnUserAction?(window.removeEventListener("keydown",v,p),window.removeEventListener("mousedown",v,p)):window.removeEventListener("scroll",v,p)},g=function(){var n=Date.now()-f,o=n/a-1,l=o*o*o+1,i=Math.round(s+u*l),c=function(e){t.isWindow?t.horizontal?t.element.scrollTo(e,d):t.element.scrollTo(d,e):t.horizontal?t.element.scrollLeft=e:t.element.scrollTop=e};n<a&&i!==e?(c(i),w=requestAnimationFrame(g)):(c(e),cancelAnimationFrame(w),h(),t.onComplete&&"function"==typeof t.onComplete&&t.onComplete())};w=requestAnimationFrame(g)}else t.onComplete&&"function"==typeof t.onComplete&&t.onComplete()}void 0!==e&&e.exports&&(e.exports=t,n=e.exports),n.default=t}).call(this)}]);