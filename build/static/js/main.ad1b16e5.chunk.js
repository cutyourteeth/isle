(this.webpackJsonpisle2=this.webpackJsonpisle2||[]).push([[0],{245:function(e,n,t){e.exports=t(580)},250:function(e,n,t){},251:function(e,n,t){},580:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(232),i=t.n(o),l=(t(250),t(251),t(31)),c=t(41),s=t(18),m=t(19);function u(){var e=Object(s.a)(["\n  font-size: 1.5rem;\n  color: rgb(78, 78, 78, 0.6);\n  padding: 2rem;\n\n  &:hover {\n    color: rgb(178, 178, 178, 0.6);\n\n    & > a {\n      color: white;\n    }\n  }\n"]);return u=function(){return e},e}var d=function(){return r.a.createElement("div",{className:"about"},"I am",r.a.createElement("a",{href:"https://cutyourteeth.github.io/dist"},"here"),r.a.createElement("div",{className:"contact-list"},r.a.createElement("div",{className:"contact-tel"}),r.a.createElement("div",{className:"contact-mail"}),r.a.createElement("div",{className:"contact-address"})))},h=(m.a.div(u()),t(136)),p=t(235),f=t.n(p),g=t(236),b=t.n(g),v=t(133),w=t.n(v),x=t(237),E=t(238),y=t(239),k=t(240),j=t.n(k),O=function(){function e(){Object(E.a)(this,e)}return Object(y.a)(e,null,[{key:"rawGetRequest",value:function(){var e=Object(x.a)(w.a.mark((function e(n){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(this.serverUrl,"/").concat(n));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()}]),e}();O.serverUrl="http://caperal.cn:3141";var N=[{1579242785372:{secondHandedAmount:" 59948 "}},{1579246382840:{secondHandedAmount:" 59952 "}}],z=function(){var e=Object(a.useState)(N),n=Object(h.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)(),l=Object(h.a)(i,2),c=l[0],s=l[1];return Object(a.useEffect)((function(){var e=function(){return O.rawGetRequest("list/hz").then((function(e){var n=e.data.map((function(e){return e.record}));o(n)}))};e();var n=setInterval(e,36e5);return function(){return clearInterval(n)}}),[]),Object(a.useEffect)((function(){var e=[],n=[];t.forEach((function(t){e.push(b()(parseInt(Object.keys(t)[0],10)).format("HH' DD/MMM/YYYY")),n.push(parseInt(Object.values(t)[0].secondHandedAmount,10))})),s(H(e,n))}),[t]),r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(f.a,{option:c}))},H=function(e,n){for(var t=+new Date(e[0]),a=[],r=[300*Math.random()],o=1;o<2e4;o++){var i=new Date(t+=864e5);a.push([i.getFullYear(),i.getMonth()+1,i.getDate()].join("/")),r.push(Math.round(20*(Math.random()-.5)+r[o-1]))}return{tooltip:{trigger:"axis",position:function(e){return[e[0],"10%"]}},title:{left:"center",text:"HZ real-estate data graph"},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:e},yAxis:{scale:!0,type:"value",boundaryGap:[0,"100%"]},dataZoom:[{type:"inside",start:0,end:10},{start:0,end:10,handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}}],series:[{name:"Total amount",type:"line",smooth:!0,symbol:"none",sampling:"average",itemStyle:{color:"rgb(255, 70, 131)"},areaStyle:{},data:n}]}};function A(){var e=Object(s.a)(["\n  .work-list-item {\n    position: relative;\n    overflow: hidden;\n  }\n\n  .work-list-image,\n  .work-list-text {\n    padding: 4rem 0 0 2rem;\n    box-sizing: border-box;\n    width: 32rem;\n\n    @media screen and (max-width: 768px) {\n      width: 80%;\n    }\n  }\n\n  .work-list-text {\n    top: 0;\n    margin: 4rem 0 0 2rem;\n    opacity: 0;\n    height: 100%;\n    position: absolute;\n    white-space: pre-wrap;\n  }\n\n  .work-list-text:hover,\n  .work-list-image:hover ~ .work-list-text {\n    opacity: 1;\n    background-color: rgba(17, 17, 17, 0.6);\n  }\n"]);return A=function(){return e},e}var I=[{text:"keep myself as an independent one"},{text:"coding is an implement of art "},{text:"Good habits serve everyone"}],M=[{title:"coon",imageUrl:"https://cdn.pixabay.com/photo/2017/01/15/19/04/red-panda-1982445__340.jpg",text:"the coon:\n\nOne of the coons just ran out of your mind"},{title:"the woods",imageUrl:"https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519__340.jpg",text:"the woods:\n\nQuite miss about it's peaceful sound"},{title:"the fall",imageUrl:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",text:"the fall:\n\nEverything falls in the end, right?"}],U=function(){return r.a.createElement(C,null,M.map((function(e,n){return r.a.createElement("div",{className:"work-list-item",key:n},r.a.createElement("img",{src:e.imageUrl,className:"work-list-image",alt:""}),r.a.createElement("div",{className:"work-list-text"},e.text))})),r.a.createElement("div",null,r.a.createElement("div",null,"representing saytote - chat to note"),I.map((function(e,n){return r.a.createElement("div",{style:{padding:"1rem 2rem"},key:n},n+1,". ",e.text)}))))},C=m.a.div(A());function G(){var e=Object(s.a)(['\n.header-links > * {\n        margin-left: 1rem;\n        letter-spacing: 0.1rem;\n      }\n\n      .header-links > *:hover {\n        color: white;\n      }\n\n      .header-ham-button {\n        opacity: 0;\n        visibility: hidden;\n        position: absolute;\n        top: 50%;\n        right: 0;\n        transform: translateY(-50%);\n        display: block;\n        width: 1.5625rem;\n        height: 1.5625rem;\n        border: 0.08rem solid rgb(102, 102, 102);\n        border-radius: 0.175rem;\n        background-color: transparent;\n        cursor: pointer;\n\n        &:after {\n          content: "";\n          position: absolute;\n          left: 50%;\n          transform: translateX(-50%);\n          width: 60%;\n          height: 100%;\n          background: repeating-linear-gradient(\n            transparent 0,\n            transparent 20%,\n            rgb(142, 142, 142) 22%,\n            rgb(142, 142, 142) 28%,\n            transparent 30%,\n            transparent 45%,\n            rgb(142, 142, 142) 47%,\n            rgb(142, 142, 142) 53%,\n            transparent 55%,\n            transparent 70%,\n            rgb(142, 142, 142) 72%,\n            rgb(142, 142, 142) 78%,\n            transparent 80%,\n            transparent 100%\n          );\n        }\n      }\n\n      @media screen and (max-width: 768px) {\n        .header-links {\n          display: flex;\n          position: absolute;\n          top: calc(2rem + 1.5625rem / 2);\n          right: 0%;\n          line-height: 3.15;\n          text-align: right;\n          flex-flow: column;\n          justify-content: flex-start;\n        }\n\n        .header-links {\n          opacity: 0;\n          visibility: hidden;\n        }\n\n        .header-ham-button {\n          opacity: 1;\n          visibility: visible;\n        }\n\n        .header-ham-button:hover ~ .header-links,\n        .header-links:hover {\n          opacity: 1;\n          visibility: visible;\n          border-top: none;\n          border-right: none;\n          border-radius: 2px;\n        }\n      }\n    }\n']);return G=function(){return e},e}var S=function(){return r.a.createElement(Y,null,r.a.createElement("i",{className:"header-ham-button",onClick:function(){},"aria-label":"menu"}),r.a.createElement("div",{className:"header-links"},r.a.createElement(l.b,{to:"/work",className:"header-link"},"WORK"),r.a.createElement(l.b,{to:"/thoughts",className:"header-link"},"THOUGHTS"),r.a.createElement(l.b,{to:"/about",className:"header-link"},"ABOUT")))},Y=m.a.div(G());function T(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 2rem;\n  .link {\n    padding: 0.5rem 0;\n    font-size: 45px;\n    color: gray;\n    font-weight: bold;\n    text-decoration: none;\n    &:hover {\n      color: #2dc6ad;\n      filter: hue-rotate();\n      animation: hue-trans 7s infinite;\n    }\n  }\n"]);return T=function(){return e},e}var _=function(){return r.a.createElement(B,null,r.a.createElement(l.b,{to:"/graphs",className:"link"},"Graphs"),r.a.createElement(l.b,{to:"/thoughts",className:"link"},"Thoughts"),r.a.createElement(l.b,{to:"/about",className:"link"},"About"))},B=m.a.div(T());function D(){var e=Object(s.a)(["\n  position: relative;\n  color: white;\n  min-height: 120vh;\n\n  .title {\n    padding: 6rem 2rem 4rem;\n\n    & > h1 {\n      font-size: 50px;\n      font-weight: 600;\n      line-height: 1.25;\n      text-transform: uppercase;\n      letter-spacing: 0.1rem;\n    }\n\n    & > p {\n      padding-top: 0.5rem;\n      font-size: 15px;\n      line-height: 15px;\n      margin-top: 10px;\n    }\n  }\n  .main-view {\n    min-height: calc(100vh - 400px);\n  }\n  .header {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    height: 4rem;\n    line-height: 4rem;\n    padding: 0 2rem;\n    text-transform: uppercase;\n    box-sizing: border-box;\n    color: rgb(102, 102, 102);\n\n    .header-left {\n      letter-spacing: 0.2rem;\n\n      &:hover {\n        color: white;\n      }\n    }\n\n    .header-right {\n      display: flex;\n      flex-flow: row;\n      position: relative;\n      justify-content: center;\n    }\n  }\n"]);return D=function(){return e},e}var R=m.a.div(D()),W=function(){return r.a.createElement(R,null,r.a.createElement(l.a,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-left"},"CAPERAL"),r.a.createElement("div",{className:"header-right"},r.a.createElement(S,null))),r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Be a man,"),r.a.createElement("h1",null,"Half blind"),r.a.createElement("p",null,"Mind your own, leave out all the rest")),r.a.createElement(_,null),r.a.createElement("div",{className:"main-view"},r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/graphs",exact:!0,component:z}),r.a.createElement(c.a,{path:"/thoughts",exact:!0,component:U}),r.a.createElement(c.a,{path:"/about",exact:!0,component:d})))))};function F(){var e=Object(s.a)(["\n    padding: 1rem 2rem;\n    color: white;\n    font-size: 12px;\n    &:hover {\n        color: goldenrod;\n    }\n"]);return F=function(){return e},e}function P(){var e=Object(s.a)(["\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    padding: 1rem 2rem;\n    margin-top: 2rem;\n    font-size: 14px;\n    color: white;\n    & > p:hover {\n        color: goldenrod;\n    }\n"]);return P=function(){return e},e}var V=function(){return r.a.createElement(Z,null,r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2728"),"This site is under developing, see you soon\xa0",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2728")),r.a.createElement("br",null),r.a.createElement("p",null,"Written by Caper with passion and\xa0",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2764\ufe0f")),r.a.createElement(q,{href:"http://www.beian.miit.gov.cn/","aria-label":"link and check for this site"},"IPC\u8bc1: \u6d59ICP\u590719047176\u53f7"))},Z=m.a.div(P()),q=m.a.a(F()),J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[245,1,2]]]);
//# sourceMappingURL=main.ad1b16e5.chunk.js.map