let s=document.createElement("style");s.innerHTML=".scroll-wrap[data-v-6aa17979]{width:50%;height:300px;background:#fff}",document.head.appendChild(s);import{a as o,r as a,f as l,O as e,Q as r,i as t,o as c,j as i,k as n,U as p,V as d,n as m,R as f,p as u}from"./index.3e933661.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import{A as j}from"./index.e160a50a.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.e195d265.js";import{s as b,a as x}from"./index.97c0dc96.js";import"./index.243e732a.js";import"./RightOutlined.5716f2a4.js";import"./useTimeout.7f3ab19b.js";import"./resizeEvent.374e9514.js";import"./domUtils.f290d5ee.js";import"./useExpose.a4960c9f.js";import"./animation.d8e0bb7b.js";import"./index.9bba01cc.js";var v=o({components:{CollapseContainer:b,ScrollContainer:x,Alert:j},setup(){const s=a(null),o=()=>{const o=l(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const C=f("data-v-6aa17979");e("data-v-6aa17979");const _={class:"p-4"},T={class:"my-4"},h=u("滚动到100px位置"),k=u("滚动到800px位置"),y=u("滚动到顶部"),g=u("滚动到底部"),w={class:"scroll-wrap"},A={class:"p-3"};r();const E=C(((s,o,a,l,e,r)=>{const f=t("Alert"),u=t("a-button"),j=t("ScrollContainer");return c(),i("div",_,[n(f,{message:"抽取el-scrollbar，并对其进行扩展,滚动条美化,适用于各个浏览器",type:"info"}),n("div",T,[n(u,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:C((()=>[h])),_:1}),n(u,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:C((()=>[k])),_:1}),n(u,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:C((()=>[y])),_:1}),n(u,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:C((()=>[g])),_:1})]),n("div",w,[n(j,{class:"mt-4",ref:"scrollRef"},{default:C((()=>[n("ul",A,[(c(),i(p,null,d(100,(s=>n("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},m(s),1))),64))])])),_:1},512)])])}));v.render=E,v.__scopeId="data-v-6aa17979";export default v;