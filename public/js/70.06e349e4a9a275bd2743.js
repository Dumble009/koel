(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{r2GB:function(t,e,a){"use strict";a.r(e);var n=a("JspL"),i=a("c8RX"),l=function(t,e,a,n){return new(a||(a=Promise))((function(i,l){function u(t){try{d(n.next(t))}catch(t){l(t)}}function s(t){try{d(n.throw(t))}catch(t){l(t)}}function d(t){var e;t.done?i(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(u,s)}d((n=n.apply(t,e||[])).next())}))},u=n.a.extend({props:{playlist:{type:Object,required:!0}},data:()=>({mutatedPlaylist:null,updating:!1}),methods:{update(){return l(this,void 0,void 0,(function*(){this.mutatedPlaylist.name=this.mutatedPlaylist.name.trim(),this.mutatedPlaylist.name&&this.mutatedPlaylist.name!==this.playlist.name?this.updating||(this.updating=!0,yield i.e.update(this.mutatedPlaylist),this.$emit("updated",this.mutatedPlaylist)):this.cancel()}))},cancel(){this.$emit("cancelled")}},created(){this.mutatedPlaylist=Object.assign({},this.playlist)}}),s=a("KHd+"),d=Object(s.a)(u,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.mutatedPlaylist.name,expression:"mutatedPlaylist.name"},{name:"koel-focus",rawName:"v-koel-focus"}],attrs:{type:"text",name:"name",required:"","data-testid":"inline-playlist-name-input"},domProps:{value:t.mutatedPlaylist.name},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancel(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.update(e)}],blur:t.update,input:function(e){e.target.composing||t.$set(t.mutatedPlaylist,"name",e.target.value)}}})}),[],!1,null,null,null);e.default=d.exports}}]);