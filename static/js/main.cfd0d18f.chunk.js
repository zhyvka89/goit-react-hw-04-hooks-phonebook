(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Form_form__2YE_q",label:"Form_label__3OSlN",input:"Form_input__14Mfi",button:"Form_button__29dNZ"}},,,function(e,t,n){e.exports={list:"ContactList_list__2Qv-P",phonenumber:"ContactList_phonenumber__3CBeu",button:"ContactList_button__29nuT"}},,function(e,t,n){e.exports={label:"Filter_label__1gvgt",input:"Filter_input__2LatP"}},,function(e,t,n){e.exports={container:"Container_container__1g2MZ"}},,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),o=n.n(c),u=(n(16),n(11)),i=n(2),s=n(10),l=n.n(s),b=n(0),j=function(e){var t=e.children;return Object(b.jsx)("div",{className:l.a.container,children:t})},m=function(e){var t=e.children;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(j,{children:t})})},d=n(3),f=n.n(d);function h(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1],u=Object(a.useState)(""),s=Object(i.a)(u,2),l=s[0],j=s[1],m=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":j(a);break;default:return}},d=function(){o(""),j("")};return Object(b.jsxs)("form",{className:f.a.form,onSubmit:function(e){e.preventDefault(),t(c,l),d()},children:[Object(b.jsxs)("label",{className:f.a.label,children:["Name",Object(b.jsx)("input",{className:f.a.input,type:"text",name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:m,required:!0})]}),Object(b.jsxs)("label",{className:f.a.label,children:["Phone Number",Object(b.jsx)("input",{className:f.a.input,type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:m,required:!0})]}),Object(b.jsx)("button",{className:f.a.button,type:"submit",children:"Add Contact"})]})}var O=n(8),p=n.n(O),_=function(e){var t=e.value,n=e.onChange;return Object(b.jsxs)("label",{className:p.a.label,children:["Find contacts by name",Object(b.jsx)("input",{className:p.a.input,type:"text",value:t,onChange:n})]})},x=n(6),v=n.n(x),C=function(e){var t=e.data,n=e.onDeleteContact;return Object(b.jsx)("ol",{className:v.a.list,children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(b.jsxs)("li",{children:[a,": ",Object(b.jsx)("span",{className:v.a.phonenumber,children:r}),Object(b.jsx)("button",{type:"button",className:v.a.button,onClick:function(){return n(t)},children:"Delete"})]},t)}))})};var g=n(21);function N(){var e=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(localStorage.getItem(e)))&&void 0!==n?n:t})),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){localStorage.setItem(e,JSON.stringify(c))}),[e,c]),[c,o]}("contacts",[]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(i.a)(c,2),s=o[0],l=o[1];return Object(b.jsxs)(m,{children:[Object(b.jsx)("h1",{children:"PhoneBook"}),Object(b.jsx)(h,{onSubmit:function(e,t){var a={name:e,number:t,id:Object(g.a)()};n.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?alert(e+" is already in your contacts"):r((function(e){return[a].concat(Object(u.a)(e))}))}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(_,{value:s,onChange:function(e){l(e.currentTarget.value)}}),Object(b.jsx)(C,{data:function(){var e=s.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}n(18);o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.cfd0d18f.chunk.js.map