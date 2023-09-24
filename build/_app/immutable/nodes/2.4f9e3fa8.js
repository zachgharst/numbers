var re=Object.defineProperty;var ce=(s,t,n)=>t in s?re(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;var g=(s,t,n)=>(ce(s,typeof t!="symbol"?t+"":t,n),n);import{s as M,n as p,b as L,f as Q,o as ie}from"../chunks/scheduler.bc760b9c.js";import{S as N,i as G,g as v,m as j,h as S,j as k,n as q,f as d,k as C,a as I,x as _,o as ne,y as se,s as V,c as $,z as b,A as P,B as ue,C as W,r as O,u as T,v as A,d as D,t as B,w as E}from"../chunks/index.572e9ef1.js";function U(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}const fe=(s,t)=>{const n=t-s;return s+Math.floor(Math.random()*n)},he=()=>{const s=[];let t=1,n=5;for(let e=0;e<7;e++)s.push(fe(t,n)),t=s[s.length-1]+1,n=t+5;return s},le=s=>{let n=structuredClone(s),e=0;const l=Math.floor(Math.random()*n.length);let r=n[l];n=n.filter(o=>o!==r);for(let o=0;o<4;o++){const c=Math.floor(Math.random()*n.length),a=n[c];n=n.filter(w=>w!==a);const i=["+","+","-"];switch(r*a<600&&(i.push("*"),i.push("*"),i.push("*")),(r%a===0||a%r===0)&&(i.push("/"),i.push("/"),i.push("/"),i.push("/")),i[Math.floor(Math.random()*i.length)]){case"+":e=r+a;break;case"-":e=r-a,e<0&&(e*=-1);break;case"*":e=r*a;break;case"/":r>a?e=r/a:e=a/r;break}r=e}return s.includes(e)?le(s):e},f={None:"none",Undo:"undo",Add:"add",Subtract:"subtract",Multiply:"multiply",Divide:"divide"},X=[f.Undo,f.Add,f.Subtract,f.Multiply,f.Divide],ge=s=>{switch(s){case f.Undo:return"⎌";case f.Add:return"+";case f.Subtract:return"-";case f.Multiply:return"×";case f.Divide:return"÷"}return""},x=class x{constructor(t,n){g(this,"choices",[]);g(this,"goal",0);g(this,"leftIndex",-1);g(this,"rightIndex",-1);g(this,"operationSelected",f.None);g(this,"errorClick",-1);g(this,"actionsTaken",[]);this.choices=t,this.goal=n}};g(x,"Create",()=>{const t=he(),n=le(t);return new x(t,n)});let y=x;function de(s){let t,n;return{c(){t=v("h1"),n=j(s[0]),this.h()},l(e){t=S(e,"H1",{class:!0});var l=k(t);n=q(l,s[0]),l.forEach(d),this.h()},h(){C(t,"class","svelte-1dx8c1u")},m(e,l){I(e,t,l),_(t,n)},p(e,[l]){l&1&&ne(n,e[0])},i:p,o:p,d(e){e&&d(t)}}}function me(s,t,n){let{goal:e}=t;return s.$$set=l=>{"goal"in l&&n(0,e=l.goal)},[e]}class pe extends N{constructor(t){super(),G(this,t,me,de,M,{goal:0})}}class _e{constructor(t,n,e,l,r){g(this,"leftIndex");g(this,"leftValue");g(this,"operation");g(this,"rightIndex");g(this,"rightValue");this.leftIndex=t,this.leftValue=n,this.operation=e,this.rightIndex=l,this.rightValue=r}}function Y(s,t,n){const e=s.slice();return e[5]=t[n],e[7]=n,e}function Z(s){let t,n=s[5]+"",e,l,r,o;function c(){return s[2](s[7])}return{c(){t=v("button"),e=j(n),l=V(),this.h()},l(a){t=S(a,"BUTTON",{class:!0});var i=k(t);e=q(i,n),l=$(i),i.forEach(d),this.h()},h(){C(t,"class","numberChoice svelte-1mlp9fk"),b(t,"error",s[0].errorClick===s[7]),b(t,"selected",s[0].leftIndex===s[7]),b(t,"invisible",s[5]===0)},m(a,i){I(a,t,i),_(t,e),_(t,l),r||(o=P(t,"click",c),r=!0)},p(a,i){s=a,i&1&&n!==(n=s[5]+"")&&ne(e,n),i&1&&b(t,"error",s[0].errorClick===s[7]),i&1&&b(t,"selected",s[0].leftIndex===s[7]),i&1&&b(t,"invisible",s[5]===0)},d(a){a&&d(t),r=!1,o()}}}function be(s){let t,n=U(s[0].choices),e=[];for(let l=0;l<n.length;l+=1)e[l]=Z(Y(s,n,l));return{c(){t=v("div");for(let l=0;l<e.length;l+=1)e[l].c()},l(l){t=S(l,"DIV",{});var r=k(t);for(let o=0;o<e.length;o+=1)e[o].l(r);r.forEach(d)},m(l,r){I(l,t,r);for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(t,null)},p(l,[r]){if(r&3){n=U(l[0].choices);let o;for(o=0;o<n.length;o+=1){const c=Y(l,n,o);e[o]?e[o].p(c,r):(e[o]=Z(c),e[o].c(),e[o].m(t,null))}for(;o<e.length;o+=1)e[o].d(1);e.length=n.length}},i:p,o:p,d(l){l&&d(t),se(e,l)}}}function ve(s,t,n){let{gameState:e}=t;const l=a=>!(a.operation==f.Subtract&&a.leftValue-a.rightValue<0||a.operation==f.Divide&&a.leftValue%a.rightValue!==0),r=a=>{n(0,e.leftIndex=a.rightIndex,e),n(0,e.operationSelected=f.None,e);let i=0;switch(a.operation){case f.Add:i=a.leftValue+a.rightValue;break;case f.Subtract:i=a.leftValue-a.rightValue;break;case f.Multiply:i=a.leftValue*a.rightValue;break;case f.Divide:i=a.leftValue/a.rightValue;break}n(0,e.choices[a.rightIndex]=i,e),n(0,e.choices[a.leftIndex]=0,e),e.choices.includes(e.goal)&&alert("holy shit you win!"),e.actionsTaken.push(a)},o=a=>{if(e.choices[a]!==0)if(e.operationSelected!==f.None&&e.leftIndex!==a){let i=new _e(e.leftIndex,e.choices[e.leftIndex],e.operationSelected,a,e.choices[a]);l(i)?r(i):(n(0,e.errorClick=a,e),setTimeout(()=>{n(0,e.errorClick=-1,e)},1e3))}else e.leftIndex===a?(n(0,e.leftIndex=-1,e),n(0,e.operationSelected=f.None,e)):n(0,e.leftIndex=a,e)},c=a=>o(a);return s.$$set=a=>{"gameState"in a&&n(0,e=a.gameState)},[e,o,c]}class Se extends N{constructor(t){super(),G(this,t,ve,be,M,{gameState:0})}}function ee(s,t,n){const e=s.slice();return e[4]=t[n],e}function te(s){let t,n=ge(s[4])+"",e,l,r,o;function c(){return s[2](s[4])}return{c(){t=v("button"),e=j(n),l=V(),this.h()},l(a){t=S(a,"BUTTON",{class:!0});var i=k(t);e=q(i,n),l=$(i),i.forEach(d),this.h()},h(){C(t,"class","opButton svelte-10wqfjw"),b(t,"selected",s[0].operationSelected===s[4])},m(a,i){I(a,t,i),_(t,e),_(t,l),r||(o=P(t,"click",c),r=!0)},p(a,i){s=a,i&1&&b(t,"selected",s[0].operationSelected===s[4])},d(a){a&&d(t),r=!1,o()}}}function ke(s){let t,n=U(X),e=[];for(let l=0;l<n.length;l+=1)e[l]=te(ee(s,n,l));return{c(){t=v("div");for(let l=0;l<e.length;l+=1)e[l].c()},l(l){t=S(l,"DIV",{});var r=k(t);for(let o=0;o<e.length;o+=1)e[o].l(r);r.forEach(d)},m(l,r){I(l,t,r);for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(t,null)},p(l,[r]){if(r&3){n=U(X);let o;for(o=0;o<n.length;o+=1){const c=ee(l,n,o);e[o]?e[o].p(c,r):(e[o]=te(c),e[o].c(),e[o].m(t,null))}for(;o<e.length;o+=1)e[o].d(1);e.length=n.length}},i:p,o:p,d(l){l&&d(t),se(e,l)}}}function Ie(s,t,n){let{gameState:e}=t;const l=()=>{const c=e.actionsTaken.pop();c!==void 0&&(n(0,e.choices[c.leftIndex]=c.leftValue,e),n(0,e.choices[c.rightIndex]=c.rightValue,e),n(0,e.leftIndex=-1,e),n(0,e.operationSelected=f.None,e))},r=c=>{c===f.Undo?l():e.leftIndex!==-1&&n(0,e.operationSelected=c,e)},o=c=>r(c);return s.$$set=c=>{"gameState"in c&&n(0,e=c.gameState)},[e,r,o]}class we extends N{constructor(t){super(),G(this,t,Ie,ke,M,{gameState:0})}}function Ce(s){let t,n,e="New Game",l,r;return{c(){t=v("div"),n=v("button"),n.textContent=e,this.h()},l(o){t=S(o,"DIV",{});var c=k(t);n=S(c,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),ue(n)!=="svelte-1ell0uf"&&(n.textContent=e),c.forEach(d),this.h()},h(){C(n,"id","newGame"),C(n,"class","svelte-y1mxsi")},m(o,c){I(o,t,c),_(t,n),l||(r=P(n,"click",s[1]),l=!0)},p,i:p,o:p,d(o){o&&d(t),l=!1,r()}}}function Ve(s,t,n){let{newGame:e}=t;const l=()=>e();return s.$$set=r=>{"newGame"in r&&n(0,e=r.newGame)},[e,l]}class $e extends N{constructor(t){super(),G(this,t,Ve,Ce,M,{newGame:0})}}function ye(s){let t,n,e,l,r,o,c,a,i,m,w;n=new pe({props:{goal:s[0].goal}});function oe(u){s[1](u)}let z={};s[0]!==void 0&&(z.gameState=s[0]),l=new Se({props:z}),L.push(()=>W(l,"gameState",oe));function ae(u){s[2](u)}let H={};return s[0]!==void 0&&(H.gameState=s[0]),c=new we({props:H}),L.push(()=>W(c,"gameState",ae)),m=new $e({props:{newGame:s[3]}}),{c(){t=v("div"),O(n.$$.fragment),e=V(),O(l.$$.fragment),o=V(),O(c.$$.fragment),i=V(),O(m.$$.fragment),this.h()},l(u){t=S(u,"DIV",{class:!0});var h=k(t);T(n.$$.fragment,h),e=$(h),T(l.$$.fragment,h),o=$(h),T(c.$$.fragment,h),i=$(h),T(m.$$.fragment,h),h.forEach(d),this.h()},h(){C(t,"class","container svelte-u153dm")},m(u,h){I(u,t,h),A(n,t,null),_(t,e),A(l,t,null),_(t,o),A(c,t,null),_(t,i),A(m,t,null),w=!0},p(u,[h]){const R={};h&1&&(R.goal=u[0].goal),n.$set(R);const F={};!r&&h&1&&(r=!0,F.gameState=u[0],Q(()=>r=!1)),l.$set(F);const J={};!a&&h&1&&(a=!0,J.gameState=u[0],Q(()=>a=!1)),c.$set(J);const K={};h&1&&(K.newGame=u[3]),m.$set(K)},i(u){w||(D(n.$$.fragment,u),D(l.$$.fragment,u),D(c.$$.fragment,u),D(m.$$.fragment,u),w=!0)},o(u){B(n.$$.fragment,u),B(l.$$.fragment,u),B(c.$$.fragment,u),B(m.$$.fragment,u),w=!1},d(u){u&&d(t),E(n),E(l),E(c),E(m)}}}function Me(s,t,n){let e=new y([0,0,0,0,0,0,0],0);ie(()=>{n(0,e=y.Create())});function l(c){e=c,n(0,e)}function r(c){e=c,n(0,e)}return[e,l,r,()=>n(0,e=y.Create())]}class Te extends N{constructor(t){super(),G(this,t,Me,ye,M,{})}}export{Te as component};
