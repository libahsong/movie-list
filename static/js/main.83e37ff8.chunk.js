(this["webpackJsonpmovie-list"]=this["webpackJsonpmovie-list"]||[]).push([[0],{15:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),s=n(16),i=n.n(s),c=n(2),o=n.n(c),l=n(4),u=n(17),m=n(18),d=n(20),p=n(19),v=n(6),h=n.n(v),j=(n(15),n(0));var b=function(e){var t=e.id,n=e.year,a=e.title,r=e.summary,s=e.poster,i=e.genres;return console.log(t,n,a,r,s),console.log("MOvie genres:",i),console.log(""),Object(j.jsxs)("div",{className:"movie",children:[Object(j.jsx)("img",{src:s,alt:a,title:a}),Object(j.jsxs)("div",{className:"movie__data",children:[Object(j.jsx)("h3",{className:"movie__title",children:a}),Object(j.jsx)("h5",{className:"movie__year",children:n}),Object(j.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(j.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(j.jsxs)("p",{className:"movie__summary",children:[r.slice(0,180),"..."]})]})]})},f=(n(45),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getAxios=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://www.omdbapi.com/?t=".concat(t,"&apikey=42979a8e"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.getMovie=Object(l.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=["It Happened One Night","Modern Times","Black Panther","Citizen Kane","The Wizard of Oz","Parasite","Avengers: Endgame","Casablanca","Knives Out","Us","Toy Story 4","Lady Bird","Mission: Impossible - Fallout","BlacKkKlansman","Get Out","The Irishman","The Godfather","All About Eve","Spider-Man: Into the Spider-Verse","Mad Max: Fury Road"],t.next=3,Promise.all(n.map(function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://www.omdbapi.com/?t=".concat(t,"&plot=full&apikey=42979a8e"));case 2:return n=e.sent,(a=n.data).Genre=a.Genre.split(","),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:a=t.sent,console.log(a),e.setState({movies:a,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return console.log("state movies:",n,t),Object(j.jsx)("section",{className:"container",children:t?Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("span",{className:"loader__text",children:'"Loading..."'})}):Object(j.jsx)("div",{className:"movies",children:n.map((function(e){return Object(j.jsx)(b,{id:e.imdbID,year:e.Year,title:e.Title,summary:e.Plot,poster:e.Poster,genres:e.Genre},e.imdbID)}))})})}}]),n}(r.a.Component));i.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.83e37ff8.chunk.js.map