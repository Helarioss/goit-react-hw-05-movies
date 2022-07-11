"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485,148],{5485:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,s,c,i=t(5861),u=t(885),o=t(7757),d=t.n(o),l=t(2791),p=t(501),f=t(6871),h=t(4390),x=t(9126),v=t(148),m=t(9689),j=t(168),g=t(6031),w=g.ZP.div(r||(r=(0,j.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),k=g.ZP.img(a||(a=(0,j.Z)(["\n  display: block;\n  max-width: 100%;\n  max-height: 500px;\n"]))),y=g.ZP.div(s||(s=(0,j.Z)(["\n  width: 100%;\n"]))),Z=(0,g.ZP)(p.rU)(c||(c=(0,j.Z)(["\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 20px;\n\n  color: black;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    color: red;\n  }\n\n  svg {\n    margin-right: 7px;\n  }\n"]))),b=t(184),_="idle",P="pending",S="resolved",U="rejected",C=function(){var n,e,t=(0,f.UO)().movieId,r=(0,f.TH)(),a=null!==(n=null===r||void 0===r||null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",s=function(n){var e=(0,l.useState)([]),t=(0,u.Z)(e,2),r=t[0],a=t[1],s=(0,l.useState)(_),c=(0,u.Z)(s,2),o=c[0],p=c[1],f=(0,l.useState)(null),x=(0,u.Z)(f,2),v=x[0],m=x[1];return(0,l.useEffect)((function(){function e(){return(e=(0,i.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(P),e.prev=1,e.next=4,(0,h.Pg)(n);case 4:t=e.sent,a(t),p(S),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),m(e.t0),p(U);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),{movie:r,status:o,error:v}}(t),c=s.movie,o=s.status,j=c.title,g=c.poster_path,C=c.overview,z=c.genres,E=c.release_date,G=c.vote_average;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(Z,{to:a,children:[(0,b.jsx)(x.aEb,{size:24}),"Go back"]}),o===P&&(0,b.jsx)(m.$,{}),o===U&&(0,b.jsx)(v.default,{}),o===S&&(0,b.jsxs)("div",{children:[(0,b.jsxs)(w,{children:[(0,b.jsx)(k,{src:"https://image.tmdb.org/t/p/w500/".concat(g),alt:"".concat(j,"'s poster")}),(0,b.jsxs)(y,{children:[(0,b.jsxs)("h1",{children:[j," (",E.slice(0,4),")"]}),(0,b.jsxs)("p",{children:["User Score: ",10*G,"%"]}),(0,b.jsx)("h2",{children:"Overview"}),(0,b.jsx)("p",{children:C}),(0,b.jsx)("h2",{children:"Genres"}),(0,b.jsx)("p",{children:z.map((function(n){return n.name})).join(", ")})]})]}),(0,b.jsx)("hr",{}),(0,b.jsx)("h3",{children:"Additional information"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsx)(p.rU,{to:"cast",state:{from:a},children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(p.rU,{to:"reviews",state:{from:a},children:"Reviews"})})]}),(0,b.jsx)("hr",{}),(0,b.jsx)(l.Suspense,{fallback:(0,b.jsx)(m.$,{}),children:(0,b.jsx)(f.j3,{})})]})]})}},148:function(n,e,t){t.r(e),t.d(e,{default:function(){return i}});var r,a=t(168),s=t(6031).ZP.h1(r||(r=(0,a.Z)(["\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),c=t(184),i=function(){return(0,c.jsx)(s,{children:"Sorry. Page not found"})}},4390:function(n,e,t){t.d(e,{Df:function(){return o},Ku:function(){return p},Pg:function(){return d},fI:function(){return l},z1:function(){return f}});var r=t(5861),a=t(7757),s=t.n(a),c=t(4569),i=t.n(c),u="80dd5d087ca76f72d259ad6d0e54d71f";i().defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/all/day?api_key=".concat(u));case 2:return n.abrupt("return",n.sent.data.results);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(s().mark((function n(e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"?api_key=").concat(u));case 2:return n.abrupt("return",n.sent.data);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(s().mark((function n(e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return n.abrupt("return",n.sent.data.results);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(s().mark((function n(e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return n.abrupt("return",n.sent.data.cast);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(s().mark((function n(e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/search/movie?query=".concat(e,"&api_key=").concat(u));case 2:return n.abrupt("return",n.sent.data.results);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=485.dc110ec2.chunk.js.map