import{a as s,i as t,o as i,j as e,k as a,U as o,V as n,w as l,p as c}from"./index.3e933661.js";import"./xlsx.a48e520c.js";import{A as r}from"./index.e160a50a.js";import"./CloseOutlined.09b38309.js";import"./LeftOutlined.a332afde.js";import{c as m}from"./functional.b99ed96c.js";import"./RightOutlined.5716f2a4.js";const p=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var d=s({components:{Alert:r},setup:()=>({imgList:p,handleClick:function(s){m({imageList:[s]})},handlePreview:function(){m({imageList:p})}})});const u={class:"p-4"},f={class:"flex justify-center mt-4"},h=c("预览图片");d.render=function(s,c,r,m,p,d){const j=t("Alert"),g=t("a-button");return i(),e("div",u,[a(j,{message:"有预览图",type:"info"}),a("div",f,[(i(!0),e(o,null,n(s.imgList,(t=>(i(),e("img",{src:t,key:t,class:"mr-2",onClick:i=>s.handleClick(t)},null,8,["src","onClick"])))),128))]),a(j,{message:"无预览图",type:"info"}),a(g,{onClick:s.handlePreview,type:"primary",class:"mt-4"},{default:l((()=>[h])),_:1},8,["onClick"])])};export default d;