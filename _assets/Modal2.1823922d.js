import{a as e,i as s,o as t,j as o,w as i,k as a,x as r,p as l}from"./index.3e933661.js";import"./xlsx.a48e520c.js";import"./CloseOutlined.09b38309.js";import{B as n,a as d}from"./index.b83eb5e2.js";import"./index.243e732a.js";import"./RightOutlined.5716f2a4.js";import"./useTimeout.7f3ab19b.js";import"./useDebounce.388ff7a2.js";import"./resizeEvent.374e9514.js";import"./index.0e9d4f93.js";import"./useWindowSizeFn.6fb915be.js";var p=e({components:{BasicModal:n},setup(){const[e,{closeModal:s,setModalProps:t}]=d();return{register:e,closeModal:s,setModalProps:()=>{t({title:"Modal New Title"})}}}});const m=l("从内部关闭弹窗"),c=l("从内部修改title");p.render=function(e,l,n,d,p,u){const f=s("a-button"),j=s("BasicModal");return t(),o(j,r(e.$attrs,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:i((()=>[a(f,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:i((()=>[m])),_:1},8,["onClick"]),a(f,{type:"primary",onClick:e.setModalProps},{default:i((()=>[c])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default p;