(this["webpackJsonpreact-forms-handling"]=this["webpackJsonpreact-forms-handling"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),u=n.n(c),l=n(1),i=(n(13),function(e){var t=e.value,n=e.title;return r.a.createElement("div",null,r.a.createElement("div",null,n),r.a.createElement("div",null,t))}),o=function(e){var t=e.data,n=e.requestName;return r.a.createElement("div",null,r.a.createElement("h2",null,"Request List"),t.map((function(e){return r.a.createElement(i,{key:e,value:e,title:n})})))},m=n(4),s=n(5),f=n(7),d=n(6),v=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,"Form Component")}}]),n}(a.Component),E=function(e){var t=e.data;return r.a.createElement("div",null,r.a.createElement("h2",null,"Forms Container"),t.map((function(e){return r.a.createElement(v,{key:e,value:e})})))};var b=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(),i=Object(l.a)(u,2),m=i[0],s=i[1];return Object(a.useEffect)((function(){fetch("https://d76afe3b-6e74-4da7-b7ac-fff456f1bb50.mock.pstmn.io/data").then((function(e){return e.json()})).then((function(e){c(e.requestID),s(e.dataType)}))}),[]),r.a.createElement("div",{className:"main-window"},r.a.createElement(o,{data:n,requestName:m}),r.a.createElement(E,{data:n}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.74411c1b.chunk.js.map