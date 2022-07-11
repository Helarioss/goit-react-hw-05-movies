"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[678],{2678:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r,a,c,u,s,i=e(5861),o=e(885),p=e(7757),f=e.n(p),d=e(9689),l=e(2791),h=e(4390),v=e(168),m=e(501),x=e(6031),g=x.ZP.h1(r||(r=(0,v.Z)(["\n  text-align: center;\n  margin: 0;\n  margin-bottom: 30px;\n"]))),w=x.ZP.ul(a||(a=(0,v.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 30px 20px;\n"]))),Z=x.ZP.img(c||(c=(0,v.Z)(["\n  display: block;\n  max-width: 100%;\n  height: 340px;\n  object-fit: cover;\n"]))),k=x.ZP.h3(u||(u=(0,v.Z)(["\n  margin: 0;\n  margin-top: 12px;\n  font-size: 20px;\n"]))),y=(0,x.ZP)(m.rU)(s||(s=(0,v.Z)(["\n  color: black;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    color: red;\n  }\n"]))),b=e(184),_="idle",j="pending",P="resolved",S="rejected",z=function(){var n=function(){var n=(0,l.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,l.useState)(_),c=(0,o.Z)(a,2),u=c[0],s=c[1],p=(0,l.useState)(null),d=(0,o.Z)(p,2),v=d[0],m=d[1];return(0,l.useEffect)((function(){function n(){return(n=(0,i.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(j),n.prev=1,n.next=4,(0,h.Df)();case 4:t=n.sent,r(t),s(P),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),m(n.t0),s(S);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),{movies:e,status:u,error:v}}(),t=n.movies,e=n.status,r=n.error;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(g,{children:"Trending today"}),e===j&&(0,b.jsx)(d.$,{}),e===S&&(0,b.jsxs)("h1",{children:["Error: ",r.message]}),e===P&&(0,b.jsx)(w,{children:t.map((function(n){var t=n.title,e=n.poster_path,r=n.name,a=n.id;return(0,b.jsx)("li",{children:(0,b.jsxs)(y,{to:"/movies/".concat(a),children:[(0,b.jsx)(Z,{src:"https://image.tmdb.org/t/p/w500/".concat(e),alt:"".concat(t,"'s poster")}),(0,b.jsx)(k,{children:null!==t&&void 0!==t?t:r})]})},a)}))})]})}},4390:function(n,t,e){e.d(t,{Df:function(){return o},Ku:function(){return d},Pg:function(){return p},fI:function(){return f},z1:function(){return l}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),s=e.n(u),i="80dd5d087ca76f72d259ad6d0e54d71f";s().defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/trending/all/day?api_key=".concat(i));case 2:return n.abrupt("return",n.sent.data.results);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(t,"?api_key=").concat(i));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n.abrupt("return",n.sent.data.results);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n.abrupt("return",n.sent.data.cast);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("/search/movie?query=".concat(t,"&api_key=").concat(i));case 2:return n.abrupt("return",n.sent.data.results);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=678.37f92d1f.chunk.js.map