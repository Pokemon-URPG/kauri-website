import{o as l,c as _,a as t,d as se,b as s,u as me,e as _e,f as ve,g as xe,r as Q,h as y,M as u,i as M,j as ye,w as he,k as ke,l as be,n as m,m as F,p as o,q as e,F as j,s as S,t as k,v as we,x as h,y as re,z as D,A as $e,B as Ce,C as Te,D as Fe,E as Ee,G as ne}from"./index.2b29b6d0.js";import{u as z,t as Ve}from"./ReducedMotion.9e7be1db.js";import{_ as Be,a as Me}from"./chevron-right.ec4f487c.js";import{r as Z,a as ee,i as te,I as ie,D as de,w as ue,L as ce,U as fe,G as pe,$ as ge}from"./headlessui.esm.67daf16f.js";import{_ as je}from"./Spinner.3e06be3d.js";const ze={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Re=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m8 7l4-4m0 0l4 4m-4-4v18"},null,-1),Se=[Re];function De(W,w){return l(),_("svg",ze,Se)}var Ue={name:"heroicons-outline-arrow-narrow-up",render:De};const Le={class:"fixed bottom-0 right-0 pb-4"},Ae={class:"px-6 lg:px-8"},Ne=se({setup(W){const w=()=>{var r;return(r=document.getElementById("container"))==null?void 0:r.scrollTo({top:0,behavior:z.value?void 0:"smooth"})};return(r,p)=>{const X=Ue;return l(),_("div",Le,[t("div",Ae,[t("button",{class:"bg-discord-blurple-500 hover:bg-discord-blurple-530 dark:hover:bg-discord-blurple-560 text-gray-200 hover:text-white rounded-md p-2 leading-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-200",onClick:p[0]||(p[0]=$=>w())},[s(X,{class:"h-6 w-6"})])])])}}}),Ge={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ie=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m5 15l7-7l7 7"},null,-1),Ke=[Ie];function Oe(W,w){return l(),_("svg",Ge,Ke)}var Pe={name:"heroicons-outline-chevron-up",render:Oe};const Ye=["aria-expanded"],qe=t("span",{class:"sr-only"},"Open menu",-1),He={class:"sticky top-0 overflow-y-auto overflow-x-hidden w-72 md:w-80 lg:custom-scroll sidebar-height"},Je={class:"my-5 px-2 space-y-1 z-10"},Qe={class:"pb-1"},We={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},Xe=["aria-expanded"],Ze={class:"sr-only"},et=D(" Docs settings "),tt={class:"relative mt-1"},st={class:"truncate"},at={class:"truncate"},ot={class:"relative mt-1"},lt={class:"truncate"},rt={class:"truncate"},nt={class:"flex justify-between px-2"},it=D("Reduced Motion"),dt={class:"flex justify-between px-2"},ut=D("Show privates"),ct={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ft=["aria-expanded"],pt={class:"sr-only"},gt={class:"truncate"},mt={class:"truncate"},_t={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},vt=["aria-expanded"],ht={class:"sr-only"},bt=D(" Classes "),xt={class:"truncate"},yt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},kt=["aria-expanded"],wt={class:"sr-only"},$t=D(" Typedefs "),Ct={class:"truncate"},Tt=se({setup(W){var I,K,O,P,Y;const w=me(),r=_e(),p=ve(),$=xe(we).greater("lg"),g=Q(!1),b=Q(),U=y(()=>p.state.sources),E=y(()=>p.state.source),L=y(()=>p.state.tag),i=y(()=>p.state.docs),A=y(()=>p.state.branches),V=y(()=>U.value.find(d=>r.params.source===d.id)),B=Q({source:(K=(I=V.value)==null?void 0:I.source)!=null?K:u,name:(P=(O=V.value)==null?void 0:O.name)!=null?P:u.name}),T=Q((Y=r.params.tag)!=null?Y:u.defaultTag),N=y(()=>{var d,a;return M.value?(d=i.value)==null?void 0:d.classes:(a=i.value)==null?void 0:a.classes.filter(v=>v.access!=="private")}),G=y(()=>{var d,a;return M.value?(d=i.value)==null?void 0:d.typedefs:(a=i.value)==null?void 0:a.typedefs.filter(v=>v.access!=="private")});return ye(b,()=>g.value=!1),he($,()=>g.value=!1,{immediate:!0}),ke([B,T],async([d,a],[v,x])=>{if(d!==v)return T.value=d.source.defaultTag,w.push({name:"docs-source-tag-category-file",params:{source:d.source.id,tag:d.source.defaultTag,category:d.source.defaultFile.category,file:d.source.defaultFile.id}});if(a!==x)return w.push({name:"docs-source-tag-category-file",params:{source:d.source.id,tag:a,category:d.source.defaultFile.category,file:d.source.defaultFile.id}})}),(d,a)=>{var H,J,ae;const v=Be,x=Me,q=Pe,R=be("router-link");return l(),_(j,null,[g.value?F("",!0):(l(),_("div",{key:0,class:m(["block fixed lg:hidden z-10 transition-transform transform-gpu",g.value?"translate-x-72 md:translate-x-80":null])},[t("button",{type:"button",class:"rounded-md rounded-l-none rounded-tr-none p-3 inline-flex items-center justify-center text-gray-200 bg-discord-blurple-600 hover:bg-discord-blurple-630 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"sidebar-menu","aria-expanded":g.value,onClick:a[0]||(a[0]=c=>g.value=!g.value)},[qe,s(v,{class:m(["h-6 w-6",{hidden:g.value,block:!g.value}]),"aria-hidden":"true"},null,8,["class"])],8,Ye)],2)),t("div",{ref_key:"sidebarElement",ref:b,class:m(["inline-block fixed lg:block lg:relative z-10 sidebar-color transition transform-gpu",g.value?"translate-x-0":"-translate-x-full lg:translate-x-0"])},[t("div",He,[t("nav",Je,[t("ul",null,[t("li",Qe,[s(e(Z),{"default-open":!0},{default:o(({open:c})=>[s(e(ee),{class:"w-full focus:outline-none",tabindex:"-1"},{default:o(()=>[t("div",We,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":c},[t("span",Ze,h(c?"Shrink":"Expand"),1),s(v,{class:m(["inline-block",{hidden:c}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:m(["inline-block",{hidden:!c}]),"aria-hidden":"true"},null,8,["class"])],8,Xe),et])]),_:2},1024),s(e(te),{as:"ul",class:"px-2 space-y-3"},{default:o(()=>[t("li",null,[s(e(ie),{modelValue:B.value,"onUpdate:modelValue":a[1]||(a[1]=n=>B.value=n)},{default:o(({open:n})=>[t("div",tt,[s(e(de),{class:"relative w-full py-1 px-3 text-left flex justify-between items-center dark:text-gray-200 rounded bg-gray-100 dark:bg-[#1d1d1d] border dark:border-[#101010] cursor-pointer"},{default:o(()=>[t("span",st,h(B.value.name),1),n?F("",!0):(l(),k(x,{key:0})),n?(l(),k(q,{key:1})):F("",!0)]),_:2},1024),s(e(ue),{class:"absolute w-full mt-1 overflow-auto text-base dark:text-white bg-gray-100 dark:bg-[#1d1d1d] rounded max-h-60 border dark:border-[#101010] focus:outline-none z-40 lg:custom-scroll"},{default:o(()=>[(l(!0),_(j,null,S(e(U),f=>(l(),k(e(ce),{key:f.source.id,class:"cursor-default",value:f},{default:o(({active:C})=>[t("li",{class:m(["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":C}])},[t("span",at,h(f.name),1)],2)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"])]),t("li",null,[s(e(ie),{modelValue:T.value,"onUpdate:modelValue":a[2]||(a[2]=n=>T.value=n)},{default:o(({open:n})=>[t("div",ot,[s(e(de),{class:"relative w-full py-1 px-3 text-left flex justify-between items-center dark:text-gray-200 rounded bg-gray-100 dark:bg-[#1d1d1d] border dark:border-[#101010] cursor-pointer"},{default:o(()=>[t("span",lt,h(T.value),1),n?F("",!0):(l(),k(x,{key:0})),n?(l(),k(q,{key:1})):F("",!0)]),_:2},1024),s(e(ue),{class:"absolute w-full mt-1 overflow-auto text-base dark:text-white bg-gray-100 dark:bg-[#1d1d1d] rounded max-h-60 border dark:border-[#101010] focus:outline-none z-40 lg:custom-scroll"},{default:o(()=>[(l(!0),_(j,null,S(e(A),f=>(l(),k(e(ce),{key:f,class:"cursor-default",value:f},{default:o(({active:C})=>[t("li",{class:m(["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":C}])},[t("span",rt,h(f),1)],2)]),_:2},1032,["value"]))),128))]),_:1})])]),_:1},8,["modelValue"])]),t("li",null,[s(e(fe),null,{default:o(()=>[t("div",nt,[s(e(pe),{class:"mr-4 dark:text-gray-200"},{default:o(()=>[it]),_:1}),s(e(ge),{modelValue:e(z),"onUpdate:modelValue":a[3]||(a[3]=n=>re(z)?z.value=n:null),class:m(["relative inline-flex h-6 items-center rounded-full w-11 focus:outline-none",e(z)?"bg-discord-blurple-500":"bg-gray-500"]),onClick:a[4]||(a[4]=n=>e(Ve)(e(z)))},{default:o(()=>[t("span",{class:m(["inline-block w-4 h-4 bg-white rounded-full transition transform-gpu z-20",e(z)?"translate-x-6":"translate-x-1"])},null,2)]),_:1},8,["modelValue","class"])])]),_:1})]),t("li",null,[s(e(fe),null,{default:o(()=>[t("div",dt,[s(e(pe),{class:"mr-4 dark:text-gray-200"},{default:o(()=>[ut]),_:1}),s(e(ge),{modelValue:e(M),"onUpdate:modelValue":a[5]||(a[5]=n=>re(M)?M.value=n:null),class:m(["relative inline-flex h-6 items-center rounded-full w-11 focus:outline-none",e(M)?"bg-discord-red-500":"bg-gray-500"])},{default:o(()=>[t("span",{class:m(["inline-block w-4 h-4 bg-white rounded-full transition transform-gpu z-20",e(M)?"translate-x-6":"translate-x-1"])},null,2)]),_:1},8,["modelValue","class"])])]),_:1})])]),_:1})]),_:1})]),(l(!0),_(j,null,S((H=e(i))==null?void 0:H.custom,(c,n)=>(l(),_("li",{key:n},[s(e(Z),{"default-open":!0},{default:o(({open:f})=>[s(e(ee),{class:"w-full focus:outline-none",tabindex:"-1"},{default:o(()=>[t("div",ct,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":f},[t("span",pt,h(f?"Shrink":"Expand"),1),s(v,{class:m(["inline-block",{hidden:f}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:m(["inline-block",{hidden:!f}]),"aria-hidden":"true"},null,8,["class"])],8,ft),t("span",gt,h(c.name),1)])]),_:2},1024),s(e(te),{as:"ul"},{default:o(()=>[(l(!0),_(j,null,S(c.files,(C,oe)=>{var le;return l(),_("li",{key:oe},[s(R,{to:{name:"docs-source-tag-category-file",params:{source:(le=e(E))==null?void 0:le.id,tag:e(L),category:n,file:oe}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:a[6]||(a[6]=Bt=>g.value=!1)},{default:o(()=>[t("span",mt,h(typeof C=="object"?C.name:C),1)]),_:2},1032,["to"])])}),128))]),_:2},1024)]),_:2},1024)]))),128)),(J=e(N))!=null&&J.length?(l(),k(e(Z),{key:0,as:"li","default-open":!0},{default:o(({open:c})=>[s(e(ee),{class:"w-full focus:outline-none",tabindex:"-1"},{default:o(()=>[t("div",_t,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":c},[t("span",ht,h(c?"Shrink":"Expand"),1),s(v,{class:m(["inline-block",{hidden:c}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:m(["inline-block",{hidden:!c}]),"aria-hidden":"true"},null,8,["class"])],8,vt),bt])]),_:2},1024),s(e(te),{as:"ul"},{default:o(()=>[(l(!0),_(j,null,S(e(N),n=>{var f;return l(),_("li",{key:n.name},[s(R,{exact:"",to:{name:"docs-source-tag-class-class",params:{source:(f=e(E))==null?void 0:f.id,tag:e(L),class:n.name}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:a[7]||(a[7]=C=>g.value=!1)},{default:o(()=>[t("span",xt,h(n.name),1)]),_:2},1032,["to"])])}),128))]),_:1})]),_:1})):F("",!0),(ae=e(G))!=null&&ae.length?(l(),k(e(Z),{key:1,as:"li","default-open":!0},{default:o(({open:c})=>[s(e(ee),{class:"w-full focus:outline-none",tabindex:"-1"},{default:o(()=>[t("div",yt,[t("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":c},[t("span",wt,h(c?"Shrink":"Expand"),1),s(v,{class:m(["inline-block",{hidden:c}]),"aria-hidden":"true"},null,8,["class"]),s(x,{class:m(["inline-block",{hidden:!c}]),"aria-hidden":"true"},null,8,["class"])],8,kt),$t])]),_:2},1024),s(e(te),{as:"ul"},{default:o(()=>[(l(!0),_(j,null,S(e(G),n=>{var f;return l(),_("li",{key:n.name},[s(R,{exact:"",to:{name:"docs-source-tag-typedef-typedef",params:{source:(f=e(E))==null?void 0:f.id,tag:e(L),typedef:n.name}},class:"text-gray-600 dark:text-gray-300 border-l-4 border-transparent rounded-sm hover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800 dark:hover:text-gray-100 group flex items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-1 focus-visible:ring-white","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:a[8]||(a[8]=C=>g.value=!1)},{default:o(()=>[t("span",Ct,h(n.name),1)]),_:2},1032,["to"])])}),128))]),_:1})]),_:1})):F("",!0)])])])],2)],64)}}}),Ft={class:"lg:flex mx-auto w-full max-w-screen-2xl"},Et={key:1,class:"mx-auto py-16 sm:px-8 lg:py-8 w-full text-center dark:text-gray-200"},Vt=D(" Couldn't load the documentation data. "),Dt=se({setup(W){const w=me(),r=_e(),p=ve(),{Ctrl_K:X}=$e({passive:!1,onEventFired(i){i.ctrlKey&&i.key==="k"&&i.type==="keydown"&&i.preventDefault()}}),$=Ce({[u.id]:u,main:u}),g=Q(!1),b=y(()=>p.state.source),U=y(()=>p.state.tag),E=y(()=>p.state.docs);Te(()=>{const i=document.getElementById("container");Fe(i,"scroll",()=>{i&&i.scrollTop>300?g.value=!0:g.value=!1})}),he(X,()=>{var i;(i=document.getElementById("search"))==null||i.focus()});const L=async()=>{var i,A,V,B,T,N,G,I,K,O,P,Y,d,a,v,x,q,R,H,J;if(r.path!=="/"){if(r.params.source&&r.params.tag&&(((i=E.value)==null?void 0:i.id)!==$[r.params.source].id||((A=E.value)==null?void 0:A.tag)!==r.params.tag)&&(await p.dispatch({type:"fetchDocs",inputSource:(V=$[r.params.source])!=null?V:u,inputTag:(B=r.params.tag)!=null?B:U.value}),await p.dispatch({type:"fetchTags",currentSource:(T=$[r.params.source])!=null?T:u})),r.params.source&&$[r.params.source])p.commit({type:"setSource",source:$[r.params.source]});else return w.replace({name:"docs-source-tag-category-file",params:{source:u.id,tag:u.defaultTag,category:u.defaultFile.category,file:u.defaultFile.id}});if(r.params.tag)p.commit({type:"setTag",tag:r.params.tag}),p.commit({type:"setSource",source:$[r.params.source]});else return w.replace({name:"docs-source-tag-category-file",params:{source:(G=(N=b.value)==null?void 0:N.id)!=null?G:u.id,tag:((I=b.value)==null?void 0:I.recentTag)||((K=b.value)==null?void 0:K.defaultTag),category:(P=(O=b.value)==null?void 0:O.defaultFile.category)!=null?P:u.defaultFile.category,file:(d=(Y=b.value)==null?void 0:Y.defaultFile.id)!=null?d:u.defaultFile.id}});if(!r.params.file&&!r.params.class&&!r.params.typedef&&r.name!=="docs-source-tag-search")return w.replace({name:"docs-source-tag-category-file",params:{source:(v=(a=b.value)==null?void 0:a.id)!=null?v:u.id,tag:(x=U.value)!=null?x:u.defaultTag,category:(R=(q=b.value)==null?void 0:q.defaultFile.category)!=null?R:u.defaultFile.category,file:(J=(H=b.value)==null?void 0:H.defaultFile.id)!=null?J:u.defaultFile.id}})}};return Ee(()=>void L()),(i,A)=>{const V=be("router-view");return l(),_("div",null,[t("div",Ft,[s(Tt),e(E)?(l(),k(V,{key:i.$route.path})):e(ne)?(l(),_("div",Et,[Vt,t("pre",null,h(e(ne).toString()),1)])):(l(),k(je,{key:2}))]),g.value?(l(),k(Ne,{key:0})):F("",!0)])}}});export{Dt as default};