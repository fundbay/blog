import{u as U,i as se,l as te,m as M,p as ae,P as le,q as re,s as ue,k as b,v as R,x as oe,y as Y,j as t,z as ie,R as T,A as ne,B as ce,C as ve,D as pe,E as he,G as de,H as ye,I as me,J as ge,K as k,L as Ee,M as Ae,N as fe,O as $,Q as I,S as He}from"./app-D-nypHar.js";const De=["/","/intro.html","/demo/","/demo/disable.html","/demo/layout.html","/demo/markdown.html","/demo/page.html","/posts/vuepress/","/posts/nas/qnap/Container%20Station%E6%90%AD%E5%BB%BAJellyfin.html","/posts/nas/qnap/Container%20Station%E6%90%AD%E5%BB%BAWordpress.html","/posts/nas/qnap/","/posts/vuepress/themes/vuepress-theme-hope/","/posts/vuepress/themes/vuepress-theme-hope/%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE%E5%8D%9A%E5%AE%A2%E4%B8%BB%E9%A1%B5%E5%86%85%E5%AE%B9.html","/404.html","/posts/","/posts/nas/","/posts/vuepress/themes/","/category/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/category/%E6%8C%87%E5%8D%97/","/category/nas/","/category/qnap/","/category/container-station/","/category/vuepress/","/category/vuepress-theme-hope/","/tag/","/tag/%E7%A6%81%E7%94%A8/","/tag/%E5%8A%A0%E5%AF%86/","/tag/%E5%B8%83%E5%B1%80/","/tag/markdown/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/tag/jellyfin/","/tag/wordpress/","/article/","/star/","/timeline/"],Be="SEARCH_PRO_QUERY_HISTORY",g=U(Be,[]),Re=()=>{const{queryHistoryCount:a}=k,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=a=>De[a.id]+("anchor"in a?`#${a.anchor}`:""),ke="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=k,E=U(ke,[]),qe=()=>{const a=_>0;return{enabled:a,resultHistory:E,addResultHistory:l=>{if(a){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),E.value=[r,...E.value.slice(0,_-1)]}},removeResultHistory:l=>{E.value=[...E.value.slice(0,l),...E.value.slice(l+1)]}}},we=a=>{const l=pe(),r=M(),q=he(),o=b(0),H=R(()=>o.value>0),d=de([]);return ye(()=>{const{search:y,terminate:w}=me(),A=ge(c=>{const f=c.join(" "),{searchFilter:C=h=>h,splitWord:Q,suggestionsFilter:O,...m}=l.value;f?(o.value+=1,y(c.join(" "),r.value,m).then(h=>C(h,f,r.value,q.value)).then(h=>{o.value-=1,d.value=h}).catch(h=>{console.warn(h),o.value-=1,o.value||(d.value=[])})):d.value=[]},k.searchDelay-k.suggestDelay);Y([a,r],([c])=>A(c),{immediate:!0}),Ee(()=>{w()})}),{isSearching:H,results:d}};var Qe=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),q=M(),o=ae(le),{enabled:H,addQueryHistory:d,queryHistory:y,removeQueryHistory:w}=Re(),{enabled:A,resultHistory:c,addResultHistory:f,removeResultHistory:C}=qe(),Q=H||A,O=re(a,"queries"),{results:m,isSearching:h}=we(O),u=ue({isQuery:!0,index:0}),v=b(0),p=b(0),P=R(()=>Q&&(y.value.length>0||c.value.length>0)),S=R(()=>m.value.length>0),x=R(()=>m.value[v.value]||null),J=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},z=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},G=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=x.value.contents.length-1},K=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},N=()=>{p.value<x.value.contents.length-1?p.value+=1:K()},V=()=>{p.value>0?p.value-=1:G()},L=e=>e.map(s=>He(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=Ae[e.index]||"$content",[i,B=""]=fe(s)?s[q.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",L([i,...n,B])))}return e.display.map(s=>t("div",L(s)))},D=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},o.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:i=>{i.preventDefault(),i.stopPropagation(),w(s)}})]))])):null,Z=()=>A?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},o.value.resultHistory),c.value.map((e,s)=>t(T,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{D()}},()=>[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(i=>L(i)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:i=>{i.preventDefault(),i.stopPropagation(),C(s)}})]))])):null;return oe("keydown",e=>{if(a.isFocusing){if(S.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const s=x.value.contents[p.value];d(a.queries.join(" ")),f(s),r.push(F(s)),D()}}else if(A){if(e.key==="ArrowUp")J();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),D())}}}}),Y([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!S.value:!P.value}],id:"search-pro-results"},a.queries.length?h.value?t(ie,{hint:o.value.searching}):S.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},i)=>{const B=v.value===i;return t("li",{class:["search-pro-result-list-item",{active:B}]},[t("div",{class:"search-pro-result-title"},e||o.value.defaultTitle),s.map((n,ee)=>{const j=B&&p.value===ee;return t(T,{to:F(n),class:["search-pro-result-item",{active:j,"aria-selected":j}],onClick:()=>{d(a.queries.join(" ")),f(n),D()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):o.value.emptyResult:Q?P.value?[X(),Z()]:o.value.emptyHistory:o.value.emptyResult)}});export{Qe as default};
