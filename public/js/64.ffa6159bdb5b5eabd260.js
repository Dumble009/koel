(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{dYeg:function(t,a,s){"use strict";s.r(a);var l=s("JspL"),e=s("c8RX"),i=s("OUsP"),n=s("2Bgu"),o=l.a.extend({components:{BaseContextMenu:()=>s.e(5).then(s.bind(null,"fgFo"))},props:{album:{type:Object}},data:()=>({sharedState:e.k.state}),computed:{isStandardAlbum(){return!e.a.isUnknownAlbum(this.album)},isStandardArtist(){return!e.b.isUnknownArtist(this.album.artist)&&!e.b.isVariousArtists(this.album.artist)}},methods:{open(t,a){this.$refs.base.open(t,a)},play(){i.h.playAllInAlbum(this.album)},shuffle(){i.h.playAllInAlbum(this.album,!0)},viewAlbumDetails(){n.a.go("album/"+this.album.id),this.close()},viewArtistDetails(){n.a.go("artist/"+this.album.artist.id),this.close()},download(){i.e.fromAlbum(this.album),this.close()},close(){this.$refs.base.close()}}}),r=s("KHd+"),u=Object(r.a)(o,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("base-context-menu",{ref:"base",attrs:{"extra-class":"album-menu","data-testid":"album-context-menu"}},[t.album?[s("li",{attrs:{"data-test":"play"},on:{click:t.play}},[t._v("Play All")]),t._v(" "),s("li",{attrs:{"data-test":"shuffle"},on:{click:t.shuffle}},[t._v("Shuffle All")]),t._v(" "),s("li",{staticClass:"separator"}),t._v(" "),t.isStandardAlbum?s("li",{attrs:{"data-test":"view-album"},on:{click:t.viewAlbumDetails}},[t._v("Go to Album")]):t._e(),t._v(" "),t.isStandardArtist?s("li",{attrs:{"data-test":"view-artist"},on:{click:t.viewArtistDetails}},[t._v("Go to Artist")]):t._e(),t._v(" "),t.isStandardAlbum&&t.sharedState.allowDownload?[s("li",{staticClass:"separator"}),t._v(" "),s("li",{attrs:{"data-test":"download"},on:{click:t.download}},[t._v("Download")])]:t._e()]:t._e()],2)}),[],!1,null,null,null);a.default=u.exports}}]);