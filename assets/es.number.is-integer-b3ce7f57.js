var x=Object.defineProperty;var i=(e,r)=>x(e,"name",{value:r,configurable:!0});import{_ as u,A as h,a6 as g,aN as j,Z as $,a5 as O,aO as N,ab as w,K as D,aP as P,aQ as S,P as y,a2 as I,q as E,aF as U}from"./index-f61793b6.js";import{a9 as _}from"./index-681e4b07-023528ef.js";var A=u,F=h.findIndex,L=g,v="findIndex",p=!0;v in[]&&Array(1)[v](function(){p=!1});A({target:"Array",proto:!0,forced:p},{findIndex:i(function(r){return F(this,r,arguments.length>1?arguments[1]:void 0)},"findIndex")});L(v);var M=u,q=_,R=g;M({target:"Array",proto:!0},{fill:q});R("fill");var T=Object.is||i(function(r,t){return r===t?r!==0||1/r===1/t:r!=r&&t!=t},"is"),C=$,G=j,K=O,V=N,W=w,c=T,d=D,Q=P,X=S;G("search",function(e,r,t){return[i(function(a){var s=W(this),o=V(a)?void 0:Q(a,e);return o?C(o,a,s):new RegExp(a)[e](d(s))},"search"),function(n){var a=K(this),s=d(n),o=t(r,a,s);if(o.done)return o.value;var l=a.lastIndex;c(l,0)||(a.lastIndex=0);var f=X(a,s);return c(a.lastIndex,l)||(a.lastIndex=l),f===null?-1:f.index}]});var b=y,Z=i(function(e){return e!==void 0&&(b(e,"value")||b(e,"writable"))},"isDataDescriptor$1"),k=u,z=$,B=I,H=O,J=Z,Y=E,rr=U;function m(e,r){var t=arguments.length<3?e:arguments[2],n,a;if(H(e)===t)return e[r];if(n=Y.f(e,r),n)return J(n)?n.value:n.get===void 0?void 0:z(n.get,t);if(B(a=rr(e)))return m(a,r,t)}i(m,"get");k({target:"Reflect",stat:!0},{get:m});var er=I,ar=Math.floor,tr=Number.isInteger||i(function(r){return!er(r)&&isFinite(r)&&ar(r)===r},"isInteger"),nr=u,ir=tr;nr({target:"Number",stat:!0},{isInteger:ir});export{tr as i};