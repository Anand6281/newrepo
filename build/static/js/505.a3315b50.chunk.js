"use strict";(self.webpackChunkreact_ecommerce=self.webpackChunkreact_ecommerce||[]).push([[505],{8697:(e,s,c)=>{c.d(s,{Z:()=>d});var l=c(7022),t=c(9743),a=c(2677);const i=c.p+"static/media/table.c96637810cb2ae358aca.jpg";var r=c(184);const d=e=>{let{title:s}=e;return(0,r.jsxs)("div",{className:"image-container",children:[(0,r.jsx)("img",{src:i,alt:"Product-bg"}),(0,r.jsx)("div",{className:"overlay",children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(t.Z,{children:(0,r.jsx)(a.Z,{children:(0,r.jsx)("h2",{children:s})})})})})]})}},9135:(e,s,c)=>{c.d(s,{Z:()=>d});var l=c(9743),t=c(2791),a=c(5434),i=c(184);const r=e=>{let{productItems:s}=e;return(0,t.useEffect)((()=>{}),[s]),0===s.length?(0,i.jsx)("h1",{className:"not-found",children:"Product Not Found !!"}):(0,i.jsx)(l.Z,{className:"justify-content-center",children:s.map((e=>(0,i.jsx)(a.Z,{title:null,productItem:e},e.id)))})},d=(0,t.memo)(r)},1030:(e,s,c)=>{c.r(s),c.d(s,{default:()=>f});var l=c(2791),t=c(8697),a=c(7022),i=c(9135),r=c(4783),d=c(7689),n=c(9743),o=c(2677),u=c(9434),j=c(9085),h=c(9597),x=c(184);const m=e=>{let{selectedProduct:s}=e;const c=(0,u.I0)(),[t,i]=(0,l.useState)(1);return(0,x.jsx)("section",{className:"product-page",children:(0,x.jsx)(a.Z,{children:(0,x.jsxs)(n.Z,{className:"justify-content-center",children:[(0,x.jsx)(o.Z,{md:6,children:(0,x.jsx)("img",{loading:"lazy",src:null===s||void 0===s?void 0:s.imgUrl,alt:""})}),(0,x.jsxs)(o.Z,{md:6,children:[(0,x.jsx)("h2",{children:null===s||void 0===s?void 0:s.productName}),(0,x.jsxs)("div",{className:"rate",children:[(0,x.jsxs)("div",{className:"stars",children:[(0,x.jsx)("i",{className:"fa fa-star"}),(0,x.jsx)("i",{className:"fa fa-star"}),(0,x.jsx)("i",{className:"fa fa-star"}),(0,x.jsx)("i",{className:"fa fa-star"}),(0,x.jsx)("i",{className:"fa fa-star"})]}),(0,x.jsxs)("span",{children:[null===s||void 0===s?void 0:s.avgRating," ratings"]})]}),(0,x.jsxs)("div",{className:"info",children:[(0,x.jsxs)("span",{className:"price",children:["$",null===s||void 0===s?void 0:s.price]}),(0,x.jsxs)("span",{children:["category:",null===s||void 0===s?void 0:s.category]})]}),(0,x.jsx)("p",{children:null===s||void 0===s?void 0:s.shortDesc}),(0,x.jsx)("input",{className:"qty-input",type:"number",placeholder:"Qty",value:t,onChange:e=>{i(e.target.value)}}),(0,x.jsx)("button",{"aria-label":"Add",type:"submit",className:"add",onClick:()=>((e,s)=>{c((0,h.Xq)({product:e,num:s})),j.Am.success("Product has been added to cart!")})(s,t),children:"Add To Cart"})]})]})})})},v=e=>{let{selectedProduct:s}=e;const[c,t]=(0,l.useState)("desc");return(0,x.jsx)("section",{className:"product-reviews",children:(0,x.jsxs)(a.Z,{children:[(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{style:{color:"desc"===c?"black":"#9c9b9b"},onClick:()=>t("desc"),children:"Description"}),(0,x.jsxs)("li",{style:{color:"rev"===c?"black":"#9c9b9b"},onClick:()=>t("rev"),children:["Reviews (",null===s||void 0===s?void 0:s.reviews.length,")"]})]}),"desc"===c?(0,x.jsx)("p",{children:null===s||void 0===s?void 0:s.description}):(0,x.jsx)("div",{className:"rates",children:null===s||void 0===s?void 0:s.reviews.map((e=>(0,x.jsxs)("div",{className:"rate-comment",children:[(0,x.jsx)("span",{children:"Jhon Doe"}),(0,x.jsxs)("span",{children:[e.rating," (rating)"]}),(0,x.jsx)("p",{children:e.text})]},e.rating)))})]})})};var p=c(76);const f=()=>{const{id:e}=(0,d.UO)(),[s,c]=(0,l.useState)(r.RB.filter((s=>parseInt(s.id)===parseInt(e)))[0]),[n,o]=(0,l.useState)([]);return(0,l.useEffect)((()=>{window.scrollTo(0,0),c(r.RB.filter((s=>parseInt(s.id)===parseInt(e)))[0]),o(r.RB.filter((e=>e.category===(null===s||void 0===s?void 0:s.category)&&e.id!==(null===s||void 0===s?void 0:s.id))))}),[s,e]),(0,p.Z)(),(0,x.jsxs)(l.Fragment,{children:[(0,x.jsx)(t.Z,{title:null===s||void 0===s?void 0:s.productName}),(0,x.jsx)(m,{selectedProduct:s}),(0,x.jsx)(v,{selectedProduct:s}),(0,x.jsxs)("section",{className:"related-products",children:[(0,x.jsx)(a.Z,{children:(0,x.jsx)("h3",{children:"You might also like"})}),(0,x.jsx)(i.Z,{productItems:n})]})]})}}}]);
//# sourceMappingURL=505.a3315b50.chunk.js.map