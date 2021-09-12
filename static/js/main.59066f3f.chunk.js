(this["webpackJsonpmovie-list"]=this["webpackJsonpmovie-list"]||[]).push([[0],{56:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(31),c=n.n(s),i=n(8),o=n(2),u=n(10),l=n.n(u),m=n(16),d=n(12),j=n(13),p=n(15),h=n(14),b=n(19),v=n.n(b),O=(n(56),n(1));var f=function(e){var t=e.id,n=e.year,a=e.title,r=e.summary,s=e.poster,c=e.genres;return Object(O.jsx)("div",{className:"movie",children:Object(O.jsxs)(i.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:a,summary:r,poster:s,genres:c}},children:[Object(O.jsx)("img",{src:s,alt:a,title:a}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h3",{className:"movie__title",children:a}),Object(O.jsx)("h5",{className:"movie__year",children:n}),Object(O.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(O.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie__summary",children:[r.slice(0,180),"..."]})]})]})})},x=(n(63),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getAxios=function(){var e=Object(m.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://www.omdbapi.com/?t=".concat(t,"&apikey=42979a8e"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.getMovie=Object(m.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=["It Happened One Night","Modern Times","Black Panther","Citizen Kane","The Wizard of Oz","Parasite","Avengers: Endgame","Casablanca","Knives Out","Us","Toy Story 4","Lady Bird","Mission: Impossible - Fallout","BlacKkKlansman","Get Out","The Irishman","The Godfather","All About Eve","Spider-Man: Into the Spider-Verse","Mad Max: Fury Road"],t.next=3,Promise.all(n.map(function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://www.omdbapi.com/?t=".concat(t,"&plot=full&apikey=42979a8e"));case 2:return n=e.sent,(a=n.data).Genre=a.Genre.split(","),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:a=t.sent,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader__text",children:'"Loading..."'})}):Object(O.jsx)("div",{className:"movies",children:n.map((function(e){return Object(O.jsx)(f,{id:e.imdbID,year:e.Year,title:e.Title,summary:e.Plot,poster:e.Poster,genres:e.Genre},e.imdbID)}))})})}}]),n}(r.a.Component));n(64);var y=function(){return Object(O.jsxs)("div",{className:"about__container",children:[Object(O.jsx)("span",{children:'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows"'}),Object(O.jsx)("span",{children:"-George Owell. 1984"})]})},g=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(O.jsx)("span",{children:e.state.title}):null}}]),n}(r.a.Component);n(65);var w=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(i.b,{to:"/",children:"Home"}),Object(O.jsx)(i.b,{to:"/about",children:"About"})]})};n(66);var _=function(){return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(w,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:x}),Object(O.jsx)(o.a,{path:"/about",component:y}),Object(O.jsx)(o.a,{path:"/movie/:id",component:g})]})};c.a.render(Object(O.jsx)(_,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.59066f3f.chunk.js.map