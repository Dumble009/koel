(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"5Mty":function(e,t,a){"use strict";a.r(t);var l=a("JspL"),o=a("9EAu"),i=a("ilaN"),r=l.a.extend({props:{config:Object,items:{type:Array,required:!0},value:String},data:()=>({filter:"",showingResult:!1,mutatedValue:"",lastSelectedValue:""}),computed:{displayedItems(){return Object(o.uniq)(Object(i.h)(this.items,this.filter,this.config.filterKey))}},methods:{down(){this.showingResult=!0,this.$nextTick(()=>{const e=this.$el.querySelector(".result li.selected");e&&e.nextElementSibling?(i.a.removeClass(e,"selected"),i.a.addClass(e.nextElementSibling,"selected")):(i.a.addClass(this.$el.querySelector(".result li:first-child"),"selected"),e&&i.a.removeClass(e,"selected")),this.apply(),this.scrollSelectedIntoView(!1)})},up(){this.showingResult=!0,this.$nextTick(()=>{const e=this.$el.querySelector(".result li.selected");e&&e.previousElementSibling?(i.a.removeClass(e,"selected"),i.a.addClass(e.previousElementSibling,"selected")):(i.a.addClass(this.$el.querySelector(".result li:last-child"),"selected"),e&&i.a.removeClass(e,"selected")),this.apply(),this.scrollSelectedIntoView(!0)})},keyup(e){if(38===e.keyCode||40===e.keyCode)return e.stopPropagation(),void e.preventDefault();if(13!==e.keyCode&&9!==e.keyCode){if(27===e.keyCode)return this.mutatedValue=this.lastSelectedValue,void this.hideResults();this.filter=this.mutatedValue,this.showingResult=!0}else this.apply()},change(){this.apply()},resultClick(e){const t=this.$el.querySelector(".result li.selected");i.a.removeClass(t,"selected"),i.a.addClass(e.target,"selected"),this.$nextTick(()=>{this.change(),this.hideResults()})},apply(){const e=this.$el.querySelector(".result li.selected");this.mutatedValue=e&&e.innerText.trim()||this.mutatedValue,this.lastSelectedValue=this.mutatedValue,this.$emit("input",this.mutatedValue)},scrollSelectedIntoView(e){const t=this.$el.querySelector(".result li.selected");if(!t)return;const a=t.getBoundingClientRect(),l=t.offsetParent.getBoundingClientRect();(a.bottom>l.bottom||a.top<l.top)&&t.scrollIntoView(e)},hideResults(){this.showingResult=!1}},created(){this.mutatedValue=this.value,this.filter=this.value,this.lastSelectedValue=this.value}}),s=(a("xOrp"),a("KHd+")),d=Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"koel-clickaway",rawName:"v-koel-clickaway",value:e.hideResults,expression:"hideResults"}]},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mutatedValue,expression:"mutatedValue"}],attrs:{type:"text",name:e.config.name,placeholder:e.config.placeholder||"No change",autocomplete:"off"},domProps:{value:e.mutatedValue},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.down(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.up(t))}],change:e.change,keyup:e.keyup,dblclick:function(t){e.showingResult=!0},input:function(t){t.target.composing||(e.mutatedValue=t.target.value)}}}),e._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.showingResult,expression:"showingResult"}],staticClass:"result"},e._l(e.displayedItems,(function(t,l){return a("li",{key:l,on:{click:e.resultClick}},[e._v("\n      "+e._s(t[e.config.displayKey])+"\n    ")])})),0)])}),[],!1,null,"00f65de8",null);t.default=d.exports},"5yXT":function(e,t,a){var l=a("LPLW");"string"==typeof l&&(l=[[e.i,l,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(l,o);l.locals&&(e.exports=l.locals)},LPLW:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,'[data-v-00f65de8]:root{--color-text-primary:#fff;--color-text-secondary:hsla(0,0%,100%,0.7);--color-bg-primary:#181818;--color-bg-secondary:hsla(0,0%,100%,0.025);--color-highlight:#ff7d2e;--bg-image:none;--bg-position:center;--bg-attachment:fixed;--bg-size:cover;--font-family:system,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;--font-weight-thin:100;--font-weight-light:300;--font-weight-normal:500;--header-height:48px;--footer-height:64px;--footer-height-mobile:74px;--extra-panel-width:334px;--color-black:#181818;--color-maroon:#bf2043;--color-green:#56a052;--color-blue:#0191f7;--color-red:#c34848}:root[data-theme=violet][data-v-00f65de8]{--color-bg-primary:#31094e}:root[data-theme=oak][data-v-00f65de8]{--color-bg-primary:#560d25}:root[data-theme=slate][data-v-00f65de8]{--color-bg-primary:#29434e}:root[data-theme=madison][data-v-00f65de8]{--color-bg-primary:#0e3463;--color-highlight:#fbab18}:root[data-theme=astronaut][data-v-00f65de8]{--color-bg-primary:#2a3074}:root[data-theme=chocolate][data-v-00f65de8]{--color-bg-primary:#3f2724}:root[data-theme=laura][data-v-00f65de8]{--color-bg-primary:#126673;--color-highlight:rgba(10,244,255,0.64)}:root[data-theme=rose-petals][data-v-00f65de8]{--bg-image:url(/img/themes/bg-rose-petals.svg);--color-bg-primary:#7d083b}:root[data-theme=purple-waves][data-v-00f65de8]{--color-bg-primary:#44115c;--bg-image:url(/img/themes/bg-purple-waves.svg)}:root[data-theme=cat][data-v-00f65de8]{--bg-image:url(/img/themes/bg-cat.jpg);--bg-position:left;--color-bg-primary:#000}:root[data-theme=pop-culture][data-v-00f65de8]{--bg-image:url(/img/themes/bg-pop-culture.jpg);--color-bg-primary:#ad0937;--color-highlight:rgba(234,208,110,0.9)}:root[data-theme=jungle][data-v-00f65de8]{--bg-image:url(/img/themes/bg-jungle.jpg);--color-bg-primary:#0f0f03}:root[data-theme=mountains][data-v-00f65de8]{--bg-image:url(/img/themes/bg-mountains.jpg);--color-bg-primary:#0e2656}:root[data-theme=pines][data-v-00f65de8]{--bg-image:url(/img/themes/bg-pines.jpg);--color-bg-primary:#06090c;--color-highlight:#5984b9}:root[data-theme=nemo][data-v-00f65de8]{--bg-image:url(/img/themes/bg-nemo.jpg);--color-bg-primary:#031724}.result[data-v-00f65de8]{position:absolute;background:rgba(0,0,0,.9);max-height:96px;border-radius:0 0 3px 3px;width:100%;overflow-y:scroll;z-index:1}.result li[data-v-00f65de8]{padding:2px 8px}.result li.selected[data-v-00f65de8],.result li[data-v-00f65de8]:hover{background:var(--color-highlight);color:var(--color-text-primary)}',""])},xOrp:function(e,t,a){"use strict";var l=a("5yXT");a.n(l).a}}]);