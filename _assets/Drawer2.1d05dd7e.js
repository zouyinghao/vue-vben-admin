import{a as e,i as r,o as a,j as t,w as s,k as i,x as o,p as n}from"./index.3e933661.js";import"./xlsx.a48e520c.js";import{B as c,a as d}from"./index.4a8d6174.js";import"./index.243e732a.js";import"./LeftOutlined.a332afde.js";import"./RightOutlined.5716f2a4.js";var l=e({components:{BasicDrawer:c},setup(){const[e,{closeDrawer:r}]=d();return{register:e,closeDrawer:r}}});const p=n(" Drawer Info. "),f=n("内部关闭drawer");l.render=function(e,n,c,d,l,m){const u=r("a-button"),w=r("BasicDrawer");return a(),t(w,o(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:s((()=>[p,i(u,{type:"primary",onClick:e.closeDrawer},{default:s((()=>[f])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default l;