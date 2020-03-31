(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,function(t,e,a){t.exports={input:"ContactForm_input__1MxCM",paragraf:"ContactForm_paragraf__1MUax",buttonAdd:"ContactForm_buttonAdd__3cNuo"}},,,,,function(t,e,a){t.exports={contactListItem:"ContactList_contactListItem__8Pj90",buttonDel:"ContactList_buttonDel__3-v02"}},function(t,e,a){t.exports={formBox:"App_formBox__2-5pa",title:"App_title__2SYEJ",paragraf:"App_paragraf__pSZKK"}},function(t,e,a){t.exports={search:"Filter_search__3mVQ8",paragraf:"Filter_paragraf__2NgUJ"}},,,,,function(t,e,a){t.exports=a(18)},,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=a(12),m=a(2),i=a(3),s=a(4),u=a(5),p=a(11),f=a(20),b=a(1),d=a.n(b),h=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault(),t.props.submitContact({name:t.state.name,number:t.state.number,id:Object(f.a)()}),t.setState({name:"",number:""})},t.handleChange=function(e){t.setState(Object(p.a)({},e.target.name,e.target.value))},t}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h2",{className:d.a.paragraf},"Name"),r.a.createElement("input",{type:"text",name:"name",placeholder:"Enter Name",maxLength:"18",onChange:this.handleChange,value:this.state.name,className:d.a.input}),r.a.createElement("h2",{className:d.a.paragraf},"Number"),r.a.createElement("input",{type:"tel",pattern:"(\\+?\\d[- .]*){7,9}",maxLength:"9",name:"number",placeholder:"Enter Number",onChange:this.handleChange,value:this.state.number,className:d.a.input}),r.a.createElement("button",{type:"submit",className:d.a.buttonAdd},"Add contact")))}}]),a}(n.Component),g=a(6),C=a.n(g),_=function(t){var e=t.contacts,a=t.deleteContact;return r.a.createElement("ul",{className:C.a.contactList},e.map((function(t){return r.a.createElement("li",{key:t.id,className:C.a.contactListItem},r.a.createElement("span",null,t.name,": "),r.a.createElement("span",null,t.number),r.a.createElement("button",{className:C.a.buttonDel,type:"button",onClick:a,id:t.id},"Delete"))})))},E=a(8),N=a.n(E),v=function(t){var e=t.getName;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:N.a.paragraf},"Find contact by name"),r.a.createElement("input",{className:N.a.search,placeholder:"Search by name",type:"text",onChange:e}))},y=a(7),x=a.n(y),j=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.submitContact=function(e){console.log("data",{data:e}),t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[e])}}))},t.deleteContact=function(e){var a=e.target.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==a}))}}))},t.getName=function(e){t.setState({filter:e.target.value})},t.filterContacts=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:x.a.formBox},r.a.createElement("h2",{className:x.a.title},"Phonebook"),r.a.createElement(h,{submitContact:this.submitContact}),r.a.createElement("h2",{className:x.a.paragraf},"Contacts"),r.a.createElement(v,{getName:this.getName}),r.a.createElement(_,{contacts:this.filterContacts(),deleteContact:this.deleteContact}))}}]),a}(n.Component);o.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.bfab09d8.chunk.js.map