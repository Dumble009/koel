(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{LzcB:function(t,e,a){var o=a("j5Vm");"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,r);o.locals&&(t.exports=o.locals)},b0HR:function(t,e,a){"use strict";a.r(e);var o=a("mF3K"),r=a("ilaN"),n=a("c8RX"),i=a("OUsP"),s=a("2Bgu"),l=a("f4RB"),g=a("irYu"),c=function(t,e,a,o){return new(a||(a=Promise))((function(r,n){function i(t){try{l(o.next(t))}catch(t){n(t)}}function s(t){try{l(o.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(i,s)}l((o=o.apply(t,e||[])).next())}))},d=Object(o.a)(l.a,g.a).extend({components:{ScreenHeader:()=>a.e(1).then(a.bind(null,"53GJ")),ArtistInfo:()=>a.e(11).then(a.bind(null,"oIb4")),SoundBar:()=>a.e(2).then(a.bind(null,"yt5i")),ArtistThumbnail:()=>a.e(4).then(a.bind(null,"A9fp")),CloseModalBtn:()=>a.e(9).then(a.bind(null,"B9YZ"))},filters:{pluralize:r.v},data:()=>({listConfig:{columns:["track","title","album","length"]},sharedState:n.k.state,meta:{showing:!1,loading:!0}}),watch:{"artist.albums.length":t=>{t||s.a.go("artists")},artist(){this.meta.showing=!1,this.$refs.songList&&this.$refs.songList.sort()}},methods:{download(){i.e.fromArtist(this.artist)},showInfo(){return c(this,void 0,void 0,(function*(){if(this.meta.showing=!0,this.artist.info)this.meta.loading=!1;else try{yield i.b.fetch(this.artist)}catch(t){console.error(t)}finally{this.meta.loading=!1}}))}}}),h=(a("tlwa"),a("KHd+")),m=Object(h.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"artistWrapper"}},[a("screen-header",{scopedSlots:t._u([{key:"thumbnail",fn:function(){return[a("artist-thumbnail",{attrs:{entity:t.artist}})]},proxy:!0},{key:"meta",fn:function(){return[t.artist.songs.length?a("span",[t._v("\n        "+t._s(t._f("pluralize")(t.artist.albums.length,"album"))+"\n        •\n        "+t._s(t._f("pluralize")(t.artist.songs.length,"song"))+"\n        •\n        "+t._s(t.fmtLength)+"\n\n        "),t.sharedState.useLastfm?[t._v("\n          •\n          "),a("a",{staticClass:"info",attrs:{href:"",title:"View artist's extra information"},on:{click:function(e){return e.preventDefault(),t.showInfo(e)}}},[t._v("Info")])]:t._e(),t._v(" "),t.sharedState.allowDownload?[t._v("\n          •\n          "),a("a",{staticClass:"download",attrs:{href:"",role:"button",title:"Download all songs by this artist"},on:{click:function(e){return e.preventDefault(),t.download(e)}}},[t._v("\n            Download All\n          ")])]:t._e()],2):t._e()]},proxy:!0},{key:"controls",fn:function(){return[!t.artist.songs.length||t.isPhone&&!t.showingControls?t._e():a("song-list-controls",{attrs:{songs:t.artist.songs,config:t.songListControlConfig,selectedSongs:t.selectedSongs},on:{playAll:t.playAll,playSelected:t.playSelected}})]},proxy:!0}])},[t._v("\n    "+t._s(t.artist.name)+"\n    "),a("controls-toggler",{attrs:{"showing-controls":t.showingControls},on:{toggleControls:t.toggleControls}})],1),t._v(" "),a("song-list",{ref:"songList",attrs:{items:t.artist.songs,type:"artist",config:t.listConfig}}),t._v(" "),t.sharedState.useLastfm&&t.meta.showing?a("section",{staticClass:"info-wrapper"},[a("close-modal-btn",{on:{click:function(e){t.meta.showing=!1}}}),t._v(" "),a("div",{staticClass:"inner"},[t.meta.loading?a("div",{staticClass:"loading"},[a("sound-bar")],1):a("artist-info",{attrs:{artist:t.artist,mode:"full"}})],1)],1):t._e()],1)}),[],!1,null,"78008de4",null);e.default=m.exports},irYu:function(t,e,a){"use strict";var o=a("JspL"),r=a("ilaN");e.a=o.a.extend({props:{artist:{type:Object,required:!0}},computed:{length(){return this.artist.songs.reduce((t,e)=>t+e.length,0)},fmtLength(){return Object(r.w)(this.length)},image(){return this.artist.image||(this.artist.image=Object(r.k)(),this.artist.albums.every(t=>{if(t.cover!==Object(r.k)())return this.artist.image=t.cover,!1})),this.artist.image}}})},j5Vm:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,'[data-v-78008de4]:root{--color-text-primary:#fff;--color-text-secondary:hsla(0,0%,100%,0.7);--color-bg-primary:#181818;--color-bg-secondary:hsla(0,0%,100%,0.025);--color-highlight:#ff7d2e;--bg-image:none;--bg-position:center;--bg-attachment:fixed;--bg-size:cover;--font-family:system,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;--font-weight-thin:100;--font-weight-light:300;--font-weight-normal:500;--header-height:48px;--footer-height:64px;--footer-height-mobile:74px;--extra-panel-width:334px;--color-black:#181818;--color-maroon:#bf2043;--color-green:#56a052;--color-blue:#0191f7;--color-red:#c34848}:root[data-theme=violet][data-v-78008de4]{--color-bg-primary:#31094e}:root[data-theme=oak][data-v-78008de4]{--color-bg-primary:#560d25}:root[data-theme=slate][data-v-78008de4]{--color-bg-primary:#29434e}:root[data-theme=madison][data-v-78008de4]{--color-bg-primary:#0e3463;--color-highlight:#fbab18}:root[data-theme=astronaut][data-v-78008de4]{--color-bg-primary:#2a3074}:root[data-theme=chocolate][data-v-78008de4]{--color-bg-primary:#3f2724}:root[data-theme=laura][data-v-78008de4]{--color-bg-primary:#126673;--color-highlight:rgba(10,244,255,0.64)}:root[data-theme=rose-petals][data-v-78008de4]{--bg-image:url(/img/themes/bg-rose-petals.svg);--color-bg-primary:#7d083b}:root[data-theme=purple-waves][data-v-78008de4]{--color-bg-primary:#44115c;--bg-image:url(/img/themes/bg-purple-waves.svg)}:root[data-theme=cat][data-v-78008de4]{--bg-image:url(/img/themes/bg-cat.jpg);--bg-position:left;--color-bg-primary:#000}:root[data-theme=pop-culture][data-v-78008de4]{--bg-image:url(/img/themes/bg-pop-culture.jpg);--color-bg-primary:#ad0937;--color-highlight:rgba(234,208,110,0.9)}:root[data-theme=jungle][data-v-78008de4]{--bg-image:url(/img/themes/bg-jungle.jpg);--color-bg-primary:#0f0f03}:root[data-theme=mountains][data-v-78008de4]{--bg-image:url(/img/themes/bg-mountains.jpg);--color-bg-primary:#0e2656}:root[data-theme=pines][data-v-78008de4]{--bg-image:url(/img/themes/bg-pines.jpg);--color-bg-primary:#06090c;--color-highlight:#5984b9}:root[data-theme=nemo][data-v-78008de4]{--bg-image:url(/img/themes/bg-nemo.jpg);--color-bg-primary:#031724}#artistWrapper .loading[data-v-78008de4]{display:flex;align-items:center;justify-content:center;height:100%}#artistWrapper .info-wrapper[data-v-78008de4]{color:var(--color-text-secondary);position:absolute;top:0;left:0;background:var(--color-bg-primary);width:100%;height:100%;z-index:2}#artistWrapper .info-wrapper .inner[data-v-78008de4]{overflow:auto;height:100%;padding:24px 24px 48px}@media only screen and (max-width:768px){#artistWrapper .info-wrapper .inner[data-v-78008de4]{padding:16px}}',""])},tlwa:function(t,e,a){"use strict";var o=a("LzcB");a.n(o).a}}]);