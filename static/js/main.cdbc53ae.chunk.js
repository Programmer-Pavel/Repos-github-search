(this["webpackJsonprepos-github"]=this["webpackJsonprepos-github"]||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(21),s=n.n(r),i=(n(80),n(81),n(29)),o=n(8),l=n(39),u=n(131),j=n(111),d=n(140),h=n(133),p=n(65),b=n.n(p),O=n(16),f=n(32),m=n.n(f),x=n(42),g=n(43),v=n.n(g),y=n(20),N="SET_REPOS",C="SET_IS_FETCHING",k="SET_CURRENT_PAGE",E="SET_FETCH_ERROR",_={items:[],isFetching:!0,currentPage:1,perPage:10,totalCount:0,isFetchError:!1},w=function(e){return{type:N,payload:e}},S=function(e){return{type:C,payload:e}},F=function(e){return{type:k,payload:e}},W=function(e){return{type:E,payload:e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"stars:%3E1",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return""===e&&(e="stars:%3E1"),function(){var c=Object(x.a)(m.a.mark((function c(a){var r;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,a(S(!0)),c.next=4,v.a.get("https://api.github.com/search/repositories?q=".concat(e,"&sort=stars&page=").concat(t,"&per_page=").concat(n));case 4:r=c.sent,a(w(r.data)),c.next=13;break;case 8:c.prev=8,c.t0=c.catch(0),a(W(!0)),a(S(!1)),setTimeout((function(){a(W(!1))}),2e3);case 13:case"end":return c.stop()}}),c,null,[[0,8]])})));return function(e){return c.apply(this,arguments)}}()},T=function(){var e=Object(x.a)(m.a.mark((function e(t,n,c){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://api.github.com/repos/".concat(t,"/").concat(n));case 2:a=e.sent,c(a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),P=n(2),R=Object(u.a)((function(e){return{root:{padding:"0",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(3),flex:1},iconButton:{padding:10}}})),B=function(e){var t=e.setSearchValue,n=e.searchValue,c=R(),a=Object(O.b)();return Object(P.jsxs)(j.a,{component:"form",className:c.root,children:[Object(P.jsx)(d.a,{className:c.input,placeholder:"Search Repos",inputProps:{"aria-label":"search repos"},value:n,onChange:function(e){t(e.target.value)}}),Object(P.jsx)(h.a,{onClick:function(){return a(F(1)),void a(I(n))},className:c.iconButton,"aria-label":"search",children:Object(P.jsx)(b.a,{})})]})},D=n(134),V=n(135),L=n(112),M=n(37),z=n.n(M),G=Object(u.a)({root:{width:"100%",margin:"20px 0"},media:{height:140},link:{textDecoration:"none"},linkContainer:{display:"flex"},stars:{display:"flex",alignItems:"center"},fontWeight:{fontWeight:"bold"},lastCommit:{display:"flex"},starIcon:{color:"yellow"}}),H=function(e){var t=e.repo,n=G();return Object(P.jsx)(D.a,{className:n.root,children:Object(P.jsxs)(V.a,{children:[Object(P.jsx)(L.a,{gutterBottom:!0,variant:"h5",component:"h2",children:Object(P.jsx)(i.b,{className:n.link,to:"/repo/".concat(t.owner.login,"/").concat(t.name),children:t.name})}),Object(P.jsxs)(L.a,{variant:"body2",color:"textSecondary",component:"p",children:[Object(P.jsxs)("div",{className:n.stars,children:[Object(P.jsx)("div",{className:n.fontWeight,children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0432\u0435\u0437\u0434"}),": ",Object(P.jsx)(z.a,{className:n.starIcon}),t.stargazers_count]}),Object(P.jsxs)("div",{className:n.lastCommit,children:[Object(P.jsx)("div",{className:n.fontWeight,children:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043a\u043e\u043c\u043c\u0438\u0442"}),": ",t.updated_at]}),Object(P.jsxs)("div",{className:n.linkContainer,children:[Object(P.jsx)("div",{className:n.fontWeight,children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439"}),": ",Object(P.jsx)("a",{className:n.link,href:t.html_url,children:t.html_url})]})]})]})})},J=n(137);n(108);var q=n(139),A=n(136),U=Object(u.a)((function(e){return{root:{display:"flex",justifyContent:"center",margin:"30vh auto"}}})),K=function(){var e=U(),t=Object(O.b)(),n=Object(O.c)((function(e){return e.repos.items})),a=Object(O.c)((function(e){return e.repos.isFetching})),r=Object(O.c)((function(e){return e.repos.currentPage})),s=Object(O.c)((function(e){return e.repos.perPage})),i=Object(O.c)((function(e){return e.repos.totalCount})),o=Object(O.c)((function(e){return e.repos.isFetchError})),u=Object(c.useState)(""),j=Object(l.a)(u,2),d=j[0],h=j[1],p=[];return function(e,t,n){if(t>10)if(n>5)for(var c=n-4;c<=n+5&&(e.push(c),c!==t);c++);else for(var a=1;a<=10&&(e.push(a),a!==t);a++);else for(var r=1;r<=t;r++)e.push(r)}(p,Math.ceil(i/s),r),Object(c.useEffect)((function(){t(I(d,r,s))}),[r]),Object(P.jsxs)("div",{children:[o&&Object(P.jsxs)(q.a,{severity:"error",children:[Object(P.jsx)(A.a,{children:"Error"}),"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430! \u2014 ",Object(P.jsx)("strong",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443!"})]}),Object(P.jsx)(B,{searchValue:d,setSearchValue:h}),a?Object(P.jsx)("div",{className:e.root,children:Object(P.jsx)(J.a,{})}):n.map((function(e){return Object(P.jsx)(H,{repo:e})})),Object(P.jsx)("div",{className:"pages",children:p.map((function(e,n){return Object(P.jsx)("span",{className:r===e?"current-page":"page",onClick:function(){return t(F(e))},children:e},n)}))})]})},Q=(n(109),n(138)),X=Object(u.a)((function(e){return{link:{textDecoration:"none"},linkContainer:{display:"flex"},stars:{display:"flex",alignItems:"center"},fontWeight:{fontWeight:"bold"},lastCommit:{display:"flex",margin:"5px 0"},starIcon:{color:"yellow"},root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),padding:e.spacing(3),width:e.spacing(100),height:e.spacing(75)}}}})),Y=function(e){var t=X(),n=Object(o.g)(),a=n.username,r=n.reponame,s=Object(c.useState)({owner:{}}),i=Object(l.a)(s,2),u=i[0],d=i[1];return Object(c.useEffect)((function(){T(a,r,d)}),[]),Object(P.jsx)("div",{className:t.root,children:Object(P.jsxs)(j.a,{elevation:3,children:[Object(P.jsx)(Q.a,{onClick:function(){return e.history.goBack()},variant:"contained",color:"secondary",children:"back"}),Object(P.jsxs)("div",{children:[Object(P.jsxs)("div",{className:"info",children:[Object(P.jsx)("img",{className:"image",src:u.owner.avatar_url,alt:""}),Object(P.jsx)("div",{className:"name",children:u.name})]}),Object(P.jsxs)("div",{className:t.stars,children:[Object(P.jsx)("div",{className:t.fontWeight,children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0432\u0435\u0437\u0434"}),": ",Object(P.jsx)(z.a,{className:t.starIcon}),u.stargazers_count]}),Object(P.jsxs)("div",{className:t.lastCommit,children:[Object(P.jsx)("div",{className:t.fontWeight,children:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043a\u043e\u043c\u043c\u0438\u0442"}),": ",u.updated_at]}),Object(P.jsxs)("div",{className:t.linkContainer,children:[Object(P.jsx)("div",{className:t.fontWeight,children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439"}),": ",Object(P.jsx)("a",{className:t.link,href:u.html_url,children:u.html_url})]})]})]})})};var Z=function(){return Object(P.jsx)("div",{className:"app",children:Object(P.jsx)(i.a,{children:Object(P.jsxs)(o.d,{children:[Object(P.jsx)(o.b,{exact:!0,path:"/",component:K}),Object(P.jsx)(o.b,{path:"/repo/:username/:reponame",component:Y}),Object(P.jsx)(o.a,{to:"/"})]})})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,142)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},ee=n(24),te=n(66),ne=n(67),ce=Object(ee.combineReducers)({repos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(y.a)(Object(y.a)({},e),{},{items:t.payload.items,totalCount:t.payload.total_count,isFetching:!1});case C:return Object(y.a)(Object(y.a)({},e),{},{isFetching:t.payload});case k:return Object(y.a)(Object(y.a)({},e),{},{currentPage:t.payload});case E:return Object(y.a)(Object(y.a)({},e),{},{isFetchError:t.payload});default:return e}}}),ae=Object(ee.createStore)(ce,Object(te.composeWithDevTools)(Object(ee.applyMiddleware)(ne.a)));s.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(O.a,{store:ae,children:Object(P.jsx)(Z,{})})}),document.getElementById("root")),$()},80:function(e,t,n){},81:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.cdbc53ae.chunk.js.map