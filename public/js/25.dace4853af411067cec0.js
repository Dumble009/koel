(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{AbH0:function(t,a,e){"use strict";var o=e("NqVG");e.n(o).a},FNya:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,'[data-v-549962c2]:root{--color-text-primary:#fff;--color-text-secondary:hsla(0,0%,100%,0.7);--color-bg-primary:#181818;--color-bg-secondary:hsla(0,0%,100%,0.025);--color-highlight:#ff7d2e;--bg-image:none;--bg-position:center;--bg-attachment:fixed;--bg-size:cover;--font-family:system,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;--font-weight-thin:100;--font-weight-light:300;--font-weight-normal:500;--header-height:48px;--footer-height:64px;--footer-height-mobile:74px;--extra-panel-width:334px;--color-black:#181818;--color-maroon:#bf2043;--color-green:#56a052;--color-blue:#0191f7;--color-red:#c34848}:root[data-theme=violet][data-v-549962c2]{--color-bg-primary:#31094e}:root[data-theme=oak][data-v-549962c2]{--color-bg-primary:#560d25}:root[data-theme=slate][data-v-549962c2]{--color-bg-primary:#29434e}:root[data-theme=madison][data-v-549962c2]{--color-bg-primary:#0e3463;--color-highlight:#fbab18}:root[data-theme=astronaut][data-v-549962c2]{--color-bg-primary:#2a3074}:root[data-theme=chocolate][data-v-549962c2]{--color-bg-primary:#3f2724}:root[data-theme=laura][data-v-549962c2]{--color-bg-primary:#126673;--color-highlight:rgba(10,244,255,0.64)}:root[data-theme=rose-petals][data-v-549962c2]{--bg-image:url(/img/themes/bg-rose-petals.svg);--color-bg-primary:#7d083b}:root[data-theme=purple-waves][data-v-549962c2]{--color-bg-primary:#44115c;--bg-image:url(/img/themes/bg-purple-waves.svg)}:root[data-theme=cat][data-v-549962c2]{--bg-image:url(/img/themes/bg-cat.jpg);--bg-position:left;--color-bg-primary:#000}:root[data-theme=pop-culture][data-v-549962c2]{--bg-image:url(/img/themes/bg-pop-culture.jpg);--color-bg-primary:#ad0937;--color-highlight:rgba(234,208,110,0.9)}:root[data-theme=jungle][data-v-549962c2]{--bg-image:url(/img/themes/bg-jungle.jpg);--color-bg-primary:#0f0f03}:root[data-theme=mountains][data-v-549962c2]{--bg-image:url(/img/themes/bg-mountains.jpg);--color-bg-primary:#0e2656}:root[data-theme=pines][data-v-549962c2]{--bg-image:url(/img/themes/bg-pines.jpg);--color-bg-primary:#06090c;--color-highlight:#5984b9}:root[data-theme=nemo][data-v-549962c2]{--bg-image:url(/img/themes/bg-nemo.jpg);--color-bg-primary:#031724}#albumWrapper .loading[data-v-549962c2]{display:flex;align-items:center;justify-content:center;height:100%}#albumWrapper .info-wrapper[data-v-549962c2]{color:var(--color-text-secondary);position:absolute;top:0;left:0;background:var(--color-bg-primary);width:100%;height:100%;z-index:2}#albumWrapper .info-wrapper .inner[data-v-549962c2]{overflow:auto;height:100%;padding:24px 24px 48px}@media only screen and (max-width:768px){#albumWrapper .info-wrapper .inner[data-v-549962c2]{padding:16px}}',""])},NqVG:function(t,a,e){var o=e("FNya");"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,n);o.locals&&(t.exports=o.locals)},axj1:function(t,a,e){"use strict";var o=e("JspL"),n=e("ilaN");a.a=o.a.extend({props:{album:{type:Object,required:!0}},computed:{length(){return this.album.songs.reduce((t,a)=>t+a.length,0)},fmtLength(){return Object(n.w)(this.length)}}})},fnsJ:function(t,a,e){"use strict";e.r(a);var o=e("mF3K"),n=e("ilaN"),r=e("c8RX"),l=e("OUsP"),i=e("2Bgu"),s=e("f4RB"),c=e("axj1"),g=function(t,a,e,o){return new(e||(e=Promise))((function(n,r){function l(t){try{s(o.next(t))}catch(t){r(t)}}function i(t){try{s(o.throw(t))}catch(t){r(t)}}function s(t){var a;t.done?n(t.value):(a=t.value,a instanceof e?a:new e((function(t){t(a)}))).then(l,i)}s((o=o.apply(t,a||[])).next())}))},m=Object(o.a)(s.a,c.a).extend({components:{ScreenHeader:()=>e.e(1).then(e.bind(null,"53GJ")),AlbumInfo:()=>e.e(10).then(e.bind(null,"kNsj")),SoundBar:()=>e.e(2).then(e.bind(null,"yt5i")),AlbumThumbnail:()=>e.e(4).then(e.bind(null,"A9fp")),CloseModalBtn:()=>e.e(9).then(e.bind(null,"B9YZ"))},filters:{pluralize:n.v},data:()=>({sharedState:r.k.state,listConfig:{columns:["track","title","length"]},meta:{showing:!1,loading:!0}}),computed:{isNormalArtist(){return!r.b.isVariousArtists(this.album.artist)&&!r.b.isUnknownArtist(this.album.artist)}},watch:{"album.songs.length":t=>{t||i.a.go("albums")},album(){this.meta.showing=!1,this.$refs.songList&&this.$refs.songList.sort()}},methods:{download(){l.e.fromAlbum(this.album)},showInfo(){return g(this,void 0,void 0,(function*(){if(this.meta.showing=!0,this.album.info)this.meta.loading=!1;else try{yield l.a.fetch(this.album)}catch(t){console.error(t)}finally{this.meta.loading=!1}}))}}}),u=(e("AbH0"),e("KHd+")),h=Object(u.a)(m,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"albumWrapper"}},[e("screen-header",{scopedSlots:t._u([{key:"thumbnail",fn:function(){return[e("album-thumbnail",{attrs:{entity:t.album}})]},proxy:!0},{key:"meta",fn:function(){return[t.album.songs.length?e("span",[t._v("\n        by\n        "),t.isNormalArtist?e("a",{staticClass:"artist",attrs:{href:"#!/artist/"+t.album.artist.id}},[t._v(t._s(t.album.artist.name))]):e("span",{staticClass:"nope"},[t._v(t._s(t.album.artist.name))]),t._v("\n        •\n        "+t._s(t._f("pluralize")(t.album.songs.length,"song"))+"\n        •\n        "+t._s(t.fmtLength)+"\n\n        "),t.sharedState.useLastfm?[t._v("\n          •\n          "),e("a",{staticClass:"info",attrs:{href:"",title:"View album's extra information"},on:{click:function(a){return a.preventDefault(),t.showInfo(a)}}},[t._v("Info")])]:t._e(),t._v(" "),t.sharedState.allowDownload?[t._v("\n          •\n          "),e("a",{staticClass:"download",attrs:{href:"",title:"Download all songs in album",role:"button"},on:{click:function(a){return a.preventDefault(),t.download(a)}}},[t._v("\n            Download All\n          ")])]:t._e()],2):t._e()]},proxy:!0},{key:"controls",fn:function(){return[!t.album.songs.length||t.isPhone&&!t.showingControls?t._e():e("song-list-controls",{attrs:{songs:t.album.songs,config:t.songListControlConfig,selectedSongs:t.selectedSongs},on:{playAll:t.playAll,playSelected:t.playSelected}})]},proxy:!0}])},[t._v("\n    "+t._s(t.album.name)+"\n    "),e("controls-toggler",{attrs:{"showing-controls":t.showingControls},on:{toggleControls:t.toggleControls}})],1),t._v(" "),e("song-list",{ref:"songList",attrs:{items:t.album.songs,type:"album",config:t.listConfig}}),t._v(" "),t.sharedState.useLastfm&&t.meta.showing?e("section",{staticClass:"info-wrapper"},[e("close-modal-btn",{on:{click:function(a){t.meta.showing=!1}}}),t._v(" "),e("div",{staticClass:"inner"},[t.meta.loading?e("div",{staticClass:"loading"},[e("sound-bar")],1):e("album-info",{attrs:{album:t.album,mode:"full"}})],1)],1):t._e()],1)}),[],!1,null,"549962c2",null);a.default=h.exports}}]);