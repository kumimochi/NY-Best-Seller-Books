(this["webpackJsonpny-books"]=this["webpackJsonpny-books"]||[]).push([[0],{21:function(e,s,t){},42:function(e,s,t){"use strict";t.r(s);var c=t(2),n=t.n(c),r=t(13),a=t.n(r),i=(t(21),t(4)),o=t.n(i),l=t(14),j=t(16),u=t(15),b=t.n(u),h=t(0),d=function(){var e=Object(c.useState)([]),s=Object(j.a)(e,2),t=s[0],n=s[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=x32SgZMGtyG07rEkpc2jCZQHASiFgPah");case 2:s=e.sent,n(s.data.results.books),console.log(s.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"New York Times Best Selling Books"}),Object(h.jsx)("section",{children:t.map((function(e){var s=e.book_image,t=e.title,c=e.author,n=e.rank,r=e.description,a=e.amazon_product_url,i=e.publisher;return Object(h.jsxs)("div",{className:"grid gap-4",children:[Object(h.jsxs)("div",{className:"top",children:[Object(h.jsx)("h2",{className:"rank",children:n}),Object(h.jsx)("img",{className:"image",src:s,alt:t}),Object(h.jsx)("h2",{className:"title",children:t}),Object(h.jsxs)("h3",{className:"author",children:["Author: ",c]})]}),Object(h.jsxs)("div",{className:"details",children:[Object(h.jsx)("p",{className:"desc",children:r}),Object(h.jsxs)("p",{classname:"publisher",children:["Publisher: ",i]}),Object(h.jsxs)("button",{className:"bg-blue-700",children:[Object(h.jsx)("a",{href:a}),"BUY"]})]})]})}))})]})};var p=function(){return Object(h.jsx)("div",{className:"App container-sm",children:Object(h.jsx)(d,{})})};a.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.9dcc177c.chunk.js.map