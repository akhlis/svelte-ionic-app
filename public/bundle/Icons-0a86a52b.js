import{S as n,a as o,s as t,p as e,u as i,A as s,y as l,b as r,C as c,o as a,n as u,F as d,G as f}from"./index-dad9da95.js";import"./tslib.es6-b3a23c59.js";import{I as m}from"./IonicControllers-2ac8d081.js";import{P as g}from"./index-f076eb27.js";import{f as p}from"./index-3f0c2887.js";function h(n,o,t){const e=n.slice();return e[11]=o[t],e}function b(n){let o,t,u,d,f,m;function g(...o){return n[9](n[11],...o)}return{c(){o=e("ion-col"),t=e("ion-icon"),f=i(),s(t,"name",u=n[11]),s(t,"color",d=n[4]()),s(t,"class","svelte-eqj74b"),m=l(o,"click",g)},m(n,e){r(n,o,e),c(o,t),c(o,f)},p(o,e){n=o,1&e&&u!==(u=n[11])&&s(t,"name",u)},d(n){n&&a(o),m()}}}function j(n){let o,t,f,m,g,p,j,I,x,w=n[0],y=[];for(let o=0;o<w.length;o+=1)y[o]=b(h(n,w,o));return{c(){o=i(),t=e("ion-header"),t.innerHTML='<ion-toolbar><ion-buttons slot="start"><ion-menu-button></ion-menu-button></ion-buttons> \n    <ion-title>Icons</ion-title></ion-toolbar>',f=i(),m=e("ion-content"),g=e("ion-grid"),p=e("ion-row");for(let n=0;n<y.length;n+=1)y[n].c();j=i(),I=e("ion-infinite-scroll"),I.innerHTML='<ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading more data..."></ion-infinite-scroll-content>',document.title="Ionic UI Companion App - Icons",s(t,"translucent",""),s(I,"threshold","100px"),s(m,"fullscreen",""),s(m,"class","ion-padding"),x=l(I,"ionInfinite",n[2])},m(e,i){r(e,o,i),r(e,t,i),r(e,f,i),r(e,m,i),c(m,g),c(g,p);for(let n=0;n<y.length;n+=1)y[n].m(p,null);c(m,j),c(m,I),n[10](I)},p(n,[o]){if(25&o){let t;for(w=n[0],t=0;t<w.length;t+=1){const e=h(n,w,t);y[t]?y[t].p(e,o):(y[t]=b(e),y[t].c(),y[t].m(p,null))}for(;t<y.length;t+=1)y[t].d(1);y.length=w.length}},i:u,o:u,d(e){e&&a(o),e&&a(t),e&&a(f),e&&a(m),d(y,e),n[10](null),x()}}}function I(n,o,t){let e,i=0,s=[],l=[];const{Clipboard:r}=g;function c(n){t(0,l=[]),t(0,l=s.slice(0,n+i)),i+=n}p("/assets/json/ionicons.json").subscribe(n=>{n.json().then(n=>{s=n.icons,console.log("List of icons",s),c(120)})},n=>{console.error("Error HTTP",n)});const a=n=>{console.log("Icon clicked",n),r.write({string:`<ion-icon name="${n}"></ion-icon>`}),m({color:"dark",duration:3e3,message:`<ion-icon style="font-size:350%" name="${n}"></ion-icon> - ${n}`,showCloseButton:!0})};return[l,e,async()=>{var n;console.log("L",i,s.length),i<s.length?(console.log("Loading data..."),await(n=500,new Promise(o=>{setTimeout(()=>{o()},n)})),e.complete(),c(175),console.log("Done")):(console.log("No More Data"),t(1,e.disabled=!0,e))},a,()=>{const n=["secondary","primary","danger","warning","dark","medium","success","tertiary"];return n[Math.floor(Math.random()*n.length)]},i,s,r,c,n=>{a(n)},function(n){f[n?"unshift":"push"](()=>{t(1,e=n)})}]}export default class extends n{constructor(n){super(),o(this,n,I,j,t,{})}}
//# sourceMappingURL=Icons-0a86a52b.js.map