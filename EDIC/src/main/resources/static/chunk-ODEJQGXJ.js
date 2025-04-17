import{A as ue,Ba as W,Ca as Y,G as ce,J as m,L as g,M as j,O as D,Q as f,R as h,S as de,U as le,V as fe,ba as he,bb as ge,e as re,h as ie,k as se,l as $,la as z,p as S,ta as V,v as oe,wa as _,x as ae,xa as G}from"./chunk-NPOSHTJS.js";var we=null;function Z(){return we}function hn(n){we??=n}var pe=class{};var P=new D(""),Ce=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||n)};static \u0275prov=g({token:n,factory:()=>h(Ke),providedIn:"platform"})}return n})();var Ke=(()=>{class n extends Ce{_location;_history;_doc=h(P);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Z().getBaseHref(this._doc)}onPopState(e){let r=Z().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",e,!1),()=>r.removeEventListener("popstate",e)}onHashChange(e){let r=Z().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",e,!1),()=>r.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,r,i){this._history.pushState(e,r,i)}replaceState(e,r,i){this._history.replaceState(e,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||n)};static \u0275prov=g({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function Fe(n,t){return n?t?n.endsWith("/")?t.startsWith("/")?n+t.slice(1):n+t:t.startsWith("/")?n+t:`${n}/${t}`:n:t}function De(n){let t=n.search(/#|\?|$/);return n[t-1]==="/"?n.slice(0,t-1)+n.slice(t):n}function C(n){return n&&n[0]!=="?"?`?${n}`:n}var q=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||n)};static \u0275prov=g({token:n,factory:()=>h(qe),providedIn:"root"})}return n})(),Xe=new D(""),qe=(()=>{class n extends q{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,r){super(),this._platformLocation=e,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??h(P).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Fe(this._baseHref,e)}path(e=!1){let r=this._platformLocation.pathname+C(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${r}${i}`:r}pushState(e,r,i,s){let o=this.prepareExternalUrl(i+C(s));this._platformLocation.pushState(e,r,o)}replaceState(e,r,i,s){let o=this.prepareExternalUrl(i+C(s));this._platformLocation.replaceState(e,r,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(r){return new(r||n)(f(Ce),f(Xe,8))};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var He=(()=>{class n{_subject=new ie;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let r=this._locationStrategy.getBaseHref();this._basePath=et(De(me(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,r=""){return this.path()==this.normalize(e+C(r))}normalize(e){return n.stripTrailingSlash(Qe(this._basePath,me(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,r="",i=null){this._locationStrategy.pushState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+C(r)),i)}replaceState(e,r="",i=null){this._locationStrategy.replaceState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+C(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",r){this._urlChangeListeners.forEach(i=>i(e,r))}subscribe(e,r,i){return this._subject.subscribe({next:e,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=C;static joinWithSlash=Fe;static stripTrailingSlash=De;static \u0275fac=function(r){return new(r||n)(f(q))};static \u0275prov=g({token:n,factory:()=>Je(),providedIn:"root"})}return n})();function Je(){return new He(f(q))}function Qe(n,t){if(!n||!t.startsWith(n))return t;let e=t.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:t}function me(n){return n.replace(/\/index.html$/,"")}function et(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}function Ae(n,t){t=encodeURIComponent(t);for(let e of n.split(";")){let r=e.indexOf("="),[i,s]=r==-1?[e,""]:[e.slice(0,r),e.slice(r+1)];if(i.trim()===t)return decodeURIComponent(s)}return null}var K=class{$implicit;ngForOf;index;count;constructor(t,e,r,i){this.$implicit=t,this.ngForOf=e,this.index=r,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},gn=(()=>{class n{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,r,i){this._viewContainer=e,this._template=r,this._differs=i}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let r=this._viewContainer;e.forEachOperation((i,s,o)=>{if(i.previousIndex==null)r.createEmbeddedView(this._template,new K(i.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)r.remove(s===null?void 0:s);else if(s!==null){let u=r.get(s);r.move(u,o),ye(u,i)}});for(let i=0,s=r.length;i<s;i++){let u=r.get(i).context;u.index=i,u.count=s,u.ngForOf=this._ngForOf}e.forEachIdentityChange(i=>{let s=r.get(i.currentIndex);ye(s,i)})}static ngTemplateContextGuard(e,r){return!0}static \u0275fac=function(r){return new(r||n)(_(G),_(V),_(ge))};static \u0275dir=Y({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return n})();function ye(n,t){n.context.$implicit=t.item}var pn=(()=>{class n{_viewContainer;_context=new X;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,r){this._viewContainer=e,this._thenTemplateRef=r}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Ee(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Ee(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,r){return!0}static \u0275fac=function(r){return new(r||n)(_(G),_(V))};static \u0275dir=Y({type:n,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return n})(),X=class{$implicit=null;ngIf=null};function Ee(n,t){if(n&&!n.createEmbeddedView)throw new m(2020,!1)}var Dn=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275mod=W({type:n});static \u0275inj=j({})}return n})(),mn="browser",tt="server";function yn(n){return n===tt}var O=class{};var I=class{},N=class{},F=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let r=e.indexOf(":");if(r>0){let i=e.slice(0,r),s=e.slice(r+1).trim();this.addHeaderEntry(i,s)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,r)=>{this.addHeaderEntry(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(t.name,e);let i=(t.op==="a"?this.headers.get(e):void 0)||[];i.push(...r),this.headers.set(e,i);break;case"d":let s=t.value;if(!s)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=this.headers.get(e);if(!o)return;o=o.filter(u=>s.indexOf(u)===-1),o.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}break}}addHeaderEntry(t,e){let r=t.toLowerCase();this.maybeSetNormalizedName(t,r),this.headers.has(r)?this.headers.get(r).push(e):this.headers.set(r,[e])}setHeaderEntries(t,e){let r=(Array.isArray(e)?e:[e]).map(s=>s.toString()),i=t.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(t,i)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var J=class{encodeKey(t){return be(t)}encodeValue(t){return be(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function rt(n,t){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(i=>{let s=i.indexOf("="),[o,u]=s==-1?[t.decodeKey(i),""]:[t.decodeKey(i.slice(0,s)),t.decodeValue(i.slice(s+1))],a=e.get(o)||[];a.push(u),e.set(o,a)}),e}var it=/%(\d[a-f0-9])/gi,st={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function be(n){return encodeURIComponent(n).replace(it,(t,e)=>st[e]??t)}function L(n){return`${n}`}var w=class n{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new J,t.fromString){if(t.fromObject)throw new m(2805,!1);this.map=rt(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let r=t.fromObject[e],i=Array.isArray(r)?r.map(L):[L(r)];this.map.set(e,i)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(r=>{let i=t[r];Array.isArray(i)?i.forEach(s=>{e.push({param:r,value:s,op:"a"})}):e.push({param:r,value:i,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(L(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let r=this.map.get(t.param)||[],i=r.indexOf(L(t.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var Q=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function ot(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ve(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function _e(n){return typeof Blob<"u"&&n instanceof Blob}function Te(n){return typeof FormData<"u"&&n instanceof FormData}function at(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Se="Content-Type",Re="Accept",Oe="X-Request-URL",Pe="text/plain",Le="application/json",ut=`${Le}, ${Pe}, */*`,R=class n{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(t,e,r,i){this.url=e,this.method=t.toUpperCase();let s;if(ot(this.method)||i?(this.body=r!==void 0?r:null,s=i):s=r,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new F,this.context??=new Q,!this.params)this.params=new w,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let u=e.indexOf("?"),a=u===-1?"?":u<e.length-1?"&":"";this.urlWithParams=e+a+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ve(this.body)||_e(this.body)||Te(this.body)||at(this.body)?this.body:this.body instanceof w?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Te(this.body)?null:_e(this.body)?this.body.type||null:ve(this.body)?null:typeof this.body=="string"?Pe:this.body instanceof w?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Le:null}clone(t={}){let e=t.method||this.method,r=t.url||this.url,i=t.responseType||this.responseType,s=t.transferCache??this.transferCache,o=t.body!==void 0?t.body:this.body,u=t.withCredentials??this.withCredentials,a=t.reportProgress??this.reportProgress,p=t.headers||this.headers,A=t.params||this.params,y=t.context??this.context;return t.setHeaders!==void 0&&(p=Object.keys(t.setHeaders).reduce((b,E)=>b.set(E,t.setHeaders[E]),p)),t.setParams&&(A=Object.keys(t.setParams).reduce((b,E)=>b.set(E,t.setParams[E]),A)),new n(e,r,o,{params:A,headers:p,context:y,reportProgress:a,responseType:i,withCredentials:u,transferCache:s})}},T=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(T||{}),M=class{headers;status;statusText;url;ok;type;constructor(t,e=200,r="OK"){this.headers=t.headers||new F,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},ee=class n extends M{constructor(t={}){super(t)}type=T.ResponseHeader;clone(t={}){return new n({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},B=class n extends M{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=T.Response;clone(t={}){return new n({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},k=class extends M{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},ct=200,dt=204;function H(n,t){return{body:t,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache}}var lt=(()=>{class n{handler;constructor(e){this.handler=e}request(e,r,i={}){let s;if(e instanceof R)s=e;else{let a;i.headers instanceof F?a=i.headers:a=new F(i.headers);let p;i.params&&(i.params instanceof w?p=i.params:p=new w({fromObject:i.params})),s=new R(e,r,i.body!==void 0?i.body:null,{headers:a,context:i.context,params:p,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let o=$(s).pipe(ae(a=>this.handler.handle(a)));if(e instanceof R||i.observe==="events")return o;let u=o.pipe(oe(a=>a instanceof B));switch(i.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return u.pipe(S(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new m(2806,!1);return a.body}));case"blob":return u.pipe(S(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new m(2807,!1);return a.body}));case"text":return u.pipe(S(a=>{if(a.body!==null&&typeof a.body!="string")throw new m(2808,!1);return a.body}));case"json":default:return u.pipe(S(a=>a.body))}case"response":return u;default:throw new m(2809,!1)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new w().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,i={}){return this.request("PATCH",e,H(i,r))}post(e,r,i={}){return this.request("POST",e,H(i,r))}put(e,r,i={}){return this.request("PUT",e,H(i,r))}static \u0275fac=function(r){return new(r||n)(f(I))};static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})();var ft=new D("");function ht(n,t){return t(n)}function gt(n,t,e){return(r,i)=>fe(e,()=>t(r,s=>n(s,i)))}var Ne=new D(""),pt=new D(""),Dt=new D("",{providedIn:"root",factory:()=>!0});var Ie=(()=>{class n extends I{backend;injector;chain=null;pendingTasks=h(he);contributeToStability=h(Dt);constructor(e,r){super(),this.backend=e,this.injector=r}handle(e){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(Ne),...this.injector.get(pt,[])]));this.chain=r.reduceRight((i,s)=>gt(i,s,this.injector),ht)}if(this.contributeToStability){let r=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(ue(()=>this.pendingTasks.remove(r)))}else return this.chain(e,r=>this.backend.handle(r))}static \u0275fac=function(r){return new(r||n)(f(N),f(le))};static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})();var mt=/^\)\]\}',?\n/,yt=RegExp(`^${Oe}:`,"m");function Et(n){return"responseURL"in n&&n.responseURL?n.responseURL:yt.test(n.getAllResponseHeaders())?n.getResponseHeader(Oe):null}var Me=(()=>{class n{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new m(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?se(r.\u0275loadImpl()):$(null)).pipe(ce(()=>new re(s=>{let o=r.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((c,d)=>o.setRequestHeader(c,d.join(","))),e.headers.has(Re)||o.setRequestHeader(Re,ut),!e.headers.has(Se)){let c=e.detectContentTypeHeader();c!==null&&o.setRequestHeader(Se,c)}if(e.responseType){let c=e.responseType.toLowerCase();o.responseType=c!=="json"?c:"text"}let u=e.serializeBody(),a=null,p=()=>{if(a!==null)return a;let c=o.statusText||"OK",d=new F(o.getAllResponseHeaders()),v=Et(o)||e.url;return a=new ee({headers:d,status:o.status,statusText:c,url:v}),a},A=()=>{let{headers:c,status:d,statusText:v,url:ne}=p(),l=null;d!==dt&&(l=typeof o.response>"u"?o.responseText:o.response),d===0&&(d=l?ct:0);let U=d>=200&&d<300;if(e.responseType==="json"&&typeof l=="string"){let ke=l;l=l.replace(mt,"");try{l=l!==""?JSON.parse(l):null}catch(xe){l=ke,U&&(U=!1,l={error:xe,text:l})}}U?(s.next(new B({body:l,headers:c,status:d,statusText:v,url:ne||void 0})),s.complete()):s.error(new k({error:l,headers:c,status:d,statusText:v,url:ne||void 0}))},y=c=>{let{url:d}=p(),v=new k({error:c,status:o.status||0,statusText:o.statusText||"Unknown Error",url:d||void 0});s.error(v)},b=!1,E=c=>{b||(s.next(p()),b=!0);let d={type:T.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(d.total=c.total),e.responseType==="text"&&o.responseText&&(d.partialText=o.responseText),s.next(d)},te=c=>{let d={type:T.UploadProgress,loaded:c.loaded};c.lengthComputable&&(d.total=c.total),s.next(d)};return o.addEventListener("load",A),o.addEventListener("error",y),o.addEventListener("timeout",y),o.addEventListener("abort",y),e.reportProgress&&(o.addEventListener("progress",E),u!==null&&o.upload&&o.upload.addEventListener("progress",te)),o.send(u),s.next({type:T.Sent}),()=>{o.removeEventListener("error",y),o.removeEventListener("abort",y),o.removeEventListener("load",A),o.removeEventListener("timeout",y),e.reportProgress&&(o.removeEventListener("progress",E),u!==null&&o.upload&&o.upload.removeEventListener("progress",te)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(r){return new(r||n)(f(O))};static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})(),Be=new D(""),wt="XSRF-TOKEN",Ct=new D("",{providedIn:"root",factory:()=>wt}),Ft="X-XSRF-TOKEN",At=new D("",{providedIn:"root",factory:()=>Ft}),x=class{},bt=(()=>{class n{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,r,i){this.doc=e,this.platform=r,this.cookieName=i}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ae(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(r){return new(r||n)(f(P),f(z),f(Ct))};static \u0275prov=g({token:n,factory:n.\u0275fac})}return n})();function vt(n,t){let e=n.url.toLowerCase();if(!h(Be)||n.method==="GET"||n.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return t(n);let r=h(x).getToken(),i=h(At);return r!=null&&!n.headers.has(i)&&(n=n.clone({headers:n.headers.set(i,r)})),t(n)}function Vn(...n){let t=[lt,Me,Ie,{provide:I,useExisting:Ie},{provide:N,useFactory:()=>h(ft,{optional:!0})??h(Me)},{provide:Ne,useValue:vt,multi:!0},{provide:Be,useValue:!0},{provide:x,useClass:bt}];for(let e of n)t.push(...e.\u0275providers);return de(t)}export{Z as a,hn as b,pe as c,P as d,q as e,He as f,Ae as g,gn as h,pn as i,Dn as j,mn as k,yn as l,O as m,lt as n,Vn as o};
