(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9195],{9006:function(t,i,e){"use strict";e.d(i,{mQ:function(){return b}});var l=e(59499),r=e(94184),n=e.n(r),o=e(96486),a=e(50970),d=e(85893);function s(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);i&&(l=l.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,l)}return e}function u(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?s(Object(e),!0).forEach((function(i){(0,l.Z)(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}var c=function(t){var i=t.className,e=t.activeId,l=t.options,r=t.onClick,o=t.asChips,s=t.size,u=void 0===s?"sm":s;return(0,d.jsx)("div",{className:n()("flex",i,{"border-b":!o}),children:l.map((function(t,i){return t.hidden?null:o?(0,d.jsx)(a.zx,{size:u,variant:t.id!==e?"secondary":"tertiary",onClick:function(){return null===r||void 0===r?void 0:r(t.id)},className:0!==i?"ml-3":void 0,icon:t.icon,asChip:!0,children:null!==t&&void 0!==t&&t.render?t.render():t.displayName},t.id):(0,d.jsx)("div",{tabIndex:0,role:"button",className:n()("py-3 px-4 mr-4 border-b-2 cursor-pointer text-sm",{"text-gray-500":t.id!==e,"text-black":t.id===e,"border-transparent":t.id!==e,"border-blue-500 ":t.id===e}),onClick:function(){return null===r||void 0===r?void 0:r(t.id)},children:t.displayName},t.id)}))})},v=function(t){var i=t.className,e=t.optionsLength,l=void 0===e?2:e,r=n()("flex border-b",i),a=(0,o.times)(l).map((function(t){return{id:t}}));return(0,d.jsx)("div",{className:r,children:a.map((function(t){var i=n()("py-3 px-4 mr-4 border-b-2 cursor-pointer text-sm border-gray-200");return(0,d.jsx)("div",{className:i,children:(0,d.jsx)("div",{className:"w-20 h-4 k-animated-background"})},t.id)}))})},b=function(t){return t.loading?(0,d.jsx)(v,u({},t)):(0,d.jsx)(c,u({},t))}},75117:function(t,i,e){"use strict";e.d(i,{Vd:function(){return r}});var l=e(96486),r=function(t,i){var e=t;if(null!==i&&void 0!==i&&i.params&&!(0,l.isEmpty)(i.params)){var r=(0,l.omitBy)(i.params,l.isNil);(0,l.forEach)(r,(function(t,i){e=e.replace("[".concat(i,"]"),t)}))}if(null!==i&&void 0!==i&&i.query&&!(0,l.isEmpty)(i.query)){var n=(0,l.omitBy)(i.query,l.isNil),o=new URLSearchParams(n);e+="?".concat(o)}return e}},90524:function(t,i,e){"use strict";e.r(i),e.d(i,{__N_SSG:function(){return N}});var l=e(27812),r=e(67294),n=e(45674),o=e(9006),a=e(96670),d=e(74022),s=e(41664),u=e.n(s),c=e(75117),v=e(65657),b=e(8282),m=e(86662),f=e(65326),p=e(94184),x=e.n(p),h=e(88255),g=e(12452),j=e(11163),y=e(85893),N=!0;i.default=function(t){var i,e,s,p,N,w,O,_,k=t.navigation,C=t.blogPage,P=t.blogs,E=t.footer,q=t.webinar,S=(0,j.useRouter)(),I=S.query.tag||"all",z=(0,r.useCallback)((function(t){S.replace((0,c.Vd)((0,m.qC)("blog"),{query:{tag:t}}),void 0,{shallow:!0})}),[S]);return(0,y.jsxs)("div",{className:"relative min-h-screen flex flex-col",children:[(0,y.jsx)(h._,{data:null===C||void 0===C||null===(i=C.attributes)||void 0===i?void 0:i.seo}),q&&(0,y.jsx)(n.E,{webinar:q}),(0,y.jsx)(d.w,{navigation:k,data:{id:null===C||void 0===C?void 0:C.id,title:null===C||void 0===C||null===(e=C.attributes)||void 0===e?void 0:e.title,description:null===C||void 0===C||null===(s=C.attributes)||void 0===s?void 0:s.description,minimal:!0}}),(0,y.jsxs)(v.b,{size:v.I.CMS,className:"relative",children:[!(null===C||void 0===C||null===(p=C.attributes)||void 0===p||null===(N=p.tags)||void 0===N||!N.length)&&(0,y.jsx)("div",{className:"flex justify-center mt-10",children:(0,y.jsx)(o.mQ,{activeId:I,options:[{id:"all",displayName:"All posts"}].concat((0,l.Z)((null===C||void 0===C||null===(w=C.attributes)||void 0===w||null===(O=w.tags)||void 0===O?void 0:O.map((function(t){return{id:t.id,displayName:t.label}})))||{})),onClick:z,asChips:!0,size:"md"})}),(0,y.jsx)("div",{className:"my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",children:null===P||void 0===P||null===(_=P.filter((function(t){var i,e;return"all"===I||(null===(i=t.attributes)||void 0===i||null===(e=i.tags)||void 0===e?void 0:e.includes(I))})))||void 0===_?void 0:_.map((function(t){var i,e,l,r,n,o,a,d,s,v,p,h,j,N,w,O,_,k,C,P,E;return(0,y.jsx)(u(),{href:(0,c.Vd)((0,m.qC)("blogItem"),{params:{slug:null===(i=t.attributes)||void 0===i?void 0:i.slug}}),children:(0,y.jsx)("a",{children:(0,y.jsxs)("div",{className:"col-span-1",children:[null!==(e=t.attributes)&&void 0!==e&&null!==(l=e.image)&&void 0!==l&&null!==(r=l.data)&&void 0!==r&&null!==(n=r.attributes)&&void 0!==n&&n.url?(0,y.jsx)(b.J,{src:null===(o=t.attributes)||void 0===o||null===(a=o.image)||void 0===a||null===(d=a.data)||void 0===d||null===(s=d.attributes)||void 0===s?void 0:s.url,alt:null===(v=t.attributes)||void 0===v||null===(p=v.image)||void 0===p||null===(h=p.data)||void 0===h||null===(j=h.attributes)||void 0===j?void 0:j.alternativeText,className:"w-full h-48 object-cover rounded-md border mb-8"}):(0,y.jsx)("div",{className:"relative bg-cover w-full h-48 rounded-md border mb-8",style:{backgroundImage:"url('/kausa_bg.svg')"},children:(0,y.jsx)("p",{className:"absolute top-1/2 text-white text-xl font-bold left-10 right-10 text-center transform -translate-y-1/2",children:null===(N=t.attributes)||void 0===N?void 0:N.title})}),(0,y.jsx)("p",{className:"text-lg font-medium text-gray-800",children:null===(w=t.attributes)||void 0===w?void 0:w.title}),(0,y.jsx)("p",{className:"text-sm text-gray-600 mt-2 h-10 overflow-hidden",children:null===(O=t.attributes)||void 0===O?void 0:O.subtitle}),(0,y.jsxs)("div",{className:"flex justify-between items-center border-t border-dotted mt-4 pt-2",children:[(0,y.jsx)("p",{className:"flex-none text-xs text-gray-600",children:(0,g.Yw)(null===(_=t.attributes)||void 0===_?void 0:_.publishedAt)}),!(null===(k=t.attributes)||void 0===k||null===(C=k.authors)||void 0===C||!C.data.length)&&(0,y.jsx)("div",{className:"flex-none flex justify-end",children:null===(P=t.attributes)||void 0===P||null===(E=P.authors)||void 0===E?void 0:E.data.map((function(i,e){var l,r,n,o,a,d,s,u,c,v,m,p;return(0,y.jsx)(f.u,{message:"Author: ".concat(null===(l=i.attributes)||void 0===l?void 0:l.name," (").concat(null===(r=i.attributes)||void 0===r?void 0:r.title,")"),children:(0,y.jsx)("div",{className:x()("flex-none",{"-mr-1.5":e<Number(null===(n=t.attributes)||void 0===n||null===(o=n.authors)||void 0===o?void 0:o.data.length)-1}),children:(0,y.jsx)(b.J,{src:null===(a=i.attributes)||void 0===a||null===(d=a.picture)||void 0===d||null===(s=d.data)||void 0===s||null===(u=s.attributes)||void 0===u?void 0:u.url,alt:null===(c=i.attributes)||void 0===c||null===(v=c.picture)||void 0===v||null===(m=v.data)||void 0===m||null===(p=m.attributes)||void 0===p?void 0:p.alternativeText,className:"w-7 h-7 object-cover rounded-full border-2 border-gray-300"})})},i.id)}))})]})]})})},t.id)}))})]}),(0,y.jsx)(a.i,{data:E})]})}},88255:function(t,i,e){"use strict";e.d(i,{_:function(){return n}});var l=e(28529),r=e(85893),n=function(t){var i,e,n,o=t.data;return(0,r.jsx)(l.W,{title:null===o||void 0===o?void 0:o.title,description:null===o||void 0===o?void 0:o.description,image:null===o||void 0===o||null===(i=o.image)||void 0===i||null===(e=i.data)||void 0===e||null===(n=e.attributes)||void 0===n?void 0:n.url,robots:null===o||void 0===o?void 0:o.robots,structuredData:null!==o&&void 0!==o&&o.structured_data?JSON.stringify(null===o||void 0===o?void 0:o.structured_data):void 0})}},67801:function(t,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return e(90524)}])}},function(t){var i=function(i){return t(t.s=i)};t.O(0,[8629,9704,9774,2888,179],(function(){return i(25436),i(67801)}));var e=t.O();_N_E=e}]);
//# sourceMappingURL=blog-d171fb33f718776f.js.map