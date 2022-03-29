(this.webpackJsonpgiphee=this.webpackJsonpgiphee||[]).push([[0],{26:function(n,t,e){},78:function(n,t,e){"use strict";e.r(t);var a,i,r,o=e(0),c=e.n(o),s=e(22),d=e.n(s),b=e(7),l=e(8),p="#5e42a6",u="#b0a4df",x="#EDF2F7",h="#E6E4E3",f="#312450",j="#FF4238",g="#f2711c",m="#fff",O=Object(l.a)(a||(a=Object(b.a)(["\n  .App {\n    display: flex;\n    align-items: center;\n    height: inherit;\n    background-color: ",";\n  }\n"])),p),w=e(15),v=(e(26),e(2)),k=e(10),_=e(5),y=e(11),E=e(42),C=e(13),F=l.b.li(i||(i=Object(b.a)(["\n  height: 170px;\n  width: 280px;\n  position: relative;\n  border-radius: 6px;\n  box-shadow: 0px 2px 10px -4px rgba(0, 0, 0, 1);\n\n  &::before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    transition: background-color 0.2s ease-in-out;\n    border-radius: 6px;\n  }\n\n  &:hover:before {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n\n  &:hover {\n    .Card__info {\n      display: grid;\n      place-content: center;\n    }\n  }\n\n  img {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    border-radius: 6px;\n  } \n\n  .Card__info {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: none;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n  }\n  \n  .Card__title, .Card__button {\n    color: white;\n    font-size: 14px;\n    font-weight: 600;\n    width: 100%;\n    padding: 0 15px;\n    margin-bottom: 5px;\n  }\n\n  .Card__button {\n    background: none;\n    border: none;\n    transition: opacity 0.2s ease-in-out;\n\n    &:hover {\n      opacity: 0.7;\n    }\n  }\n\n  svg {\n    margin-left: 5px;\n  }\n\n  .Card__copied {\n    position: absolute;\n    bottom: 10px;\n    left: 40%;\n    color: ",";\n    text-shadow: 2px 2px black;\n  }\n\n  .Card__icon-fav {\n    position: absolute;\n    top: 10px;\n    left: 80%;\n    width: 50px;\n  }\n\n  @media screen and (max-width: 475px) {\n    height: 120px;\n    width: 220px;\n\n    .Card__title {\n      font-size: 10px;\n      padding: 5px;\n      max-height: 45px;\n      display: -webkit-box;\n\t\t\t-webkit-line-clamp: 3;\n\t\t\t-webkit-box-orient: vertical;\n\t\t\toverflow: hidden;\n    }\n  }\n  \n  @media screen and (min-width: 475px) and (max-width: 767px) {\n    height: 150px;\n    width: 260px;\n\n    .Card__title {\n      font-size: 11px;\n      padding: 5px;\n      max-height: 45px;\n      display: -webkit-box;\n\t\t\t-webkit-line-clamp: 3;\n\t\t\t-webkit-box-orient: vertical;\n\t\t\toverflow: hidden;\n    }\n  }\n"])),g);!function(n){n.STORE_GIF="@favorite/STORE_GIF",n.REMOVE_GIF="@favorite/REMOVE_GIF",n.REMOVE_ALL_GIF="@favorite/REMOVE_ALL_GIF"}(r||(r={}));var R,z=function(){return Object(C.c)((function(n){return n.fav}))},N=e(1),I=function(n){var t=n.gif,e=Object(o.useState)(!1),a=Object(_.a)(e,2),i=a[0],c=a[1],s=Object(o.useState)(!1),d=Object(_.a)(s,2),b=d[0],l=d[1],p=z().gifs,u=Object(C.b)();Object(o.useEffect)((function(){i&&setTimeout((function(){return c(!1)}),2e3)}),[i]),Object(o.useEffect)((function(){p.find((function(n){return n.id===t.id}))&&l(!0)}),[t.id,p]);var x=Object(o.useCallback)((function(){navigator.clipboard.writeText(t.embed_url),c(!0)}),[t.embed_url]),h=Object(o.useCallback)((function(){var n;l(!b),u(b?(n=t,{type:r.REMOVE_GIF,payload:{data:n}}):function(n){return{type:r.STORE_GIF,payload:{data:n}}}(t))}),[u,b,t]);return Object(N.jsxs)(F,{children:[Object(N.jsx)("img",{alt:t.title,title:t.title,src:t.images.fixed_height.url}),Object(N.jsxs)("div",{className:"Card__info",children:[Object(N.jsx)("button",{className:"Card__button Card__icon-fav",title:"button",onClick:h,children:Object(N.jsx)(k.a,{icon:b?y.c:E.a,size:"lg",color:b?j:m})}),Object(N.jsx)("p",{className:"Card__title",children:t.title}),Object(N.jsxs)("button",{className:"Card__button",title:"button",onClick:x,children:["Copy URL",Object(N.jsx)(k.a,{icon:y.b,size:"lg",color:m})]}),i&&Object(N.jsx)("span",{className:"Card__copied",children:"Copied!"})]})]})},S=l.b.ul(R||(R=Object(b.a)(["\n  display: grid;\n  gap: 20px;\n  max-width: 900px;\n  margin: 0 auto;\n  grid-template-columns: repeat(3, 1fr);\n  margin-top: 50px;\n  justify-items: center;\n  overflow-y: auto;\n\n  @media screen and (max-width: 1024px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  @media screen and (min-width: 1024px) and (max-width: 1320px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]))),G=Object(o.forwardRef)((function(n,t){var e=n.gifs;return e&&Object(N.jsx)("section",{children:Object(N.jsxs)(S,{children:[e.map((function(n,t){return Object(N.jsx)(I,{gif:n},null===n||void 0===n?void 0:n.id.concat(String(t)))})),Object(N.jsx)("button",{type:"button",className:"fab-button",onClick:function(){var n;null===(n=t.current)||void 0===n||n.scrollIntoView({behavior:"smooth"})},children:Object(N.jsx)(k.a,{icon:y.a,size:"lg",color:m})})]})})}));G.defaultProps={gifs:[]};var L,M,A=G,V=e.p+"static/media/logo.3aa2711d.png",T=l.b.ul(L||(L=Object(b.a)(["\n  text-align: center;\n  height: 100%;\n  width: 200px;\n  background-color: ",";\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  overflow-x: hidden;\n  padding-top: 20px;\n  transition: width ease-out 300ms;\n\n  @media screen and (max-width: 768px) {\n    width: 70px;\n  }\n\n  img {\n    width: 100px;\n    height: auto;\n\n    @media screen and (max-width: 768px) {\n      width: 40px;\n    }\n  }\n\n  .nav {\n    a {\n      position: relative;\n      margin: 2em 0;\n      font-size: 0.7em;\n      line-height: 5em;\n      text-transform: uppercase;\n      text-decoration: none;\n      letter-spacing: 0.4em;\n      color: rgba(255, 255, 255, 0.3);\n      display: block;\n      transition: all ease-out 300ms;\n\n      &.active {\n        color: white;\n\n        .icon {\n          color: white\n        }\n      }\n      \n      &:not(.active)::after {\n        opacity: 0.2;\n      }\n      \n      &:not(.active):hover {\n        color: rgba(255, 255, 255, 0.75);\n\n        .icon {\n          color: rgba(255, 255, 255, 0.75);\n        }\n      }\n      \n      &::after {\n        content: '';\n        position: absolute;\n        width: 100%;\n        height: 0.2em;\n        background: black;\n        left: 0;\n        bottom: 0;\n        background-image: linear-gradient(to right, ",", ",")\n      }\n\n      .icon {\n        color: rgba(255, 255, 255, 0.3);\n        margin-right: 10px;\n        transition: all ease-out 300ms;\n      }\n\n      @media screen and (max-width: 768px) {\n        .icon {\n          margin-right: 0;\n        }\n\n        .text {\n          display: none;\n        }\n      }\n    }\n\n  }\n"])),f,p,u),J=function(){return Object(N.jsx)(T,{children:Object(N.jsxs)("aside",{className:"aside",children:[Object(N.jsx)("img",{src:V,alt:"lgo"}),Object(N.jsxs)("nav",{className:"nav",children:[Object(N.jsxs)(w.b,{className:function(n){return n.isActive?"active":""},to:"/home",children:[Object(N.jsx)(k.a,{className:"icon",icon:y.d,size:"lg",color:u}),Object(N.jsx)("span",{className:"text",children:"Home"})]}),Object(N.jsxs)(w.b,{className:function(n){return n.isActive?"active":""},to:"/favorites",children:[Object(N.jsx)(k.a,{className:"icon",icon:y.c,size:"lg",color:u}),Object(N.jsx)("span",{className:"text",children:"Favorites"})]})]})]})})},q=l.b.section(M||(M=Object(b.a)(["\n    max-width: 1400px;\n    max-height: 860px;\n    margin: 0 auto;\n    padding: 0 30px;\n    background-color: ",";\n    overflow-y: auto;\n    height: 100%;\n\n    @media screen and (max-width: 475px) {\n      margin: 0 0 0 auto;\n      padding-top: 20px;\n      padding-bottom: 20px;\n    }\n\n    ::-webkit-scrollbar {\n      width: 10px;\n    }\n\n    ::-webkit-scrollbar-track {\n      background: ","; \n    }\n    \n    ::-webkit-scrollbar-thumb {\n      background: ","; \n    }\n\n    ::-webkit-scrollbar-thumb:hover {\n      background: ","; \n    }\n  }\n\n  h1 {\n    font-size: 18px;\n    font-weight: 600;\n    color: ",";\n    width: 100%;\n\n    @media screen and (max-width: 767px) {\n      font-size: 14px;\n    }\n  }\n\n  .remove-btn {\n    background: ",";\n    border: none;\n    width: 120px;\n    border-radius: 4px;\n    padding: 10px;\n    color: ",";\n    font-weight: 600;\n    transition: all 0.2s ease-in-out;\n    opacity: 0.9;\n\n    &:hover, &:focus {\n      opacity: 0.7;\n    }\n  }\n\n  .fab-button {\n    position: fixed;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background-color: ",";\n    border: none;\n    inset: 90% 0% 0% 90%;\n    box-shadow: 0px 2px 10px -4px rgba(0, 0, 0, 1);\n    transition: opacity .2s ease-in-out;\n\n    &:hover, &:focus {\n      opacity: 0.7;\n    }\n\n    @media screen and (max-width: 425px) {\n      inset: 90% 0% 0% 80%;\n    }\n"])),p,u,x,h,u,u,m,u),U=function(){var n=Object(o.useRef)(null),t=z().gifs,e=Object(C.b)();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(J,{}),Object(N.jsx)(q,{children:t.length>0?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{ref:n,children:Object(N.jsx)("button",{type:"button",className:"remove-btn",onClick:function(){e({type:r.REMOVE_ALL_GIF})},children:"Remove All"})}),Object(N.jsx)(A,{gifs:t,ref:n})]}):Object(N.jsx)("h1",{children:"No gif found"})})]})},B=e(18),D=e(12),H=e.n(D),P=e(20),K=e(43),Q=e.n(K).a.create({baseURL:"https://api.giphy.com/v1/gifs/"});Q.interceptors.request.use((function(n){return n.params=n.params||{},n.params.api_key="dc6zaTOxFJmzC",n}));var W,X=Q,Y=function(n,t,e){return X.get("/search",{params:{q:n,limit:t,offset:e,rating:"g"}})},Z=function(n,t){return X.get("/trending",{params:{limit:n,offset:t,rating:"g"}})},$=l.b.section(W||(W=Object(b.a)(["\n    max-width: 1400px;\n    max-height: 860px;\n    margin: 0 auto;\n    padding: 0px 30px;\n    background-color: ",";\n    overflow-y: auto;\n\n    @media screen and (max-width: 475px) {\n      margin: 0 0 0 auto;\n      padding-top: 20px;\n      padding-bottom: 20px;\n    }\n\n    ::-webkit-scrollbar {\n      width: 10px;\n    }\n\n    ::-webkit-scrollbar-track {\n      background: ","; \n    }\n    \n    ::-webkit-scrollbar-thumb {\n      background: ","; \n    }\n\n    ::-webkit-scrollbar-thumb:hover {\n      background: ","; \n    }\n  }\n\n  .search {\n    text-align: left;\n    display: flex;\n    align-items: center;\n  }\n\n  .search > input {\n    background-color: transparent;\n    border: none;\n    font-size: 18px;\n    font-weight: 600;\n    color: ",";\n    margin-left: 10px;\n    width: 100%;\n\n    @media screen and (max-width: 767px) {\n      font-size: 14px;\n    }\n  }\n\n  .search > input::placeholder {\n    color: ",";\n    font-weight: 600;\n  }\n\n  .fab-button {\n    position: fixed;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background-color: ",";\n    border: none;\n    inset: 90% 0% 0% 90%;\n    box-shadow: 0px 2px 10px -4px rgba(0, 0, 0, 1);\n    transition: opacity .2s ease-in-out;\n    opacity: 0.9;\n\n    &:hover, &:focus {\n      opacity: 0.7;\n    }\n\n    @media screen and (max-width: 425px) {\n      inset: 90% 0% 0% 80%;\n    }\n"])),p,u,x,h,u,u,u),nn=function(){var n=Object(o.useRef)(),t=Object(o.useState)([]),e=Object(_.a)(t,2),a=e[0],i=e[1],r=Object(o.useState)(""),c=Object(_.a)(r,2),s=c[0],d=c[1],b=Object(o.useState)(0),l=Object(_.a)(b,2),p=l[0],x=l[1],h=Object(o.useState)(0),f=Object(_.a)(h,2),j=f[0],g=f[1],m=Object(o.useRef)(null),O=function(){var n=Object(P.a)(H.a.mark((function n(t,e){return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(t.length>1)){n.next=6;break}return n.next=3,Y(t,15,e||0);case 3:return n.abrupt("return",n.sent);case 6:return n.next=8,Z(15,e||0);case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),w=Object(o.useCallback)(Object(P.a)(H.a.mark((function n(){var t;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O(s);case 2:t=n.sent,i(t.data.data);case 4:case"end":return n.stop()}}),n)}))),[]);Object(o.useEffect)((function(){w()}),[w]);var v=function(){var n=Object(P.a)(H.a.mark((function n(){var t,e;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x(t=p+10),n.next=4,O(s,t);case 4:e=n.sent,i([].concat(Object(B.a)(a),Object(B.a)(e.data.data)));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(o.useEffect)((function(){j>0&&v();var t=new IntersectionObserver((function(n){var t=n[0].intersectionRatio;g(t)}));return t.observe(n.current),function(){t.disconnect()}}),[j]);var E=Object(o.useCallback)(function(){var n=Object(P.a)(H.a.mark((function n(t){var e,a;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.target.value,d(e),n.next=4,O(e);case 4:a=n.sent,i(a.data.data);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),[]);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(J,{}),Object(N.jsxs)($,{children:[Object(N.jsxs)("div",{className:"search",ref:m,children:[Object(N.jsx)(k.a,{icon:y.e,size:"lg",color:u}),Object(N.jsx)("input",{type:"text",placeholder:"Find your gif and share it",onChange:E})]}),Object(N.jsx)(A,{gifs:a,ref:m}),Object(N.jsx)("div",{ref:n})]})]})},tn=function(){return Object(N.jsxs)(v.d,{children:[Object(N.jsx)(v.b,{path:"*",element:Object(N.jsx)(v.a,{to:"/home"})}),Object(N.jsx)(v.b,{path:"/favorites",element:Object(N.jsx)(U,{})}),Object(N.jsx)(v.b,{path:"/home",element:Object(N.jsx)(nn,{})})]})},en=e(44),an=e(9),rn=e(28),on=e(45),cn=e.n(on),sn=(e(77),e(21)),dn={gifs:[]},bn=function(n,t){return Object(sn.a)(Object(sn.a)({},n),{},{gifs:[].concat(Object(B.a)(n.gifs),[t.payload.data])})},ln=function(n,t){return Object(sn.a)(Object(sn.a)({},n),{},{gifs:n.gifs.filter((function(n){return n.id!==t.payload.data.id}))})},pn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.STORE_GIF:return bn(n,t);case r.REMOVE_GIF:return ln(n,t);case r.REMOVE_ALL_GIF:return dn;default:return n}},un=Object(an.combineReducers)({fav:pn}),xn={key:"giphee",storage:cn.a,whitelist:["fav"]},hn=Object(an.applyMiddleware)(),fn=Object(rn.a)(xn,un),jn=Object(an.createStore)(fn,hn),gn=Object(rn.b)(jn),mn=function(){return Object(N.jsx)("main",{className:"App",children:Object(N.jsx)(C.a,{store:jn,children:Object(N.jsx)(en.a,{persistor:gn,children:Object(N.jsxs)(w.a,{basename:"/giphee",children:[Object(N.jsx)(O,{}),Object(N.jsx)(tn,{})]})})})})};d.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(mn,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.0f21f47a.chunk.js.map