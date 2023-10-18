var me=Object.defineProperty;var ge=(l,t,n)=>t in l?me(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n;var m=(l,t,n)=>(ge(l,typeof t!="symbol"?t+"":t,n),n);import{s as N,n as _,e as ce,f as x,b as ee,h as te,o as pe}from"../chunks/scheduler.1d0640fb.js";import{S as T,i as D,e as ne,a as C,f,g as v,m as w,h as b,j as k,n as $,k as I,x as g,o as F,y as ue,s as M,c as H,z as S,A as J,B as _e,C as se,r as B,u as E,v as G,d as A,t as U,w as q}from"../chunks/index.d61eb492.js";import{w as ve}from"../chunks/index.cb6ab9ea.js";function j(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}const p={HiddenChoiceValue:-1},be=(l,t)=>{const n=t-l;return l+Math.floor(Math.random()*n)},Se=()=>{const l=[];let t=1,n=5;for(let e=0;e<7;e++)l.push(be(t,n)),t=l[l.length-1]+1,n=t+5;return l},he=l=>{let n=structuredClone(l),e=0;const s=Math.floor(Math.random()*n.length);let a=n[s];n=n.filter(o=>o!==a);for(let o=0;o<4;o++){const i=Math.floor(Math.random()*n.length),r=n[i];n=n.filter(O=>O!==r);const c=["+","+","-"];switch(a*r<600&&(c.push("*"),c.push("*"),c.push("*")),(a%r===0||r%a===0)&&(c.push("/"),c.push("/"),c.push("/"),c.push("/")),c[Math.floor(Math.random()*c.length)]){case"+":e=a+r;break;case"-":e=a-r,e<0&&(e*=-1);break;case"*":e=a*r;break;case"/":a>r?e=a/r:e=r/a;break}a=e}return l.includes(e)?he(l):e},h={None:"none",Undo:"undo",Add:"add",Subtract:"subtract",Multiply:"multiply",Divide:"divide"},le=[h.Undo,h.Add,h.Subtract,h.Multiply,h.Divide],ke=l=>{switch(l){case h.Undo:return"⎌";case h.Add:return"+";case h.Subtract:return"-";case h.Multiply:return"×";case h.Divide:return"÷"}return""},R=class R{constructor(t,n){m(this,"choices",[]);m(this,"goal",0);m(this,"leftIndex",p.HiddenChoiceValue);m(this,"rightIndex",p.HiddenChoiceValue);m(this,"operationSelected",h.None);m(this,"errorClick",-1);m(this,"actionsTaken",[]);m(this,"victoryState",!1);this.choices=t,this.goal=n}};m(R,"Create",()=>{const t=Se(),n=he(t);return new R(t,n)});let z=R;function Ce(l){let t,n=l[0].goal+"",e;return{c(){t=v("h1"),e=w(n),this.h()},l(s){t=b(s,"H1",{class:!0});var a=k(t);e=$(a,n),a.forEach(f),this.h()},h(){I(t,"class","svelte-1q4vzoa")},m(s,a){C(s,t,a),g(t,e)},p(s,a){a&1&&n!==(n=s[0].goal+"")&&F(e,n)},d(s){s&&f(t)}}}function Ve(l){let t,n,e=l[0].goal+"",s,a;return{c(){t=v("h1"),n=w("🎉 "),s=w(e),a=w(" 🎉"),this.h()},l(o){t=b(o,"H1",{class:!0});var i=k(t);n=$(i,"🎉 "),s=$(i,e),a=$(i," 🎉"),i.forEach(f),this.h()},h(){I(t,"class","victory svelte-1q4vzoa")},m(o,i){C(o,t,i),g(t,n),g(t,s),g(t,a)},p(o,i){i&1&&e!==(e=o[0].goal+"")&&F(s,e)},d(o){o&&f(t)}}}function Ie(l){let t;function n(a,o){return a[0].victoryState?Ve:Ce}let e=n(l),s=e(l);return{c(){s.c(),t=ne()},l(a){s.l(a),t=ne()},m(a,o){s.m(a,o),C(a,t,o)},p(a,[o]){e===(e=n(a))&&s?s.p(a,o):(s.d(1),s=e(a),s&&(s.c(),s.m(t.parentNode,t)))},i:_,o:_,d(a){a&&f(t),s.d(a)}}}function ye(l,t,n){let{gameState:e}=t;return l.$$set=s=>{"gameState"in s&&n(0,e=s.gameState)},[e]}class we extends T{constructor(t){super(),D(this,t,ye,Ie,N,{gameState:0})}}class $e{constructor(t,n,e,s,a){m(this,"leftIndex");m(this,"leftValue");m(this,"operation");m(this,"rightIndex");m(this,"rightValue");this.leftIndex=t,this.leftValue=n,this.operation=e,this.rightIndex=s,this.rightValue=a}}function oe(l,t,n){const e=l.slice();return e[5]=t[n],e[7]=n,e}function ae(l){let t,n=l[5]+"",e,s,a,o;function i(){return l[2](l[7])}return{c(){t=v("button"),e=w(n),s=M(),this.h()},l(r){t=b(r,"BUTTON",{class:!0});var c=k(t);e=$(c,n),s=H(c),c.forEach(f),this.h()},h(){I(t,"class","numberChoice svelte-1q91lm2"),S(t,"error",l[0].errorClick===l[7]),S(t,"selected",l[0].leftIndex===l[7]),S(t,"invisible",l[5]===p.HiddenChoiceValue),S(t,"victory",l[0].leftIndex===l[7]&&l[0].victoryState)},m(r,c){C(r,t,c),g(t,e),g(t,s),a||(o=J(t,"click",i),a=!0)},p(r,c){l=r,c&1&&n!==(n=l[5]+"")&&F(e,n),c&1&&S(t,"error",l[0].errorClick===l[7]),c&1&&S(t,"selected",l[0].leftIndex===l[7]),c&1&&S(t,"invisible",l[5]===p.HiddenChoiceValue),c&1&&S(t,"victory",l[0].leftIndex===l[7]&&l[0].victoryState)},d(r){r&&f(t),a=!1,o()}}}function Me(l){let t,n=j(l[0].choices),e=[];for(let s=0;s<n.length;s+=1)e[s]=ae(oe(l,n,s));return{c(){t=v("div");for(let s=0;s<e.length;s+=1)e[s].c()},l(s){t=b(s,"DIV",{});var a=k(t);for(let o=0;o<e.length;o+=1)e[o].l(a);a.forEach(f)},m(s,a){C(s,t,a);for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(t,null)},p(s,[a]){if(a&3){n=j(s[0].choices);let o;for(o=0;o<n.length;o+=1){const i=oe(s,n,o);e[o]?e[o].p(i,a):(e[o]=ae(i),e[o].c(),e[o].m(t,null))}for(;o<e.length;o+=1)e[o].d(1);e.length=n.length}},i:_,o:_,d(s){s&&f(t),ue(e,s)}}}function He(l,t,n){let{gameState:e}=t;const s=r=>!(r.operation==h.Subtract&&r.leftValue-r.rightValue<0||r.operation==h.Divide&&r.leftValue%r.rightValue!==0),a=r=>{n(0,e.leftIndex=r.rightIndex,e),n(0,e.operationSelected=h.None,e);let c=0;switch(r.operation){case h.Add:c=r.leftValue+r.rightValue;break;case h.Subtract:c=r.leftValue-r.rightValue;break;case h.Multiply:c=r.leftValue*r.rightValue;break;case h.Divide:c=r.leftValue/r.rightValue;break}n(0,e.choices[r.rightIndex]=c,e),n(0,e.choices[r.leftIndex]=p.HiddenChoiceValue,e),e.choices.includes(e.goal)&&n(0,e.victoryState=!0,e),e.actionsTaken.push(r)},o=r=>{if(!(e.choices[r]===p.HiddenChoiceValue||e.victoryState))if(e.operationSelected!==h.None&&e.leftIndex!==r){let c=new $e(e.leftIndex,e.choices[e.leftIndex],e.operationSelected,r,e.choices[r]);s(c)?a(c):(n(0,e.errorClick=r,e),setTimeout(()=>{n(0,e.errorClick=-1,e)},1e3))}else e.leftIndex===r?(n(0,e.leftIndex=-1,e),n(0,e.operationSelected=h.None,e)):n(0,e.leftIndex=r,e)},i=r=>o(r);return l.$$set=r=>{"gameState"in r&&n(0,e=r.gameState)},[e,o,i]}class Ne extends T{constructor(t){super(),D(this,t,He,Me,N,{gameState:0})}}function re(l,t,n){const e=l.slice();return e[4]=t[n],e}function ie(l){let t,n=ke(l[4])+"",e,s,a,o;function i(){return l[2](l[4])}return{c(){t=v("button"),e=w(n),s=M(),this.h()},l(r){t=b(r,"BUTTON",{class:!0});var c=k(t);e=$(c,n),s=H(c),c.forEach(f),this.h()},h(){I(t,"class","opButton svelte-cvnheh"),S(t,"selected",l[0].operationSelected===l[4])},m(r,c){C(r,t,c),g(t,e),g(t,s),a||(o=J(t,"click",i),a=!0)},p(r,c){l=r,c&1&&S(t,"selected",l[0].operationSelected===l[4])},d(r){r&&f(t),a=!1,o()}}}function Te(l){let t,n=j(le),e=[];for(let s=0;s<n.length;s+=1)e[s]=ie(re(l,n,s));return{c(){t=v("div");for(let s=0;s<e.length;s+=1)e[s].c()},l(s){t=b(s,"DIV",{});var a=k(t);for(let o=0;o<e.length;o+=1)e[o].l(a);a.forEach(f)},m(s,a){C(s,t,a);for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(t,null)},p(s,[a]){if(a&3){n=j(le);let o;for(o=0;o<n.length;o+=1){const i=re(s,n,o);e[o]?e[o].p(i,a):(e[o]=ie(i),e[o].c(),e[o].m(t,null))}for(;o<e.length;o+=1)e[o].d(1);e.length=n.length}},i:_,o:_,d(s){s&&f(t),ue(e,s)}}}function De(l,t,n){let{gameState:e}=t;const s=()=>{const i=e.actionsTaken.pop();i!==void 0&&(n(0,e.choices[i.leftIndex]=i.leftValue,e),n(0,e.choices[i.rightIndex]=i.rightValue,e),n(0,e.leftIndex=-1,e),n(0,e.operationSelected=h.None,e),n(0,e.victoryState=!1,e))},a=i=>{if(i===h.Undo)s();else{if(e.victoryState)return;e.leftIndex!==-1&&n(0,e.operationSelected=i,e)}},o=i=>a(i);return l.$$set=i=>{"gameState"in i&&n(0,e=i.gameState)},[e,a,o]}class Oe extends T{constructor(t){super(),D(this,t,De,Te,N,{gameState:0})}}function Be(l){let t,n,e="New Game",s,a;return{c(){t=v("div"),n=v("button"),n.textContent=e,this.h()},l(o){t=b(o,"DIV",{});var i=k(t);n=b(i,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),_e(n)!=="svelte-1ell0uf"&&(n.textContent=e),i.forEach(f),this.h()},h(){I(n,"id","newGame"),I(n,"class","svelte-17pvczz")},m(o,i){C(o,t,i),g(t,n),s||(a=J(n,"click",l[1]),s=!0)},p:_,i:_,o:_,d(o){o&&f(t),s=!1,a()}}}function Ee(l,t,n){let{newGame:e}=t;const s=()=>e();return l.$$set=a=>{"newGame"in a&&n(0,e=a.newGame)},[e,s]}class Ge extends T{constructor(t){super(),D(this,t,Ee,Be,N,{newGame:0})}}const L=ve(localStorage.getItem("theme")||"light");L.subscribe(l=>localStorage.setItem("theme",l));function Ae(l){let t,n,e=l[0]==="dark"?"Light Mode":"Dark Mode",s,a,o;return{c(){t=v("div"),n=v("button"),s=w(e),this.h()},l(i){t=b(i,"DIV",{});var r=k(t);n=b(r,"BUTTON",{id:!0,class:!0});var c=k(n);s=$(c,e),c.forEach(f),r.forEach(f),this.h()},h(){I(n,"id","theme"),I(n,"class","svelte-s1eatg")},m(i,r){C(i,t,r),g(t,n),g(n,s),a||(o=J(n,"click",l[2]),a=!0)},p(i,[r]){r&1&&e!==(e=i[0]==="dark"?"Light Mode":"Dark Mode")&&F(s,e)},i:_,o:_,d(i){i&&f(t),a=!1,o()}}}function Ue(l,t,n){let e;ce(l,L,o=>n(0,e=o));const s=()=>{e==="dark"?(x(L,e="light",e),document.body.classList.remove("dark-mode")):(x(L,e="dark",e),document.body.classList.add("dark-mode"))};return[e,s,()=>s()]}class qe extends T{constructor(t){super(),D(this,t,Ue,Ae,N,{})}}function ze(l){let t,n,e,s,a,o,i,r,c,V,O,y,P;n=new we({props:{gameState:l[0]}});function fe(u){l[1](u)}let K={};l[0]!==void 0&&(K.gameState=l[0]),s=new Ne({props:K}),ee.push(()=>se(s,"gameState",fe));function de(u){l[2](u)}let Q={};return l[0]!==void 0&&(Q.gameState=l[0]),i=new Oe({props:Q}),ee.push(()=>se(i,"gameState",de)),V=new Ge({props:{newGame:l[3]}}),y=new qe({}),{c(){t=v("div"),B(n.$$.fragment),e=M(),B(s.$$.fragment),o=M(),B(i.$$.fragment),c=M(),B(V.$$.fragment),O=M(),B(y.$$.fragment),this.h()},l(u){t=b(u,"DIV",{class:!0});var d=k(t);E(n.$$.fragment,d),e=H(d),E(s.$$.fragment,d),o=H(d),E(i.$$.fragment,d),c=H(d),E(V.$$.fragment,d),O=H(d),E(y.$$.fragment,d),d.forEach(f),this.h()},h(){I(t,"class","container svelte-q0i8ml")},m(u,d){C(u,t,d),G(n,t,null),g(t,e),G(s,t,null),g(t,o),G(i,t,null),g(t,c),G(V,t,null),g(t,O),G(y,t,null),P=!0},p(u,[d]){const W={};d&1&&(W.gameState=u[0]),n.$set(W);const X={};!a&&d&1&&(a=!0,X.gameState=u[0],te(()=>a=!1)),s.$set(X);const Y={};!r&&d&1&&(r=!0,Y.gameState=u[0],te(()=>r=!1)),i.$set(Y);const Z={};d&1&&(Z.newGame=u[3]),V.$set(Z)},i(u){P||(A(n.$$.fragment,u),A(s.$$.fragment,u),A(i.$$.fragment,u),A(V.$$.fragment,u),A(y.$$.fragment,u),P=!0)},o(u){U(n.$$.fragment,u),U(s.$$.fragment,u),U(i.$$.fragment,u),U(V.$$.fragment,u),U(y.$$.fragment,u),P=!1},d(u){u&&f(t),q(n),q(s),q(i),q(V),q(y)}}}function Le(l,t,n){let e;ce(l,L,r=>n(4,e=r));let s=new z([p.HiddenChoiceValue,p.HiddenChoiceValue,p.HiddenChoiceValue,p.HiddenChoiceValue,p.HiddenChoiceValue,p.HiddenChoiceValue,p.HiddenChoiceValue],0);pe(()=>{n(0,s=z.Create()),e!=="dark"&&document.body.classList.remove("dark-mode")});function a(r){s=r,n(0,s)}function o(r){s=r,n(0,s)}return[s,a,o,()=>n(0,s=z.Create())]}class Je extends T{constructor(t){super(),D(this,t,Le,ze,N,{})}}export{Je as component};
