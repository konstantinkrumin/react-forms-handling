(this["webpackJsonpreact-forms-handling"]=this["webpackJsonpreact-forms-handling"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=a(2),m=(a(15),function(e){var t=e.value,a=e.title,n=e.handleSelection,l=!0===e.isItemSelected[t]?"request-item__active":null;return r.a.createElement("div",{className:l+" request-item",onClick:function(){n(t)}},r.a.createElement("div",{className:"request-item__title"},a),r.a.createElement("div",{className:"request-item__value"},t))}),s=function(e){var t=e.data,a=e.requestName,n=e.handleSelection,l=e.isItemSelected;return r.a.createElement("div",{className:"requests-list-containter"},t.map((function(e){return r.a.createElement(m,{key:e,value:e,title:a,handleSelection:n,isItemSelected:l})})))},u=a(5),o=a(6),d=a(7),h=a(1),f=a(9),p=a(8),b=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={representative:"",textInput:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(u.a)({},t,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleFormSubmit(this.props.requestNum)}},{key:"render",value:function(){var e=!0===this.props.isItemSelected[this.props.requestNum]?"form_show":"form_hide",t=this.props.requestNum,a=this.state.representative,n=this.state.textInput;return r.a.createElement("form",{className:e+" form-component",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-component__element"},"\u041e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u2116 ",t),r.a.createElement("br",null),r.a.createElement("input",{className:"form-component__element",type:"text",name:"representative",value:a,placeholder:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044c",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("textarea",{className:"form-component__element",name:"textInput",value:n,placeholder:"\u0421\u0443\u0442\u044c \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{className:"form-component__element button",type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}))}}]),a}(n.Component),v=function(e){var t=e.data,a=e.handleFormSubmit,n=e.isItemSelected;return r.a.createElement("div",{className:"forms-container"},t.map((function(e){return r.a.createElement(b,{key:e,requestNum:e,handleFormSubmit:a,isItemSelected:n})})))},E=function(){return r.a.createElement("div",{className:"empty-dataset-window"},r.a.createElement("div",{className:"empty-dataset-window__message"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0439 \u043f\u0443\u0441\u0442"))},S=function(){return r.a.createElement("div",{className:"loading-window"},r.a.createElement("h1",{className:"loading-window__message"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."))};var N=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),m=Object(i.a)(c,2),u=m[0],o=m[1],d=Object(n.useState)({}),h=Object(i.a)(d,2),f=h[0],p=h[1],b=Object(n.useState)(!0),N=Object(i.a)(b,2),g=N[0],_=N[1];function O(e){var t=JSON.parse(JSON.stringify(f));for(var a in t)Number.parseInt(a)===e?t[a]=!0:t[a]=!1;p(t)}return Object(n.useEffect)((function(){fetch("https://d76afe3b-6e74-4da7-b7ac-fff456f1bb50.mock.pstmn.io/data").then((function(e){return e.json()})).then((function(e){l(e.requestID),o(e.dataType),p(function(e){var t={};return e.map((function(e,a){return t[e]=0===a})),t}(e.requestID)),_(!1)}))}),[]),Object(n.useEffect)((function(){a.length>0&&O(a[0])}),[a]),!1===g&&0!==a.length?r.a.createElement("div",{className:"main-window"},r.a.createElement(s,{data:a,requestName:u,handleSelection:O,isItemSelected:f}),r.a.createElement(v,{data:a,handleFormSubmit:function(e){var t=a.filter((function(t){return t!==e}));l(t)},isItemSelected:f})):!1===g&&0===a.length?r.a.createElement(E,null):r.a.createElement(S,null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.1159d7bb.chunk.js.map