(this.webpackJsonptitac=this.webpackJsonptitac||[]).push([[0],{13:function(e,n,r){e.exports={canvas:"Lines_canvas__3njqj"}},19:function(e,n,r){},2:function(e,n,r){e.exports={container:"Board_container__e7AOm",subHeader:"Board_subHeader__22W3O",header:"Board_header__3a_-8",winning:"Board_winning__2ndj0",grid:"Board_grid__2S-vE",cell:"Board_cell__3urXG",notfull:"Board_notfull__3vcoS",upper:"Board_upper__1wxc3",under:"Board_under__2gw4d",inside:"Board_inside__3CQrY",item:"Board_item__34jtE",used:"Board_used__3yTAm",controlBar:"Board_controlBar__q1_iT",controlButton:"Board_controlButton__1SIAm",controlButtonInside:"Board_controlButtonInside__1Mwrb",scoreContainer:"Board_scoreContainer__1GMLN",scoreHeader:"Board_scoreHeader__31EcL"}},27:function(e,n,r){},28:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),c=r(5),s=r.n(c),o=(r(19),r(2)),i=r.n(o),l=r(4),u=function(){return Object(l.b)()},d=l.c,j=r(14),b=r(6),p={score:{p1:[],p2:[]},turn:Math.random()<.5?1:2,winner:!1,grid:[{slotsIndex:0,value:[]},{slotsIndex:0,value:[]},{slotsIndex:0,value:[]},{slotsIndex:0,value:[]},{slotsIndex:0,value:[]},{slotsIndex:0,value:[]},{slotsIndex:0,value:[]},{slotsIndex:0,value:[]},{slotsIndex:0,value:[]}]},v=Object(b.b)({name:"board",initialState:p,reducers:{playAt:function(e,n){var r=n.payload,t=e.turn;if(e.grid[r].slotsIndex<3){e.grid[r].slotsIndex++,e.grid[r].value.push({used:!1,player:t}),e.turn=1===t?2:1;var a=function(e){var n=e.score.p1,r=e.score.p2,t=e.grid;return[{name:"tr",indices:[0,1,2]},{name:"mr",indices:[3,4,5]},{name:"br",indices:[6,7,8]},{name:"lc",indices:[0,3,6]},{name:"mc",indices:[1,4,7]},{name:"rc",indices:[2,5,8]},{name:"brtl",indices:[0,4,8]},{name:"bltr",indices:[6,4,2]}].forEach((function(e){var a=e.name,c=e.indices,s=function(e,n){var r=[];n.forEach((function(n){return r.push(e[n])}));var t=!0;return r.forEach((function(e){0===e.slotsIndex&&(t=!1),e.value.find((function(e){return!e.used&&1===e.player}))||(t=!1)})),t?1:(t=!0,r.forEach((function(e){0===e.slotsIndex&&(t=!1),e.value.find((function(e){return!e.used&&2===e.player}))||(t=!1)})),!!t&&2)}(t,c);s&&(t=function(e,n,r){return console.log("SetUsed Called"),n.forEach((function(n){for(var t=0;t<e[n].value.length;t++){var a=e[n].value[t];if(a.player===r&&!a.used){console.log("         Used set to true at : "+n+"  "+t),e[n].value[t].used=!0;break}}})),e}(t,c,s),1===s?n.push(a):r.push(a))})),{score:{p1:n,p2:r},grid:t}}(e),c=a.score,s=a.grid;e.score=c,e.grid=s,e.winner=function(e){return e.score.p1.length>=3?1:e.score.p2.length>=3&&2}(e)}},reset:function(e,n){return(e=Object(j.a)({},p)).turn=n.payload,e}}}),h=v.actions,f=h.playAt,_=h.reset,m=function(e){return e.board.present.grid},x=v.reducer;function O(e){return 1===e?"\ud83d\udfe1":2===e?"\ud83d\udd35":"?"}var g=r(3),B=r.n(g),N=r(1);function I(){var e=u(),n=d((function(e){return e.board.past.length>0})),r=d((function(e){return e.board.future.length>0}));return Object(N.jsxs)("div",{className:i.a.controlBar,children:[Object(N.jsx)("button",{className:i.a.controlButton,onClick:function(){return e(g.ActionCreators.undo())},disabled:!n,children:Object(N.jsx)("div",{className:i.a.controlButtonInside,children:"undo"})}),Object(N.jsx)("div",{className:i.a.controlButtonContainer,children:Object(N.jsx)("button",{className:i.a.controlButton,onClick:function(){return e(g.ActionCreators.redo())},disabled:!r,children:Object(N.jsx)("div",{className:i.a.controlButtonInside,children:"redo"})})}),Object(N.jsx)("div",{className:i.a.controlButtonContainer,children:Object(N.jsx)("button",{className:i.a.controlButton,onClick:function(){return e(_(Math.random()>.5?1:2))},children:Object(N.jsx)("div",{className:i.a.controlButtonInside,children:"reset"})})})]})}var y=r(10),C=r(13),E=r.n(C),w=1e3,k=1e3,A=365;function H(){var e=function(e,n){var r={tr:{pt1:[-1,-1],pt2:[1,-1],values:[]},mr:{pt1:[-1,0],pt2:[1,0],values:[]},br:{pt1:[-1,1],pt2:[1,1],values:[]},lc:{pt1:[-1,-1],pt2:[-1,1],values:[]},mc:{pt1:[0,-1],pt2:[0,1],values:[]},rc:{pt1:[1,-1],pt2:[1,1],values:[]},bltr:{pt1:[-1,1],pt2:[1,-1],values:[]},brtl:{pt1:[-1,-1],pt2:[1,1],values:[]}};return e.forEach((function(e){r[e].values.push(1)})),n.forEach((function(e){r[e].values.push(2)})),r}(d((function(e){return e.board.present.score.p1})),d((function(e){return e.board.present.score.p2}))),n=Object(t.useRef)(null);return Object(t.useEffect)((function(){if(n.current){var r=n.current.getContext("2d");r&&(r.clearRect(0,0,w,k),Object.keys(e).forEach((function(n){var t=e[n],a=t.pt1,c=t.pt2,s=t.values,o=a,i=Object(y.a)(o,2),l=i[0],u=i[1],d=c,j=Object(y.a)(d,2),b=j[0],p=j[1],v=[l*A+500,u*A+500,b*A+500,p*A+500];l=v[0],u=v[1],b=v[2],p=v[3];s.forEach((function(e,t){r.beginPath(),r.moveTo(l+40*(t-(1===s.length?0:1))*("brtl"===n?-1:1),u+40*(t-(1===s.length?0:1))),r.lineWidth=30,r.strokeStyle=1===e?"#FFF100":"#0078D7",r.lineTo(b+40*(t-(1===s.length?0:1))*("brtl"===n?-1:1),p+40*(t-(1===s.length?0:1))),r.closePath(),r.stroke()}))})))}})),Object(N.jsx)("canvas",{ref:n,className:E.a.canvas,height:w,width:k})}function S(){var e=u(),n=d(m),r=d((function(e){return e.board.present.turn})),t=d((function(e){return e.board.present.winner})),a=t?Object(N.jsxs)("h1",{className:i.a.header+" "+i.a.winning,children:[" Winner is ",O(t)]}):1===r?Object(N.jsxs)("h1",{className:i.a.header,children:["Player ",O(1)," turn"]}):Object(N.jsxs)("h1",{className:i.a.header,children:["Player ",O(2)," turn"]}),c=n.map((function(n,r){var a=n.value.map((function(e,n){return Object(N.jsx)("div",{className:i.a.item+" "+(e.used?i.a.used:""),children:O(e.player)},r+n)}));return Object(N.jsxs)("div",{className:i.a.cell+" "+(n.value.length<3?i.a.notfull:""),onClick:function(){t||e(f(r))},children:[Object(N.jsx)("div",{className:i.a.under}),Object(N.jsx)("div",{className:i.a.upper,children:Object(N.jsx)("div",{className:i.a.inside,children:a})})]},r)}));return Object(N.jsxs)("div",{className:i.a.container,children:[Object(N.jsx)("div",{className:i.a.subHeader,children:"Make 3 lines to win"}),a,Object(N.jsxs)("div",{className:i.a.grid,children:[Object(N.jsx)(H,{}),c]}),Object(N.jsx)(I,{})]})}function M(e){var n=d((function(n){return 1===e.player?n.board.present.score.p1.length:n.board.present.score.p2.length}));return Object(N.jsxs)("div",{className:i.a.scoreContainer,children:[Object(N.jsx)("div",{className:i.a.scoreHeader,children:O(e.player)}),Object(N.jsx)("div",{className:i.a.scoreHeader,children:n})]})}r(27);var P=function(){return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(M,{player:1}),Object(N.jsx)(S,{}),Object(N.jsx)(M,{player:2})]})},T=Object(b.a)({reducer:{board:B()(x)}});s.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(l.a,{store:T,children:Object(N.jsx)(P,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.71a3949f.chunk.js.map