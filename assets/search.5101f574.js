import{d as b,r as _,S as e,h as m,U as w,V as k,k as C,o as p,c as h,a as s,W as u,X as c,q as r,F as T,s as V,z as n,e as q,l as E,n as M,x,b as P,p as U}from"./index.2b29b6d0.js";const N={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},F={class:"prose prose-discord dark:prose-light mx-auto max-w-4xl lg:max-w-full"},S=s("h1",null,"Search Results",-1),B={class:"flex flex-col md:flex-row mb-4"},D={class:"flex-auto"},L=["value"],j=n(" Classes "),z={class:"flex-auto"},R=["value"],H=n(" Methods "),W={class:"flex-auto"},X=["value"],$=n(" Properties "),A={class:"flex-auto"},G=["value"],I=n(" Typedefs "),J={class:"flex-auto"},K=["value"],O=n(" Events "),Q={class:"no-list"},Y={class:"text-sm font-semibold uppercase"},se=b({setup(Z){const o=_([e.Class,e.Method,e.Property,e.Events,e.Typedefs]),d=q(),i=_(d.query.query),y=m(()=>w(i.value).filter(a=>o.value.includes(a.type))),v=a=>{switch(a){case e.Class:return"bg-discord-blurple-500 text-gray-200";case e.Method:return"bg-yellow-500 text-gray-700";case e.Property:return"bg-green-400 text-gray-700";case e.Events:return"bg-yellow-900 text-gray-200";case e.Typedefs:return"bg-purple-800 text-gray-200"}},f=a=>{switch(a){case e.Class:return"C";case e.Method:return"M";case e.Property:return"P";case e.Events:return"E";case e.Typedefs:return"T"}};return k({title:m(()=>{var a;return`discord.js | Search: ${(a=i.value)!=null?a:""}`})}),C(()=>d.query.query,()=>{i.value=d.query.query}),(a,l)=>{const g=E("router-link");return p(),h("div",N,[s("div",F,[S,s("div",B,[s("div",D,[u(s("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>o.value=t),value:r(e).Class,type:"checkbox",class:"form-checkbox rounded-sm h-5 w-5 text-discord-blurple-500"},null,8,L),[[c,o.value]]),j]),s("div",z,[u(s("input",{"onUpdate:modelValue":l[1]||(l[1]=t=>o.value=t),value:r(e).Method,type:"checkbox",class:"form-checkbox rounded-sm h-5 w-5 text-yellow-500"},null,8,R),[[c,o.value]]),H]),s("div",W,[u(s("input",{"onUpdate:modelValue":l[2]||(l[2]=t=>o.value=t),value:r(e).Property,type:"checkbox",class:"form-checkbox rounded-sm h-5 w-5 text-green-400"},null,8,X),[[c,o.value]]),$]),s("div",A,[u(s("input",{"onUpdate:modelValue":l[3]||(l[3]=t=>o.value=t),value:r(e).Typedefs,type:"checkbox",class:"form-checkbox rounded-sm h-5 w-5 text-purple-800"},null,8,G),[[c,o.value]]),I]),s("div",J,[u(s("input",{"onUpdate:modelValue":l[4]||(l[4]=t=>o.value=t),value:r(e).Events,type:"checkbox",class:"form-checkbox rounded-sm h-5 w-5 text-yellow-900"},null,8,K),[[c,o.value]]),O])]),s("div",null,[s("ul",Q,[(p(!0),h(T,null,V(r(y),t=>(p(),h("li",{key:t.computedName,class:"cursor-pointer grid grid-layout-search items-center !min-w-0 !min-h-0 break-words-legacy !p-0"},[s("span",Y,[s("span",{class:M(["inline-flex items-center justify-center w-6 h-6 rounded-md",v(t.type)])},x(f(t.type)),3)]),P(g,{exact:"",to:t.getLinkPath()},{default:U(()=>[n(x(t.computedName),1)]),_:2},1032,["to"])]))),128))])])])])}}});export{se as default};
