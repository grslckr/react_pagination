(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),r=c(1),l=(c(10),c(2)),s=c.n(l);function o(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var j=c(0),d=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=o(1,a).map((function(e){return"Item ".concat(e)})),r=Math.ceil(i.length/c),l=c*(t-1)+1,d=l+c-1,u=1===t,h=t===r,b=o(1,r),p=i.filter((function(e){var a=+e.slice(4);return a<=d&&a>=l}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:s()("page-item",{disabled:1===t}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":u,onClick:function(){return!u&&n(t-1)},children:"\xab"})}),b.map((function(e){return Object(j.jsx)("li",{className:s()("page-item",{active:t===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})})})),Object(j.jsx)("li",{className:s()("page-item",{disabled:r===t}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":h,onClick:function(){return!h&&n(t+1)},children:"\xbb"})})]}),Object(j.jsx)("ul",{children:p.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e.slice(4))}))})]})},u=function(){var e=Object(r.useState)(5),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),s=l[0],o=l[1],u=+c*(+s-1)+1,h=u+ +c-1;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(u," - ").concat(h," of 42)")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){t(+e.target.value),o(1)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:42,perPage:c,currentPage:s,onPageChange:o})]})};n.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.4589113d.chunk.js.map