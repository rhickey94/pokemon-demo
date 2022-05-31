const ll=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};ll();function la(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const cl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fl=la(cl);function fo(e){return!!e||e===""}function ca(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ge(r)?ml(r):ca(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ge(e))return e;if(he(e))return e}}const ul=/;(?![^(]*\))/g,dl=/:(.+)/;function ml(e){const t={};return e.split(ul).forEach(n=>{if(n){const r=n.split(dl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function fa(e){let t="";if(ge(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=fa(e[n]);r&&(t+=r+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const hl=e=>ge(e)?e:e==null?"":H(e)||he(e)&&(e.toString===po||!Y(e.toString))?JSON.stringify(e,uo,2):String(e),uo=(e,t)=>t&&t.__v_isRef?uo(e,t.value):jt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:mo(t)?{[`Set(${t.size})`]:[...t.values()]}:he(t)&&!H(t)&&!go(t)?String(t):t,oe={},Ft=[],Le=()=>{},pl=()=>!1,gl=/^on[^a-z]/,Zn=e=>gl.test(e),ua=e=>e.startsWith("onUpdate:"),ye=Object.assign,da=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vl=Object.prototype.hasOwnProperty,V=(e,t)=>vl.call(e,t),H=Array.isArray,jt=e=>er(e)==="[object Map]",mo=e=>er(e)==="[object Set]",Y=e=>typeof e=="function",ge=e=>typeof e=="string",ma=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",ho=e=>he(e)&&Y(e.then)&&Y(e.catch),po=Object.prototype.toString,er=e=>po.call(e),bl=e=>er(e).slice(8,-1),go=e=>er(e)==="[object Object]",ha=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mn=la(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},yl=/-(\w)/g,We=tr(e=>e.replace(yl,(t,n)=>n?n.toUpperCase():"")),_l=/\B([A-Z])/g,Vt=tr(e=>e.replace(_l,"-$1").toLowerCase()),nr=tr(e=>e.charAt(0).toUpperCase()+e.slice(1)),yr=tr(e=>e?`on${nr(e)}`:""),vn=(e,t)=>!Object.is(e,t),_r=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Hn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},wl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Xa;const xl=()=>Xa||(Xa=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let De;class vo{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&De&&(this.parent=De,this.index=(De.scopes||(De.scopes=[])).push(this)-1)}run(t){if(this.active){const n=De;try{return De=this,t()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function bo(e){return new vo(e)}function kl(e,t=De){t&&t.active&&t.effects.push(e)}const pa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},yo=e=>(e.w&ht)>0,_o=e=>(e.n&ht)>0,Al=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ht},El=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];yo(a)&&!_o(a)?a.delete(e):t[n++]=a,a.w&=~ht,a.n&=~ht}t.length=n}},Rr=new WeakMap;let rn=0,ht=1;const Ir=30;let Ie;const xt=Symbol(""),Tr=Symbol("");class ga{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kl(this,r)}run(){if(!this.active)return this.fn();let t=Ie,n=ft;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ie,Ie=this,ft=!0,ht=1<<++rn,rn<=Ir?Al(this):Ga(this),this.fn()}finally{rn<=Ir&&El(this),ht=1<<--rn,Ie=this.parent,ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ie===this?this.deferStop=!0:this.active&&(Ga(this),this.onStop&&this.onStop(),this.active=!1)}}function Ga(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ft=!0;const wo=[];function Xt(){wo.push(ft),ft=!1}function Gt(){const e=wo.pop();ft=e===void 0?!0:e}function Ce(e,t,n){if(ft&&Ie){let r=Rr.get(e);r||Rr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=pa()),xo(a)}}function xo(e,t){let n=!1;rn<=Ir?_o(e)||(e.n|=ht,n=!yo(e)):n=!e.has(Ie),n&&(e.add(Ie),Ie.deps.push(e))}function Ge(e,t,n,r,a,i){const o=Rr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&H(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":H(e)?ha(n)&&s.push(o.get("length")):(s.push(o.get(xt)),jt(e)&&s.push(o.get(Tr)));break;case"delete":H(e)||(s.push(o.get(xt)),jt(e)&&s.push(o.get(Tr)));break;case"set":jt(e)&&s.push(o.get(xt));break}if(s.length===1)s[0]&&Nr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Nr(pa(l))}}function Nr(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&Qa(r);for(const r of n)r.computed||Qa(r)}function Qa(e,t){(e!==Ie||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Cl=la("__proto__,__v_isRef,__isVue"),ko=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ma)),Pl=va(),Ol=va(!1,!0),Sl=va(!0),Ja=Rl();function Rl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Q(this);for(let i=0,o=this.length;i<o;i++)Ce(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Q)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Xt();const r=Q(this)[t].apply(this,n);return Gt(),r}}),e}function va(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Kl:Oo:t?Po:Co).get(r))return r;const o=H(r);if(!e&&o&&V(Ja,a))return Reflect.get(Ja,a,i);const s=Reflect.get(r,a,i);return(ma(a)?ko.has(a):Cl(a))||(e||Ce(r,"get",a),t)?s:fe(s)?o&&ha(a)?s:s.value:he(s)?e?So(s):Qt(s):s}}const Il=Ao(),Tl=Ao(!0);function Ao(e=!1){return function(n,r,a,i){let o=n[r];if(bn(o)&&fe(o)&&!fe(a))return!1;if(!e&&!bn(a)&&(Mr(a)||(a=Q(a),o=Q(o)),!H(n)&&fe(o)&&!fe(a)))return o.value=a,!0;const s=H(n)&&ha(r)?Number(r)<n.length:V(n,r),l=Reflect.set(n,r,a,i);return n===Q(i)&&(s?vn(a,o)&&Ge(n,"set",r,a):Ge(n,"add",r,a)),l}}function Nl(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ge(e,"delete",t,void 0),r}function Ml(e,t){const n=Reflect.has(e,t);return(!ma(t)||!ko.has(t))&&Ce(e,"has",t),n}function Ll(e){return Ce(e,"iterate",H(e)?"length":xt),Reflect.ownKeys(e)}const Eo={get:Pl,set:Il,deleteProperty:Nl,has:Ml,ownKeys:Ll},Fl={get:Sl,set(e,t){return!0},deleteProperty(e,t){return!0}},jl=ye({},Eo,{get:Ol,set:Tl}),ba=e=>e,rr=e=>Reflect.getPrototypeOf(e);function On(e,t,n=!1,r=!1){e=e.__v_raw;const a=Q(e),i=Q(t);n||(t!==i&&Ce(a,"get",t),Ce(a,"get",i));const{has:o}=rr(a),s=r?ba:n?wa:yn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Sn(e,t=!1){const n=this.__v_raw,r=Q(n),a=Q(e);return t||(e!==a&&Ce(r,"has",e),Ce(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Rn(e,t=!1){return e=e.__v_raw,!t&&Ce(Q(e),"iterate",xt),Reflect.get(e,"size",e)}function Za(e){e=Q(e);const t=Q(this);return rr(t).has.call(t,e)||(t.add(e),Ge(t,"add",e,e)),this}function ei(e,t){t=Q(t);const n=Q(this),{has:r,get:a}=rr(n);let i=r.call(n,e);i||(e=Q(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?vn(t,o)&&Ge(n,"set",e,t):Ge(n,"add",e,t),this}function ti(e){const t=Q(this),{has:n,get:r}=rr(t);let a=n.call(t,e);a||(e=Q(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ge(t,"delete",e,void 0),i}function ni(){const e=Q(this),t=e.size!==0,n=e.clear();return t&&Ge(e,"clear",void 0,void 0),n}function In(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Q(o),l=t?ba:e?wa:yn;return!e&&Ce(s,"iterate",xt),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Tn(e,t,n){return function(...r){const a=this.__v_raw,i=Q(a),o=jt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?ba:t?wa:yn;return!t&&Ce(i,"iterate",l?Tr:xt),{next(){const{value:d,done:m}=f.next();return m?{value:d,done:m}:{value:s?[c(d[0]),c(d[1])]:c(d),done:m}},[Symbol.iterator](){return this}}}}function rt(e){return function(...t){return e==="delete"?!1:this}}function zl(){const e={get(i){return On(this,i)},get size(){return Rn(this)},has:Sn,add:Za,set:ei,delete:ti,clear:ni,forEach:In(!1,!1)},t={get(i){return On(this,i,!1,!0)},get size(){return Rn(this)},has:Sn,add:Za,set:ei,delete:ti,clear:ni,forEach:In(!1,!0)},n={get(i){return On(this,i,!0)},get size(){return Rn(this,!0)},has(i){return Sn.call(this,i,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:In(!0,!1)},r={get(i){return On(this,i,!0,!0)},get size(){return Rn(this,!0)},has(i){return Sn.call(this,i,!0)},add:rt("add"),set:rt("set"),delete:rt("delete"),clear:rt("clear"),forEach:In(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Tn(i,!1,!1),n[i]=Tn(i,!0,!1),t[i]=Tn(i,!1,!0),r[i]=Tn(i,!0,!0)}),[e,n,t,r]}const[$l,Dl,Ul,Hl]=zl();function ya(e,t){const n=t?e?Hl:Ul:e?Dl:$l;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(V(n,a)&&a in r?n:r,a,i)}const Bl={get:ya(!1,!1)},Wl={get:ya(!1,!0)},Yl={get:ya(!0,!1)},Co=new WeakMap,Po=new WeakMap,Oo=new WeakMap,Kl=new WeakMap;function ql(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vl(e){return e.__v_skip||!Object.isExtensible(e)?0:ql(bl(e))}function Qt(e){return bn(e)?e:_a(e,!1,Eo,Bl,Co)}function Xl(e){return _a(e,!1,jl,Wl,Po)}function So(e){return _a(e,!0,Fl,Yl,Oo)}function _a(e,t,n,r,a){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Vl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function ut(e){return bn(e)?ut(e.__v_raw):!!(e&&e.__v_isReactive)}function bn(e){return!!(e&&e.__v_isReadonly)}function Mr(e){return!!(e&&e.__v_isShallow)}function Ro(e){return ut(e)||bn(e)}function Q(e){const t=e&&e.__v_raw;return t?Q(t):e}function Ht(e){return Hn(e,"__v_skip",!0),e}const yn=e=>he(e)?Qt(e):e,wa=e=>he(e)?So(e):e;function Io(e){ft&&Ie&&(e=Q(e),xo(e.dep||(e.dep=pa())))}function To(e,t){e=Q(e),e.dep&&Nr(e.dep)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Ve(e){return No(e,!1)}function Gl(e){return No(e,!0)}function No(e,t){return fe(e)?e:new Ql(e,t)}class Ql{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Q(t),this._value=n?t:yn(t)}get value(){return Io(this),this._value}set value(t){t=this.__v_isShallow?t:Q(t),vn(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:yn(t),To(this))}}function zt(e){return fe(e)?e.value:e}const Jl={get:(e,t,n)=>zt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Mo(e){return ut(e)?e:new Proxy(e,Jl)}function Zl(e){const t=H(e)?new Array(e.length):{};for(const n in e)t[n]=tc(e,n);return t}class ec{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function tc(e,t,n){const r=e[t];return fe(r)?r:new ec(e,t,n)}class nc{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ga(t,()=>{this._dirty||(this._dirty=!0,To(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Q(this);return Io(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function rc(e,t,n=!1){let r,a;const i=Y(e);return i?(r=e,a=Le):(r=e.get,a=e.set),new nc(r,a,i||!a,n)}function dt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){ar(i,t,n)}return a}function Fe(e,t,n,r){if(Y(e)){const i=dt(e,t,n,r);return i&&ho(i)&&i.catch(o=>{ar(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Fe(e[i],t,n,r));return a}function ar(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){dt(l,null,10,[e,o,s]);return}}ac(e,n,a,r)}function ac(e,t,n,r=!0){console.error(e)}let Bn=!1,Lr=!1;const Ee=[];let qe=0;const ln=[];let an=null,Rt=0;const cn=[];let st=null,It=0;const Lo=Promise.resolve();let xa=null,Fr=null;function ka(e){const t=xa||Lo;return e?t.then(this?e.bind(this):e):t}function ic(e){let t=qe+1,n=Ee.length;for(;t<n;){const r=t+n>>>1;_n(Ee[r])<e?t=r+1:n=r}return t}function Fo(e){(!Ee.length||!Ee.includes(e,Bn&&e.allowRecurse?qe+1:qe))&&e!==Fr&&(e.id==null?Ee.push(e):Ee.splice(ic(e.id),0,e),jo())}function jo(){!Bn&&!Lr&&(Lr=!0,xa=Lo.then(Do))}function oc(e){const t=Ee.indexOf(e);t>qe&&Ee.splice(t,1)}function zo(e,t,n,r){H(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),jo()}function sc(e){zo(e,an,ln,Rt)}function lc(e){zo(e,st,cn,It)}function ir(e,t=null){if(ln.length){for(Fr=t,an=[...new Set(ln)],ln.length=0,Rt=0;Rt<an.length;Rt++)an[Rt]();an=null,Rt=0,Fr=null,ir(e,t)}}function $o(e){if(ir(),cn.length){const t=[...new Set(cn)];if(cn.length=0,st){st.push(...t);return}for(st=t,st.sort((n,r)=>_n(n)-_n(r)),It=0;It<st.length;It++)st[It]();st=null,It=0}}const _n=e=>e.id==null?1/0:e.id;function Do(e){Lr=!1,Bn=!0,ir(e),Ee.sort((n,r)=>_n(n)-_n(r));const t=Le;try{for(qe=0;qe<Ee.length;qe++){const n=Ee[qe];n&&n.active!==!1&&dt(n,null,14)}}finally{qe=0,Ee.length=0,$o(),Bn=!1,xa=null,(Ee.length||ln.length||cn.length)&&Do(e)}}function cc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||oe;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:m}=r[c]||oe;m&&(a=n.map(v=>v.trim())),d&&(a=n.map(wl))}let s,l=r[s=yr(t)]||r[s=yr(We(t))];!l&&i&&(l=r[s=yr(Vt(t))]),l&&Fe(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Fe(f,e,6,a)}}function Uo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!Y(e)){const l=f=>{const c=Uo(f,t,!0);c&&(s=!0,ye(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(H(i)?i.forEach(l=>o[l]=null):ye(o,i),r.set(e,o),o)}function or(e,t){return!e||!Zn(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,Vt(t))||V(e,t))}let Te=null,Ho=null;function Wn(e){const t=Te;return Te=e,Ho=e&&e.type.__scopeId||null,t}function Aa(e,t=Te,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&di(-1);const i=Wn(t),o=e(...a);return Wn(i),r._d&&di(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function wr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:m,setupState:v,ctx:k,inheritAttrs:N}=e;let O,g;const x=Wn(e);try{if(n.shapeFlag&4){const $=a||r;O=He(c.call($,$,d,i,v,m,k)),g=l}else{const $=t;O=He($.length>1?$(i,{attrs:l,slots:s,emit:f}):$(i,null)),g=t.props?l:fc(l)}}catch($){fn.length=0,ar($,e,1),O=me(wn)}let I=O;if(g&&N!==!1){const $=Object.keys(g),{shapeFlag:D}=I;$.length&&D&7&&(o&&$.some(ua)&&(g=uc(g,o)),I=Wt(I,g))}return n.dirs&&(I=Wt(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),O=I,Wn(x),O}const fc=e=>{let t;for(const n in e)(n==="class"||n==="style"||Zn(n))&&((t||(t={}))[n]=e[n]);return t},uc=(e,t)=>{const n={};for(const r in e)(!ua(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function dc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ri(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const m=c[d];if(o[m]!==r[m]&&!or(f,m))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ri(r,o,f):!0:!!o;return!1}function ri(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!or(n,i))return!0}return!1}function mc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const hc=e=>e.__isSuspense;function pc(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):lc(e)}function Ln(e,t){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[e]=t}}function Xe(e,t,n=!1){const r=pe||Te;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&Y(t)?t.call(r.proxy):t}}const ai={};function $t(e,t,n){return Bo(e,t,n)}function Bo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=oe){const s=pe;let l,f=!1,c=!1;if(fe(e)?(l=()=>e.value,f=Mr(e)):ut(e)?(l=()=>e,r=!0):H(e)?(c=!0,f=e.some(g=>ut(g)||Mr(g)),l=()=>e.map(g=>{if(fe(g))return g.value;if(ut(g))return Nt(g);if(Y(g))return dt(g,s,2)})):Y(e)?t?l=()=>dt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),Fe(e,s,3,[m])}:l=Le,t&&r){const g=l;l=()=>Nt(g())}let d,m=g=>{d=O.onStop=()=>{dt(g,s,4)}};if(kn)return m=Le,t?n&&Fe(t,s,3,[l(),c?[]:void 0,m]):l(),Le;let v=c?[]:ai;const k=()=>{if(!!O.active)if(t){const g=O.run();(r||f||(c?g.some((x,I)=>vn(x,v[I])):vn(g,v)))&&(d&&d(),Fe(t,s,3,[g,v===ai?void 0:v,m]),v=g)}else O.run()};k.allowRecurse=!!t;let N;a==="sync"?N=k:a==="post"?N=()=>we(k,s&&s.suspense):N=()=>sc(k);const O=new ga(l,N);return t?n?k():v=O.run():a==="post"?we(O.run.bind(O),s&&s.suspense):O.run(),()=>{O.stop(),s&&s.scope&&da(s.scope.effects,O)}}function gc(e,t,n){const r=this.proxy,a=ge(e)?e.includes(".")?Wo(r,e):()=>r[e]:e.bind(r,r);let i;Y(t)?i=t:(i=t.handler,n=t);const o=pe;Yt(this);const s=Bo(a,i.bind(r),n);return o?Yt(o):kt(),s}function Wo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Nt(e,t){if(!he(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))Nt(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)Nt(e[n],t);else if(mo(e)||jt(e))e.forEach(n=>{Nt(n,t)});else if(go(e))for(const n in e)Nt(e[n],t);return e}function Cn(e){return Y(e)?{setup:e,name:e.name}:e}const Fn=e=>!!e.type.__asyncLoader,Yo=e=>e.type.__isKeepAlive;function vc(e,t){qo(e,"a",t)}function Ko(e,t){qo(e,"da",t)}function qo(e,t,n=pe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(sr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Yo(a.parent.vnode)&&bc(r,t,n,a),a=a.parent}}function bc(e,t,n,r){const a=sr(t,e,r,!0);Ea(()=>{da(r[t],a)},n)}function sr(e,t,n=pe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Xt(),Yt(n);const s=Fe(t,n,e,o);return kt(),Gt(),s});return r?a.unshift(i):a.push(i),i}}const et=e=>(t,n=pe)=>(!kn||e==="sp")&&sr(e,t,n),Vo=et("bm"),Xo=et("m"),yc=et("bu"),_c=et("u"),wc=et("bum"),Ea=et("um"),xc=et("sp"),kc=et("rtg"),Ac=et("rtc");function Ec(e,t=pe){sr("ec",e,t)}function vt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Xt(),Fe(l,n,8,[e.el,s,e,t]),Gt())}}const Go="components";function lr(e,t){return Pc(Go,e,!0,t)||e}const Cc=Symbol();function Pc(e,t,n=!0,r=!1){const a=Te||pe;if(a){const i=a.type;if(e===Go){const s=af(i);if(s&&(s===t||s===We(t)||s===nr(We(t))))return i}const o=ii(a[e]||i[e],t)||ii(a.appContext[e],t);return!o&&r?i:o}}function ii(e,t){return e&&(e[t]||e[We(t)]||e[nr(We(t))])}function Oc(e,t,n,r){let a;const i=n&&n[r];if(H(e)||ge(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(he(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const jr=e=>e?fs(e)?Sa(e)||e.proxy:jr(e.parent):null,Yn=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jr(e.parent),$root:e=>jr(e.root),$emit:e=>e.emit,$options:e=>Jo(e),$forceUpdate:e=>e.f||(e.f=()=>Fo(e.update)),$nextTick:e=>e.n||(e.n=ka.bind(e.proxy)),$watch:e=>gc.bind(e)}),Sc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const v=o[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==oe&&V(r,t))return o[t]=1,r[t];if(a!==oe&&V(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&V(f,t))return o[t]=3,i[t];if(n!==oe&&V(n,t))return o[t]=4,n[t];zr&&(o[t]=0)}}const c=Yn[t];let d,m;if(c)return t==="$attrs"&&Ce(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==oe&&V(n,t))return o[t]=4,n[t];if(m=l.config.globalProperties,V(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==oe&&V(a,t)?(a[t]=n,!0):r!==oe&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==oe&&V(e,o)||t!==oe&&V(t,o)||(s=i[0])&&V(s,o)||V(r,o)||V(Yn,o)||V(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let zr=!0;function Rc(e){const t=Jo(e),n=e.proxy,r=e.ctx;zr=!1,t.beforeCreate&&oi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:m,beforeUpdate:v,updated:k,activated:N,deactivated:O,beforeDestroy:g,beforeUnmount:x,destroyed:I,unmounted:$,render:D,renderTracked:G,renderTriggered:B,errorCaptured:q,serverPrefetch:re,expose:_e,inheritAttrs:ve,components:xe,directives:nt,filters:Oe}=t;if(f&&Ic(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ae in o){const J=o[ae];Y(J)&&(r[ae]=J.bind(n))}if(a){const ae=a.call(n,n);he(ae)&&(e.data=Qt(ae))}if(zr=!0,i)for(const ae in i){const J=i[ae],ke=Y(J)?J.bind(n,n):Y(J.get)?J.get.bind(n,n):Le,Ct=!Y(J)&&Y(J.set)?J.set.bind(n):Le,Ye=ce({get:ke,set:Ct});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:je=>Ye.value=je})}if(s)for(const ae in s)Qo(s[ae],r,n,ae);if(l){const ae=Y(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(J=>{Ln(J,ae[J])})}c&&oi(c,e,"c");function de(ae,J){H(J)?J.forEach(ke=>ae(ke.bind(n))):J&&ae(J.bind(n))}if(de(Vo,d),de(Xo,m),de(yc,v),de(_c,k),de(vc,N),de(Ko,O),de(Ec,q),de(Ac,G),de(kc,B),de(wc,x),de(Ea,$),de(xc,re),H(_e))if(_e.length){const ae=e.exposed||(e.exposed={});_e.forEach(J=>{Object.defineProperty(ae,J,{get:()=>n[J],set:ke=>n[J]=ke})})}else e.exposed||(e.exposed={});D&&e.render===Le&&(e.render=D),ve!=null&&(e.inheritAttrs=ve),xe&&(e.components=xe),nt&&(e.directives=nt)}function Ic(e,t,n=Le,r=!1){H(e)&&(e=$r(e));for(const a in e){const i=e[a];let o;he(i)?"default"in i?o=Xe(i.from||a,i.default,!0):o=Xe(i.from||a):o=Xe(i),fe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function oi(e,t,n){Fe(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Qo(e,t,n,r){const a=r.includes(".")?Wo(n,r):()=>n[r];if(ge(e)){const i=t[e];Y(i)&&$t(a,i)}else if(Y(e))$t(a,e.bind(n));else if(he(e))if(H(e))e.forEach(i=>Qo(i,t,n,r));else{const i=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(i)&&$t(a,i,e)}}function Jo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Kn(l,f,o,!0)),Kn(l,t,o)),i.set(t,l),l}function Kn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Kn(e,i,n,!0),a&&a.forEach(o=>Kn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Tc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Tc={data:si,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:yt,directives:yt,watch:Mc,provide:si,inject:Nc};function si(e,t){return t?e?function(){return ye(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function Nc(e,t){return yt($r(e),$r(t))}function $r(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function yt(e,t){return e?ye(ye(Object.create(null),e),t):t}function Mc(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Lc(e,t,n,r=!1){const a={},i={};Hn(i,cr,1),e.propsDefaults=Object.create(null),Zo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Xl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Fc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Q(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let m=c[d];if(or(e.emitsOptions,m))continue;const v=t[m];if(l)if(V(i,m))v!==i[m]&&(i[m]=v,f=!0);else{const k=We(m);a[k]=Dr(l,s,k,v,e,!1)}else v!==i[m]&&(i[m]=v,f=!0)}}}else{Zo(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!V(t,d)&&((c=Vt(d))===d||!V(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=Dr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!V(t,d)&&!0)&&(delete i[d],f=!0)}f&&Ge(e,"set","$attrs")}function Zo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Mn(l))continue;const f=t[l];let c;a&&V(a,c=We(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:or(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=Q(n),f=s||oe;for(let c=0;c<i.length;c++){const d=i[c];n[d]=Dr(a,l,d,f[d],e,!V(f,d))}}return o}function Dr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=V(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&Y(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Yt(a),r=f[n]=l.call(null,t),kt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Vt(n))&&(r=!0))}return r}function es(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!Y(e)){const c=d=>{l=!0;const[m,v]=es(d,t,!0);ye(o,m),v&&s.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return r.set(e,Ft),Ft;if(H(i))for(let c=0;c<i.length;c++){const d=We(i[c]);li(d)&&(o[d]=oe)}else if(i)for(const c in i){const d=We(c);if(li(d)){const m=i[c],v=o[d]=H(m)||Y(m)?{type:m}:m;if(v){const k=ui(Boolean,v.type),N=ui(String,v.type);v[0]=k>-1,v[1]=N<0||k<N,(k>-1||V(v,"default"))&&s.push(d)}}}const f=[o,s];return r.set(e,f),f}function li(e){return e[0]!=="$"}function ci(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function fi(e,t){return ci(e)===ci(t)}function ui(e,t){return H(t)?t.findIndex(n=>fi(n,e)):Y(t)&&fi(t,e)?0:-1}const ts=e=>e[0]==="_"||e==="$stable",Ca=e=>H(e)?e.map(He):[He(e)],jc=(e,t,n)=>{if(t._n)return t;const r=Aa((...a)=>Ca(t(...a)),n);return r._c=!1,r},ns=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ts(a))continue;const i=e[a];if(Y(i))t[a]=jc(a,i,r);else if(i!=null){const o=Ca(i);t[a]=()=>o}}},rs=(e,t)=>{const n=Ca(t);e.slots.default=()=>n},zc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Q(t),Hn(t,"_",n)):ns(t,e.slots={})}else e.slots={},t&&rs(e,t);Hn(e.slots,cr,1)},$c=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=oe;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ye(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ns(t,a)),o=t}else t&&(rs(e,t),o={default:1});if(i)for(const s in a)!ts(s)&&!(s in o)&&delete a[s]};function as(){return{app:null,config:{isNativeTag:pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dc=0;function Uc(e,t){return function(r,a=null){Y(r)||(r=Object.assign({},r)),a!=null&&!he(a)&&(a=null);const i=as(),o=new Set;let s=!1;const l=i.app={_uid:Dc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:sf,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&Y(f.install)?(o.add(f),f.install(l,...c)):Y(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const m=me(r,a);return m.appContext=i,c&&t?t(m,f):e(m,f,d),s=!0,l._container=f,f.__vue_app__=l,Sa(m.component)||m.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function Ur(e,t,n,r,a=!1){if(H(e)){e.forEach((m,v)=>Ur(m,t&&(H(t)?t[v]:t),n,r,a));return}if(Fn(r)&&!a)return;const i=r.shapeFlag&4?Sa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===oe?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(ge(f)?(c[f]=null,V(d,f)&&(d[f]=null)):fe(f)&&(f.value=null)),Y(l))dt(l,s,12,[o,c]);else{const m=ge(l),v=fe(l);if(m||v){const k=()=>{if(e.f){const N=m?c[l]:l.value;a?H(N)&&da(N,i):H(N)?N.includes(i)||N.push(i):m?(c[l]=[i],V(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else m?(c[l]=o,V(d,l)&&(d[l]=o)):fe(l)&&(l.value=o,e.k&&(c[e.k]=o))};o?(k.id=-1,we(k,n)):k()}}}const we=pc;function Hc(e){return Bc(e)}function Bc(e,t){const n=xl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:m,setScopeId:v=Le,cloneNode:k,insertStaticContent:N}=e,O=(u,h,p,_=null,y=null,E=null,S=!1,A=null,C=!!h.dynamicChildren)=>{if(u===h)return;u&&!tn(u,h)&&(_=L(u),Se(u,y,E,!0),u=null),h.patchFlag===-2&&(C=!1,h.dynamicChildren=null);const{type:w,ref:F,shapeFlag:T}=h;switch(w){case Pa:g(u,h,p,_);break;case wn:x(u,h,p,_);break;case jn:u==null&&I(h,p,_,S);break;case Ue:nt(u,h,p,_,y,E,S,A,C);break;default:T&1?G(u,h,p,_,y,E,S,A,C):T&6?Oe(u,h,p,_,y,E,S,A,C):(T&64||T&128)&&w.process(u,h,p,_,y,E,S,A,C,ie)}F!=null&&y&&Ur(F,u&&u.ref,E,h||u,!h)},g=(u,h,p,_)=>{if(u==null)r(h.el=s(h.children),p,_);else{const y=h.el=u.el;h.children!==u.children&&f(y,h.children)}},x=(u,h,p,_)=>{u==null?r(h.el=l(h.children||""),p,_):h.el=u.el},I=(u,h,p,_)=>{[u.el,u.anchor]=N(u.children,h,p,_,u.el,u.anchor)},$=({el:u,anchor:h},p,_)=>{let y;for(;u&&u!==h;)y=m(u),r(u,p,_),u=y;r(h,p,_)},D=({el:u,anchor:h})=>{let p;for(;u&&u!==h;)p=m(u),a(u),u=p;a(h)},G=(u,h,p,_,y,E,S,A,C)=>{S=S||h.type==="svg",u==null?B(h,p,_,y,E,S,A,C):_e(u,h,y,E,S,A,C)},B=(u,h,p,_,y,E,S,A)=>{let C,w;const{type:F,props:T,shapeFlag:j,transition:U,patchFlag:X,dirs:ee}=u;if(u.el&&k!==void 0&&X===-1)C=u.el=k(u.el);else{if(C=u.el=o(u.type,E,T&&T.is,T),j&8?c(C,u.children):j&16&&re(u.children,C,null,_,y,E&&F!=="foreignObject",S,A),ee&&vt(u,null,_,"created"),T){for(const se in T)se!=="value"&&!Mn(se)&&i(C,se,null,T[se],E,u.children,_,y,P);"value"in T&&i(C,"value",null,T.value),(w=T.onVnodeBeforeMount)&&$e(w,_,u)}q(C,u,u.scopeId,S,_)}ee&&vt(u,null,_,"beforeMount");const te=(!y||y&&!y.pendingBranch)&&U&&!U.persisted;te&&U.beforeEnter(C),r(C,h,p),((w=T&&T.onVnodeMounted)||te||ee)&&we(()=>{w&&$e(w,_,u),te&&U.enter(C),ee&&vt(u,null,_,"mounted")},y)},q=(u,h,p,_,y)=>{if(p&&v(u,p),_)for(let E=0;E<_.length;E++)v(u,_[E]);if(y){let E=y.subTree;if(h===E){const S=y.vnode;q(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},re=(u,h,p,_,y,E,S,A,C=0)=>{for(let w=C;w<u.length;w++){const F=u[w]=A?lt(u[w]):He(u[w]);O(null,F,h,p,_,y,E,S,A)}},_e=(u,h,p,_,y,E,S)=>{const A=h.el=u.el;let{patchFlag:C,dynamicChildren:w,dirs:F}=h;C|=u.patchFlag&16;const T=u.props||oe,j=h.props||oe;let U;p&&bt(p,!1),(U=j.onVnodeBeforeUpdate)&&$e(U,p,h,u),F&&vt(h,u,p,"beforeUpdate"),p&&bt(p,!0);const X=y&&h.type!=="foreignObject";if(w?ve(u.dynamicChildren,w,A,p,_,X,E):S||ke(u,h,A,null,p,_,X,E,!1),C>0){if(C&16)xe(A,h,T,j,p,_,y);else if(C&2&&T.class!==j.class&&i(A,"class",null,j.class,y),C&4&&i(A,"style",T.style,j.style,y),C&8){const ee=h.dynamicProps;for(let te=0;te<ee.length;te++){const se=ee[te],Re=T[se],Pt=j[se];(Pt!==Re||se==="value")&&i(A,se,Re,Pt,y,u.children,p,_,P)}}C&1&&u.children!==h.children&&c(A,h.children)}else!S&&w==null&&xe(A,h,T,j,p,_,y);((U=j.onVnodeUpdated)||F)&&we(()=>{U&&$e(U,p,h,u),F&&vt(h,u,p,"updated")},_)},ve=(u,h,p,_,y,E,S)=>{for(let A=0;A<h.length;A++){const C=u[A],w=h[A],F=C.el&&(C.type===Ue||!tn(C,w)||C.shapeFlag&70)?d(C.el):p;O(C,w,F,null,_,y,E,S,!0)}},xe=(u,h,p,_,y,E,S)=>{if(p!==_){for(const A in _){if(Mn(A))continue;const C=_[A],w=p[A];C!==w&&A!=="value"&&i(u,A,w,C,S,h.children,y,E,P)}if(p!==oe)for(const A in p)!Mn(A)&&!(A in _)&&i(u,A,p[A],null,S,h.children,y,E,P);"value"in _&&i(u,"value",p.value,_.value)}},nt=(u,h,p,_,y,E,S,A,C)=>{const w=h.el=u?u.el:s(""),F=h.anchor=u?u.anchor:s("");let{patchFlag:T,dynamicChildren:j,slotScopeIds:U}=h;U&&(A=A?A.concat(U):U),u==null?(r(w,p,_),r(F,p,_),re(h.children,p,F,y,E,S,A,C)):T>0&&T&64&&j&&u.dynamicChildren?(ve(u.dynamicChildren,j,p,y,E,S,A),(h.key!=null||y&&h===y.subTree)&&is(u,h,!0)):ke(u,h,p,F,y,E,S,A,C)},Oe=(u,h,p,_,y,E,S,A,C)=>{h.slotScopeIds=A,u==null?h.shapeFlag&512?y.ctx.activate(h,p,_,S,C):ue(h,p,_,y,E,S,C):de(u,h,C)},ue=(u,h,p,_,y,E,S)=>{const A=u.component=Zc(u,_,y);if(Yo(u)&&(A.ctx.renderer=ie),ef(A),A.asyncDep){if(y&&y.registerDep(A,ae),!u.el){const C=A.subTree=me(wn);x(null,C,h,p)}return}ae(A,u,h,p,y,E,S)},de=(u,h,p)=>{const _=h.component=u.component;if(dc(u,h,p))if(_.asyncDep&&!_.asyncResolved){J(_,h,p);return}else _.next=h,oc(_.update),_.update();else h.el=u.el,_.vnode=h},ae=(u,h,p,_,y,E,S)=>{const A=()=>{if(u.isMounted){let{next:F,bu:T,u:j,parent:U,vnode:X}=u,ee=F,te;bt(u,!1),F?(F.el=X.el,J(u,F,S)):F=X,T&&_r(T),(te=F.props&&F.props.onVnodeBeforeUpdate)&&$e(te,U,F,X),bt(u,!0);const se=wr(u),Re=u.subTree;u.subTree=se,O(Re,se,d(Re.el),L(Re),u,y,E),F.el=se.el,ee===null&&mc(u,se.el),j&&we(j,y),(te=F.props&&F.props.onVnodeUpdated)&&we(()=>$e(te,U,F,X),y)}else{let F;const{el:T,props:j}=h,{bm:U,m:X,parent:ee}=u,te=Fn(h);if(bt(u,!1),U&&_r(U),!te&&(F=j&&j.onVnodeBeforeMount)&&$e(F,ee,h),bt(u,!0),T&&W){const se=()=>{u.subTree=wr(u),W(T,u.subTree,u,y,null)};te?h.type.__asyncLoader().then(()=>!u.isUnmounted&&se()):se()}else{const se=u.subTree=wr(u);O(null,se,p,_,u,y,E),h.el=se.el}if(X&&we(X,y),!te&&(F=j&&j.onVnodeMounted)){const se=h;we(()=>$e(F,ee,se),y)}(h.shapeFlag&256||ee&&Fn(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&we(u.a,y),u.isMounted=!0,h=p=_=null}},C=u.effect=new ga(A,()=>Fo(w),u.scope),w=u.update=()=>C.run();w.id=u.uid,bt(u,!0),w()},J=(u,h,p)=>{h.component=u;const _=u.vnode.props;u.vnode=h,u.next=null,Fc(u,h.props,_,p),$c(u,h.children,p),Xt(),ir(void 0,u.update),Gt()},ke=(u,h,p,_,y,E,S,A,C=!1)=>{const w=u&&u.children,F=u?u.shapeFlag:0,T=h.children,{patchFlag:j,shapeFlag:U}=h;if(j>0){if(j&128){Ye(w,T,p,_,y,E,S,A,C);return}else if(j&256){Ct(w,T,p,_,y,E,S,A,C);return}}U&8?(F&16&&P(w,y,E),T!==w&&c(p,T)):F&16?U&16?Ye(w,T,p,_,y,E,S,A,C):P(w,y,E,!0):(F&8&&c(p,""),U&16&&re(T,p,_,y,E,S,A,C))},Ct=(u,h,p,_,y,E,S,A,C)=>{u=u||Ft,h=h||Ft;const w=u.length,F=h.length,T=Math.min(w,F);let j;for(j=0;j<T;j++){const U=h[j]=C?lt(h[j]):He(h[j]);O(u[j],U,p,null,y,E,S,A,C)}w>F?P(u,y,E,!0,!1,T):re(h,p,_,y,E,S,A,C,T)},Ye=(u,h,p,_,y,E,S,A,C)=>{let w=0;const F=h.length;let T=u.length-1,j=F-1;for(;w<=T&&w<=j;){const U=u[w],X=h[w]=C?lt(h[w]):He(h[w]);if(tn(U,X))O(U,X,p,null,y,E,S,A,C);else break;w++}for(;w<=T&&w<=j;){const U=u[T],X=h[j]=C?lt(h[j]):He(h[j]);if(tn(U,X))O(U,X,p,null,y,E,S,A,C);else break;T--,j--}if(w>T){if(w<=j){const U=j+1,X=U<F?h[U].el:_;for(;w<=j;)O(null,h[w]=C?lt(h[w]):He(h[w]),p,X,y,E,S,A,C),w++}}else if(w>j)for(;w<=T;)Se(u[w],y,E,!0),w++;else{const U=w,X=w,ee=new Map;for(w=X;w<=j;w++){const Ae=h[w]=C?lt(h[w]):He(h[w]);Ae.key!=null&&ee.set(Ae.key,w)}let te,se=0;const Re=j-X+1;let Pt=!1,Ka=0;const en=new Array(Re);for(w=0;w<Re;w++)en[w]=0;for(w=U;w<=T;w++){const Ae=u[w];if(se>=Re){Se(Ae,y,E,!0);continue}let ze;if(Ae.key!=null)ze=ee.get(Ae.key);else for(te=X;te<=j;te++)if(en[te-X]===0&&tn(Ae,h[te])){ze=te;break}ze===void 0?Se(Ae,y,E,!0):(en[ze-X]=w+1,ze>=Ka?Ka=ze:Pt=!0,O(Ae,h[ze],p,null,y,E,S,A,C),se++)}const qa=Pt?Wc(en):Ft;for(te=qa.length-1,w=Re-1;w>=0;w--){const Ae=X+w,ze=h[Ae],Va=Ae+1<F?h[Ae+1].el:_;en[w]===0?O(null,ze,p,Va,y,E,S,A,C):Pt&&(te<0||w!==qa[te]?je(ze,p,Va,2):te--)}}},je=(u,h,p,_,y=null)=>{const{el:E,type:S,transition:A,children:C,shapeFlag:w}=u;if(w&6){je(u.component.subTree,h,p,_);return}if(w&128){u.suspense.move(h,p,_);return}if(w&64){S.move(u,h,p,ie);return}if(S===Ue){r(E,h,p);for(let T=0;T<C.length;T++)je(C[T],h,p,_);r(u.anchor,h,p);return}if(S===jn){$(u,h,p);return}if(_!==2&&w&1&&A)if(_===0)A.beforeEnter(E),r(E,h,p),we(()=>A.enter(E),y);else{const{leave:T,delayLeave:j,afterLeave:U}=A,X=()=>r(E,h,p),ee=()=>{T(E,()=>{X(),U&&U()})};j?j(E,X,ee):ee()}else r(E,h,p)},Se=(u,h,p,_=!1,y=!1)=>{const{type:E,props:S,ref:A,children:C,dynamicChildren:w,shapeFlag:F,patchFlag:T,dirs:j}=u;if(A!=null&&Ur(A,null,p,u,!0),F&256){h.ctx.deactivate(u);return}const U=F&1&&j,X=!Fn(u);let ee;if(X&&(ee=S&&S.onVnodeBeforeUnmount)&&$e(ee,h,u),F&6)M(u.component,p,_);else{if(F&128){u.suspense.unmount(p,_);return}U&&vt(u,null,h,"beforeUnmount"),F&64?u.type.remove(u,h,p,y,ie,_):w&&(E!==Ue||T>0&&T&64)?P(w,h,p,!1,!0):(E===Ue&&T&384||!y&&F&16)&&P(C,h,p),_&&br(u)}(X&&(ee=S&&S.onVnodeUnmounted)||U)&&we(()=>{ee&&$e(ee,h,u),U&&vt(u,null,h,"unmounted")},p)},br=u=>{const{type:h,el:p,anchor:_,transition:y}=u;if(h===Ue){b(p,_);return}if(h===jn){D(u);return}const E=()=>{a(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:A}=y,C=()=>S(p,E);A?A(u.el,E,C):C()}else E()},b=(u,h)=>{let p;for(;u!==h;)p=m(u),a(u),u=p;a(h)},M=(u,h,p)=>{const{bum:_,scope:y,update:E,subTree:S,um:A}=u;_&&_r(_),y.stop(),E&&(E.active=!1,Se(S,u,h,p)),A&&we(A,h),we(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},P=(u,h,p,_=!1,y=!1,E=0)=>{for(let S=E;S<u.length;S++)Se(u[S],h,p,_,y)},L=u=>u.shapeFlag&6?L(u.component.subTree):u.shapeFlag&128?u.suspense.next():m(u.anchor||u.el),Z=(u,h,p)=>{u==null?h._vnode&&Se(h._vnode,null,null,!0):O(h._vnode||null,u,h,null,null,null,p),$o(),h._vnode=u},ie={p:O,um:Se,m:je,r:br,mt:ue,mc:re,pc:ke,pbc:ve,n:L,o:e};let K,W;return t&&([K,W]=t(ie)),{render:Z,hydrate:K,createApp:Uc(Z,K)}}function bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function is(e,t,n=!1){const r=e.children,a=t.children;if(H(r)&&H(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=lt(a[i]),s.el=o.el),n||is(o,s))}}function Wc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Yc=e=>e.__isTeleport,Ue=Symbol(void 0),Pa=Symbol(void 0),wn=Symbol(void 0),jn=Symbol(void 0),fn=[];let Ne=null;function mt(e=!1){fn.push(Ne=e?null:[])}function Kc(){fn.pop(),Ne=fn[fn.length-1]||null}let xn=1;function di(e){xn+=e}function os(e){return e.dynamicChildren=xn>0?Ne||Ft:null,Kc(),xn>0&&Ne&&Ne.push(e),e}function Bt(e,t,n,r,a,i){return os(Dt(e,t,n,r,a,i,!0))}function ss(e,t,n,r,a){return os(me(e,t,n,r,a,!0))}function Hr(e){return e?e.__v_isVNode===!0:!1}function tn(e,t){return e.type===t.type&&e.key===t.key}const cr="__vInternal",ls=({key:e})=>e!=null?e:null,zn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ge(e)||fe(e)||Y(e)?{i:Te,r:e,k:t,f:!!n}:e:null;function Dt(e,t=null,n=null,r=0,a=null,i=e===Ue?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ls(t),ref:t&&zn(t),scopeId:Ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Oa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),xn>0&&!o&&Ne&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ne.push(l),l}const me=qc;function qc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Cc)&&(e=wn),Hr(e)){const s=Wt(e,t,!0);return n&&Oa(s,n),xn>0&&!i&&Ne&&(s.shapeFlag&6?Ne[Ne.indexOf(e)]=s:Ne.push(s)),s.patchFlag|=-2,s}if(of(e)&&(e=e.__vccOpts),t){t=Vc(t);let{class:s,style:l}=t;s&&!ge(s)&&(t.class=fa(s)),he(l)&&(Ro(l)&&!H(l)&&(l=ye({},l)),t.style=ca(l))}const o=ge(e)?1:hc(e)?128:Yc(e)?64:he(e)?4:Y(e)?2:0;return Dt(e,t,n,r,a,o,i,!0)}function Vc(e){return e?Ro(e)||cr in e?ye({},e):e:null}function Wt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Gc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ls(s),ref:t&&t.ref?n&&a?H(a)?a.concat(zn(t)):[a,zn(t)]:zn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ue?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wt(e.ssContent),ssFallback:e.ssFallback&&Wt(e.ssFallback),el:e.el,anchor:e.anchor}}function Xc(e=" ",t=0){return me(Pa,null,e,t)}function ah(e,t){const n=me(jn,null,e);return n.staticCount=t,n}function He(e){return e==null||typeof e=="boolean"?me(wn):H(e)?me(Ue,null,e.slice()):typeof e=="object"?lt(e):me(Pa,null,String(e))}function lt(e){return e.el===null||e.memo?e:Wt(e)}function Oa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Oa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(cr in t)?t._ctx=Te:a===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:Te},n=32):(t=String(t),r&64?(n=16,t=[Xc(t)]):n=8);e.children=t,e.shapeFlag|=n}function Gc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=fa([t.class,r.class]));else if(a==="style")t.style=ca([t.style,r.style]);else if(Zn(a)){const i=t[a],o=r[a];o&&i!==o&&!(H(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function $e(e,t,n,r=null){Fe(e,t,7,[n,r])}const Qc=as();let Jc=0;function Zc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Qc,i={uid:Jc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new vo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:es(r,a),emitsOptions:Uo(r,a),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=cc.bind(null,i),e.ce&&e.ce(i),i}let pe=null;const cs=()=>pe||Te,Yt=e=>{pe=e,e.scope.on()},kt=()=>{pe&&pe.scope.off(),pe=null};function fs(e){return e.vnode.shapeFlag&4}let kn=!1;function ef(e,t=!1){kn=t;const{props:n,children:r}=e.vnode,a=fs(e);Lc(e,n,a,t),zc(e,r);const i=a?tf(e,t):void 0;return kn=!1,i}function tf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ht(new Proxy(e.ctx,Sc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?rf(e):null;Yt(e),Xt();const i=dt(r,e,0,[e.props,a]);if(Gt(),kt(),ho(i)){if(i.then(kt,kt),t)return i.then(o=>{mi(e,o,t)}).catch(o=>{ar(o,e,0)});e.asyncDep=i}else mi(e,i,t)}else us(e,t)}function mi(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=Mo(t)),us(e,n)}let hi;function us(e,t,n){const r=e.type;if(!e.render){if(!t&&hi&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=ye(ye({isCustomElement:i,delimiters:s},o),l);r.render=hi(a,f)}}e.render=r.render||Le}Yt(e),Xt(),Rc(e),Gt(),kt()}function nf(e){return new Proxy(e.attrs,{get(t,n){return Ce(e,"get","$attrs"),t[n]}})}function rf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=nf(e))},slots:e.slots,emit:e.emit,expose:t}}function Sa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Mo(Ht(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Yn)return Yn[n](e)}}))}function af(e){return Y(e)&&e.displayName||e.name}function of(e){return Y(e)&&"__vccOpts"in e}const ce=(e,t)=>rc(e,t,kn);function fr(e,t,n){const r=arguments.length;return r===2?he(t)&&!H(t)?Hr(t)?me(e,null,[t]):me(e,t):me(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hr(n)&&(n=[n]),me(e,t,n))}const sf="3.2.35",lf="http://www.w3.org/2000/svg",_t=typeof document!="undefined"?document:null,pi=_t&&_t.createElement("template"),cf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?_t.createElementNS(lf,e):_t.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>_t.createTextNode(e),createComment:e=>_t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{pi.innerHTML=r?`<svg>${e}</svg>`:e;const s=pi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ff(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function uf(e,t,n){const r=e.style,a=ge(n);if(n&&!a){for(const i in n)Br(r,i,n[i]);if(t&&!ge(t))for(const i in t)n[i]==null&&Br(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const gi=/\s*!important$/;function Br(e,t,n){if(H(n))n.forEach(r=>Br(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=df(e,t);gi.test(n)?e.setProperty(Vt(r),n.replace(gi,""),"important"):e[r]=n}}const vi=["Webkit","Moz","ms"],xr={};function df(e,t){const n=xr[t];if(n)return n;let r=We(t);if(r!=="filter"&&r in e)return xr[t]=r;r=nr(r);for(let a=0;a<vi.length;a++){const i=vi[a]+r;if(i in e)return xr[t]=i}return t}const bi="http://www.w3.org/1999/xlink";function mf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(bi,t.slice(6,t.length)):e.setAttributeNS(bi,t,n);else{const i=fl(t);n==null||i&&!fo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function hf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=fo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[ds,pf]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Wr=0;const gf=Promise.resolve(),vf=()=>{Wr=0},bf=()=>Wr||(gf.then(vf),Wr=ds());function yf(e,t,n,r){e.addEventListener(t,n,r)}function _f(e,t,n,r){e.removeEventListener(t,n,r)}function wf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=xf(t);if(r){const f=i[t]=kf(r,a);yf(e,s,f,l)}else o&&(_f(e,s,o,l),i[t]=void 0)}}const yi=/(?:Once|Passive|Capture)$/;function xf(e){let t;if(yi.test(e)){t={};let n;for(;n=e.match(yi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Vt(e.slice(2)),t]}function kf(e,t){const n=r=>{const a=r.timeStamp||ds();(pf||a>=n.attached-1)&&Fe(Af(r,n.value),t,5,[r])};return n.value=e,n.attached=bf(),n}function Af(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const _i=/^on[a-z]/,Ef=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?ff(e,r,a):t==="style"?uf(e,n,r):Zn(t)?ua(t)||wf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cf(e,t,r,a))?hf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),mf(e,t,r,a))};function Cf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&_i.test(t)&&Y(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||_i.test(t)&&ge(n)?!1:t in e}const Pf=ye({patchProp:Ef},cf);let wi;function Of(){return wi||(wi=Hc(Pf))}const Sf=(...e)=>{const t=Of().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Rf(r);if(!a)return;const i=t._component;!Y(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Rf(e){return ge(e)?document.querySelector(e):e}var ms=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const If={},Tf={class:"container"};function Nf(e,t){const n=lr("router-view");return mt(),Bt("div",Tf,[me(n)])}var Mf=ms(If,[["render",Nf]]),Lf=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let hs;const ur=e=>hs=e,ps=Symbol();function Yr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var un;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(un||(un={}));function Ff(){const e=bo(!0),t=e.run(()=>Ve({}));let n=[],r=[];const a=Ht({install(i){ur(a),a._a=i,i.provide(ps,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Lf?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const gs=()=>{};function xi(e,t,n,r=gs){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&cs()&&Ea(a),a}function Ot(e,...t){e.slice().forEach(n=>{n(...t)})}function Kr(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];Yr(a)&&Yr(r)&&e.hasOwnProperty(n)&&!fe(r)&&!ut(r)?e[n]=Kr(a,r):e[n]=r}return e}const jf=Symbol();function zf(e){return!Yr(e)||!e.hasOwnProperty(jf)}const{assign:Ke}=Object;function $f(e){return!!(fe(e)&&e.effect)}function Df(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let l;function f(){s||(n.state.value[e]=a?a():{});const c=Zl(n.state.value[e]);return Ke(c,i,Object.keys(o||{}).reduce((d,m)=>(d[m]=Ht(ce(()=>{ur(n);const v=n._s.get(e);return o[m].call(v,v)})),d),{}))}return l=vs(e,f,t,n,r,!0),l.$reset=function(){const d=a?a():{};this.$patch(m=>{Ke(m,d)})},l}function vs(e,t,n={},r,a,i){let o;const s=Ke({actions:{}},n),l={deep:!0};let f,c,d=Ht([]),m=Ht([]),v;const k=r.state.value[e];!i&&!k&&(r.state.value[e]={}),Ve({});let N;function O(B){let q;f=c=!1,typeof B=="function"?(B(r.state.value[e]),q={type:un.patchFunction,storeId:e,events:v}):(Kr(r.state.value[e],B),q={type:un.patchObject,payload:B,storeId:e,events:v});const re=N=Symbol();ka().then(()=>{N===re&&(f=!0)}),c=!0,Ot(d,q,r.state.value[e])}const g=gs;function x(){o.stop(),d=[],m=[],r._s.delete(e)}function I(B,q){return function(){ur(r);const re=Array.from(arguments),_e=[],ve=[];function xe(ue){_e.push(ue)}function nt(ue){ve.push(ue)}Ot(m,{args:re,name:B,store:D,after:xe,onError:nt});let Oe;try{Oe=q.apply(this&&this.$id===e?this:D,re)}catch(ue){throw Ot(ve,ue),ue}return Oe instanceof Promise?Oe.then(ue=>(Ot(_e,ue),ue)).catch(ue=>(Ot(ve,ue),Promise.reject(ue))):(Ot(_e,Oe),Oe)}}const $={_p:r,$id:e,$onAction:xi.bind(null,m),$patch:O,$reset:g,$subscribe(B,q={}){const re=xi(d,B,q.detached,()=>_e()),_e=o.run(()=>$t(()=>r.state.value[e],ve=>{(q.flush==="sync"?c:f)&&B({storeId:e,type:un.direct,events:v},ve)},Ke({},l,q)));return re},$dispose:x},D=Qt(Ke({},$));r._s.set(e,D);const G=r._e.run(()=>(o=bo(),o.run(()=>t())));for(const B in G){const q=G[B];if(fe(q)&&!$f(q)||ut(q))i||(k&&zf(q)&&(fe(q)?q.value=k[B]:Kr(q,k[B])),r.state.value[e][B]=q);else if(typeof q=="function"){const re=I(B,q);G[B]=re,s.actions[B]=q}}return Ke(D,G),Ke(Q(D),G),Object.defineProperty(D,"$state",{get:()=>r.state.value[e],set:B=>{O(q=>{Ke(q,B)})}}),r._p.forEach(B=>{Ke(D,o.run(()=>B({store:D,app:r._a,pinia:r,options:s})))}),k&&i&&n.hydrate&&n.hydrate(D.$state,k),f=!0,c=!0,D}function ih(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,l){const f=cs();return s=s||f&&Xe(ps),s&&ur(s),s=hs,s._s.has(r)||(i?vs(r,t,a,s):Df(r,a,s)),s._s.get(r)}return o.$id=r,o}const Uf="modulepreload",ki={},Hf="/",Ai=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Hf}${r}`,r in ki)return;ki[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":Uf,a||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),a)return new Promise((s,l)=>{o.addEventListener("load",s),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const bs=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Jt=e=>bs?Symbol(e):"_vr_"+e,Bf=Jt("rvlm"),Ei=Jt("rvd"),Ra=Jt("r"),ys=Jt("rl"),qr=Jt("rvl"),Tt=typeof window!="undefined";function Wf(e){return e.__esModule||bs&&e[Symbol.toStringTag]==="Module"}const ne=Object.assign;function kr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Array.isArray(a)?a.map(e):e(a)}return n}const dn=()=>{},Yf=/\/$/,Kf=e=>e.replace(Yf,"");function Ar(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=Gf(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function qf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ci(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Vf(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Kt(t.matched[r],n.matched[a])&&_s(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Kt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _s(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Xf(e[n],t[n]))return!1;return!0}function Xf(e,t){return Array.isArray(e)?Pi(e,t):Array.isArray(t)?Pi(t,e):e===t}function Pi(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Gf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(a===1||o==="."))if(o==="..")a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var An;(function(e){e.pop="pop",e.push="push"})(An||(An={}));var mn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(mn||(mn={}));function Qf(e){if(!e)if(Tt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Kf(e)}const Jf=/^[^#]+#/;function Zf(e,t){return e.replace(Jf,"#")+t}function eu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const dr=()=>({left:window.pageXOffset,top:window.pageYOffset});function tu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=eu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Oi(e,t){return(history.state?history.state.position-t:-1)+e}const Vr=new Map;function nu(e,t){Vr.set(e,t)}function ru(e){const t=Vr.get(e);return Vr.delete(e),t}let au=()=>location.protocol+"//"+location.host;function ws(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Ci(l,"")}return Ci(n,e)+r+a}function iu(e,t,n,r){let a=[],i=[],o=null;const s=({state:m})=>{const v=ws(e,location),k=n.value,N=t.value;let O=0;if(m){if(n.value=v,t.value=m,o&&o===k){o=null;return}O=N?m.position-N.position:0}else r(v);a.forEach(g=>{g(n.value,k,{delta:O,type:An.pop,direction:O?O>0?mn.forward:mn.back:mn.unknown})})};function l(){o=n.value}function f(m){a.push(m);const v=()=>{const k=a.indexOf(m);k>-1&&a.splice(k,1)};return i.push(v),v}function c(){const{history:m}=window;!m.state||m.replaceState(ne({},m.state,{scroll:dr()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:f,destroy:d}}function Si(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?dr():null}}function ou(e){const{history:t,location:n}=window,r={value:ws(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:au()+e+l;try{t[c?"replaceState":"pushState"](f,"",m),a.value=f}catch(v){console.error(v),n[c?"replace":"assign"](m)}}function o(l,f){const c=ne({},t.state,Si(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=ne({},a.value,t.state,{forward:l,scroll:dr()});i(c.current,c,!0);const d=ne({},Si(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function su(e){e=Qf(e);const t=ou(e),n=iu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=ne({location:"",base:e,go:r,createHref:Zf.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function lu(e){return typeof e=="string"||e&&typeof e=="object"}function xs(e){return typeof e=="string"||typeof e=="symbol"}const at={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ks=Jt("nf");var Ri;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ri||(Ri={}));function qt(e,t){return ne(new Error,{type:e,[ks]:!0},t)}function it(e,t){return e instanceof Error&&ks in e&&(t==null||!!(e.type&t))}const Ii="[^/]+?",cu={sensitive:!1,strict:!1,start:!0,end:!0},fu=/[.+*?^${}()[\]/\\]/g;function uu(e,t){const n=ne({},cu,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const m=f[d];let v=40+(n.sensitive?.25:0);if(m.type===0)d||(a+="/"),a+=m.value.replace(fu,"\\$&"),v+=40;else if(m.type===1){const{value:k,repeatable:N,optional:O,regexp:g}=m;i.push({name:k,repeatable:N,optional:O});const x=g||Ii;if(x!==Ii){v+=10;try{new RegExp(`(${x})`)}catch($){throw new Error(`Invalid custom RegExp for param "${k}" (${x}): `+$.message)}}let I=N?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(I=O&&f.length<2?`(?:/${I})`:"/"+I),O&&(I+="?"),a+=I,v+=20,O&&(v+=-8),N&&(v+=-20),x===".*"&&(v+=-50)}c.push(v)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let m=1;m<c.length;m++){const v=c[m]||"",k=i[m-1];d[k.name]=v&&k.repeatable?v.split("/"):v}return d}function l(f){let c="",d=!1;for(const m of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const v of m)if(v.type===0)c+=v.value;else if(v.type===1){const{value:k,repeatable:N,optional:O}=v,g=k in f?f[k]:"";if(Array.isArray(g)&&!N)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(g)?g.join("/"):g;if(!x)if(O)m.length<2&&e.length>1&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${k}"`);c+=x}}return c}return{re:o,score:r,keys:i,parse:s,stringify:l}}function du(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function mu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=du(r[n],a[n]);if(i)return i;n++}return a.length-r.length}const hu={type:0,value:""},pu=/[a-zA-Z0-9_]/;function gu(e){if(!e)return[[]];if(e==="/")return[[hu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${f}": ${v}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){!f||(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function m(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:pu.test(l)?m():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function vu(e,t,n){const r=uu(gu(e.path),n),a=ne(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function bu(e,t){const n=[],r=new Map;t=Ni({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,m){const v=!m,k=_u(c);k.aliasOf=m&&m.record;const N=Ni(t,c),O=[k];if("alias"in c){const I=typeof c.alias=="string"?[c.alias]:c.alias;for(const $ of I)O.push(ne({},k,{components:m?m.record.components:k.components,path:$,aliasOf:m?m.record:k}))}let g,x;for(const I of O){const{path:$}=I;if(d&&$[0]!=="/"){const D=d.record.path,G=D[D.length-1]==="/"?"":"/";I.path=d.record.path+($&&G+$)}if(g=vu(I,d,N),m?m.alias.push(g):(x=x||g,x!==g&&x.alias.push(g),v&&c.name&&!Ti(g)&&o(c.name)),"children"in k){const D=k.children;for(let G=0;G<D.length;G++)i(D[G],g,m&&m.children[G])}m=m||g,l(g)}return x?()=>{o(x)}:dn}function o(c){if(xs(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&mu(c,n[d])>=0&&(c.record.path!==n[d].record.path||!As(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!Ti(c)&&r.set(c.record.name,c)}function f(c,d){let m,v={},k,N;if("name"in c&&c.name){if(m=r.get(c.name),!m)throw qt(1,{location:c});N=m.record.name,v=ne(yu(d.params,m.keys.filter(x=>!x.optional).map(x=>x.name)),c.params),k=m.stringify(v)}else if("path"in c)k=c.path,m=n.find(x=>x.re.test(k)),m&&(v=m.parse(k),N=m.record.name);else{if(m=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!m)throw qt(1,{location:c,currentLocation:d});N=m.record.name,v=ne({},d.params,c.params),k=m.stringify(v)}const O=[];let g=m;for(;g;)O.unshift(g.record),g=g.parent;return{name:N,path:k,params:v,matched:O,meta:xu(O)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function yu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function _u(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:wu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function wu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ti(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function xu(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function Ni(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function As(e,t){return t.children.some(n=>n===e||As(e,n))}const Es=/#/g,ku=/&/g,Au=/\//g,Eu=/=/g,Cu=/\?/g,Cs=/\+/g,Pu=/%5B/g,Ou=/%5D/g,Ps=/%5E/g,Su=/%60/g,Os=/%7B/g,Ru=/%7C/g,Ss=/%7D/g,Iu=/%20/g;function Ia(e){return encodeURI(""+e).replace(Ru,"|").replace(Pu,"[").replace(Ou,"]")}function Tu(e){return Ia(e).replace(Os,"{").replace(Ss,"}").replace(Ps,"^")}function Xr(e){return Ia(e).replace(Cs,"%2B").replace(Iu,"+").replace(Es,"%23").replace(ku,"%26").replace(Su,"`").replace(Os,"{").replace(Ss,"}").replace(Ps,"^")}function Nu(e){return Xr(e).replace(Eu,"%3D")}function Mu(e){return Ia(e).replace(Es,"%23").replace(Cu,"%3F")}function Lu(e){return e==null?"":Mu(e).replace(Au,"%2F")}function qn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Fu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Cs," "),o=i.indexOf("="),s=qn(o<0?i:i.slice(0,o)),l=o<0?null:qn(i.slice(o+1));if(s in t){let f=t[s];Array.isArray(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Mi(e){let t="";for(let n in e){const r=e[n];if(n=Nu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Xr(i)):[r&&Xr(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function ju(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function nn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ct(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(qt(4,{from:n,to:t})):d instanceof Error?s(d):lu(d)?s(qt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Er(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(zu(s)){const f=(s.__vccOpts||s)[t];f&&a.push(ct(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Wf(f)?f.default:f;i.components[o]=c;const m=(c.__vccOpts||c)[t];return m&&ct(m,n,r,i,o)()}))}}return a}function zu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Li(e){const t=Xe(Ra),n=Xe(ys),r=ce(()=>t.resolve(zt(e.to))),a=ce(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const m=d.findIndex(Kt.bind(null,c));if(m>-1)return m;const v=Fi(l[f-2]);return f>1&&Fi(c)===v&&d[d.length-1].path!==v?d.findIndex(Kt.bind(null,l[f-2])):m}),i=ce(()=>a.value>-1&&Hu(n.params,r.value.params)),o=ce(()=>a.value>-1&&a.value===n.matched.length-1&&_s(n.params,r.value.params));function s(l={}){return Uu(l)?t[zt(e.replace)?"replace":"push"](zt(e.to)).catch(dn):Promise.resolve()}return{route:r,href:ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const $u=Cn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Li,setup(e,{slots:t}){const n=Qt(Li(e)),{options:r}=Xe(Ra),a=ce(()=>({[ji(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ji(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:fr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Du=$u;function Uu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Hu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Array.isArray(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Fi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ji=(e,t,n)=>e!=null?e:t!=null?t:n,Bu=Cn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Xe(qr),a=ce(()=>e.route||r.value),i=Xe(Ei,0),o=ce(()=>a.value.matched[i]);Ln(Ei,i+1),Ln(Bf,o),Ln(qr,a);const s=Ve();return $t(()=>[s.value,o.value,e.name],([l,f,c],[d,m,v])=>{f&&(f.instances[c]=l,m&&m!==f&&l&&l===d&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),l&&f&&(!m||!Kt(f,m)||!d)&&(f.enterCallbacks[c]||[]).forEach(k=>k(l))},{flush:"post"}),()=>{const l=a.value,f=o.value,c=f&&f.components[e.name],d=e.name;if(!c)return zi(n.default,{Component:c,route:l});const m=f.props[e.name],v=m?m===!0?l.params:typeof m=="function"?m(l):m:null,N=fr(c,ne({},v,t,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[d]=null)},ref:s}));return zi(n.default,{Component:N,route:l})||N}}});function zi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Wu=Bu;function Yu(e){const t=bu(e.routes,e),n=e.parseQuery||Fu,r=e.stringifyQuery||Mi,a=e.history,i=nn(),o=nn(),s=nn(),l=Gl(at);let f=at;Tt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=kr.bind(null,b=>""+b),d=kr.bind(null,Lu),m=kr.bind(null,qn);function v(b,M){let P,L;return xs(b)?(P=t.getRecordMatcher(b),L=M):L=b,t.addRoute(L,P)}function k(b){const M=t.getRecordMatcher(b);M&&t.removeRoute(M)}function N(){return t.getRoutes().map(b=>b.record)}function O(b){return!!t.getRecordMatcher(b)}function g(b,M){if(M=ne({},M||l.value),typeof b=="string"){const W=Ar(n,b,M.path),u=t.resolve({path:W.path},M),h=a.createHref(W.fullPath);return ne(W,u,{params:m(u.params),hash:qn(W.hash),redirectedFrom:void 0,href:h})}let P;if("path"in b)P=ne({},b,{path:Ar(n,b.path,M.path).path});else{const W=ne({},b.params);for(const u in W)W[u]==null&&delete W[u];P=ne({},b,{params:d(b.params)}),M.params=d(M.params)}const L=t.resolve(P,M),Z=b.hash||"";L.params=c(m(L.params));const ie=qf(r,ne({},b,{hash:Tu(Z),path:L.path})),K=a.createHref(ie);return ne({fullPath:ie,hash:Z,query:r===Mi?ju(b.query):b.query||{}},L,{redirectedFrom:void 0,href:K})}function x(b){return typeof b=="string"?Ar(n,b,l.value.path):ne({},b)}function I(b,M){if(f!==b)return qt(8,{from:M,to:b})}function $(b){return B(b)}function D(b){return $(ne(x(b),{replace:!0}))}function G(b){const M=b.matched[b.matched.length-1];if(M&&M.redirect){const{redirect:P}=M;let L=typeof P=="function"?P(b):P;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=x(L):{path:L},L.params={}),ne({query:b.query,hash:b.hash,params:b.params},L)}}function B(b,M){const P=f=g(b),L=l.value,Z=b.state,ie=b.force,K=b.replace===!0,W=G(P);if(W)return B(ne(x(W),{state:Z,force:ie,replace:K}),M||P);const u=P;u.redirectedFrom=M;let h;return!ie&&Vf(r,L,P)&&(h=qt(16,{to:u,from:L}),Ct(L,L,!0,!1)),(h?Promise.resolve(h):re(u,L)).catch(p=>it(p)?it(p,2)?p:ke(p):ae(p,u,L)).then(p=>{if(p){if(it(p,2))return B(ne(x(p.to),{state:Z,force:ie,replace:K}),M||u)}else p=ve(u,L,!0,K,Z);return _e(u,L,p),p})}function q(b,M){const P=I(b,M);return P?Promise.reject(P):Promise.resolve()}function re(b,M){let P;const[L,Z,ie]=Ku(b,M);P=Er(L.reverse(),"beforeRouteLeave",b,M);for(const W of L)W.leaveGuards.forEach(u=>{P.push(ct(u,b,M))});const K=q.bind(null,b,M);return P.push(K),St(P).then(()=>{P=[];for(const W of i.list())P.push(ct(W,b,M));return P.push(K),St(P)}).then(()=>{P=Er(Z,"beforeRouteUpdate",b,M);for(const W of Z)W.updateGuards.forEach(u=>{P.push(ct(u,b,M))});return P.push(K),St(P)}).then(()=>{P=[];for(const W of b.matched)if(W.beforeEnter&&!M.matched.includes(W))if(Array.isArray(W.beforeEnter))for(const u of W.beforeEnter)P.push(ct(u,b,M));else P.push(ct(W.beforeEnter,b,M));return P.push(K),St(P)}).then(()=>(b.matched.forEach(W=>W.enterCallbacks={}),P=Er(ie,"beforeRouteEnter",b,M),P.push(K),St(P))).then(()=>{P=[];for(const W of o.list())P.push(ct(W,b,M));return P.push(K),St(P)}).catch(W=>it(W,8)?W:Promise.reject(W))}function _e(b,M,P){for(const L of s.list())L(b,M,P)}function ve(b,M,P,L,Z){const ie=I(b,M);if(ie)return ie;const K=M===at,W=Tt?history.state:{};P&&(L||K?a.replace(b.fullPath,ne({scroll:K&&W&&W.scroll},Z)):a.push(b.fullPath,Z)),l.value=b,Ct(b,M,P,K),ke()}let xe;function nt(){xe||(xe=a.listen((b,M,P)=>{const L=g(b),Z=G(L);if(Z){B(ne(Z,{replace:!0}),L).catch(dn);return}f=L;const ie=l.value;Tt&&nu(Oi(ie.fullPath,P.delta),dr()),re(L,ie).catch(K=>it(K,12)?K:it(K,2)?(B(K.to,L).then(W=>{it(W,20)&&!P.delta&&P.type===An.pop&&a.go(-1,!1)}).catch(dn),Promise.reject()):(P.delta&&a.go(-P.delta,!1),ae(K,L,ie))).then(K=>{K=K||ve(L,ie,!1),K&&(P.delta?a.go(-P.delta,!1):P.type===An.pop&&it(K,20)&&a.go(-1,!1)),_e(L,ie,K)}).catch(dn)}))}let Oe=nn(),ue=nn(),de;function ae(b,M,P){ke(b);const L=ue.list();return L.length?L.forEach(Z=>Z(b,M,P)):console.error(b),Promise.reject(b)}function J(){return de&&l.value!==at?Promise.resolve():new Promise((b,M)=>{Oe.add([b,M])})}function ke(b){return de||(de=!b,nt(),Oe.list().forEach(([M,P])=>b?P(b):M()),Oe.reset()),b}function Ct(b,M,P,L){const{scrollBehavior:Z}=e;if(!Tt||!Z)return Promise.resolve();const ie=!P&&ru(Oi(b.fullPath,0))||(L||!P)&&history.state&&history.state.scroll||null;return ka().then(()=>Z(b,M,ie)).then(K=>K&&tu(K)).catch(K=>ae(K,b,M))}const Ye=b=>a.go(b);let je;const Se=new Set;return{currentRoute:l,addRoute:v,removeRoute:k,hasRoute:O,getRoutes:N,resolve:g,options:e,push:$,replace:D,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:ue.add,isReady:J,install(b){const M=this;b.component("RouterLink",Du),b.component("RouterView",Wu),b.config.globalProperties.$router=M,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>zt(l)}),Tt&&!je&&l.value===at&&(je=!0,$(a.location).catch(Z=>{}));const P={};for(const Z in at)P[Z]=ce(()=>l.value[Z]);b.provide(Ra,M),b.provide(ys,Qt(P)),b.provide(qr,l);const L=b.unmount;Se.add(b),b.unmount=function(){Se.delete(b),Se.size<1&&(f=at,xe&&xe(),xe=null,l.value=at,je=!1,de=!1),L()}}}}function St(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Ku(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Kt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Kt(f,l))||a.push(l))}return[n,r,a]}const Rs={baseUrl:"https://pokeapi.co/api/v2/pokemon/",imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"};const qu={},Vu={class:"header"},Xu=Dt("h1",{class:"heading"},"Pokemon Demo",-1);function Gu(e,t){const n=lr("router-link");return mt(),Bt("div",Vu,[me(n,{to:"/"},{default:Aa(()=>[Xu]),_:1})])}var Qu=ms(qu,[["render",Gu]]);const Ju={class:"pokemon-content"},Zu=["src"],ed={class:"pokemon-name"},td={name:"ContainerItem",props:{pokemonId:String,pokemonName:String},setup(e){const t=e,n=ce(()=>`${Rs.imageUrl}${t.pokemonId}.png`);return(r,a)=>{const i=lr("router-link");return mt(),ss(i,{to:{name:"pokemon.detail",params:{id:e.pokemonId,name:e.pokemonName}}},{default:Aa(()=>[Dt("section",Ju,[Dt("img",{class:"pokemon-sprite",src:zt(n),height:"96",width:"96",alt:""},null,8,Zu),Dt("div",ed,hl(e.pokemonName),1)])]),_:1},8,["to"])}}};const nd={name:"ScrollTrigger",emits:["triggerIntersected"],setup(e,{emit:t}){const n=Ve(null),r=Ve(null),a={type:Object,default:{threshold:"1"}};function i(o){o.intersectionRatio>0&&t("triggerIntersected")}return Xo(()=>{n.value=new IntersectionObserver(o=>{i(o[0])},a),n.value.observe(r.value)}),Ko(()=>{n.value.disconnect()}),(o,s)=>{const l=lr("font-awesome-icon");return mt(),Bt("div",{class:"infinite-trigger",ref_key:"trigger",ref:r},[me(l,{icon:"spinner",size:"2x","fixed-width":"",pulse:""})],512)}}};const rd={class:"search-container"},ad={name:"SearchContainer",props:{apiUrl:String},setup(e){const t=e,n=Ve([]),r=Ve(""),a=Ve("");function i(l,f,c){return{id:l,name:f,url:c}}async function o(){const f=await(await fetch(a.value)).json();r.value=f.next,f.results.forEach(c=>{const d=c.url.split("/")[6];n.value.push(i(d,c.name,c.url))})}async function s(){r.value&&(a.value=r.value,o())}return Vo(()=>{a.value=t.apiUrl,o()}),(l,f)=>(mt(),Bt("section",rd,[(mt(!0),Bt(Ue,null,Oc(n.value,c=>(mt(),ss(td,{key:c.id,"pokemon-id":c.id,"pokemon-name":c.name},null,8,["pokemon-id","pokemon-name"]))),128)),me(nd,{onTriggerIntersected:s})]))}};const id={id:"home-container"},od={name:"PokemonHome",setup(e){const t=Ve(`${Rs.baseUrl}?limit=40`);return(n,r)=>(mt(),Bt("div",id,[me(Qu),me(ad,{"api-url":t.value},null,8,["api-url"])]))}},sd=[{path:"/",name:"Home",component:od},{path:"/pokemon/:id/:name",name:"pokemon.detail",component:()=>Ai(()=>import("./PokemonDetail.dcc47803.js"),["assets/PokemonDetail.dcc47803.js","assets/PokemonDetail.760a8a27.css"]),props:!0},{path:"/:pathMatch(.*)*",name:"Not Found",component:()=>Ai(()=>import("./NotFound.748c5ed6.js"),[])}],ld=Yu({history:su(),routes:sd,scrollBehavior(e,t,n){return n||{top:0}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function $i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$i(Object(n),!0).forEach(function(r){ud(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$i(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vn(e){return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vn(e)}function cd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Di(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fd(e,t,n){return t&&Di(e.prototype,t),n&&Di(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ud(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ta(e,t){return md(e)||pd(e,t)||Is(e,t)||vd()}function mr(e){return dd(e)||hd(e)||Is(e)||gd()}function dd(e){if(Array.isArray(e))return Gr(e)}function md(e){if(Array.isArray(e))return e}function hd(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pd(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Is(e,t){if(!!e){if(typeof e=="string")return Gr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gr(e,t)}}function Gr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ui=function(){},Na={},Ts={},Ns=null,Ms={mark:Ui,measure:Ui};try{typeof window!="undefined"&&(Na=window),typeof document!="undefined"&&(Ts=document),typeof MutationObserver!="undefined"&&(Ns=MutationObserver),typeof performance!="undefined"&&(Ms=performance)}catch{}var bd=Na.navigator||{},Hi=bd.userAgent,Bi=Hi===void 0?"":Hi,pt=Na,le=Ts,Wi=Ns,Nn=Ms;pt.document;var tt=!!le.documentElement&&!!le.head&&typeof le.addEventListener=="function"&&typeof le.createElement=="function",Ls=~Bi.indexOf("MSIE")||~Bi.indexOf("Trident/"),Qe="___FONT_AWESOME___",Qr=16,Fs="fa",js="svg-inline--fa",At="data-fa-i2svg",Jr="data-fa-pseudo-element",yd="data-fa-pseudo-element-pending",Ma="data-prefix",La="data-icon",Yi="fontawesome-i2svg",_d="async",wd=["HTML","HEAD","STYLE","SCRIPT"],zs=function(){try{return!0}catch{return!1}}(),Fa={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Xn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},$s={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},xd={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},kd=/fa[srltdbk\-\ ]/,Ds="fa-layers-text",Ad=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Ed={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Us=[1,2,3,4,5,6,7,8,9,10],Cd=Us.concat([11,12,13,14,15,16,17,18,19,20]),Pd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Od=[].concat(mr(Object.keys(Xn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wt.GROUP,wt.SWAP_OPACITY,wt.PRIMARY,wt.SECONDARY]).concat(Us.map(function(e){return"".concat(e,"x")})).concat(Cd.map(function(e){return"w-".concat(e)})),Hs=pt.FontAwesomeConfig||{};function Sd(e){var t=le.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Rd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(le&&typeof le.querySelector=="function"){var Id=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Id.forEach(function(e){var t=Ta(e,2),n=t[0],r=t[1],a=Rd(Sd(n));a!=null&&(Hs[r]=a)})}var Td={familyPrefix:Fs,styleDefault:"solid",replacementClass:js,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},hn=R(R({},Td),Hs);hn.autoReplaceSvg||(hn.observeMutations=!1);var z={};Object.keys(hn).forEach(function(e){Object.defineProperty(z,e,{enumerable:!0,set:function(n){hn[e]=n,$n.forEach(function(r){return r(z)})},get:function(){return hn[e]}})});pt.FontAwesomeConfig=z;var $n=[];function Nd(e){return $n.push(e),function(){$n.splice($n.indexOf(e),1)}}var ot=Qr,Be={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Md(e){if(!(!e||!tt)){var t=le.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=le.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return le.head.insertBefore(t,r),e}}var Ld="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function En(){for(var e=12,t="";e-- >0;)t+=Ld[Math.random()*62|0];return t}function Zt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ja(e){return e.classList?Zt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Bs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Bs(e[n]),'" ')},"").trim()}function hr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function za(e){return e.size!==Be.size||e.x!==Be.x||e.y!==Be.y||e.rotate!==Be.rotate||e.flipX||e.flipY}function jd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function zd(e){var t=e.transform,n=e.width,r=n===void 0?Qr:n,a=e.height,i=a===void 0?Qr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ls?l+="translate(".concat(t.x/ot-r/2,"em, ").concat(t.y/ot-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ot,"em), calc(-50% + ").concat(t.y/ot,"em)) "):l+="translate(".concat(t.x/ot,"em, ").concat(t.y/ot,"em) "),l+="scale(".concat(t.size/ot*(t.flipX?-1:1),", ").concat(t.size/ot*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var $d=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ws(){var e=Fs,t=js,n=z.familyPrefix,r=z.replacementClass,a=$d;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ki=!1;function Cr(){z.autoAddCss&&!Ki&&(Md(Ws()),Ki=!0)}var Dd={mixout:function(){return{dom:{css:Ws,insertCss:Cr}}},hooks:function(){return{beforeDOMElementCreation:function(){Cr()},beforeI2svg:function(){Cr()}}}},Je=pt||{};Je[Qe]||(Je[Qe]={});Je[Qe].styles||(Je[Qe].styles={});Je[Qe].hooks||(Je[Qe].hooks={});Je[Qe].shims||(Je[Qe].shims=[]);var Me=Je[Qe],Ys=[],Ud=function e(){le.removeEventListener("DOMContentLoaded",e),Gn=1,Ys.map(function(t){return t()})},Gn=!1;tt&&(Gn=(le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(le.readyState),Gn||le.addEventListener("DOMContentLoaded",Ud));function Hd(e){!tt||(Gn?setTimeout(e,0):Ys.push(e))}function Pn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Bs(e):"<".concat(t," ").concat(Fd(r),">").concat(i.map(Pn).join(""),"</").concat(t,">")}function qi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Bd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Pr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Bd(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Wd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Zr(e){var t=Wd(e);return t.length===1?t[0].toString(16):null}function Yd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Vi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ea(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Vi(t);typeof Me.hooks.addPack=="function"&&!a?Me.hooks.addPack(e,Vi(t)):Me.styles[e]=R(R({},Me.styles[e]||{}),i),e==="fas"&&ea("fa",t)}var pn=Me.styles,Kd=Me.shims,qd=Object.values($s),$a=null,Ks={},qs={},Vs={},Xs={},Gs={},Vd=Object.keys(Fa);function Xd(e){return~Od.indexOf(e)}function Gd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Xd(a)?a:null}var Qs=function(){var t=function(i){return Pr(pn,function(o,s,l){return o[l]=Pr(s,i,{}),o},{})};Ks=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),qs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Gs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in pn||z.autoFetchSvg,r=Pr(Kd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Vs=r.names,Xs=r.unicodes,$a=pr(z.styleDefault)};Nd(function(e){$a=pr(e.styleDefault)});Qs();function Da(e,t){return(Ks[e]||{})[t]}function Qd(e,t){return(qs[e]||{})[t]}function Mt(e,t){return(Gs[e]||{})[t]}function Js(e){return Vs[e]||{prefix:null,iconName:null}}function Jd(e){var t=Xs[e],n=Da("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gt(){return $a}var Ua=function(){return{prefix:null,iconName:null,rest:[]}};function pr(e){var t=Fa[e],n=Xn[e]||Xn[t],r=e in Me.styles?e:null;return n||r||null}function gr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Gd(z.familyPrefix,s);if(pn[s]?(s=qd.includes(s)?xd[s]:s,a=s,o.prefix=s):Vd.indexOf(s)>-1?(a=s,o.prefix=pr(s)):l?o.iconName=l:s!==z.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var f=a==="fa"?Js(o.iconName):{},c=Mt(o.prefix,o.iconName);f.prefix&&(a=null),o.iconName=f.iconName||c||o.iconName,o.prefix=f.prefix||o.prefix,o.prefix==="far"&&!pn.far&&pn.fas&&!z.autoFetchSvg&&(o.prefix="fas")}return o},Ua());return(i.prefix==="fa"||a==="fa")&&(i.prefix=gt()||"fas"),i}var Zd=function(){function e(){cd(this,e),this.definitions={}}return fd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),ea(s,o[s]);var l=$s[s];l&&ea(l,o[s]),Qs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),Xi=[],Lt={},Ut={},em=Object.keys(Ut);function tm(e,t){var n=t.mixoutsTo;return Xi=e,Lt={},Object.keys(Ut).forEach(function(r){em.indexOf(r)===-1&&delete Ut[r]}),Xi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Vn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Lt[o]||(Lt[o]=[]),Lt[o].push(i[o])})}r.provides&&r.provides(Ut)}),n}function ta(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Lt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Et(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Lt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ut[e]?Ut[e].apply(null,t):void 0}function na(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||gt();if(!!t)return t=Mt(n,t)||t,qi(Zs.definitions,n,t)||qi(Me.styles,n,t)}var Zs=new Zd,nm=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Et("noAuto")},rm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tt?(Et("beforeI2svg",t),Ze("pseudoElements2svg",t),Ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,Hd(function(){im({autoReplaceSvgRoot:n}),Et("watch",t)})}},am={icon:function(t){if(t===null)return null;if(Vn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Mt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=pr(t[0]);return{prefix:r,iconName:Mt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(z.familyPrefix,"-"))>-1||t.match(kd))){var a=gr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||gt(),iconName:Mt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=gt();return{prefix:i,iconName:Mt(i,t)||t}}}},Pe={noAuto:nm,config:z,dom:rm,parse:am,library:Zs,findIconDefinition:na,toHtml:Pn},im=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?le:n;(Object.keys(Me.styles).length>0||z.autoFetchSvg)&&tt&&z.autoReplaceSvg&&Pe.dom.i2svg({node:r})};function vr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Pn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!tt){var r=le.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function om(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(za(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=hr(R(R({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function sm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(z.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:o}),children:r}]}]}function Ha(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,m=e.watchable,v=m===void 0?!1:m,k=r.found?r:n,N=k.width,O=k.height,g=a==="fak",x=[z.replacementClass,i?"".concat(z.familyPrefix,"-").concat(i):""].filter(function(re){return d.classes.indexOf(re)===-1}).filter(function(re){return re!==""||!!re}).concat(d.classes).join(" "),I={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(O)})},$=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(N/O*16*.0625,"em")}:{};v&&(I.attributes[At]=""),l&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(c||En())},children:[l]}),delete I.attributes.title);var D=R(R({},I),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:R(R({},$),d.styles)}),G=r.found&&n.found?Ze("generateAbstractMask",D)||{children:[],attributes:{}}:Ze("generateAbstractIcon",D)||{children:[],attributes:{}},B=G.children,q=G.attributes;return D.children=B,D.attributes=q,s?sm(D):om(D)}function Gi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=R(R(R({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[At]="");var c=R({},o.styles);za(a)&&(c.transform=zd({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=hr(c);d.length>0&&(f.style=d);var m=[];return m.push({tag:"span",attributes:f,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function lm(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=hr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Or=Me.styles;function ra(e){var t=e[0],n=e[1],r=e.slice(4),a=Ta(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(z.familyPrefix,"-").concat(wt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.familyPrefix,"-").concat(wt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.familyPrefix,"-").concat(wt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var cm={found:!1,width:512,height:512};function fm(e,t){!zs&&!z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function aa(e,t){var n=t;return t==="fa"&&z.styleDefault!==null&&(t=gt()),new Promise(function(r,a){if(Ze("missingIconAbstract"),n==="fa"){var i=Js(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Or[t]&&Or[t][e]){var o=Or[t][e];return r(ra(o))}fm(e,t),r(R(R({},cm),{},{icon:z.showMissingIcons&&e?Ze("missingIconAbstract")||{}:{}}))})}var Qi=function(){},ia=z.measurePerformance&&Nn&&Nn.mark&&Nn.measure?Nn:{mark:Qi,measure:Qi},on='FA "6.1.1"',um=function(t){return ia.mark("".concat(on," ").concat(t," begins")),function(){return el(t)}},el=function(t){ia.mark("".concat(on," ").concat(t," ends")),ia.measure("".concat(on," ").concat(t),"".concat(on," ").concat(t," begins"),"".concat(on," ").concat(t," ends"))},Ba={begin:um,end:el},Dn=function(){};function Ji(e){var t=e.getAttribute?e.getAttribute(At):null;return typeof t=="string"}function dm(e){var t=e.getAttribute?e.getAttribute(Ma):null,n=e.getAttribute?e.getAttribute(La):null;return t&&n}function mm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function hm(){if(z.autoReplaceSvg===!0)return Un.replace;var e=Un[z.autoReplaceSvg];return e||Un.replace}function pm(e){return le.createElementNS("http://www.w3.org/2000/svg",e)}function gm(e){return le.createElement(e)}function tl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?pm:gm:n;if(typeof e=="string")return le.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(tl(o,{ceFn:r}))}),a}function vm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Un={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(tl(a),n)}),n.getAttribute(At)===null&&z.keepOriginalSource){var r=le.createComment(vm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ja(n).indexOf(z.replacementClass))return Un.replace(t);var a=new RegExp("".concat(z.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===z.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Pn(s)}).join(`
`);n.setAttribute(At,""),n.innerHTML=o}};function Zi(e){e()}function nl(e,t){var n=typeof t=="function"?t:Dn;if(e.length===0)n();else{var r=Zi;z.mutateApproach===_d&&(r=pt.requestAnimationFrame||Zi),r(function(){var a=hm(),i=Ba.begin("mutate");e.map(a),i(),n()})}}var Wa=!1;function rl(){Wa=!0}function oa(){Wa=!1}var Qn=null;function eo(e){if(!!Wi&&!!z.observeMutations){var t=e.treeCallback,n=t===void 0?Dn:t,r=e.nodeCallback,a=r===void 0?Dn:r,i=e.pseudoElementsCallback,o=i===void 0?Dn:i,s=e.observeMutationsRoot,l=s===void 0?le:s;Qn=new Wi(function(f){if(!Wa){var c=gt();Zt(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ji(d.addedNodes[0])&&(z.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&z.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Ji(d.target)&&~Pd.indexOf(d.attributeName))if(d.attributeName==="class"&&dm(d.target)){var m=gr(ja(d.target)),v=m.prefix,k=m.iconName;d.target.setAttribute(Ma,v||c),k&&d.target.setAttribute(La,k)}else mm(d.target)&&a(d.target)})}}),tt&&Qn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function bm(){!Qn||Qn.disconnect()}function ym(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function _m(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=gr(ja(e));return a.prefix||(a.prefix=gt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Qd(a.prefix,e.innerText)||Da(a.prefix,Zr(e.innerText))),a}function wm(e){var t=Zt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return z.autoA11y&&(n?t["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||En()):(t["aria-hidden"]="true",t.focusable="false")),t}function xm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Be,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function to(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=_m(e),r=n.iconName,a=n.prefix,i=n.rest,o=wm(e),s=ta("parseNodeAttributes",{},e),l=t.styleParser?ym(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Be,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var km=Me.styles;function al(e){var t=z.autoReplaceSvg==="nest"?to(e,{styleParser:!1}):to(e);return~t.extra.classes.indexOf(Ds)?Ze("generateLayersText",e,t):Ze("generateSvgReplacementMutation",e,t)}function no(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tt)return Promise.resolve();var n=le.documentElement.classList,r=function(d){return n.add("".concat(Yi,"-").concat(d))},a=function(d){return n.remove("".concat(Yi,"-").concat(d))},i=z.autoFetchSvg?Object.keys(Fa):Object.keys(km),o=[".".concat(Ds,":not([").concat(At,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(At,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Zt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ba.begin("onTree"),f=s.reduce(function(c,d){try{var m=al(d);m&&c.push(m)}catch(v){zs||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(m){nl(m,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(m){l(),d(m)})})}function Am(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;al(e).then(function(n){n&&nl([n],t)})}function Em(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:na(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:na(a||{})),e(r,R(R({},n),{},{mask:a}))}}var Cm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Be:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,m=d===void 0?null:d,v=n.titleId,k=v===void 0?null:v,N=n.classes,O=N===void 0?[]:N,g=n.attributes,x=g===void 0?{}:g,I=n.styles,$=I===void 0?{}:I;if(!!t){var D=t.prefix,G=t.iconName,B=t.icon;return vr(R({type:"icon"},t),function(){return Et("beforeDOMElementCreation",{iconDefinition:t,params:n}),z.autoA11y&&(m?x["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(k||En()):(x["aria-hidden"]="true",x.focusable="false")),Ha({icons:{main:ra(B),mask:l?ra(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:G,transform:R(R({},Be),a),symbol:o,title:m,maskId:c,titleId:k,extra:{attributes:x,styles:$,classes:O}})})}},Pm={mixout:function(){return{icon:Em(Cm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=no,n.nodeCallback=Am,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?le:r,i=n.callback,o=i===void 0?function(){}:i;return no(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,m=r.extra;return new Promise(function(v,k){Promise.all([aa(a,s),c.iconName?aa(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var O=Ta(N,2),g=O[0],x=O[1];v([n,Ha({icons:{main:g,mask:x},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:m,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=hr(s);l.length>0&&(a.style=l);var f;return za(o)&&(f=Ze("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Om={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return vr({type:"layer"},function(){Et("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(z.familyPrefix,"-layers")].concat(mr(i)).join(" ")},children:o}]})}}}},Sm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return vr({type:"counter",content:n},function(){return Et("beforeDOMElementCreation",{content:n,params:r}),lm({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(z.familyPrefix,"-layers-counter")].concat(mr(s))}})})}}}},Rm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Be:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,m=r.styles,v=m===void 0?{}:m;return vr({type:"text",content:n},function(){return Et("beforeDOMElementCreation",{content:n,params:r}),Gi({content:n,transform:R(R({},Be),i),title:s,extra:{attributes:d,styles:v,classes:["".concat(z.familyPrefix,"-layers-text")].concat(mr(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ls){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return z.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Gi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Im=new RegExp('"',"ug"),ro=[1105920,1112319];function Tm(e){var t=e.replace(Im,""),n=Yd(t,0),r=n>=ro[0]&&n<=ro[1],a=t.length===2?t[0]===t[1]:!1;return{value:Zr(a?t[0]:t),isSecondary:r||a}}function ao(e,t){var n="".concat(yd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Zt(e.children),o=i.filter(function(G){return G.getAttribute(Jr)===t})[0],s=pt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ad),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Xn[l[2].toLowerCase()]:Ed[f],v=Tm(d),k=v.value,N=v.isSecondary,O=l[0].startsWith("FontAwesome"),g=Da(m,k),x=g;if(O){var I=Jd(k);I.iconName&&I.prefix&&(g=I.iconName,m=I.prefix)}if(g&&!N&&(!o||o.getAttribute(Ma)!==m||o.getAttribute(La)!==x)){e.setAttribute(n,x),o&&e.removeChild(o);var $=xm(),D=$.extra;D.attributes[Jr]=t,aa(g,m).then(function(G){var B=Ha(R(R({},$),{},{icons:{main:G,mask:Ua()},prefix:m,iconName:x,extra:D,watchable:!0})),q=le.createElement("svg");t==="::before"?e.insertBefore(q,e.firstChild):e.appendChild(q),q.outerHTML=B.map(function(re){return Pn(re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Nm(e){return Promise.all([ao(e,"::before"),ao(e,"::after")])}function Mm(e){return e.parentNode!==document.head&&!~wd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Jr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function io(e){if(!!tt)return new Promise(function(t,n){var r=Zt(e.querySelectorAll("*")).filter(Mm).map(Nm),a=Ba.begin("searchPseudoElements");rl(),Promise.all(r).then(function(){a(),oa(),t()}).catch(function(){a(),oa(),n()})})}var Lm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=io,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?le:r;z.searchPseudoElements&&io(a)}}},oo=!1,Fm={mixout:function(){return{dom:{unwatch:function(){rl(),oo=!0}}}},hooks:function(){return{bootstrap:function(){eo(ta("mutationObserverCallbacks",{}))},noAuto:function(){bm()},watch:function(n){var r=n.observeMutationsRoot;oo?oa():eo(ta("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},so=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},jm={mixout:function(){return{parse:{transform:function(n){return so(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=so(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:m};return{tag:"g",attributes:R({},v.outer),children:[{tag:"g",attributes:R({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),v.path)}]}]}}}},Sr={x:0,y:0,width:"100%",height:"100%"};function lo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function zm(e){return e.tag==="g"?e.children:[e]}var $m={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?gr(a.split(" ").map(function(o){return o.trim()})):Ua();return i.prefix||(i.prefix=gt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,m=o.icon,v=jd({transform:l,containerWidth:d,iconWidth:f}),k={tag:"rect",attributes:R(R({},Sr),{},{fill:"white"})},N=c.children?{children:c.children.map(lo)}:{},O={tag:"g",attributes:R({},v.inner),children:[lo(R({tag:c.tag,attributes:R(R({},c.attributes),v.path)},N))]},g={tag:"g",attributes:R({},v.outer),children:[O]},x="mask-".concat(s||En()),I="clip-".concat(s||En()),$={tag:"mask",attributes:R(R({},Sr),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,g]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:zm(m)},$]};return r.push(D,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(x,")")},Sr)}),{children:r,attributes:a}}}},Dm={provides:function(t){var n=!1;pt.matchMedia&&(n=pt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Um={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Hm=[Dd,Pm,Om,Sm,Rm,Lm,Fm,jm,$m,Dm,Um];tm(Hm,{mixoutsTo:Pe});Pe.noAuto;var il=Pe.config,Bm=Pe.library;Pe.dom;var ol=Pe.parse;Pe.findIconDefinition;Pe.toHtml;var Wm=Pe.icon;Pe.layer;var Ym=Pe.text;Pe.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Km={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z"]},qm=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Vm(e,t){return t={exports:{}},e(t,t.exports),t.exports}var Xm=Vm(function(e){(function(t){var n=function(g,x,I){if(!f(x)||d(x)||m(x)||v(x)||l(x))return x;var $,D=0,G=0;if(c(x))for($=[],G=x.length;D<G;D++)$.push(n(g,x[D],I));else{$={};for(var B in x)Object.prototype.hasOwnProperty.call(x,B)&&($[g(B,I)]=n(g,x[B],I))}return $},r=function(g,x){x=x||{};var I=x.separator||"_",$=x.split||/(?=[A-Z])/;return g.split($).join(I)},a=function(g){return k(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(x,I){return I?I.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var x=a(g);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(g,x){return r(g,x).toLowerCase()},s=Object.prototype.toString,l=function(g){return typeof g=="function"},f=function(g){return g===Object(g)},c=function(g){return s.call(g)=="[object Array]"},d=function(g){return s.call(g)=="[object Date]"},m=function(g){return s.call(g)=="[object RegExp]"},v=function(g){return s.call(g)=="[object Boolean]"},k=function(g){return g=g-0,g===g},N=function(g,x){var I=x&&"process"in x?x.process:x;return typeof I!="function"?g:function($,D){return I($,g,D)}},O={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(g,x){return n(N(a,x),g)},decamelizeKeys:function(g,x){return n(N(o,x),g,x)},pascalizeKeys:function(g,x){return n(N(i,x),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=O:t.humps=O})(qm)}),Gm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sn=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Jn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qm=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},sa=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function Jm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Xm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Zm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ya(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ya(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Zm(c);break;case"style":l.style=Jm(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Qm(n,["class","style"]);return fr(e.tag,Jn({},t,{class:a.class,style:Jn({},a.style,o)},a.attrs,s),r)}var sl=!1;try{sl=!0}catch{}function eh(){if(!sl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function gn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?sn({},e,t):{}}function th(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},sn(t,"fa-"+e.size,e.size!==null),sn(t,"fa-rotate-"+e.rotation,e.rotation!==null),sn(t,"fa-pull-"+e.pull,e.pull!==null),sn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function co(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":Gm(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var nh=Cn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ce(function(){return co(t.icon)}),i=ce(function(){return gn("classes",th(t))}),o=ce(function(){return gn("transform",typeof t.transform=="string"?ol.transform(t.transform):t.transform)}),s=ce(function(){return gn("mask",co(t.mask))}),l=ce(function(){return Wm(a.value,Jn({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});$t(l,function(c){if(!c)return eh("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ce(function(){return l.value?Ya(l.value.abstract[0],{},r):null});return function(){return f.value}}});Cn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=il.familyPrefix,i=ce(function(){return[a+"-layers"].concat(sa(t.fixedWidth?[a+"-fw"]:[]))});return function(){return fr("div",{class:i.value},r.default?r.default():[])}}});Cn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=il.familyPrefix,i=ce(function(){return gn("classes",[].concat(sa(t.counter?[a+"-layers-counter"]:[]),sa(t.position?[a+"-layers-"+t.position]:[])))}),o=ce(function(){return gn("transform",typeof t.transform=="string"?ol.transform(t.transform):t.transform)}),s=ce(function(){var f=Ym(t.value.toString(),Jn({},o.value,i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=ce(function(){return Ya(s.value,{},r)});return function(){return l.value}}});Bm.add(Km);const rh=Sf(Mf).component("font-awesome-icon",nh).use(ld).use(Ff());rh.mount("#app");export{Qu as P,td as _,Bt as a,me as b,ce as c,ih as d,Dt as e,ah as f,ms as g,Xc as h,mt as o,lr as r,hl as t,zt as u,Aa as w};
