"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[52],{52:function(e,r,n){n.r(r),n.d(r,{default:function(){return h}});var t=n(861),a=n(439),c=n(687),u=n.n(c),s=n(884),i=n(791),o=n(689),p=n(257),f=n(184);function h(){var e=(0,i.useState)(null),r=(0,a.Z)(e,2),n=r[0],c=r[1],h=(0,i.useState)(null),v=(0,a.Z)(h,2),d=v[0],l=v[1],m=(0,o.UO)().moviesId;return(0,i.useEffect)((function(){var e=function(){var e=(0,t.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Kk)(m);case 3:if(r=e.sent){e.next=6;break}throw new Error("no such actors");case 6:c(r.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),l(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),d?(0,f.jsxs)("div",{children:["Error: ",d]}):n?(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Reviews Movie"}),(0,f.jsx)(p.ListReviews,{children:0===n.length?(0,f.jsx)("div",{children:"No reviews available for this movie."}):n.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)("h4",{children:e.author}),(0,f.jsx)("p",{children:e.content})]},e.id)}))})]})}):(0,f.jsx)(p.Loader,{})}},884:function(e,r,n){n.d(r,{Kk:function(){return v},bA:function(){return o},iy:function(){return f},m7:function(){return h},z1:function(){return p}});var t=n(861),a=n(687),c=n.n(a),u=n(243),s="https://api.themoviedb.org/3/movie",i="f67e76050f18af747f45c959a8cec474",o=function(){var e=(0,t.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={params:{api_key:i,language:"en-US"}},e.next=3,u.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day"),r);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{query:r,api_key:i,language:"en-US"}},e.next=3,u.Z.get("".concat("https://api.themoviedb.org/3/search/movie"),n);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:i}},e.next=3,u.Z.get("".concat(s,"/").concat(r),n);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:i,language:"en-US"}},e.next=3,u.Z.get("".concat(s,"/").concat(r,"/credits"),n);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(c().mark((function e(r){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{api_key:i,language:"en-US"}},e.next=3,u.Z.get("".concat(s,"/").concat(r,"/reviews"),n);case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=52.9541f569.chunk.js.map