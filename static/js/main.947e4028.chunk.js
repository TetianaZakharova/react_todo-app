(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),o=a.n(r),c=(a(13),a(14),a(5)),s=a(1),i=a(2),u=a(4),m=a(3),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:""},e.handleInputChange=function(t){var a=t.target;e.setState({title:a.value})},e.handleReset=function(){e.setState({title:""})},e.handleSubmit=function(t){t.preventDefault();var a=e.props,n=a.addNewTodo,l=a.todos,r=e.state.title;r.trim()?(n({title:r,id:l.length+1,comleted:!1}),e.handleReset()):e.setState({title:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.title;return l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:e,onChange:this.handleInputChange})))}}]),a}(l.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={titleInList:e.props.title},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.id,n=this.state.titleInList;return l.a.createElement("li",null,l.a.createElement("form",null,l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",id:a}),l.a.createElement("label",{htmlFor:"todo-1"},t,a),l.a.createElement("button",{type:"button",className:"destroy"})),l.a.createElement("input",{type:"text",className:"edit",value:n})))}}]),a}(l.a.Component),h=function(e){var t=e.todos;return l.a.createElement("section",{className:"main"},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all"}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement("ul",{className:"todo-list"},t.map((function(e,t){return l.a.createElement(p,Object.assign({key:e.id},e))}))))},f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},"3 items left"),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:"selected"},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active"},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed"},"Completed"))),l.a.createElement("button",{type:"button",className:"clear-completed"},"Clear completed"))}}]),a}(l.a.Component),b=[{title:"task my task",id:1,completed:!1},{title:"what do you need",id:2,completed:!1},{title:"for world peace",id:3,completed:!0}],E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={todos:Object(c.a)(b)},e.addNewTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(c.a)(e.todos),[t])}}))},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"todoapp"},l.a.createElement(d,{addNewTodo:this.addNewTodo,todos:this.state.todos}),l.a.createElement(h,{todos:this.state.todos}),l.a.createElement(f,null))}}]),a}(l.a.Component);o.a.render(l.a.createElement(E,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.947e4028.chunk.js.map