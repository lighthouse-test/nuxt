(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{199:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return f})),n.d(t,"f",(function(){return v}));n(36),n(157);var o=["Feature","Docs","Issue","Backend","Frontent"],r=[{id:1,name:"Add more frameworks",description:"We need to add more frameworks",type:"Issue",confidential:"Yes",remind:!0,date:"2021-04-07"}],d=function(){return r},c=function(e){return d().filter((function(t){return t.id===e}))[0]},l=function(e){var t=d();e.id=t.length?t[t.length-1].id+1:1,t.push(e)},f=function(e){var t=d(),n=c(e),o=t.indexOf(n);t.splice(o,1)},v=function(e){var t=c(e.id),n=d(),o=n.indexOf(t);n[o]=e}},200:function(e,t,n){"use strict";n.r(t);n(113);var o=n(37),r=n(60),d=n(61),c=n(39),l=n(14),f=(n(34),n(35),n(30),n(49),n(62),n(40)),v=n(199);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(c.a)(e);if(t){var r=Object(c.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var m=function(e,t,n,desc){var o,r=arguments.length,d=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(d=(r<3?o(d):r>3?o(t,n,d):o(t,n))||d);return r>3&&d&&Object.defineProperty(t,n,d),d},h=function(e){Object(r.a)(n,e);var t=_(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).types=v.a,e.errors={status:!1},e.updateTodoHandler=function(t){t.preventDefault(),e.errors={status:!1},e.todo.name||(e.errors.name="Name is required.",e.errors.status=!0),e.todo.description||(e.errors.description="Description is required.",e.errors.status=!0),e.todo.type||(e.errors.type="Type is required.",e.errors.status=!0),e.todo.date||(e.errors.date="Date is required.",e.errors.status=!0),setTimeout((function(){e.errors.status?alert("All Fields are required"):e.$emit("onAddOrUpdate",e.todo)}))},e}return n}(f.c);m([Object(f.b)({type:Object,required:!0})],h.prototype,"todo",void 0);var y=h=m([f.a],h),O=n(38),component=Object(O.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h4",[e._v(e._s(e.todo.id?"Update":"Add")+" Todo")]),e._v(" "),n("form",{attrs:{novalidate:""},on:{submit:e.updateTodoHandler}},[n("table",[n("tbody",[n("tr",[e._m(0),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.todo.name,expression:"todo.name"}],attrs:{id:"name",type:"text",name:"name",required:""},domProps:{value:e.todo.name},on:{input:function(t){t.target.composing||e.$set(e.todo,"name",t.target.value)}}})]),e._v(" "),n("td",[e._v(e._s(e.errors.name))])]),e._v(" "),n("tr",[e._m(1),e._v(" "),n("td",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.todo.description,expression:"todo.description"}],attrs:{id:"description",name:"description",required:""},domProps:{value:e.todo.description},on:{input:function(t){t.target.composing||e.$set(e.todo,"description",t.target.value)}}})]),e._v(" "),n("td",[e._v(e._s(e.errors.description))])]),e._v(" "),n("tr",[e._m(2),e._v(" "),n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.todo.type,expression:"todo.type"}],attrs:{id:"type",name:"type",required:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.todo,"type",t.target.multiple?n:n[0])}}},e._l(e.types,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v("\n                "+e._s(t)+"\n              ")])})),0)]),e._v(" "),n("td",[e._v(e._s(e.errors.type))])]),e._v(" "),n("tr",[e._m(3),e._v(" "),n("td",[n("label",{attrs:{for:"confidential1"}},[e._v("Yes")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.todo.Confidential,expression:"todo.Confidential"}],attrs:{id:"confidential1",type:"radio",name:"confidential",value:"Yes"},domProps:{checked:e._q(e.todo.Confidential,"Yes")},on:{change:function(t){return e.$set(e.todo,"Confidential","Yes")}}}),e._v(" "),n("label",{attrs:{for:"confidential2"}},[e._v("No")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.todo.Confidential,expression:"todo.Confidential"}],attrs:{id:"confidential2",type:"radio",name:"confidential",value:"No"},domProps:{checked:e._q(e.todo.Confidential,"No")},on:{change:function(t){return e.$set(e.todo,"Confidential","No")}}})]),e._v(" "),n("td")]),e._v(" "),n("tr",[e._m(4),e._v(" "),n("td",[n("label",{attrs:{for:"remind"}},[e._v("Yes")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.todo.remind,expression:"todo.remind"}],attrs:{id:"remind",type:"checkbox",name:"remind"},domProps:{checked:Array.isArray(e.todo.remind)?e._i(e.todo.remind,null)>-1:e.todo.remind},on:{change:function(t){var n=e.todo.remind,o=t.target,r=!!o.checked;if(Array.isArray(n)){var d=e._i(n,null);o.checked?d<0&&e.$set(e.todo,"remind",n.concat([null])):d>-1&&e.$set(e.todo,"remind",n.slice(0,d).concat(n.slice(d+1)))}else e.$set(e.todo,"remind",r)}}})]),e._v(" "),n("td")]),e._v(" "),n("tr",[e._m(5),e._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.todo.date,expression:"todo.date"}],attrs:{id:"date",type:"date",name:"date",required:""},domProps:{value:e.todo.date},on:{input:function(t){t.target.composing||e.$set(e.todo,"date",t.target.value)}}})]),e._v(" "),n("td",[e._v(e._s(e.errors.date))])]),e._v(" "),n("tr",[n("th",{attrs:{colspan:"2",align:"right"}},[n("button",{attrs:{type:"submit"}},[e._v(e._s(e.todo.id?"Update":"Add"))])])])])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("label",{attrs:{for:"name"}},[e._v("Name")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("label",{attrs:{for:"description"}},[e._v("description")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("label",[e._v("Type")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("label",[e._v("Confidential")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",{attrs:{align:"left"}},[n("label",[e._v("Remind")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("label",{attrs:{for:"date"}},[e._v("Date")])])}],!1,null,null,null);t.default=component.exports},201:function(e,t,n){"use strict";n.r(t);n(113);var o=n(37),r=n(114),d=n(60),c=n(61),l=n(39),f=n(14),v=(n(34),n(40)),_=n(199),m=n(200);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var y=function(e,t,n,desc){var o,r=arguments.length,d=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(d=(r<3?o(d):r>3?o(t,n,d):o(t,n))||d);return r>3&&d&&Object.defineProperty(t,n,d),d},O=function(e){Object(d.a)(n,e);var t=h(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).currentTodo=null,e.todos=Object(_.e)(),e}return Object(r.a)(n,[{key:"addTodoHandler",value:function(){this.currentTodo={confidential:"No",remind:!1}}},{key:"selectTodoHandler",value:function(e){this.currentTodo=Object(_.d)(e)}},{key:"deleteTodoHandler",value:function(e){Object(_.c)(e),this.todos=Object(_.e)()}},{key:"onUpdateTodoHandler",value:function(e){e.id?Object(_.f)(e):Object(_.b)(e),this.currentTodo=null}}]),n}(v.c),j=O=y([Object(v.a)({components:{TodoForm:m.default}})],O),T=n(38),component=Object(T.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h3",[e._v("Todos "),n("button",{on:{click:function(t){return e.addTodoHandler()}}},[e._v("New")])]),e._v(" "),e.currentTodo?n("TodoForm",{attrs:{todo:e.currentTodo},on:{onAddOrUpdate:e.onUpdateTodoHandler}}):e._e(),e._v(" "),n("br"),e._v(" "),n("table",[e._m(0),e._v(" "),n("tbody",e._l(e.todos,(function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.id))]),e._v(" "),n("td",[e._v(e._s(t.name))]),e._v(" "),n("td",[e._v(e._s(t.description))]),e._v(" "),n("td",[e._v(e._s(t.type))]),e._v(" "),n("td",[e._v(e._s(t.confidential))]),e._v(" "),n("td",[e._v(e._s(t.remind.toString()))]),e._v(" "),n("td",[e._v(e._s(t.date))]),e._v(" "),n("td",[n("button",{attrs:{type:"button"},on:{click:function(n){return e.selectTodoHandler(t.id)}}},[e._v("\n            Edit\n          ")]),e._v(" "),n("button",{attrs:{type:"button"},on:{click:function(n){return e.deleteTodoHandler(t.id)}}},[e._v("\n            Delete\n          ")])])])})),0)])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Id")]),e._v(" "),n("th",[e._v("Name")]),e._v(" "),n("th",[e._v("description")]),e._v(" "),n("th",[e._v("Type")]),e._v(" "),n("th",[e._v("Confidential")]),e._v(" "),n("th",[e._v("Remind")]),e._v(" "),n("th",[e._v("Date")]),e._v(" "),n("th",[e._v("Actions")])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{TodoForm:n(200).default})}}]);