var de=Object.defineProperty;var me=(l,t,n)=>t in l?de(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n;var g=(l,t,n)=>(me(l,typeof t!="symbol"?t+"":t,n),n);import{s as N,n as _,e as ce,f as Z,b as x,h as ee,o as ge}from"../chunks/scheduler.1d0640fb.js";import{S as T,i as D,e as te,a as I,f as h,g as v,m as V,h as b,j as k,n as C,k as y,x as p,o as R,y as ie,s as $,c as M,z as S,A as F,B as pe,C as ne,r as B,u as E,v as G,d as A,t as U,w as q}from"../chunks/index.d61eb492.js";import{w as _e}from"../chunks/index.cb6ab9ea.js";function P(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}const ve=(l,t)=>{const n=t-l;return l+Math.floor(Math.random()*n)},be=()=>{const l=[];let t=1,n=5;for(let e=0;e<7;e++)l.push(ve(t,n)),t=l[l.length-1]+1,n=t+5;return l},ue=l=>{let n=structuredClone(l),e=0;const s=Math.floor(Math.random()*n.length);let r=n[s];n=n.filter(o=>o!==r);for(let o=0;o<4;o++){const c=Math.floor(Math.random()*n.length),i=n[c];n=n.filter(O=>O!==i);const a=["+","+","-"];switch(r*i<600&&(a.push("*"),a.push("*"),a.push("*")),(r%i===0||i%r===0)&&(a.push("/"),a.push("/"),a.push("/"),a.push("/")),a[Math.floor(Math.random()*a.length)]){case"+":e=r+i;break;case"-":e=r-i,e<0&&(e*=-1);break;case"*":e=r*i;break;case"/":r>i?e=r/i:e=i/r;break}r=e}return l.includes(e)?ue(l):e},f={None:"none",Undo:"undo",Add:"add",Subtract:"subtract",Multiply:"multiply",Divide:"divide"},se=[f.Undo,f.Add,f.Subtract,f.Multiply,f.Divide],Se=l=>{switch(l){case f.Undo:return"⎌";case f.Add:return"+";case f.Subtract:return"-";case f.Multiply:return"×";case f.Divide:return"÷"}return""},j=class j{constructor(t,n){g(this,"choices",[]);g(this,"goal",0);g(this,"leftIndex",-1);g(this,"rightIndex",-1);g(this,"operationSelected",f.None);g(this,"errorClick",-1);g(this,"actionsTaken",[]);g(this,"victoryState",!1);this.choices=t,this.goal=n}};g(j,"Create",()=>{const t=be(),n=ue(t);return new j(t,n)});let z=j;function ke(l){let t,n=l[0].goal+"",e;return{c(){t=v("h1"),e=V(n),this.h()},l(s){t=b(s,"H1",{class:!0});var r=k(t);e=C(r,n),r.forEach(h),this.h()},h(){y(t,"class","svelte-1q4vzoa")},m(s,r){I(s,t,r),p(t,e)},p(s,r){r&1&&n!==(n=s[0].goal+"")&&R(e,n)},d(s){s&&h(t)}}}function Ie(l){let t,n,e=l[0].goal+"",s,r;return{c(){t=v("h1"),n=V("🎉 "),s=V(e),r=V(" 🎉"),this.h()},l(o){t=b(o,"H1",{class:!0});var c=k(t);n=C(c,"🎉 "),s=C(c,e),r=C(c," 🎉"),c.forEach(h),this.h()},h(){y(t,"class","victory svelte-1q4vzoa")},m(o,c){I(o,t,c),p(t,n),p(t,s),p(t,r)},p(o,c){c&1&&e!==(e=o[0].goal+"")&&R(s,e)},d(o){o&&h(t)}}}function ye(l){let t;function n(r,o){return r[0].victoryState?Ie:ke}let e=n(l),s=e(l);return{c(){s.c(),t=te()},l(r){s.l(r),t=te()},m(r,o){s.m(r,o),I(r,t,o)},p(r,[o]){e===(e=n(r))&&s?s.p(r,o):(s.d(1),s=e(r),s&&(s.c(),s.m(t.parentNode,t)))},i:_,o:_,d(r){r&&h(t),s.d(r)}}}function we(l,t,n){let{gameState:e}=t;return l.$$set=s=>{"gameState"in s&&n(0,e=s.gameState)},[e]}class Ve extends T{constructor(t){super(),D(this,t,we,ye,N,{gameState:0})}}class Ce{constructor(t,n,e,s,r){g(this,"leftIndex");g(this,"leftValue");g(this,"operation");g(this,"rightIndex");g(this,"rightValue");this.leftIndex=t,this.leftValue=n,this.operation=e,this.rightIndex=s,this.rightValue=r}}function le(l,t,n){const e=l.slice();return e[6]=t[n],e[8]=n,e}function oe(l){let t,n=l[6]+"",e,s,r,o;function c(){return l[3](l[8])}return{c(){t=v("button"),e=V(n),s=$(),this.h()},l(i){t=b(i,"BUTTON",{class:!0});var a=k(t);e=C(a,n),s=M(a),a.forEach(h),this.h()},h(){y(t,"class","numberChoice svelte-1q91lm2"),S(t,"error",l[0].errorClick===l[8]),S(t,"selected",l[0].leftIndex===l[8]),S(t,"invisible",l[6]===l[1]),S(t,"victory",l[0].leftIndex===l[8]&&l[0].victoryState)},m(i,a){I(i,t,a),p(t,e),p(t,s),r||(o=F(t,"click",c),r=!0)},p(i,a){l=i,a&1&&n!==(n=l[6]+"")&&R(e,n),a&1&&S(t,"error",l[0].errorClick===l[8]),a&1&&S(t,"selected",l[0].leftIndex===l[8]),a&3&&S(t,"invisible",l[6]===l[1]),a&1&&S(t,"victory",l[0].leftIndex===l[8]&&l[0].victoryState)},d(i){i&&h(t),r=!1,o()}}}function $e(l){let t,n=P(l[0].choices),e=[];for(let s=0;s<n.length;s+=1)e[s]=oe(le(l,n,s));return{c(){t=v("div");for(let s=0;s<e.length;s+=1)e[s].c()},l(s){t=b(s,"DIV",{});var r=k(t);for(let o=0;o<e.length;o+=1)e[o].l(r);r.forEach(h)},m(s,r){I(s,t,r);for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(t,null)},p(s,[r]){if(r&7){n=P(s[0].choices);let o;for(o=0;o<n.length;o+=1){const c=le(s,n,o);e[o]?e[o].p(c,r):(e[o]=oe(c),e[o].c(),e[o].m(t,null))}for(;o<e.length;o+=1)e[o].d(1);e.length=n.length}},i:_,o:_,d(s){s&&h(t),ie(e,s)}}}function Me(l,t,n){let{gameState:e}=t;const s=-1,r=a=>!(a.operation==f.Subtract&&a.leftValue-a.rightValue<0||a.operation==f.Divide&&a.leftValue%a.rightValue!==0),o=a=>{n(0,e.leftIndex=a.rightIndex,e),n(0,e.operationSelected=f.None,e);let d=0;switch(a.operation){case f.Add:d=a.leftValue+a.rightValue;break;case f.Subtract:d=a.leftValue-a.rightValue;break;case f.Multiply:d=a.leftValue*a.rightValue;break;case f.Divide:d=a.leftValue/a.rightValue;break}n(0,e.choices[a.rightIndex]=d,e),n(0,e.choices[a.leftIndex]=s,e),e.choices.includes(e.goal)&&n(0,e.victoryState=!0,e),e.actionsTaken.push(a)},c=a=>{if(!(e.choices[a]===s||e.victoryState))if(e.operationSelected!==f.None&&e.leftIndex!==a){let d=new Ce(e.leftIndex,e.choices[e.leftIndex],e.operationSelected,a,e.choices[a]);r(d)?o(d):(n(0,e.errorClick=a,e),setTimeout(()=>{n(0,e.errorClick=-1,e)},1e3))}else e.leftIndex===a?(n(0,e.leftIndex=-1,e),n(0,e.operationSelected=f.None,e)):n(0,e.leftIndex=a,e)},i=a=>c(a);return l.$$set=a=>{"gameState"in a&&n(0,e=a.gameState)},[e,s,c,i]}class Ne extends T{constructor(t){super(),D(this,t,Me,$e,N,{gameState:0})}}function re(l,t,n){const e=l.slice();return e[4]=t[n],e}function ae(l){let t,n=Se(l[4])+"",e,s,r,o;function c(){return l[2](l[4])}return{c(){t=v("button"),e=V(n),s=$(),this.h()},l(i){t=b(i,"BUTTON",{class:!0});var a=k(t);e=C(a,n),s=M(a),a.forEach(h),this.h()},h(){y(t,"class","opButton svelte-cvnheh"),S(t,"selected",l[0].operationSelected===l[4])},m(i,a){I(i,t,a),p(t,e),p(t,s),r||(o=F(t,"click",c),r=!0)},p(i,a){l=i,a&1&&S(t,"selected",l[0].operationSelected===l[4])},d(i){i&&h(t),r=!1,o()}}}function Te(l){let t,n=P(se),e=[];for(let s=0;s<n.length;s+=1)e[s]=ae(re(l,n,s));return{c(){t=v("div");for(let s=0;s<e.length;s+=1)e[s].c()},l(s){t=b(s,"DIV",{});var r=k(t);for(let o=0;o<e.length;o+=1)e[o].l(r);r.forEach(h)},m(s,r){I(s,t,r);for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(t,null)},p(s,[r]){if(r&3){n=P(se);let o;for(o=0;o<n.length;o+=1){const c=re(s,n,o);e[o]?e[o].p(c,r):(e[o]=ae(c),e[o].c(),e[o].m(t,null))}for(;o<e.length;o+=1)e[o].d(1);e.length=n.length}},i:_,o:_,d(s){s&&h(t),ie(e,s)}}}function De(l,t,n){let{gameState:e}=t;const s=()=>{const c=e.actionsTaken.pop();c!==void 0&&(n(0,e.choices[c.leftIndex]=c.leftValue,e),n(0,e.choices[c.rightIndex]=c.rightValue,e),n(0,e.leftIndex=-1,e),n(0,e.operationSelected=f.None,e),n(0,e.victoryState=!1,e))},r=c=>{if(c===f.Undo)s();else{if(e.victoryState)return;e.leftIndex!==-1&&n(0,e.operationSelected=c,e)}},o=c=>r(c);return l.$$set=c=>{"gameState"in c&&n(0,e=c.gameState)},[e,r,o]}class Oe extends T{constructor(t){super(),D(this,t,De,Te,N,{gameState:0})}}function Be(l){let t,n,e="New Game",s,r;return{c(){t=v("div"),n=v("button"),n.textContent=e,this.h()},l(o){t=b(o,"DIV",{});var c=k(t);n=b(c,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),pe(n)!=="svelte-1ell0uf"&&(n.textContent=e),c.forEach(h),this.h()},h(){y(n,"id","newGame"),y(n,"class","svelte-17pvczz")},m(o,c){I(o,t,c),p(t,n),s||(r=F(n,"click",l[1]),s=!0)},p:_,i:_,o:_,d(o){o&&h(t),s=!1,r()}}}function Ee(l,t,n){let{newGame:e}=t;const s=()=>e();return l.$$set=r=>{"newGame"in r&&n(0,e=r.newGame)},[e,s]}class Ge extends T{constructor(t){super(),D(this,t,Ee,Be,N,{newGame:0})}}const L=_e(localStorage.getItem("theme")||"light");L.subscribe(l=>localStorage.setItem("theme",l));function Ae(l){let t,n,e=l[0]==="dark"?"Light Mode":"Dark Mode",s,r,o;return{c(){t=v("div"),n=v("button"),s=V(e),this.h()},l(c){t=b(c,"DIV",{});var i=k(t);n=b(i,"BUTTON",{id:!0,class:!0});var a=k(n);s=C(a,e),a.forEach(h),i.forEach(h),this.h()},h(){y(n,"id","theme"),y(n,"class","svelte-s1eatg")},m(c,i){I(c,t,i),p(t,n),p(n,s),r||(o=F(n,"click",l[2]),r=!0)},p(c,[i]){i&1&&e!==(e=c[0]==="dark"?"Light Mode":"Dark Mode")&&R(s,e)},i:_,o:_,d(c){c&&h(t),r=!1,o()}}}function Ue(l,t,n){let e;ce(l,L,o=>n(0,e=o));const s=()=>{e==="dark"?(Z(L,e="light",e),document.body.classList.remove("dark-mode")):(Z(L,e="dark",e),document.body.classList.add("dark-mode"))};return[e,s,()=>s()]}class qe extends T{constructor(t){super(),D(this,t,Ue,Ae,N,{})}}function ze(l){let t,n,e,s,r,o,c,i,a,d,O,w,H;n=new Ve({props:{gameState:l[0]}});function fe(u){l[1](u)}let J={};l[0]!==void 0&&(J.gameState=l[0]),s=new Ne({props:J}),x.push(()=>ne(s,"gameState",fe));function he(u){l[2](u)}let K={};return l[0]!==void 0&&(K.gameState=l[0]),c=new Oe({props:K}),x.push(()=>ne(c,"gameState",he)),d=new Ge({props:{newGame:l[3]}}),w=new qe({}),{c(){t=v("div"),B(n.$$.fragment),e=$(),B(s.$$.fragment),o=$(),B(c.$$.fragment),a=$(),B(d.$$.fragment),O=$(),B(w.$$.fragment),this.h()},l(u){t=b(u,"DIV",{class:!0});var m=k(t);E(n.$$.fragment,m),e=M(m),E(s.$$.fragment,m),o=M(m),E(c.$$.fragment,m),a=M(m),E(d.$$.fragment,m),O=M(m),E(w.$$.fragment,m),m.forEach(h),this.h()},h(){y(t,"class","container svelte-q0i8ml")},m(u,m){I(u,t,m),G(n,t,null),p(t,e),G(s,t,null),p(t,o),G(c,t,null),p(t,a),G(d,t,null),p(t,O),G(w,t,null),H=!0},p(u,[m]){const Q={};m&1&&(Q.gameState=u[0]),n.$set(Q);const W={};!r&&m&1&&(r=!0,W.gameState=u[0],ee(()=>r=!1)),s.$set(W);const X={};!i&&m&1&&(i=!0,X.gameState=u[0],ee(()=>i=!1)),c.$set(X);const Y={};m&1&&(Y.newGame=u[3]),d.$set(Y)},i(u){H||(A(n.$$.fragment,u),A(s.$$.fragment,u),A(c.$$.fragment,u),A(d.$$.fragment,u),A(w.$$.fragment,u),H=!0)},o(u){U(n.$$.fragment,u),U(s.$$.fragment,u),U(c.$$.fragment,u),U(d.$$.fragment,u),U(w.$$.fragment,u),H=!1},d(u){u&&h(t),q(n),q(s),q(c),q(d),q(w)}}}function Le(l,t,n){let e;ce(l,L,i=>n(4,e=i));let s=new z([0,0,0,0,0,0,0],0);ge(()=>{n(0,s=z.Create()),e!=="dark"&&document.body.classList.remove("dark-mode")});function r(i){s=i,n(0,s)}function o(i){s=i,n(0,s)}return[s,r,o,()=>n(0,s=z.Create())]}class Fe extends T{constructor(t){super(),D(this,t,Le,ze,N,{})}}export{Fe as component};
