(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8Z7q":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,':root{--color-text-primary:#fff;--color-text-secondary:hsla(0,0%,100%,0.7);--color-bg-primary:#181818;--color-bg-secondary:hsla(0,0%,100%,0.025);--color-highlight:#ff7d2e;--bg-image:none;--bg-position:center;--bg-attachment:fixed;--bg-size:cover;--font-family:system,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;--font-weight-thin:100;--font-weight-light:300;--font-weight-normal:500;--header-height:48px;--footer-height:64px;--footer-height-mobile:74px;--extra-panel-width:334px;--color-black:#181818;--color-maroon:#bf2043;--color-green:#56a052;--color-blue:#0191f7;--color-red:#c34848}:root[data-theme=violet]{--color-bg-primary:#31094e}:root[data-theme=oak]{--color-bg-primary:#560d25}:root[data-theme=slate]{--color-bg-primary:#29434e}:root[data-theme=madison]{--color-bg-primary:#0e3463;--color-highlight:#fbab18}:root[data-theme=astronaut]{--color-bg-primary:#2a3074}:root[data-theme=chocolate]{--color-bg-primary:#3f2724}:root[data-theme=laura]{--color-bg-primary:#126673;--color-highlight:rgba(10,244,255,0.64)}:root[data-theme=rose-petals]{--bg-image:url(/img/themes/bg-rose-petals.svg);--color-bg-primary:#7d083b}:root[data-theme=purple-waves]{--color-bg-primary:#44115c;--bg-image:url(/img/themes/bg-purple-waves.svg)}:root[data-theme=cat]{--bg-image:url(/img/themes/bg-cat.jpg);--bg-position:left;--color-bg-primary:#000}:root[data-theme=pop-culture]{--bg-image:url(/img/themes/bg-pop-culture.jpg);--color-bg-primary:#ad0937;--color-highlight:rgba(234,208,110,0.9)}:root[data-theme=jungle]{--bg-image:url(/img/themes/bg-jungle.jpg);--color-bg-primary:#0f0f03}:root[data-theme=mountains]{--bg-image:url(/img/themes/bg-mountains.jpg);--color-bg-primary:#0e2656}:root[data-theme=pines]{--bg-image:url(/img/themes/bg-pines.jpg);--color-bg-primary:#06090c;--color-highlight:#5984b9}:root[data-theme=nemo]{--bg-image:url(/img/themes/bg-nemo.jpg);--color-bg-primary:#031724}.sep{display:none}.as-list .sep{display:inline}.item{position:relative;max-width:256px}@media only screen and (max-width:768px){.item{max-width:100%}}.item:focus-within .right,.item:hover .right{display:block!important}.item.compact{display:flex;flex-direction:row;max-width:100%;overflow:hidden;min-height:80px}.item.compact .thumbnail-wrapper{width:80px}.item.compact footer{max-height:80px;flex:1}.item.compact .info{margin-bottom:12px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.item.compact .sep,.item.compact a.artist,.item.compact a.name{display:inline;white-space:inherit}.item footer{padding:16px;background:var(--color-bg-secondary);flex:1;overflow:hidden}.item .name{font-weight:var(--font-weight-normal)}.item .meta{color:var(--color-text-secondary);margin-top:4px;font-size:.9rem;display:flex;justify-content:space-between}.item .meta .right{display:none}@media (hover:none){.item .meta .right{display:block}}.item .meta .right a{margin-left:4px}.item a.artist,.item a.name{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.item a.artist:link,.item a.artist:visited,.item a.name:link,.item a.name:visited{color:var(--color-text-primary)}.item a.artist:focus,.item a.artist:hover,.item a.name:focus,.item a.name:hover{color:var(--color-highlight)}.compact .item .info{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',""])},BQgC:function(t,e,a){var o=a("8Z7q");"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,i);o.locals&&(t.exports=o.locals)},Z269:function(t,e,a){"use strict";a.r(e);var o=a("mF3K"),i=a("ilaN"),r=a("c8RX"),l=a("OUsP"),s=a("axj1"),n=a("uhNi"),m=Object(o.a)(s.a).extend({props:{layout:{type:String,default:"full"}},components:{AlbumThumbnail:()=>a.e(4).then(a.bind(null,"A9fp"))},filters:{pluralize:i.v},data:()=>({sharedState:r.k.state}),computed:{isNormalArtist(){return!r.b.isVariousArtists(this.album.artist)&&!r.b.isUnknownArtist(this.album.artist)}},methods:{shuffle(){l.h.playAllInAlbum(this.album,!0)},download(){l.e.fromAlbum(this.album)},dragStart(t){Object(i.z)(t,this.album,"Album")},requestContextMenu(t){i.f.emit(n.b.ALBUM_CONTEXT_MENU_REQUESTED,t,this.album)}}}),c=(a("pKVR"),a("KHd+")),p=Object(c.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.album.songs.length?a("article",{staticClass:"item",class:t.layout,attrs:{title:t.album.name+" by "+t.album.artist.name,draggable:"true",tabindex:"0","data-test":"album-card"},on:{dragstart:t.dragStart,contextmenu:function(e){return e.preventDefault(),t.requestContextMenu(e)},dblclick:t.shuffle}},[a("span",{staticClass:"thumbnail-wrapper"},[a("album-thumbnail",{attrs:{entity:t.album}})],1),t._v(" "),a("footer",[a("div",{staticClass:"info"},[a("a",{staticClass:"name",attrs:{href:"#!/album/"+t.album.id}},[t._v(t._s(t.album.name))]),t._v(" "),a("span",{staticClass:"sep text-secondary"},[t._v("by")]),t._v(" "),t.isNormalArtist?a("a",{staticClass:"artist",attrs:{href:"#!/artist/"+t.album.artist.id}},[t._v(t._s(t.album.artist.name))]):a("span",{staticClass:"artist nope"},[t._v(t._s(t.album.artist.name))])]),t._v(" "),a("p",{staticClass:"meta"},[a("span",{staticClass:"left"},[t._v("\n        "+t._s(t._f("pluralize")(t.album.songs.length,"song"))+"\n        •\n        "+t._s(t.fmtLength)+"\n        •\n        "+t._s(t._f("pluralize")(t.album.playCount,"play"))+"\n      ")]),t._v(" "),a("span",{staticClass:"right"},[a("a",{staticClass:"shuffle-album",attrs:{title:"Shuffle all songs in the album "+t.album.name,href:"",role:"button"},on:{click:function(e){return e.preventDefault(),t.shuffle(e)}}},[a("i",{staticClass:"fa fa-random"})]),t._v(" "),t.sharedState.allowDownload?a("a",{staticClass:"download-album",attrs:{title:"Download all songs in the album "+t.album.name,href:"",role:"button"},on:{click:function(e){return e.preventDefault(),t.download(e)}}},[a("i",{staticClass:"fa fa-download"})]):t._e()])])])]):t._e()}),[],!1,null,null,null);e.default=p.exports},axj1:function(t,e,a){"use strict";var o=a("JspL"),i=a("ilaN");e.a=o.a.extend({props:{album:{type:Object,required:!0}},computed:{length(){return this.album.songs.reduce((t,e)=>t+e.length,0)},fmtLength(){return Object(i.w)(this.length)}}})},pKVR:function(t,e,a){"use strict";var o=a("BQgC");a.n(o).a}}]);