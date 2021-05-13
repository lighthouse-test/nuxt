(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3,4],{197:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return c})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"f",(function(){return v}));n(39),n(155);var r=["Feature","Docs","Issue","Backend","Frontent"],o=[{id:1,name:"Add more frameworks",description:"We need to add more frameworks",type:"Issue",confidential:"Yes",remind:!0,date:"2021-04-07"}],c=function(){return o},d=function(t){return c().filter((function(e){return e.id===t}))[0]},l=function(t){var e=c();t.id=e.length?e[e.length-1].id+1:1,e.push(t)},f=function(t){var e=c(),n=d(t),r=e.indexOf(n);e.splice(r,1)},v=function(t){var e=d(t.id),n=c(),r=n.indexOf(e);n[r]=t}},198:function(t,e,n){"use strict";n.r(e);n(112);var r=n(34),o=n(59),c=n(60),d=n(36),l=n(11),f=(n(33),n(37));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(o.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).closeTodoHandler=function(){t.$emit("onClose")},t}return n}(f.c);_([Object(f.b)({type:Object,required:!0})],m.prototype,"todo",void 0);var h=m=_([f.a],m),y=n(35),component=Object(y.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h4",[t._v("Todo")]),t._v(" "),n("table",[n("tbody",[n("tr",[n("th",{attrs:{align:"left"}},[t._v("Name")]),t._v(" "),n("td",[t._v("\n          "+t._s(t.todo.name)+"\n        ")])]),t._v(" "),n("tr",[n("th",{attrs:{align:"left"}},[t._v("Description")]),t._v(" "),n("td",[t._v("\n          "+t._s(t.todo.description)+"\n        ")])]),t._v(" "),n("tr",[n("th",{attrs:{align:"left"}},[t._v("Type")]),t._v(" "),n("td",[t._v(t._s(t.todo.type))])]),t._v(" "),n("tr",[n("th",{attrs:{align:"left"}},[t._v("Confidential")]),t._v(" "),n("td",[t._v("\n          "+t._s(t.todo.confidential)+"\n        ")])]),t._v(" "),n("tr",[n("th",{attrs:{align:"left"}},[t._v("Remind")]),t._v(" "),n("td",[t._v(t._s(t.todo.remind))])]),t._v(" "),n("tr",[n("th",{attrs:{align:"left"}},[t._v("Date")]),t._v(" "),n("td",[t._v(t._s(t.todo.date))])]),t._v(" "),n("tr",[n("th",{attrs:{colspan:"2",align:"right"}},[n("button",{attrs:{type:"button"},on:{click:t.closeTodoHandler}},[t._v("Close")])])])])])])}),[],!1,null,null,null);e.default=component.exports},199:function(t,e,n){"use strict";n.r(e);n(112);var r=n(34),o=n(59),c=n(60),d=n(36),l=n(11),f=(n(33),n(38),n(29),n(48),n(61),n(37)),v=n(197);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},h=function(t){Object(o.a)(n,t);var e=_(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).types=v.a,t.errors={status:!1},t.updateTodoHandler=function(e){e.preventDefault(),t.errors={status:!1},t.todo.name||(t.errors.name="Name is required.",t.errors.status=!0),t.todo.description||(t.errors.description="Description is required.",t.errors.status=!0),t.todo.type||(t.errors.type="Type is required.",t.errors.status=!0),t.todo.date||(t.errors.date="Date is required.",t.errors.status=!0),setTimeout((function(){t.errors.status?alert("All Fields are required"):t.$emit("onAddOrUpdate",t.todo)}))},t}return n}(f.c);m([Object(f.b)({type:Object,required:!0})],h.prototype,"todo",void 0);var y=h=m([f.a],h),O=n(35),component=Object(O.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h4",[t._v(t._s(t.todo.id?"Update":"Add")+" Todo")]),t._v(" "),n("form",{attrs:{novalidate:""},on:{submit:t.updateTodoHandler}},[n("table",[n("tbody",[n("tr",[t._m(0),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.name,expression:"todo.name"}],attrs:{id:"name",type:"text",name:"name",required:""},domProps:{value:t.todo.name},on:{input:function(e){e.target.composing||t.$set(t.todo,"name",e.target.value)}}})]),t._v(" "),n("td",[t._v(t._s(t.errors.name))])]),t._v(" "),n("tr",[t._m(1),t._v(" "),n("td",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.todo.description,expression:"todo.description"}],attrs:{id:"description",name:"description",required:""},domProps:{value:t.todo.description},on:{input:function(e){e.target.composing||t.$set(t.todo,"description",e.target.value)}}})]),t._v(" "),n("td",[t._v(t._s(t.errors.description))])]),t._v(" "),n("tr",[t._m(2),t._v(" "),n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.todo.type,expression:"todo.type"}],attrs:{id:"type",name:"type",required:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.todo,"type",e.target.multiple?n:n[0])}}},t._l(t.types,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v("\n                "+t._s(e)+"\n              ")])})),0)]),t._v(" "),n("td",[t._v(t._s(t.errors.type))])]),t._v(" "),n("tr",[t._m(3),t._v(" "),n("td",[n("label",{attrs:{for:"confidential1"}},[t._v("Yes")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.Confidential,expression:"todo.Confidential"}],attrs:{id:"confidential1",type:"radio",name:"confidential",value:"Yes"},domProps:{checked:t._q(t.todo.Confidential,"Yes")},on:{change:function(e){return t.$set(t.todo,"Confidential","Yes")}}}),t._v(" "),n("label",{attrs:{for:"confidential2"}},[t._v("No")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.Confidential,expression:"todo.Confidential"}],attrs:{id:"confidential2",type:"radio",name:"confidential",value:"No"},domProps:{checked:t._q(t.todo.Confidential,"No")},on:{change:function(e){return t.$set(t.todo,"Confidential","No")}}})]),t._v(" "),n("td")]),t._v(" "),n("tr",[t._m(4),t._v(" "),n("td",[n("label",{attrs:{for:"remind"}},[t._v("Yes")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.remind,expression:"todo.remind"}],attrs:{id:"remind",type:"checkbox",name:"remind"},domProps:{checked:Array.isArray(t.todo.remind)?t._i(t.todo.remind,null)>-1:t.todo.remind},on:{change:function(e){var n=t.todo.remind,r=e.target,o=!!r.checked;if(Array.isArray(n)){var c=t._i(n,null);r.checked?c<0&&t.$set(t.todo,"remind",n.concat([null])):c>-1&&t.$set(t.todo,"remind",n.slice(0,c).concat(n.slice(c+1)))}else t.$set(t.todo,"remind",o)}}})]),t._v(" "),n("td")]),t._v(" "),n("tr",[t._m(5),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.date,expression:"todo.date"}],attrs:{id:"date",type:"date",name:"date",required:""},domProps:{value:t.todo.date},on:{input:function(e){e.target.composing||t.$set(t.todo,"date",e.target.value)}}})]),t._v(" "),n("td",[t._v(t._s(t.errors.date))])]),t._v(" "),n("tr",[n("th",{attrs:{colspan:"2",align:"right"}},[n("button",{attrs:{type:"submit"}},[t._v(t._s(t.todo.id?"Update":"Add"))])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",{attrs:{align:"left"}},[n("label",{attrs:{for:"name"}},[t._v("Name")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",{attrs:{align:"left"}},[n("label",{attrs:{for:"description"}},[t._v("Description")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",{attrs:{align:"left"}},[n("label",[t._v("Type")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",{attrs:{align:"left"}},[n("label",[t._v("Confidential")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",{attrs:{align:"left"}},[n("label",[t._v("Remind")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("th",{attrs:{align:"left"}},[n("label",{attrs:{for:"date"}},[t._v("Date")])])}],!1,null,null,null);e.default=component.exports},200:function(t,e,n){"use strict";n.r(e);n(112);var r=n(34),o=n(113),c=n(59),d=n(60),l=n(36),f=n(11),v=(n(33),n(37)),_=n(197),m=n(198),h=n(199);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(c.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).currentTodo=null,t.currentEvent=null,t.todos=Object(_.e)(),t}return Object(o.a)(n,[{key:"addTodoHandler",value:function(){this.currentEvent="edit",this.currentTodo={confidential:"No",remind:!1}}},{key:"selectTodoHandler",value:function(t,e){this.currentEvent=e,this.currentTodo=Object(_.d)(t)}},{key:"deleteTodoHandler",value:function(t){Object(_.c)(t),this.todos=Object(_.e)()}},{key:"onUpdateTodoHandler",value:function(t){t.id?Object(_.f)(t):Object(_.b)(t),this.currentTodo=null}}]),n}(v.c),T=j=O([Object(v.a)({components:{TodoView:m.default,TodoForm:h.default}})],j),R=n(35),component=Object(R.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h3",[t._v("Todos "),n("button",{on:{click:function(e){return t.addTodoHandler()}}},[t._v("New")])]),t._v(" "),t.currentTodo&&"view"===t.currentEvent?n("TodoView",{attrs:{todo:t.currentTodo},on:{onClose:function(){return t.currentTodo=null}}}):t._e(),t._v(" "),t.currentTodo&&"edit"===t.currentEvent?n("TodoForm",{attrs:{todo:t.currentTodo},on:{onAddOrUpdate:t.onUpdateTodoHandler}}):t._e(),t._v(" "),n("br"),t._v(" "),n("table",{attrs:{width:"100%"}},[t._m(0),t._v(" "),n("tbody",t._l(t.todos,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.description))]),t._v(" "),n("td",[t._v(t._s(e.type))]),t._v(" "),n("td",[t._v(t._s(e.confidential))]),t._v(" "),n("td",[t._v(t._s(e.remind.toString()))]),t._v(" "),n("td",[t._v(t._s(e.date))]),t._v(" "),n("td",[n("button",{attrs:{type:"button"},on:{click:function(n){return t.selectTodoHandler(e.id,"view")}}},[t._v("\n            View\n          ")]),t._v("\n           \n          "),n("button",{attrs:{type:"button"},on:{click:function(n){return t.selectTodoHandler(e.id,"edit")}}},[t._v("\n            Edit\n          ")]),t._v("\n           \n          "),n("button",{attrs:{type:"button"},on:{click:function(n){return t.deleteTodoHandler(e.id)}}},[t._v("\n            Delete\n          ")])])])})),0)])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Id")]),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("description")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Confidential")]),t._v(" "),n("th",[t._v("Remind")]),t._v(" "),n("th",[t._v("Date")]),t._v(" "),n("th",[t._v("Actions")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TodoView:n(198).default,TodoForm:n(199).default})},201:function(t,e,n){"use strict";n.r(e);n(112);var r=n(34),o=n(59),c=n(60),d=n(36),l=n(11),f=(n(33),n(37)),v=n(200);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},h=function(t){Object(o.a)(n,t);var e=_(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(f.c),y=h=m([Object(f.a)({components:{Todos:v.default},meta:{title:"Lighthouse Test | Nuxt",meta:{description:{name:"description",content:"Lighthouse Test | Nuxt"}}}})],h),O=n(35),component=Object(O.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h2",[t._v("Home")]),t._v(" "),n("Todos")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Todos:n(200).default})}}]);