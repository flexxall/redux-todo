(this["webpackJsonpredux-todo"]=this["webpackJsonpredux-todo"]||[]).push([[0],{18:function(e,t,o){},25:function(e,t,o){},27:function(e,t,o){"use strict";o.r(t);var n=o(0),d=o(5),r=o.n(d),c=(o(18),o(12)),i=o(3),a=o(13),s=(o(25),o(1));var u=function(){var e=Object(n.useState)(),t=Object(c.a)(e,2),o=t[0],d=t[1],r=Object(i.b)(),u=Object(i.c)((function(e){return e.Todo})).todos;return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("h2",{children:"Todo List App in Redux"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(function(e){return function(t,o){var n=o().Todo.todos;n.find((function(t){return t.todo===e}))||""===e||t({type:"ADD_TODO",payload:[{id:e,todo:e}].concat(Object(a.a)(n))})}}(o)),d("")},children:[Object(s.jsx)("input",{id:"todo",value:o,placeholder:"Enter a Todo",style:{width:350,padding:10,borderRadius:20,border:"none",fontSize:20},onChange:function(e){return d(e.target.value)}}),Object(s.jsx)("button",{type:"submit",style:{padding:12,borderRadius:25,border:"none",fontSize:15,marginLeft:20},children:"Add"})]}),Object(s.jsx)("ul",{className:"allTodos",children:u&&u.map((function(e){return Object(s.jsxs)("li",{className:"singleTodo",children:[Object(s.jsx)("span",{className:"todoText",children:e.todo}),Object(s.jsx)("button",{style:{padding:10,borderRadius:25,border:"1px solid white",color:"white",backgroundColor:"orangered",fontSize:15,marginLeft:20},onClick:function(){return function(e){r(function(e){return function(t,o){t({type:"REMOVE_TODO",payload:o().Todo.todos.filter((function(t){return t.id!==e.id}))})}}(e))}(e)},children:"Delete"})]},e.id)}))})]})})},l=o(4),b=o(10),j=o(11),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{todos:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":case"REMOVE_TODO":return{todos:t.payload};default:return e}},O=Object(l.combineReducers)({Todo:p}),f=[j.a],h=Object(l.createStore)(O,{},Object(b.composeWithDevTools)(l.applyMiddleware.apply(void 0,f)));r.a.render(Object(s.jsx)(i.a,{store:h,children:Object(s.jsx)(u,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.a6a258ba.chunk.js.map