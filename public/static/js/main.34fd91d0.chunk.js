(this.webpackJsonpjustproject=this.webpackJsonpjustproject||[]).push([[0],{155:function(e,t){},157:function(e,t){},168:function(e,t){},170:function(e,t){},196:function(e,t){},198:function(e,t){},199:function(e,t){},204:function(e,t){},206:function(e,t){},225:function(e,t){},237:function(e,t){},240:function(e,t){},267:function(e,t,n){},269:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n.n(r),s=n(49),c=n.n(s),o=n(41),l="LOGIN",u="DATA_LOAD",d=Object(o.c)(Object(o.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===l?t.payload:e},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===u?t.payload:e}}),{}),h=n(8),j=n(141),b=n(14),p=n(7),m=n(22),f=n(51),v=n(52),O=n(55),g=n(54),x=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.data||fetch("./moomin.json").then((function(e){return e.json()})).then((function(t){e.props.setContent(t.data)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"block",children:[Object(a.jsx)("div",{className:"title",children:"Tove Marika Jansson"}),Object(a.jsx)("div",{className:"block",children:"Tove was a Swedish-speaking Finnish author, novelist, painter, illustrator and comic strip author. Brought up by artistic parents, Jansson studied art from 1930 to 1938 in Stockholm, Helsinki and Paris. Her first solo art exhibition was in 1943. At the same time, she was writing short stories and articles for publication, as well as creating the graphics for book covers and other purposes. She continued to work as an artist and a writer for the rest of her life."}),Object(a.jsx)("div",{className:"block",children:"Jansson wrote the Moomin books for children, starting in 1945 with The Moomins and the Great Flood. The next two books, Comet in Moominland and Finn Family Moomintroll, published in 1946 and 1948 respectively, were highly successful in sales, adding to sales of the first book. For her work as a children's writer she received the Hans Christian Andersen Medal in 1966."}),Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)("img",{src:"/tove.png",alt:""})})]})}}]),n}(i.a.Component),k=Object(b.b)((function(e){return Object(h.a)({},e.data)}),(function(e){return{setContent:function(t){return e(function(e){return{type:u,payload:e}}({data:t}))}}}))(x),w=n(27),y=n(82),N=n.n(y),C=n(53);var F,M=n(140),S=n(84),q=function(e){var t=null;switch(e.icon){case"email":t=S.a;break;case"password":t=S.b}return t&&Object(a.jsx)("span",{className:"icon is-left",children:Object(a.jsx)(M.a,{icon:t})})},A=function(e){return!e.valid&&Object(a.jsx)("p",{className:"help is-danger",children:e.message})},D=(F=function(e){return Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("label",{className:"label",htmlFor:e.id,children:e.title}),Object(a.jsxs)("div",{className:"control has-icons-left",children:[Object(a.jsx)("input",{type:e.type,id:e.id,name:e.name,className:"input ".concat(e.valid?"":"is-danger"),defaultValue:e.value,required:e.required,"data-valid":e.valid,onChange:function(t){return e.onChange(t.target)}}),Object(a.jsx)(q,{icon:e.icon||e.type})]}),Object(a.jsx)(A,{message:e.message,valid:e.valid})]})},function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).handlerChangeInput=a.handlerChangeInput.bind(Object(C.a)(a)),a.state={valid:e.valid,errMessages:[]},a}return Object(v.a)(n,[{key:"handlerChangeInput",value:function(e){var t=this,n=e.value,a=this.props.validationRules,r=!0,i=[];if(a)for(var s in a){var c=a[s],o=this.validate(n,s,c);if("boolean"===typeof o)r=r&&o&&0===i.length;else{r=!1;var l=o;this.props.errMessages&&s in this.props.errMessages&&(l=this.props.errMessages[s]),i.push(l)}}if(this.setState({valid:r,errMessages:i}),!r&&this.props.stateValidForm)this.props.changeValidForm(!1);else if(this.props.currentForm){var u=!0;this.props.checkFields.forEach((function(e){var n=t.props.currentForm[e];u=u&&n&&n.dataset.valid})),this.props.changeValidForm(u)}this.props.handlerChange&&this.props.handlerChange()}},{key:"validate",value:function(e,t,n){switch(t){case"required":if(n)return this.required(e)||"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435";break;case"minlength":return this.minlength(e,n)||"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 ".concat(n," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432");case"equalfield":if(this.props.currentForm){var a=this.props.currentForm[n];if(a&&"value"in a)return this.equal(e,a.value)||"\u041e\u0448\u0438\u0431\u043a\u0430"}break;case"regexp":return this.regexp(e,n)||"\u041e\u0448\u0438\u0431\u043a\u0430"}return!0}},{key:"render",value:function(){return Object(a.jsx)(F,Object(h.a)(Object(h.a)({},this.props),{},{onChange:this.handlerChangeInput,valid:this.state.valid,message:this.state.errMessages.length?this.state.errMessages[0]:null}))}},{key:"required",value:function(e){return e.trim().length>0}},{key:"minlength",value:function(e,t){return e.length>=t}},{key:"equal",value:function(e,t){return e===t}},{key:"regexp",value:function(e,t){var n={email:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/}[t]||new RegExp(t);return 0===e.length||n.test(e)}}]),n}(i.a.Component)),E={email:{type:"email",title:"Email",validationRules:{required:!1,regexp:"email"},errMessages:{regexp:"\u041e\u0448\u0438\u0431\u043a\u0430: \u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 E-Mail"},valid:!0},pwd:{type:"password",title:"Password",minlength:6,validationRules:{required:!1,minlength:6},errMessages:{minlength:"\u041e\u0448\u0438\u0431\u043a\u0430: \u0412 \u043f\u0430\u0440\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"},valid:!0},repeatpwd:{type:"password",title:"Password",minlength:6,validationRules:{required:!1,minlength:6,equalfield:"pwd"},errMessages:{minlength:"\u041e\u0448\u0438\u0431\u043a\u0430: \u0412 \u043f\u0430\u0440\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",equalfield:"\u041f\u0430\u0440\u043e\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c"},valid:!0}},I="auth",R="reg",T=function(e){var t=e.user,n=e.password;return"9591e7a4fc90a027f7b7594b38a29a41"===N.a.MD5(t).toString()&&"d9d1b168eac8f197e0576b56cfc23ece"===N.a.MD5(n).toString()};var V=Object(b.b)(null,(function(e){return{login:function(t){return e(function(e){return{type:l,payload:e}}({user:t}))}}}))((function(e){var t=Object(r.useState)(!0),n=Object(w.a)(t,2),i=n[0],s=n[1],c=Object(r.useState)(!1),o=Object(w.a)(c,2),l=o[0],u=o[1],d=Object(r.useRef)(),j=Array.from(Object.entries(E));e.mode===I&&j.pop();var b=j.map((function(e){var t=Object(w.a)(e,2),n=t[0],a=t[1];return Object(r.createElement)(D,Object(h.a)(Object(h.a)({},a),{},{key:"fieldBox-".concat(n),name:n,currentForm:d.current,checkFields:j.filter((function(e){var t=Object(w.a)(e,2);t[0];return"validationRules"in t[1]})).map((function(e){return e[0]})),stateValidForm:i,changeValidForm:s,handlerChange:function(){u(!1)}}))}));return Object(a.jsxs)("form",{ref:d,children:[Object(a.jsxs)("div",{className:"subtitle",children:["\u0424\u043e\u0440\u043c\u0430 ",e.mode===I?"\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438":"\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"]}),b,Object(a.jsx)("div",{className:"block text-right",children:Object(a.jsx)("button",{className:"button is-link",onClick:function(t){t.preventDefault(),i&&function(e,t,n,a){var r=(a||R).mode;e.preventDefault(),r===I&&(T({user:t.email.value,password:t.pwd.value})?(a.login({email:t.email.value}),a.history.push(B+"/profile")):n(!0))}(t,d.current,u,Object(h.a)({},e)),e.handlerSubmit&&e.handlerSubmit()},children:e.mode===R?"Ok":"\u0412\u043e\u0439\u0442\u0438"})}),Object(a.jsx)("div",{className:"help is-danger ".concat(l&&e.mode===I?"":"is-hidden"),children:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435 \u0432\u0435\u0440\u043d\u043e"})]})})),J=Object(p.h)(V);function H(){var e=Object(r.useState)(!1),t=Object(w.a)(e,2),n=t[0],i=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(J,{mode:I}),Object(a.jsx)("a",{onClick:function(){i(!0)},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("div",{className:"modal ".concat(n?"is-active":""),children:[Object(a.jsx)("div",{className:"modal-background"}),Object(a.jsx)("div",{className:"modal-content",children:Object(a.jsx)("div",{className:"box",children:Object(a.jsx)(J,{mode:R,handlerSubmit:function(){i(!1)}})})}),Object(a.jsx)("button",{className:"modal-close is-large",onClick:function(){i(!1)}})]})]})}var P=Object(b.b)((function(e){return Object(h.a)({},e.data)}))((function(e){var t=e.data&&e.data.length?e.data.filter((function(e){return e.page})).map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)(m.b,{to:"".concat(B,"/news/").concat(e.page),children:e.title}),"\xa0(\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ",e.page,")"]},e.id)})):"Not Found";return Object(a.jsx)("div",{children:Object(a.jsx)("ul",{children:t})})}));var _=Object(b.b)((function(e){return Object(h.a)({},e.data)}))((function(e){var t=Object(p.g)().id,n=e.data&&e.data[+t]?e.data[+t-1].content:"Not Found";return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"subtitle",children:[t,"."]}),Object(a.jsx)("div",{className:"contentChapter",dangerouslySetInnerHTML:{__html:n}})]})})),z=Object(b.b)((function(e){return Object(h.a)({},e.user)}))((function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"title",children:"Profile"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Email:"})," ",e.user&&e.user.email]})]})})),B="/justproject",L=Object(b.b)((function(e){return{user:e&&e.user}}))((function(e){var t=e.component,n=Object(j.a)(e,["component"]),r=n.user;return Object(a.jsx)(p.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return r?Object(a.jsx)(t,Object(h.a)({},e)):Object(a.jsx)(p.a,{to:"".concat(B,"/login")})}}))})),Z=function(e){var t=e.store;return Object(a.jsx)(b.a,{store:t,children:Object(a.jsxs)(m.a,{children:[Object(a.jsxs)("nav",{className:"tabs",children:[Object(a.jsx)(m.c,{exact:!0,activeClassName:"is-invisible",to:"".concat(B,"/"),children:Object(a.jsx)("span",{children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})}),Object(a.jsx)(m.c,{activeClassName:"is-active",to:"".concat(B,"/news"),children:Object(a.jsx)("span",{children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(a.jsx)(m.c,{activeClassName:"is-active",to:"".concat(B,"/profile"),children:Object(a.jsx)("span",{children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})})]}),Object(a.jsxs)(p.d,{children:[Object(a.jsx)(p.b,{exact:!0,path:"".concat(B,"/"),component:k}),Object(a.jsx)(p.b,{exact:!0,path:"".concat(B,"/news"),component:P}),Object(a.jsx)(p.b,{path:"".concat(B,"/news/:id"),children:Object(a.jsx)(_,{})}),Object(a.jsx)(p.b,{path:"".concat(B,"/login"),component:H}),Object(a.jsx)(L,{path:"".concat(B,"/profile"),component:z})]})]})})};n(267),n(268);c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(Z,{store:d})}),document.getElementById("root"))}},[[269,1,2]]]);
//# sourceMappingURL=main.34fd91d0.chunk.js.map