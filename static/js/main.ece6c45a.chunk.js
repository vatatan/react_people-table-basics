(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(24),a=n(8),r=(n(33),n(34),n(5)),s=n(0),i=(n(35),n(3));function l(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var j=n(10),o=n.n(j),b=n(2),d=function(){var e=function(e){var t=e.isActive;return o()("navbar-item",{"has-background-grey-lighter":t})};return Object(b.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(a.c,{className:e,to:"/",children:"Home"}),Object(b.jsx)(a.c,{className:e,to:"/people",children:"People"})]})})})},h=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"navbar-brand",children:Object(b.jsx)(d,{})})})}),Object(b.jsx)(i.b,{})]})},u=n(4),x=n(6),O=(n(37),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})}),p=function(e){return e.Femail="f",e.Male="m",e}({}),m=function(e){var t=e.person;return Object(b.jsx)(a.b,{to:"/people/".concat(t.slug),className:o()({"has-text-danger":t.sex===p.Femail}),children:t.name})},f=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e.Mother="mother",e.Father="father",e}({}),v=function(e){var t=e.people,n=Object(i.r)().personSlug,c=function(e){if(!e)return"-";var n=t.find((function(t){return t.name===e}));return n?Object(b.jsx)(m,{person:n}):e};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:Object.keys(f).map((function(e){return Object(b.jsx)("th",{children:e},e)}))})}),t.map((function(e){return Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{"data-cy":"person",className:o()({"has-background-warning":e.slug===n}),children:[Object(b.jsx)("td",{children:Object(b.jsx)(a.b,{to:e.slug,className:o()({"has-text-danger":e.sex===p.Femail}),children:e.name})}),Object(b.jsx)("td",{children:e.sex}),Object(b.jsx)("td",{children:e.born}),Object(b.jsx)("td",{children:e.died}),Object(b.jsx)("td",{children:c(e.motherName)}),Object(b.jsx)("td",{children:c(e.fatherName)})]})},e.slug)}))]})})},g=function(e){var t=e.setPeople,n=e.people,c=Object(s.useState)(!1),a=Object(r.a)(c,2),i=a[0],j=a[1],o=Object(s.useState)(!1),d=Object(r.a)(o,2),h=d[0],p=d[1];return Object(s.useEffect)((function(){return p(!1),j(!0),Object(x.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=t,e.next=4,l();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),p(!0);case 11:return e.prev=11,j(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))(),function(){return t([])}}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"People Page"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsxs)("div",{className:"box table-container",children:[i&&!h&&!n.length&&Object(b.jsx)(O,{}),!i&&h&&!n.length&&Object(b.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!i&&!h&&!n.length&&Object(b.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!i&&!h&&n.length&&Object(b.jsx)(v,{people:n})]})})]})},N=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){l().then(c)}),[]),Object(b.jsxs)("div",{"data-cy":"app",children:[Object(b.jsx)(d,{}),Object(b.jsx)("main",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(i.e,{children:Object(b.jsxs)(i.c,{path:"/",element:Object(b.jsx)(h,{}),children:[Object(b.jsx)(i.c,{index:!0,element:Object(b.jsx)("h1",{className:"title",children:"Home Page"})}),Object(b.jsx)(i.c,{path:"*",element:Object(b.jsx)("h1",{className:"title",children:"Page not found"})}),Object(b.jsx)(i.c,{path:"people",element:Object(b.jsx)(g,{people:n,setPeople:c}),children:Object(b.jsx)(i.c,{path:":personSlug",element:Object(b.jsx)(g,{people:n,setPeople:c})})}),Object(b.jsx)(i.c,{path:"home",element:Object(b.jsx)(i.a,{to:"/",replace:!0})})]})})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(b.jsx)(a.a,{children:Object(b.jsx)(N,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.ece6c45a.chunk.js.map