(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"8cAV":function(t,e,o){var a=o("Octl");"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};o("aET+")(a,r);a.locals&&(t.exports=a.locals)},C9TN:function(t,e,o){"use strict";o.r(e);var a=o("JspL"),r=o("OUsP"),i=o("uhNi"),l=a.a.extend({data:()=>({muted:!1}),methods:{mute(){this.muted=!0,r.h.mute()},unmute(){this.muted=!1,r.h.unmute()},setVolume(t){const e=parseFloat(t.target.value);r.h.setVolume(e),this.muted=0===e},broadcastVolume:t=>{r.i.broadcast(i.b.SOCKET_VOLUME_CHANGED,parseFloat(t.target.value))}}}),m=(o("qsvk"),o("KHd+")),s=Object(m.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"volume control",attrs:{id:"volume"}},[this.muted?e("i",{staticClass:"fa fa-volume-off unmute",attrs:{role:"button",tabindex:"0",title:"Unmute"},on:{click:this.unmute}}):e("i",{staticClass:"fa fa-volume-up mute",attrs:{role:"button",tabindex:"0",title:"Mute"},on:{click:this.mute}}),this._v(" "),e("input",{staticClass:"plyr__volume",attrs:{id:"volumeRange",max:"10",step:"0.1",title:"Volume",type:"range"},on:{change:this.broadcastVolume,input:this.setVolume}})])}),[],!1,null,null,null);e.default=s.exports},Octl:function(t,e,o){(t.exports=o("I1BE")(!1)).push([t.i,':root{--color-text-primary:#fff;--color-text-secondary:hsla(0,0%,100%,0.7);--color-bg-primary:#181818;--color-bg-secondary:hsla(0,0%,100%,0.025);--color-highlight:#ff7d2e;--bg-image:none;--bg-position:center;--bg-attachment:fixed;--bg-size:cover;--font-family:system,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;--font-weight-thin:100;--font-weight-light:300;--font-weight-normal:500;--header-height:48px;--footer-height:64px;--footer-height-mobile:74px;--extra-panel-width:334px;--color-black:#181818;--color-maroon:#bf2043;--color-green:#56a052;--color-blue:#0191f7;--color-red:#c34848}:root[data-theme=violet]{--color-bg-primary:#31094e}:root[data-theme=oak]{--color-bg-primary:#560d25}:root[data-theme=slate]{--color-bg-primary:#29434e}:root[data-theme=madison]{--color-bg-primary:#0e3463;--color-highlight:#fbab18}:root[data-theme=astronaut]{--color-bg-primary:#2a3074}:root[data-theme=chocolate]{--color-bg-primary:#3f2724}:root[data-theme=laura]{--color-bg-primary:#126673;--color-highlight:rgba(10,244,255,0.64)}:root[data-theme=rose-petals]{--bg-image:url(/img/themes/bg-rose-petals.svg);--color-bg-primary:#7d083b}:root[data-theme=purple-waves]{--color-bg-primary:#44115c;--bg-image:url(/img/themes/bg-purple-waves.svg)}:root[data-theme=cat]{--bg-image:url(/img/themes/bg-cat.jpg);--bg-position:left;--color-bg-primary:#000}:root[data-theme=pop-culture]{--bg-image:url(/img/themes/bg-pop-culture.jpg);--color-bg-primary:#ad0937;--color-highlight:rgba(234,208,110,0.9)}:root[data-theme=jungle]{--bg-image:url(/img/themes/bg-jungle.jpg);--color-bg-primary:#0f0f03}:root[data-theme=mountains]{--bg-image:url(/img/themes/bg-mountains.jpg);--color-bg-primary:#0e2656}:root[data-theme=pines]{--bg-image:url(/img/themes/bg-pines.jpg);--color-bg-primary:#06090c;--color-highlight:#5984b9}:root[data-theme=nemo]{--bg-image:url(/img/themes/bg-nemo.jpg);--color-bg-primary:#031724}#volume{position:relative;z-index:99}#volume [type=range]{margin:-1px 0 0 5px;transform:rotate(270deg);transform-origin:0;position:absolute;bottom:-25px;border:14px solid var(--color-bg-primary);border-left-width:30px;z-index:0;width:140px;border-radius:4px;display:none}#volume:hover [type=range]{display:block}#volume i{width:16px;position:relative;z-index:1}@media only screen and (max-width:768px){#volume{display:none!important}}',""])},qsvk:function(t,e,o){"use strict";var a=o("8cAV");o.n(a).a}}]);