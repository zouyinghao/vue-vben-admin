let e=document.createElement("style");e.innerHTML=".box[data-v-49e309b4]{width:150px;height:150px;margin-top:20px;background:pink}",document.head.appendChild(e);import{a,r as s,O as t,Q as i,i as o,o as n,j as l,k as r,bw as d,ab as c,ac as p,R as u,p as v}from"./index.3e933661.js";import"./xlsx.a48e520c.js";import{a as m}from"./index.caa9c205.js";import"./omit.e1a1ead6.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.cd4888b0.js";import"./CheckOutlined.8996393f.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.e195d265.js";import"./domUtils.f290d5ee.js";import{F as S,S as b,a as x,b as T,c as f,d as j,e as h,f as R,g as X,h as Y,i as k,E as w,s as y}from"./index.9bba01cc.js";const E=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((e=>({label:e,value:e,key:e})));var _=a({components:{Select:m,FadeTransition:S,ScaleTransition:b,SlideYTransition:x,ScrollYTransition:T,SlideYReverseTransition:f,ScrollYReverseTransition:j,SlideXTransition:h,ScrollXTransition:R,SlideXReverseTransition:X,ScrollXReverseTransition:Y,ScaleRotateTransition:k,ExpandXTransition:w,ExpandTransition:y},setup(){const e=s("Fade"),a=s(!0);return{options:E,value:e,start:function(){a.value=!1,setTimeout((()=>{a.value=!0}),300)},show:a}}});const g=u("data-v-49e309b4");t("data-v-49e309b4");const F={class:"p-4"},C={class:"flex"},O=v(" start "),U={class:"box"};i();const A=g(((e,a,s,t,i,u)=>{const v=o("Select"),m=o("a-button");return n(),l("div",F,[r("div",C,[r(v,{options:e.options,value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),r(m,{type:"primary",class:"ml-4",onClick:e.start},{default:g((()=>[O])),_:1},8,["onClick"])]),(n(),l(d(`${e.value}Transition`),null,{default:g((()=>[c(r("div",U,null,512),[[p,e.show]])])),_:1}))])}));_.render=A,_.__scopeId="data-v-49e309b4";export default _;