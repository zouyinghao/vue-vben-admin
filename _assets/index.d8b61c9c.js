import{$ as e,a as t,J as a,M as n,v as r,aH as i,k as o}from"./index.3e933661.js";function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s=e(t({name:"ADivider",props:{prefixCls:String,type:{type:String,default:"horizontal"},dashed:{type:Boolean,default:!1},orientation:{type:String,default:"center"}},setup:function(e,t){var s=t.slots,c=a("configProvider",n).getPrefixCls,u=r((function(){return c("divider",e.prefixCls)})),d=r((function(){var t,a=e.type,n=e.dashed,r=e.orientation,i=r.length>0?"-"+r:r,o=u.value;return l(t={},o,!0),l(t,"".concat(o,"-").concat(a),!0),l(t,"".concat(o,"-with-text").concat(i),s.default),l(t,"".concat(o,"-dashed"),!!n),t}));return function(){var e,t=i(null===(e=s.default)||void 0===e?void 0:e.call(s));return o("div",{class:d.value,role:"separator"},[t.length?o("span",{class:"".concat(u.value,"-inner-text")},[t]):null])}}}));export{s as D};