(function(e){function t(t){for(var r,c,s=t[0],u=t[1],i=t[2],l=0,f=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0287":function(e,t,n){"use strict";n("967f")},"0db4":function(e,t,n){"use strict";n("1852")},"15f6":function(e,t,n){},1852:function(e,t,n){},"1e29":function(e,t,n){"use strict";n("15f6")},"3dbf":function(e,t,n){},"4c02":function(e,t,n){"use strict";n("a3ab")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"};function o(e,t,n,o,c,s){var u=Object(r["v"])("Header"),i=Object(r["v"])("router-view"),d=Object(r["v"])("Footer");return Object(r["o"])(),Object(r["d"])("div",a,[Object(r["f"])(u,{onToggleAddTask:s.toggleAddTask,title:"Task Tracker",showAddTask:c.showAddTask},null,8,["onToggleAddTask","showAddTask"]),Object(r["f"])(i,{showAddTask:c.showAddTask},null,8,["showAddTask"]),Object(r["f"])(d)])}var c=Object(r["F"])("data-v-627f39db"),s=c((function(e,t,n,a,o,c){var s=Object(r["v"])("Button");return Object(r["o"])(),Object(r["d"])("header",null,[Object(r["f"])("h1",null,Object(r["x"])(n.title),1),Object(r["E"])(Object(r["f"])(s,{onBtnClick:t[1]||(t[1]=function(t){return e.$emit("toggle-add-task")}),text:n.showAddTask?"Close":"Add Task",color:n.showAddTask?"red":"green"},null,8,["text","color"]),[[r["B"],c.homePage]])])}));function u(e,t,n,a,o,c){return Object(r["o"])(),Object(r["d"])("button",{onClick:t[1]||(t[1]=function(e){return c.onClick()}),style:{background:n.color},class:"btn"},Object(r["x"])(n.text),5)}var i={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("btn-click")}}},d=n("d959"),l=n.n(d);const f=l()(i,[["render",u]]);var b=f,p={name:"Header",props:{title:String,showAddTask:Boolean},components:{Button:b},computed:{homePage:function(){return"/"===this.$route.path}}};n("0db4");const k=l()(p,[["render",s],["__scopeId","data-v-627f39db"]]);var m=k,j=Object(r["F"])("data-v-5bb6c960");Object(r["r"])("data-v-5bb6c960");var O=Object(r["f"])("p",null,"Copyright © 2021",-1),h=Object(r["e"])("About");Object(r["p"])();var v=j((function(e,t){var n=Object(r["v"])("router-link");return Object(r["o"])(),Object(r["d"])("footer",null,[O,Object(r["f"])(n,{to:"/about"},{default:j((function(){return[h]})),_:1})])}));n("ffe0");const g={},T=l()(g,[["render",v],["__scopeId","data-v-5bb6c960"]]);var y=T,w={name:"App",components:{Header:m,Footer:y},data:function(){return{showAddTask:!1}},methods:{toggleAddTask:function(){this.showAddTask=!this.showAddTask}}};n("0287");const x=l()(w,[["render",o]]);var A=x,R=n("6c02");function S(e,t,n,a,o,c){var s=Object(r["v"])("AddTask"),u=Object(r["v"])("Tasks");return Object(r["o"])(),Object(r["d"])(r["a"],null,[Object(r["E"])(Object(r["f"])(s,{onAddTask:c.addTask},null,8,["onAddTask"]),[[r["B"],n.showAddTask]]),Object(r["f"])(u,{onToggleReminder:c.toggleReminder,onDeleteTask:c.deleteTask,tasks:o.tasks},null,8,["onToggleReminder","onDeleteTask","tasks"])],64)}var _=n("5530"),P=n("2909"),B=n("1da1");n("96cf"),n("d3b7"),n("99af"),n("4de4"),n("d81d");function C(e,t,n,a,o,c){var s=Object(r["v"])("Task");return Object(r["o"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(n.tasks,(function(t){return Object(r["o"])(),Object(r["d"])("div",{key:t.id},[Object(r["f"])(s,{onToggleReminder:function(n){return e.$emit("toggle-reminder",t.id)},onDeleteTask:function(n){return e.$emit("delete-task",t.id)},task:t},null,8,["onToggleReminder","onDeleteTask","task"])])})),128)}function D(e,t,n,a,o,c){return Object(r["o"])(),Object(r["d"])("div",{onDblclick:t[2]||(t[2]=function(t){return e.$emit("toggle-reminder",n.task.id)}),class:[n.task.reminder?"reminder":"","task"]},[Object(r["f"])("h3",null,[Object(r["e"])(Object(r["x"])(n.task.text)+" ",1),Object(r["f"])("i",{onClick:t[1]||(t[1]=function(t){return e.$emit("delete-task",n.task.id)}),class:"fas fa-times"})]),Object(r["f"])("p",null,Object(r["x"])(n.task.day),1)],34)}var E={name:"Task",props:{task:Object}};n("4c02");const $=l()(E,[["render",D]]);var M=$,F={name:"Tasks",props:{tasks:Array},components:{Task:M},emits:["delete-task","toggle-reminder"]};const H=l()(F,[["render",C]]);var J=H,U=Object(r["F"])("data-v-f83cc450");Object(r["r"])("data-v-f83cc450");var V={class:"form-control"},I=Object(r["f"])("label",null,"Task",-1),G={class:"form-control"},N=Object(r["f"])("label",null,"Day & Time",-1),z={class:"form-control form-control-check"},L=Object(r["f"])("label",null,"Set Reminder",-1),q=Object(r["f"])("input",{type:"submit",value:"Save Task",class:"btn btn-block"},null,-1);Object(r["p"])();var K=U((function(e,t,n,a,o,c){return Object(r["o"])(),Object(r["d"])("form",{onSubmit:t[4]||(t[4]=function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),class:"add-form"},[Object(r["f"])("div",V,[I,Object(r["E"])(Object(r["f"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.text=e}),name:"text",placeholder:"Add Task"},null,512),[[r["A"],o.text]])]),Object(r["f"])("div",G,[N,Object(r["E"])(Object(r["f"])("input",{type:"date","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.day=e}),name:"day",placeholder:"Add Day & Time"},null,512),[[r["A"],o.day]])]),Object(r["f"])("div",z,[L,Object(r["E"])(Object(r["f"])("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.reminder=e}),name:"reminder"},null,512),[[r["z"],o.reminder]])]),q],32)})),Q={name:"AddTask",data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(e){if(e.preventDefault(),this.text){var t={id:Math.floor(1e5*Math.random()),text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",t),this.text="",this.day="",this.reminder=!1}else alert("Please add a task")}}};n("1e29");const W=l()(Q,[["render",K],["__scopeId","data-v-f83cc450"]]);var X=W,Y={name:"Home",props:{showAddTask:Boolean},components:{Tasks:J,AddTask:X},data:function(){return{tasks:[]}},methods:{addTask:function(e){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("api/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 2:return r=n.sent,n.next=5,r.json();case 5:a=n.sent,t.tasks=[].concat(Object(P["a"])(t.tasks),[a]);case 7:case"end":return n.stop()}}),n)})))()},deleteTask:function(e){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!confirm("Are you sure?")){n.next=5;break}return n.next=3,fetch("api/tasks/".concat(e),{method:"DELETE"});case 3:r=n.sent,200===r.status?t.tasks=t.tasks.filter((function(t){return t.id!==e})):alert("Error deleting task");case 5:case"end":return n.stop()}}),n)})))()},toggleReminder:function(e){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.fetchTask(e);case 2:return r=n.sent,a=Object(_["a"])(Object(_["a"])({},r),{},{reminder:!r.reminder}),n.next=6,fetch("api/tasks/".concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 6:return o=n.sent,n.next=9,o.json();case 9:c=n.sent,t.tasks=t.tasks.map((function(t){return t.id===e?Object(_["a"])(Object(_["a"])({},t),{},{reminder:c.reminder}):t}));case 11:case"end":return n.stop()}}),n)})))()},fetchTasks:function(){return Object(B["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},fetchTask:function(e){return Object(B["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/tasks/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchTasks();case 2:e.tasks=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};const Z=l()(Y,[["render",S]]);var ee=Z,te=Object(r["f"])("h3",null,"Task Tracker's Version 1.0.0",-1),ne=Object(r["f"])("h4",null,"Created By Anisha Gupta",-1),re=Object(r["e"])("Go Back");function ae(e,t,n,a,o,c){var s=Object(r["v"])("router-link");return Object(r["o"])(),Object(r["d"])(r["a"],null,[te,ne,Object(r["f"])(s,{to:"/"},{default:Object(r["D"])((function(){return[re]})),_:1})],64)}var oe={name:"About",inheritAttrs:!1};const ce=l()(oe,[["render",ae]]);var se=ce,ue=[{path:"/",name:"Home",component:ee},{path:"/about",name:"About",component:se}],ie=Object(R["a"])({history:Object(R["b"])("/"),routes:ue}),de=ie;Object(r["c"])(A).use(de).mount("#app")},"967f":function(e,t,n){},a3ab:function(e,t,n){},ffe0:function(e,t,n){"use strict";n("3dbf")}});
//# sourceMappingURL=app.36e1ed94.js.map