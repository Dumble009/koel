(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{GWAk:function(e,t,n){"use strict";n.r(t);var a=n("JspL"),s=n("c8RX"),r=n("ilaN"),o=n("2Bgu"),i=function(e,t,n,a){return new(n||(n=Promise))((function(s,r){function o(e){try{u(a.next(e))}catch(e){r(e)}}function i(e){try{u(a.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}u((a=a.apply(e,t||[])).next())}))},u=a.a.extend({components:{Btn:()=>n.e(0).then(n.bind(null,"i0GK")),FormBase:()=>n.e(12).then(n.bind(null,"qTjX")),RuleGroup:()=>n.e(13).then(n.bind(null,"316D")),SoundBar:()=>n.e(2).then(n.bind(null,"yt5i"))},data:()=>({name:"",ruleGroups:[s.e.createEmptySmartPlaylistRuleGroup()],meta:{loading:!1}}),methods:{addGroup(){this.ruleGroups.push(this.createGroup())},onGroupChanged(e){const t=Object.assign(this.ruleGroups.find(t=>t.id===e.id),e);0===t.rules.length&&(this.ruleGroups=this.ruleGroups.filter(e=>e.id!==t.id))},close(){this.$emit("close")},maybeClose(){this.name||this.ruleGroups.length?r.b.confirm("Discard all changes?",()=>this.close()):this.close()},submit(){return i(this,void 0,void 0,(function*(){this.meta.loading=!0;const e=yield s.e.store(this.name,[],this.ruleGroups);this.meta.loading=!1,this.close(),this.$nextTick(()=>o.a.go("playlist/"+e.id))}))},createGroup:()=>s.e.createEmptySmartPlaylistRuleGroup()}}),l=n("KHd+"),c=Object(l.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form-base",[n("template",{slot:"default"},[n("div",{on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.maybeClose(t)}}},[e.meta.loading?n("sound-bar"):n("form",{attrs:{"data-testid":"create-smart-playlist-form"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("header",[n("h1",[e._v("New Smart Playlist")])]),e._v(" "),n("div",[n("div",{staticClass:"form-row"},[n("label",[e._v("Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"koel-focus",rawName:"v-koel-focus"}],attrs:{type:"text",name:"name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-row rules"},[e._l(e.ruleGroups,(function(t,a){return n("rule-group",{key:t.id,attrs:{group:t,isFirstGroup:0===a},on:{input:e.onGroupChanged}})})),e._v(" "),n("btn",{staticClass:"btn-add-group",attrs:{green:"",small:"",uppercase:""},on:{click:function(t){return t.preventDefault(),e.addGroup(t)}}},[n("i",{staticClass:"fa fa-plus"}),e._v(" Group\n            ")])],2)]),e._v(" "),n("footer",[n("btn",{attrs:{type:"submit"}},[e._v("Save")]),e._v(" "),n("btn",{staticClass:"btn-cancel",attrs:{white:""},on:{click:function(t){return t.preventDefault(),e.maybeClose(t)}}},[e._v("Cancel")])],1)])],1)])],2)}),[],!1,null,null,null);t.default=c.exports}}]);