(function(e){function t(t){for(var i,s,a=t[0],c=t[1],l=t[2],d=0,p=[];d<a.length;d++)s=a[d],o[s]&&p.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/video-browser/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("SearchBar",{on:{termChange:e.onTermChange}}),n("div",{staticClass:"row"},[n("VideoDetail",{attrs:{video:e.selectedVideo}}),n("VideoList",{attrs:{videos:e.videos},on:{videoSelect:e.onVideoSelect}})],1)],1)},r=[],s=n("bc3a"),a=n.n(s),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{attrs:{type:"text"},on:{input:e.onInput}})])},l=[],u={name:"SearchBar",methods:{onInput:function(e){this.$emit("termChange",e.target.value)}}},d=u,p=(n("bbd3"),n("2877")),f=Object(p["a"])(d,c,l,!1,null,"5766bd8f",null),v=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list-group col-md-4"},e._l(e.videos,function(t){return n("VideoListItem",{key:t.etag,attrs:{video:t},on:{videoSelect:e.onVideoSelect}})}),1)},b=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"list-group-item media",on:{click:e.onVideoSelect}},[n("img",{staticClass:"mr-3",attrs:{src:e.thumbnailUrl,alt:e.videoTitle}}),n("div",{staticClass:"media-body"},[e._v(e._s(e.videoTitle))])])},y=[],_={name:"VideoListItem",props:{video:Object},computed:{videoTitle:function(){return this.video.snippet.title},thumbnailUrl:function(){return this.video.snippet.thumbnails.default.url}},methods:{onVideoSelect:function(){this.$emit("videoSelect",this.video)}}},g=_,S=(n("b4c5"),Object(p["a"])(g,h,y,!1,null,"2ef735b3",null)),w=S.exports,V={name:"VideoList",components:{VideoListItem:w},props:{videos:Array},methods:{onVideoSelect:function(e){this.$emit("videoSelect",e)}}},O=V,j=(n("8ccd"),Object(p["a"])(O,m,b,!1,null,"57de19a9",null)),C=j.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.video?n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"embed-responsive embed-responsive-16by9"},[n("iframe",{staticClass:"embed-responsive-item",attrs:{src:e.videoUrl,frameborder:"0",allowfullscreen:""}})]),n("div",{staticClass:"details"},[n("h4",[e._v(e._s(e.video.snippet.title))]),n("p",[e._v(e._s(e.video.snippet.description))])])]):e._e()},$=[],k={name:"VideoDetail",props:{video:Object},computed:{videoUrl:function(){var e=this.video.id.videoId;return"https://www.youtube.com/embed/".concat(e)}}},I=k,T=(n("d5a0"),Object(p["a"])(I,x,$,!1,null,"9cd51db8",null)),L=T.exports,P="AIzaSyDOthGbDGslko3tMBzCmm1aoy8Sfd3_Azg",D={name:"App",components:{SearchBar:v,VideoList:C,VideoDetail:L},data:function(){return{videos:[],selectedVideo:null}},methods:{onTermChange:function(e){var t=this;a.a.get("https://www.googleapis.com/youtube/v3/search",{params:{key:P,type:"video",part:"snippet",q:e}}).then(function(e){t.videos=e.data.items,t.selectedVideo=e.data.items[0]})},onVideoSelect:function(e){this.selectedVideo=e}}},E=D,M=Object(p["a"])(E,o,r,!1,null,null,null),A=M.exports;new i["a"]({render:function(e){return e(A)}}).$mount("#app")},"77ca":function(e,t,n){},"8ccd":function(e,t,n){"use strict";var i=n("9e89"),o=n.n(i);o.a},"9a84":function(e,t,n){},"9e89":function(e,t,n){},b4c5:function(e,t,n){"use strict";var i=n("9a84"),o=n.n(i);o.a},b717:function(e,t,n){},bbd3:function(e,t,n){"use strict";var i=n("77ca"),o=n.n(i);o.a},d5a0:function(e,t,n){"use strict";var i=n("b717"),o=n.n(i);o.a}});
//# sourceMappingURL=app.29270023.js.map