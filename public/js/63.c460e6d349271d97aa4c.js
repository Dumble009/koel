(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{UnqE:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return $}));var i={itemsLimit:1e3};var s=void 0;function o(){o.init||(o.init=!0,s=-1!==function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(e.indexOf("Trident/")>0){var n=e.indexOf("rv:");return parseInt(e.substring(n+3,e.indexOf(".",n)),10)}var i=e.indexOf("Edge/");return i>0?parseInt(e.substring(i+5,e.indexOf(".",i)),10):-1}())}var r={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"resize-observer",attrs:{tabindex:"-1"}})},staticRenderFns:[],_scopeId:"data-v-b329ee4c",name:"resize-observer",methods:{notify:function(){this.$emit("notify")},addResizeHandlers:function(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.notify),this._w===this.$el.offsetWidth&&this._h===this.$el.offsetHeight||this.notify()},removeResizeHandlers:function(){this._resizeObject&&this._resizeObject.onload&&(!s&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.notify),delete this._resizeObject.onload)}},mounted:function(){var e=this;o(),this.$nextTick((function(){e._w=e.$el.offsetWidth,e._h=e.$el.offsetHeight}));var t=document.createElement("object");this._resizeObject=t,t.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),t.setAttribute("aria-hidden","true"),t.setAttribute("tabindex",-1),t.onload=this.addResizeHandlers,t.type="text/html",s&&this.$el.appendChild(t),t.data="about:blank",s||this.$el.appendChild(t)},beforeDestroy:function(){this.removeResizeHandlers()}};var l={version:"0.4.4",install:function(e){e.component("resize-observer",r)}},a=null;"undefined"!=typeof window?a=window.Vue:void 0!==e&&(a=e.Vue),a&&a.use(l);var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};var h=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.observer=null,this.frozen=!1,this.createObserver(n,i)}return u(e,[{key:"createObserver",value:function(e,t){var n,i,s,o,r,l,a,d=this;(this.observer&&this.destroyObserver(),this.frozen)||(this.options="function"==typeof(n=e)?{callback:n}:n,this.callback=this.options.callback,this.callback&&this.options.throttle&&(this.callback=(i=this.callback,s=this.options.throttle,o=void 0,r=void 0,l=void 0,(a=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];l=n,o&&e===r||(r=e,clearTimeout(o),o=setTimeout((function(){i.apply(void 0,[e].concat(c(l))),o=0}),s))})._clear=function(){clearTimeout(o)},a)),this.oldResult=void 0,this.observer=new IntersectionObserver((function(e){var t=e[0];if(d.callback){var n=t.isIntersecting&&t.intersectionRatio>=d.threshold;if(n===d.oldResult)return;d.oldResult=n,d.callback(n,t),n&&d.options.once&&(d.frozen=!0,d.destroyObserver())}}),this.options.intersection),t.context.$nextTick((function(){d.observer.observe(d.el)})))}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&this.options.intersection.threshold||0}}]),e}();function m(e,t,n){var i=t.value;if("undefined"==typeof IntersectionObserver)console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var s=new h(e,i,n);e._vue_visibilityState=s}}var f={bind:m,update:function(e,t,n){var i=t.value;if(!function e(t,n){if(t===n)return!0;if("object"===(void 0===t?"undefined":d(t))){for(var i in t)if(!e(t[i],n[i]))return!1;return!0}return!1}(i,t.oldValue)){var s=e._vue_visibilityState;s?s.createObserver(i,n):m(e,{value:i},n)}},unbind:function(e){var t=e._vue_visibilityState;t&&(t.destroyObserver(),delete e._vue_visibilityState)}};var p={version:"0.4.3",install:function(e){e.directive("observe-visibility",f)}},v=null;"undefined"!=typeof window?v=window.Vue:void 0!==e&&(v=e.Vue),v&&v.use(p);var y="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var g=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t,n;t=y,n=function(){var e=/(auto|scroll)/,t=function(e,n){return null===e.parentNode?n:t(e.parentNode,n.concat([e]))},n=function(e,t){return getComputedStyle(e,null).getPropertyValue(t)},i=function(t){return e.test(function(e){return n(e,"overflow")+n(e,"overflow-y")+n(e,"overflow-x")}(t))};return function(e){if(e instanceof HTMLElement||e instanceof SVGElement){for(var n=t(e.parentNode,[]),s=0;s<n.length;s+=1)if(i(n[s]))return n[s];return document.scrollingElement||document.documentElement}}},e.exports?e.exports=n():t.Scrollparent=n()})),b=!1;if("undefined"!=typeof window){b=!1;try{var x=Object.defineProperty({},"passive",{get:function(){b=!0}});window.addEventListener("test",null,x)}catch(e){}}var w={components:{ResizeObserver:r},directives:{ObserveVisibility:f},props:{items:{type:Array,required:!0},itemHeight:{type:[Number,String],default:null},minItemHeight:{type:[Number,String],default:null},heightField:{type:String,default:"height"},typeField:{type:String,default:"type"},buffer:{type:[Number,String],default:200},pageMode:{type:Boolean,default:!1},prerender:{type:[Number,String],default:0},emitUpdate:{type:Boolean,default:!1}},computed:{cssClass:function(){return{"page-mode":this.pageMode}},heights:function(){if(null===this.itemHeight){for(var e={"-1":{accumulator:0}},t=this.items,n=this.heightField,i=this.minItemHeight,s=0,o=void 0,r=0,l=t.length;r<l;r++)s+=o=t[r][n]||i,e[r]={accumulator:s,height:o};return e}}},beforeDestroy:function(){this.removeListeners()},methods:{getListenerTarget:function(){var e=g(this.$el);return e!==window.document.documentElement&&e!==window.document.body||(e=window),e},getScroll:function(){var e=this.$el,t=void 0;if(this.pageMode){var n=e.getBoundingClientRect(),i=-n.top,s=window.innerHeight;i<0&&(s+=i,i=0),i+s>n.height&&(s=n.height-i),t={top:i,bottom:i+s}}else t={top:e.scrollTop,bottom:e.scrollTop+e.clientHeight};return t},applyPageMode:function(){this.pageMode?this.addListeners():this.removeListeners()},addListeners:function(){this.listenerTarget=this.getListenerTarget(),this.listenerTarget.addEventListener("scroll",this.handleScroll,!!b&&{passive:!0}),this.listenerTarget.addEventListener("resize",this.handleResize)},removeListeners:function(){this.listenerTarget&&(this.listenerTarget.removeEventListener("scroll",this.handleScroll),this.listenerTarget.removeEventListener("resize",this.handleResize),this.listenerTarget=null)},scrollToItem:function(e){var t=void 0;t=null===this.itemHeight?e>0?this.heights[e-1].accumulator:0:e*this.itemHeight,this.scrollToPosition(t)},scrollToPosition:function(e){this.$el.scrollTop=e},itemsLimitError:function(){var e=this;throw setTimeout((function(){console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.","Scroller:",e.$el),console.log("Make sure the scroller has a fixed height and 'overflow-y' set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.")})),new Error("Rendered items limit reached")}}},_={name:"VirtualScroller",mixins:[w],props:{renderers:{type:Object,default:null},keyField:{type:String,default:"id"},mainTag:{type:String,default:"div"},containerTag:{type:String,default:"div"},containerClass:{type:[String,Array,Object],default:null},contentTag:{type:String,default:"div"},contentClass:{type:[String,Array,Object],default:null},poolSize:{type:[Number,String],default:2e3},delayPreviousItems:{type:Boolean,default:!1}},data:function(){return{visibleItems:[],itemContainerStyle:null,itemsStyle:null,keysEnabled:!0}},watch:{items:{handler:function(){this.updateVisibleItems(!0)},deep:!0},pageMode:function(){this.applyPageMode(),this.updateVisibleItems(!0)},itemHeight:"setDirty"},created:function(){this.$_ready=!1,this.$_startIndex=0,this.$_oldScrollTop=null,this.$_oldScrollBottom=null,this.$_offsetTop=0,this.$_height=0,this.$_scrollDirty=!1,this.$_updateDirty=!1;var e=parseInt(this.prerender);e>0?(this.visibleItems=this.items.slice(0,e),this.$_length=this.visibleItems.length,this.$_endIndex=this.$_length-1,this.$_skip=!0):(this.$_endIndex=0,this.$_length=0,this.$_skip=!1)},mounted:function(){var e=this;this.applyPageMode(),this.$nextTick((function(){e.updateVisibleItems(!0),e.$_ready=!0}))},methods:{updateVisibleItems:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$_updateDirty||(this.$_updateDirty=!0,this.$nextTick((function(){e.$_updateDirty=!1;var n=e.items.length,s=e.getScroll(),o=e.items,r=e.itemHeight,l=void 0,a=void 0;if(s){var d=-1,u=-1,c=parseInt(e.buffer),h=parseInt(e.poolSize),m=~~(s.top/h)*h-c,f=Math.ceil(s.bottom/h)*h+c;if(!t&&(m===e.$_oldScrollTop&&f===e.$_oldScrollBottom||e.$_skip))return void(e.$_skip=!1);if(e.$_oldScrollTop=m,e.$_oldScrollBottom=f,null===r){var p=e.heights,v=0,y=n-1,g=~~(n/2),b=void 0;do{b=g,p[g].accumulator<m?v=g:g<n-1&&p[g+1].accumulator>m&&(y=g),g=~~((v+y)/2)}while(g!==b);for(g<0&&(g=0),d=g,a=g>0?p[g-1].accumulator:0,l=p[n-1].accumulator,u=g;u<n&&p[u].accumulator<f;u++);-1===u?u=o.length-1:++u>n&&(u=n)}else d=~~(m/r),u=Math.ceil(f/r),d<0&&(d=0),u>n&&(u=n),a=d*r,l=n*r;u-d>i.itemsLimit&&e.itemsLimitError(),(t||e.$_startIndex!==d||e.$_endIndex!==u||e.$_offsetTop!==a||e.$_height!==l||e.$_length!==n)&&(e.keysEnabled=!(d>e.$_endIndex||u<e.$_startIndex),e.itemContainerStyle={height:l+"px"},e.itemsStyle={marginTop:a+"px"},e.delayPreviousItems?(e.visibleItems=o.slice(e.$_startIndex,u),e.$nextTick((function(){e.visibleItems=o.slice(d,u)}))):e.visibleItems=o.slice(d,u),e.emitUpdate&&e.$emit("update",d,u),e.$_startIndex=d,e.$_endIndex=u,e.$_length=n,e.$_offsetTop=a,e.$_height=l)}})))},setDirty:function(){this.$_oldScrollTop=null,this.$_oldScrollBottom=null},handleScroll:function(){var e=this;this.$_scrollDirty||(this.$_scrollDirty=!0,requestAnimationFrame((function(){e.$_scrollDirty=!1,e.updateVisibleItems()})))},handleResize:function(){this.$emit("resize"),this.$_ready&&this.updateVisibleItems()},handleVisibilityChange:function(e,t){var n=this;this.$_ready&&(e||0!==t.boundingClientRect.width||0!==t.boundingClientRect.height)&&(this.$emit("visible"),this.$nextTick((function(){n.updateVisibleItems()})))}}},I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.mainTag,{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.handleVisibilityChange,expression:"handleVisibilityChange"}],tag:"component",staticClass:"virtual-scroller",class:e.cssClass,on:{"&scroll":function(t){return e.handleScroll(t)}}},[e._t("before-container"),e._v(" "),n(e.containerTag,{ref:"itemContainer",tag:"component",staticClass:"item-container",class:e.containerClass,style:e.itemContainerStyle},[e._t("before-content"),e._v(" "),n(e.contentTag,{ref:"items",tag:"component",staticClass:"items",class:e.contentClass,style:e.itemsStyle},[e.renderers?e._l(e.visibleItems,(function(t,i){return n(e.renderers[t[e.typeField]],{key:e.keysEnabled&&t[e.keyField]||void 0,tag:"component",staticClass:"item",attrs:{item:t,"item-index":e.$_startIndex+i}})})):[e._l(e.visibleItems,(function(t,n){return e._t("default",null,{item:t,itemIndex:e.$_startIndex+n,itemKey:e.keysEnabled&&t[e.keyField]||void 0})}))]],2),e._v(" "),e._t("after-content")],2),e._v(" "),e._t("after-container"),e._v(" "),n("resize-observer",{on:{notify:e.handleResize}})],2)};I._withStripped=!0;var $=function(e,t,n,i,s,o,r,l){var a=("function"==typeof n?n.options:n)||{};a.__file="/home/akryum/Projects/vue-virtual-scroller/src/components/VirtualScroller.vue",a.render||(a.render=e.render,a.staticRenderFns=e.staticRenderFns,a._compiled=!0,s&&(a.functional=!0)),a._scopeId=i;var d=void 0;if(t&&(d=function(e){t.call(this,r(e))}),void 0!==d)if(a.functional){var u=a.render;a.render=function(e,t){return d.call(t),u(e,t)}}else{var c=a.beforeCreate;a.beforeCreate=c?[].concat(c,d):[d]}return a}({render:I,staticRenderFns:[]},(function(e){e&&e("data-v-3eef485a_0",{source:"\n.virtual-scroller[data-v-3eef485a]:not(.page-mode) {\n  overflow-y: auto;\n}\n.item-container[data-v-3eef485a] {\n  box-sizing: border-box;\n  width: 100%;\n  overflow: hidden;\n}\n.items[data-v-3eef485a] {\n  width: 100%;\n}\n",map:{version:3,sources:["/home/akryum/Projects/vue-virtual-scroller/src/components/VirtualScroller.vue"],names:[],mappings:";AA+TA;EACA,iBAAA;CACA;AAEA;EACA,uBAAA;EACA,YAAA;EACA,iBAAA;CACA;AAEA;EACA,YAAA;CACA",file:"VirtualScroller.vue",sourcesContent:['<template>\n  <component\n    v-observe-visibility="handleVisibilityChange"\n    :is="mainTag"\n    :class="cssClass"\n    class="virtual-scroller"\n    @scroll.passive="handleScroll"\n  >\n    <slot\n      name="before-container"\n    />\n    <component\n      ref="itemContainer"\n      :is="containerTag"\n      :class="containerClass"\n      :style="itemContainerStyle"\n      class="item-container"\n    >\n      <slot\n        name="before-content"\n      />\n      <component\n        ref="items"\n        :is="contentTag"\n        :class="contentClass"\n        :style="itemsStyle"\n        class="items"\n      >\n        <template v-if="renderers">\n          <component\n            v-for="(item, index) in visibleItems"\n            :key="keysEnabled && item[keyField] || undefined"\n            :is="renderers[item[typeField]]"\n            :item="item"\n            :item-index="$_startIndex + index"\n            class="item"\n          />\n        </template>\n        <template v-else>\n          <slot\n            v-for="(item, index) in visibleItems"\n            :item="item"\n            :item-index="$_startIndex + index"\n            :item-key="keysEnabled && item[keyField] || undefined"\n            class="item"\n          />\n        </template>\n      </component>\n      <slot\n        name="after-content"\n      />\n    </component>\n    <slot\n      name="after-container"\n    />\n    <resize-observer @notify="handleResize" />\n  </component>\n</template>\n\n<script>\nimport Scroller from \'../mixins/scroller\'\nimport config from \'../config\'\n\nexport default {\n  name: \'VirtualScroller\',\n\n  mixins: [\n    Scroller,\n  ],\n\n  props: {\n    renderers: {\n      type: Object,\n      default: null,\n    },\n    keyField: {\n      type: String,\n      default: \'id\',\n    },\n    mainTag: {\n      type: String,\n      default: \'div\',\n    },\n    containerTag: {\n      type: String,\n      default: \'div\',\n    },\n    containerClass: {\n      type: [String, Array, Object],\n      default: null,\n    },\n    contentTag: {\n      type: String,\n      default: \'div\',\n    },\n    contentClass: {\n      type: [String, Array, Object],\n      default: null,\n    },\n    poolSize: {\n      type: [Number, String],\n      default: 2000,\n    },\n    delayPreviousItems: {\n      type: Boolean,\n      default: false,\n    },\n  },\n\n  data () {\n    return {\n      visibleItems: [],\n      itemContainerStyle: null,\n      itemsStyle: null,\n      keysEnabled: true,\n    }\n  },\n\n  watch: {\n    items: {\n      handler () {\n        this.updateVisibleItems(true)\n      },\n      deep: true,\n    },\n    pageMode () {\n      this.applyPageMode()\n      this.updateVisibleItems(true)\n    },\n    itemHeight: \'setDirty\',\n  },\n\n  created () {\n    this.$_ready = false\n    this.$_startIndex = 0\n    this.$_oldScrollTop = null\n    this.$_oldScrollBottom = null\n    this.$_offsetTop = 0\n    this.$_height = 0\n    this.$_scrollDirty = false\n    this.$_updateDirty = false\n\n    const prerender = parseInt(this.prerender)\n    if (prerender > 0) {\n      this.visibleItems = this.items.slice(0, prerender)\n      this.$_length = this.visibleItems.length\n      this.$_endIndex = this.$_length - 1\n      this.$_skip = true\n    } else {\n      this.$_endIndex = 0\n      this.$_length = 0\n      this.$_skip = false\n    }\n  },\n\n  mounted () {\n    this.applyPageMode()\n    this.$nextTick(() => {\n      this.updateVisibleItems(true)\n      this.$_ready = true\n    })\n  },\n\n  methods: {\n    updateVisibleItems (force = false) {\n      if (!this.$_updateDirty) {\n        this.$_updateDirty = true\n        this.$nextTick(() => {\n          this.$_updateDirty = false\n\n          const l = this.items.length\n          const scroll = this.getScroll()\n          const items = this.items\n          const itemHeight = this.itemHeight\n          let containerHeight, offsetTop\n          if (scroll) {\n            let startIndex = -1\n            let endIndex = -1\n\n            const buffer = parseInt(this.buffer)\n            const poolSize = parseInt(this.poolSize)\n            const scrollTop = ~~(scroll.top / poolSize) * poolSize - buffer\n            const scrollBottom = Math.ceil(scroll.bottom / poolSize) * poolSize + buffer\n\n            if (!force && ((scrollTop === this.$_oldScrollTop && scrollBottom === this.$_oldScrollBottom) || this.$_skip)) {\n              this.$_skip = false\n              return\n            } else {\n              this.$_oldScrollTop = scrollTop\n              this.$_oldScrollBottom = scrollBottom\n            }\n\n            // Variable height mode\n            if (itemHeight === null) {\n              const heights = this.heights\n              let h\n              let a = 0\n              let b = l - 1\n              let i = ~~(l / 2)\n              let oldI\n\n              // Searching for startIndex\n              do {\n                oldI = i\n                h = heights[i].accumulator\n                if (h < scrollTop) {\n                  a = i\n                } else if (i < l - 1 && heights[i + 1].accumulator > scrollTop) {\n                  b = i\n                }\n                i = ~~((a + b) / 2)\n              } while (i !== oldI)\n              i < 0 && (i = 0)\n              startIndex = i\n\n              // For containers style\n              offsetTop = i > 0 ? heights[i - 1].accumulator : 0\n              containerHeight = heights[l - 1].accumulator\n\n              // Searching for endIndex\n              for (endIndex = i; endIndex < l && heights[endIndex].accumulator < scrollBottom; endIndex++);\n              if (endIndex === -1) {\n                endIndex = items.length - 1\n              } else {\n                endIndex++\n                // Bounds\n                endIndex > l && (endIndex = l)\n              }\n            } else {\n              // Fixed height mode\n              startIndex = ~~(scrollTop / itemHeight)\n              endIndex = Math.ceil(scrollBottom / itemHeight)\n\n              // Bounds\n              startIndex < 0 && (startIndex = 0)\n              endIndex > l && (endIndex = l)\n\n              offsetTop = startIndex * itemHeight\n              containerHeight = l * itemHeight\n            }\n\n            if (endIndex - startIndex > config.itemsLimit) {\n              this.itemsLimitError()\n            }\n\n            if (\n              force ||\n              this.$_startIndex !== startIndex ||\n              this.$_endIndex !== endIndex ||\n              this.$_offsetTop !== offsetTop ||\n              this.$_height !== containerHeight ||\n              this.$_length !== l\n            ) {\n              this.keysEnabled = !(startIndex > this.$_endIndex || endIndex < this.$_startIndex)\n\n              this.itemContainerStyle = {\n                height: containerHeight + \'px\',\n              }\n              this.itemsStyle = {\n                marginTop: offsetTop + \'px\',\n              }\n\n              if (this.delayPreviousItems) {\n                // Add next items\n                this.visibleItems = items.slice(this.$_startIndex, endIndex)\n                // Remove previous items\n                this.$nextTick(() => {\n                  this.visibleItems = items.slice(startIndex, endIndex)\n                })\n              } else {\n                this.visibleItems = items.slice(startIndex, endIndex)\n              }\n\n              this.emitUpdate && this.$emit(\'update\', startIndex, endIndex)\n\n              this.$_startIndex = startIndex\n              this.$_endIndex = endIndex\n              this.$_length = l\n              this.$_offsetTop = offsetTop\n              this.$_height = containerHeight\n            }\n          }\n        })\n      }\n    },\n\n    setDirty () {\n      this.$_oldScrollTop = null\n      this.$_oldScrollBottom = null\n    },\n\n    handleScroll () {\n      if (!this.$_scrollDirty) {\n        this.$_scrollDirty = true\n        requestAnimationFrame(() => {\n          this.$_scrollDirty = false\n          this.updateVisibleItems()\n        })\n      }\n    },\n\n    handleResize () {\n      this.$emit(\'resize\')\n      this.$_ready && this.updateVisibleItems()\n    },\n\n    handleVisibilityChange (isVisible, entry) {\n      if (this.$_ready && (isVisible || entry.boundingClientRect.width !== 0 || entry.boundingClientRect.height !== 0)) {\n        this.$emit(\'visible\')\n        this.$nextTick(() => {\n          this.updateVisibleItems()\n        })\n      }\n    },\n  },\n}\n<\/script>\n\n<style scoped>\n.virtual-scroller:not(.page-mode) {\n  overflow-y: auto;\n}\n\n.item-container {\n  box-sizing: border-box;\n  width: 100%;\n  overflow: hidden;\n}\n\n.items {\n  width: 100%;\n}\n</style>\n']},media:void 0})}),_,"data-v-3eef485a",!1,0,(function e(){var t=document.head||document.getElementsByTagName("head")[0],n=e.styles||(e.styles={}),i="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,s){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var o=i?s.media||"default":e,r=n[o]||(n[o]={ids:[],parts:[],element:void 0});if(!r.ids.includes(e)){var l=s.source,a=r.ids.length;if(r.ids.push(e),i&&(r.element=r.element||document.querySelector("style[data-group="+o+"]")),!r.element){var d=r.element=document.createElement("style");d.type="text/css",s.media&&d.setAttribute("media",s.media),i&&(d.setAttribute("data-group",o),d.setAttribute("data-next-index","0")),t.appendChild(d)}if(i&&(a=parseInt(r.element.getAttribute("data-next-index")),r.element.setAttribute("data-next-index",a+1)),r.element.styleSheet)r.parts.push(l),r.element.styleSheet.cssText=r.parts.filter(Boolean).join("\n");else{var u=document.createTextNode(l),c=r.element.childNodes;c[a]&&r.element.removeChild(c[a]),c.length?r.element.insertBefore(u,c[a]):r.element.appendChild(u)}}}}})),A=0,S={name:"RecycleList",mixins:[w],props:{itemHeight:{type:Number,default:null},keyField:{type:String,default:null}},data:function(){return{pool:[],totalHeight:0}},watch:{items:function(){this.updateVisibleItems(!0)},pageMode:function(){this.applyPageMode(),this.updateVisibleItems(!1)},heights:{handler:function(){this.updateVisibleItems(!1)},deep:!0}},created:function(){this.$_ready=!1,this.$_startIndex=0,this.$_endIndex=0,this.$_views=new Map,this.$_unusedViews=new Map,this.$_scrollDirty=!1},mounted:function(){var e=this;this.applyPageMode(),this.$nextTick((function(){e.updateVisibleItems(!0),e.$_ready=!0}))},methods:{addView:function(e,t,n,i,s){var o={item:n,top:0},r={id:A++,index:t,used:!0,key:i,type:s};return Object.defineProperty(o,"nr",{configurable:!1,value:r}),e.push(o),o},unuseView:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.$_unusedViews,i=e.nr.type,s=n.get(i);s||(s=[],n.set(i,s)),s.push(e),t||(e.nr.used=!1,e.top=-9999,this.$_views.delete(e.nr.key))},handleResize:function(){this.$emit("resize"),this.$_ready&&this.updateVisibleItems(!1)},handleScroll:function(e){var t=this;this.$_scrollDirty||(this.$_scrollDirty=!0,requestAnimationFrame((function(){t.$_scrollDirty=!1,t.updateVisibleItems(!1).continuous||(clearTimeout(t.$_refreshTimout),t.$_refreshTimout=setTimeout(t.handleScroll,100))})))},handleVisibilityChange:function(e,t){var n=this;this.$_ready&&(e||0!==t.boundingClientRect.width||0!==t.boundingClientRect.height?(this.$emit("visible"),requestAnimationFrame((function(){n.updateVisibleItems(!1)}))):this.$emit("hidden"))},updateVisibleItems:function(e){var t=this.getScroll(),n=parseInt(this.buffer);t.top-=n,t.bottom+=n;var s=this.itemHeight,o=this.typeField,r=this.keyField,l=this.items,a=l.length,d=this.heights,u=this.$_views,c=this.$_unusedViews,h=this.pool,m=void 0,f=void 0,p=void 0;if(a)if(null===s){var v=0,y=a-1,g=~~(a/2),b=void 0;do{b=g,d[g].accumulator<t.top?v=g:g<a-1&&d[g+1].accumulator>t.top&&(y=g),g=~~((v+y)/2)}while(g!==b);for(g<0&&(g=0),m=g,p=d[a-1].accumulator,f=g;f<a&&d[f].accumulator<t.bottom;f++);-1===f?f=l.length-1:++f>a&&(f=a)}else(m=~~(t.top/s))<0&&(m=0),(f=Math.ceil(t.bottom/s))>a&&(f=a),p=a*s;else m=f=p=0;f-m>i.itemsLimit&&this.itemsLimitError(),this.totalHeight=p;var x=void 0,w=m<=this.$_endIndex&&f>=this.$_startIndex,_=void 0;if(this.$_continuous!==w){if(w){u.clear(),c.clear();for(var I=0,$=h.length;I<$;I++)x=h[I],this.unuseView(x)}this.$_continuous=w}else if(w)for(var A=0,S=h.length;A<S;A++)(x=h[A]).nr.used&&(e&&(x.nr.index=l.findIndex((function(e){return r?e[r]===x.item[r]:e===x.item}))),(-1===x.nr.index||x.nr.index<m||x.nr.index>f)&&this.unuseView(x));w||(_=new Map);for(var C=void 0,k=void 0,V=void 0,T=void 0,E=m;E<f;E++){C=l[E];var z=r?C[r]:C;x=u.get(z),s||d[E].height?(x?x.nr.used=!0:(k=C[o],w?(V=c.get(k))&&V.length?((x=V.pop()).item=C,x.nr.used=!0,x.nr.index=E,x.nr.key=z,x.nr.type=k):x=this.addView(h,E,C,z,k):(V=c.get(k),T=_.get(k)||0,V&&T<V.length?((x=V[T]).item=C,x.nr.used=!0,x.nr.index=E,x.nr.key=z,x.nr.type=k,_.set(k,T+1)):(x=this.addView(h,E,C,z,k),this.unuseView(x,!0)),T++),u.set(z,x)),x.top=null===s?d[E-1].accumulator:E*s):x&&this.unuseView(x)}return this.$_startIndex=m,this.$_endIndex=f,this.emitUpdate&&this.$emit("update",m,f),{continuous:w}}}},C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:e.handleVisibilityChange,expression:"handleVisibilityChange"}],staticClass:"recycle-list",class:e.cssClass,on:{"&scroll":function(t){return e.handleScroll(t)}}},[e._t("before-container"),e._v(" "),n("div",{ref:"wrapper",staticClass:"item-wrapper",style:{height:e.totalHeight+"px"}},e._l(e.pool,(function(t){return n("div",{key:t.nr.id,staticClass:"item-view",style:{transform:"translateY("+t.top+"px)"}},[e._t("default",null,{item:t.item,index:t.nr.index,active:t.nr.used})],2)}))),e._v(" "),e._t("after-container"),e._v(" "),n("resize-observer",{on:{notify:e.handleResize}})],2)};C._withStripped=!0;var k=function(e,t,n,i,s,o,r,l){var a=("function"==typeof n?n.options:n)||{};a.__file="/home/akryum/Projects/vue-virtual-scroller/src/components/RecycleList.vue",a.render||(a.render=e.render,a.staticRenderFns=e.staticRenderFns,a._compiled=!0,s&&(a.functional=!0)),a._scopeId=i;var d=void 0;if(t&&(d=function(e){t.call(this,r(e))}),void 0!==d)if(a.functional){var u=a.render;a.render=function(e,t){return d.call(t),u(e,t)}}else{var c=a.beforeCreate;a.beforeCreate=c?[].concat(c,d):[d]}return a}({render:C,staticRenderFns:[]},(function(e){e&&e("data-v-e814ad22_0",{source:"\n.recycle-list[data-v-e814ad22]:not(.page-mode) {\n  overflow-y: auto;\n}\n.item-wrapper[data-v-e814ad22] {\n  box-sizing: border-box;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.item-view[data-v-e814ad22] {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  will-change: transform;\n}\n",map:{version:3,sources:["/home/akryum/Projects/vue-virtual-scroller/src/components/RecycleList.vue"],names:[],mappings:";AAgXA;EACA,iBAAA;CACA;AAEA;EACA,uBAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;CACA;AAEA;EACA,YAAA;EACA,mBAAA;EACA,OAAA;EACA,QAAA;EACA,uBAAA;CACA",file:"RecycleList.vue",sourcesContent:['<template>\n  <div\n    v-observe-visibility="handleVisibilityChange"\n    :class="cssClass"\n    class="recycle-list"\n    @scroll.passive="handleScroll"\n  >\n    <slot\n      name="before-container"\n    />\n\n    <div\n      ref="wrapper"\n      :style="{ height: totalHeight + \'px\' }"\n      class="item-wrapper"\n    >\n      <div\n        v-for="view of pool"\n        :key="view.nr.id"\n        :style="{ transform: \'translateY(\' + view.top + \'px)\' }"\n        class="item-view"\n      >\n        <slot\n          :item="view.item"\n          :index="view.nr.index"\n          :active="view.nr.used"\n        />\n      </div>\n    </div>\n\n    <slot\n      name="after-container"\n    />\n\n    <resize-observer @notify="handleResize" />\n  </div>\n</template>\n\n<script>\nimport Scroller from \'../mixins/scroller\'\nimport config from \'../config\'\n\nlet uid = 0\n\nexport default {\n  name: \'RecycleList\',\n\n  mixins: [\n    Scroller,\n  ],\n\n  props: {\n    itemHeight: {\n      type: Number,\n      default: null,\n    },\n    keyField: {\n      type: String,\n      default: null,\n    },\n  },\n\n  data () {\n    return {\n      pool: [],\n      totalHeight: 0,\n    }\n  },\n\n  watch: {\n    items () {\n      this.updateVisibleItems(true)\n    },\n    pageMode () {\n      this.applyPageMode()\n      this.updateVisibleItems(false)\n    },\n    heights: {\n      handler () {\n        this.updateVisibleItems(false)\n      },\n      deep: true,\n    },\n  },\n\n  created () {\n    this.$_ready = false\n    this.$_startIndex = 0\n    this.$_endIndex = 0\n    this.$_views = new Map()\n    this.$_unusedViews = new Map()\n    this.$_scrollDirty = false\n\n    // TODO prerender\n  },\n\n  mounted () {\n    this.applyPageMode()\n    this.$nextTick(() => {\n      this.updateVisibleItems(true)\n      this.$_ready = true\n    })\n  },\n\n  methods: {\n    addView (pool, index, item, key, type) {\n      const view = {\n        item,\n        top: 0,\n      }\n      const nonReactive = {\n        id: uid++,\n        index,\n        used: true,\n        key,\n        type,\n      }\n      Object.defineProperty(view, \'nr\', {\n        configurable: false,\n        value: nonReactive,\n      })\n      pool.push(view)\n      return view\n    },\n\n    unuseView (view, fake = false) {\n      const unusedViews = this.$_unusedViews\n      const type = view.nr.type\n      let unusedPool = unusedViews.get(type)\n      if (!unusedPool) {\n        unusedPool = []\n        unusedViews.set(type, unusedPool)\n      }\n      unusedPool.push(view)\n      if (!fake) {\n        view.nr.used = false\n        view.top = -9999\n        this.$_views.delete(view.nr.key)\n      }\n    },\n\n    handleResize () {\n      this.$emit(\'resize\')\n      if (this.$_ready) this.updateVisibleItems(false)\n    },\n\n    handleScroll (event) {\n      if (!this.$_scrollDirty) {\n        this.$_scrollDirty = true\n        requestAnimationFrame(() => {\n          this.$_scrollDirty = false\n          const { continuous } = this.updateVisibleItems(false)\n\n          // It seems sometimes chrome doesn\'t fire scroll event :/\n          // When non continous scrolling is ending, we force a refresh\n          if (!continuous) {\n            clearTimeout(this.$_refreshTimout)\n            this.$_refreshTimout = setTimeout(this.handleScroll, 100)\n          }\n        })\n      }\n    },\n\n    handleVisibilityChange (isVisible, entry) {\n      if (this.$_ready) {\n        if (isVisible || entry.boundingClientRect.width !== 0 || entry.boundingClientRect.height !== 0) {\n          this.$emit(\'visible\')\n          requestAnimationFrame(() => {\n            this.updateVisibleItems(false)\n          })\n        } else {\n          this.$emit(\'hidden\')\n        }\n      }\n    },\n\n    updateVisibleItems (checkItem) {\n      const scroll = this.getScroll()\n      const buffer = parseInt(this.buffer)\n      scroll.top -= buffer\n      scroll.bottom += buffer\n\n      const itemHeight = this.itemHeight\n      const typeField = this.typeField\n      const keyField = this.keyField\n      const items = this.items\n      const count = items.length\n      const heights = this.heights\n      const views = this.$_views\n      let unusedViews = this.$_unusedViews\n      const pool = this.pool\n      let startIndex, endIndex\n      let totalHeight\n\n      if (!count) {\n        startIndex = endIndex = totalHeight = 0\n      } else {\n        // Variable height mode\n        if (itemHeight === null) {\n          let h\n          let a = 0\n          let b = count - 1\n          let i = ~~(count / 2)\n          let oldI\n\n          // Searching for startIndex\n          do {\n            oldI = i\n            h = heights[i].accumulator\n            if (h < scroll.top) {\n              a = i\n            } else if (i < count - 1 && heights[i + 1].accumulator > scroll.top) {\n              b = i\n            }\n            i = ~~((a + b) / 2)\n          } while (i !== oldI)\n          i < 0 && (i = 0)\n          startIndex = i\n\n          // For container style\n          totalHeight = heights[count - 1].accumulator\n\n          // Searching for endIndex\n          for (endIndex = i; endIndex < count && heights[endIndex].accumulator < scroll.bottom; endIndex++);\n          if (endIndex === -1) {\n            endIndex = items.length - 1\n          } else {\n            endIndex++\n            // Bounds\n            endIndex > count && (endIndex = count)\n          }\n        } else {\n          // Fixed height mode\n          startIndex = ~~(scroll.top / itemHeight)\n          endIndex = Math.ceil(scroll.bottom / itemHeight)\n\n          // Bounds\n          startIndex < 0 && (startIndex = 0)\n          endIndex > count && (endIndex = count)\n\n          totalHeight = count * itemHeight\n        }\n      }\n\n      if (endIndex - startIndex > config.itemsLimit) {\n        this.itemsLimitError()\n      }\n\n      this.totalHeight = totalHeight\n\n      let view\n\n      const continuous = startIndex <= this.$_endIndex && endIndex >= this.$_startIndex\n      let unusedIndex\n\n      if (this.$_continuous !== continuous) {\n        if (continuous) {\n          views.clear()\n          unusedViews.clear()\n          for (let i = 0, l = pool.length; i < l; i++) {\n            view = pool[i]\n            this.unuseView(view)\n          }\n        }\n        this.$_continuous = continuous\n      } else if (continuous) {\n        for (let i = 0, l = pool.length; i < l; i++) {\n          view = pool[i]\n          if (view.nr.used) {\n            // Update view item index\n            if (checkItem) {\n              view.nr.index = items.findIndex(\n                item => keyField ? item[keyField] === view.item[keyField] : item === view.item\n              )\n            }\n\n            // Check if index is still in visible range\n            if (\n              view.nr.index === -1 ||\n              view.nr.index < startIndex ||\n              view.nr.index > endIndex\n            ) {\n              this.unuseView(view)\n            }\n          }\n        }\n      }\n\n      if (!continuous) {\n        unusedIndex = new Map()\n      }\n\n      let item, type, unusedPool\n      let v\n      for (let i = startIndex; i < endIndex; i++) {\n        item = items[i]\n        const key = keyField ? item[keyField] : item\n        view = views.get(key)\n\n        if (!itemHeight && !heights[i].height) {\n          if (view) this.unuseView(view)\n          continue\n        }\n\n        // No view assigned to item\n        if (!view) {\n          type = item[typeField]\n\n          if (continuous) {\n            unusedPool = unusedViews.get(type)\n            // Reuse existing view\n            if (unusedPool && unusedPool.length) {\n              view = unusedPool.pop()\n              view.item = item\n              view.nr.used = true\n              view.nr.index = i\n              view.nr.key = key\n              view.nr.type = type\n            } else {\n              view = this.addView(pool, i, item, key, type)\n            }\n          } else {\n            unusedPool = unusedViews.get(type)\n            v = unusedIndex.get(type) || 0\n            // Use existing view\n            // We don\'t care if they are already used\n            // because we are not in continous scrolling\n            if (unusedPool && v < unusedPool.length) {\n              view = unusedPool[v]\n              view.item = item\n              view.nr.used = true\n              view.nr.index = i\n              view.nr.key = key\n              view.nr.type = type\n              unusedIndex.set(type, v + 1)\n            } else {\n              view = this.addView(pool, i, item, key, type)\n              this.unuseView(view, true)\n            }\n            v++\n          }\n          views.set(key, view)\n        } else {\n          view.nr.used = true\n        }\n\n        // Update position\n        if (itemHeight === null) {\n          view.top = heights[i - 1].accumulator\n        } else {\n          view.top = i * itemHeight\n        }\n      }\n\n      this.$_startIndex = startIndex\n      this.$_endIndex = endIndex\n\n      this.emitUpdate && this.$emit(\'update\', startIndex, endIndex)\n\n      return {\n        continuous,\n      }\n    },\n  },\n}\n<\/script>\n\n<style scoped>\n.recycle-list:not(.page-mode) {\n  overflow-y: auto;\n}\n\n.item-wrapper {\n  box-sizing: border-box;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n\n.item-view {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  will-change: transform;\n}\n</style>\n']},media:void 0})}),S,"data-v-e814ad22",!1,0,(function e(){var t=document.head||document.getElementsByTagName("head")[0],n=e.styles||(e.styles={}),i="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(e,s){if(!document.querySelector('style[data-vue-ssr-id~="'+e+'"]')){var o=i?s.media||"default":e,r=n[o]||(n[o]={ids:[],parts:[],element:void 0});if(!r.ids.includes(e)){var l=s.source,a=r.ids.length;if(r.ids.push(e),i&&(r.element=r.element||document.querySelector("style[data-group="+o+"]")),!r.element){var d=r.element=document.createElement("style");d.type="text/css",s.media&&d.setAttribute("media",s.media),i&&(d.setAttribute("data-group",o),d.setAttribute("data-next-index","0")),t.appendChild(d)}if(i&&(a=parseInt(r.element.getAttribute("data-next-index")),r.element.setAttribute("data-next-index",a+1)),r.element.styleSheet)r.parts.push(l),r.element.styleSheet.cssText=r.parts.filter(Boolean).join("\n");else{var u=document.createTextNode(l),c=r.element.childNodes;c[a]&&r.element.removeChild(c[a]),c.length?r.element.insertBefore(u,c[a]):r.element.appendChild(u)}}}}}));var V={version:"0.12.2",install:function(e,t){var n=Object.assign({},{installComponents:!0,componentsPrefix:""},t);for(var s in n)void 0!==n[s]&&(i[s]=n[s]);n.installComponents&&function(e,t){e.component(t+"virtual-scroller",$),e.component(t+"recycle-list",k)}(e,n.componentsPrefix)}},T=null;"undefined"!=typeof window?T=window.Vue:void 0!==e&&(T=e.Vue),T&&T.use(V)}).call(this,n("yLpj"))},mF3K:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("JspL");function s(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i.a.extend({mixins:e})}}}]);