(this["webpackJsonpstocks-app"]=this["webpackJsonpstocks-app"]||[]).push([[0],{119:function(e,t,a){e.exports={chart:"StocksChart_chart__-Rw-M"}},143:function(e,t,a){e.exports=a(246)},148:function(e,t,a){},246:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),i=(a(148),a(294)),l=a(285),s=a(73),u=a(121),m=a(300),E=a(280),d=a(301),S=a(284),p=a(303),b=a(297),f=a(305),O=a(286),h=a(287),g=a(282),I=a(299),v=a(290),y=a(291),j=a(292),_=a(277),T=a(17),k=a(296),C=a(15),w=a(64),D=function e(){Object(w.a)(this,e)};D.API_KEY="F3G7JLZV90IVE8Z5",D.API_ENDPOINT="https://www.alphavantage.co/query",D.STOCKS_TIME_SERIES=[{id:"TIME_SERIES_INTRADAY",interval:"15min",jsonKey:"Time Series (15min)",name:"Intraday"},{id:"TIME_SERIES_DAILY",jsonKey:"Time Series (Daily)",name:"Daily"},{id:"TIME_SERIES_WEEKLY",jsonKey:"Weekly Time Series",name:"Weekly"},{id:"TIME_SERIES_MONTHLY",jsonKey:"Monthly Time Series",name:"Monthly"}],D.STOCKS_TIME_SERIES_PRICES=[{jsonKey:"1. open",name:"Open"},{jsonKey:"2. high",name:"High"},{jsonKey:"3. low",name:"Low"},{jsonKey:"4. close",name:"Close"}];var R=a(86),K=a.n(R),M=a(113),A=a(74),x=a(72),P=D.STOCKS_TIME_SERIES,N={data:null,loading:!1,timeSeries:Object(A.a)(D.STOCKS_TIME_SERIES),prices:Object(A.a)(D.STOCKS_TIME_SERIES_PRICES),timeSeriesOpt:D.STOCKS_TIME_SERIES[1].id,priceOptions:Object(A.a)(D.STOCKS_TIME_SERIES_PRICES.map((function(e){return e.name}))),showAverage:!1,startDate:(new Date).toISOString(),endDate:(new Date).toISOString()},L=Object(x.b)({name:"stocks",initialState:N,reducers:{stockDataLoading:function(e){e.loading=!0},stockDataLoaded:function(e,t){e.loading=!1,e.data=t.payload},setTimeSeriesOpt:function(e,t){e.timeSeriesOpt=t.payload},setPriceOptions:function(e,t){e.priceOptions=t.payload},setShowAverage:function(e,t){e.showAverage=t.payload},setStartDate:function(e,t){e.startDate=t.payload},setEndDate:function(e,t){e.endDate=t.payload}}}),W=L.actions,Y=W.stockDataLoading,B=W.stockDataLoaded,F=W.setTimeSeriesOpt,J=W.setPriceOptions,V=W.setShowAverage,q=W.setStartDate,z=W.setEndDate,H=function(e){return e.stocks.loading},Z=function(e){return e.stocks.data},G=function(e){return e.stocks.timeSeriesOpt},$=function(e){return e.stocks.priceOptions},Q=function(e){return e.stocks.showAverage},U=function(e){return e.stocks.startDate},X=function(e){return e.stocks.endDate},ee=L.reducer,te=Object(_.a)((function(e){return Object(m.a)({formControl:{margin:e.spacing(1),minWidth:100},selectEmpty:{marginTop:e.spacing(2)}})})),ae=D.STOCKS_TIME_SERIES,ne=D.STOCKS_TIME_SERIES_PRICES;function re(){var e=te(),t=Object(C.b)(),a=Object(n.useState)("IBM"),c=Object(s.a)(a,2),o=c[0],i=c[1],l=Object(C.c)(G),m=Object(C.c)($),_=Object(C.c)(Q),w=Object(C.c)(U),R=Object(C.c)(X),A=function(){var e;o.length>0&&t((e=o,function(){var t=Object(M.a)(K.a.mark((function t(a,n){var r,c,o,i,l,s;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n().stocks.timeSeriesOpt,c=P.find((function(e){return e.id===r}))){t.next=4;break}return t.abrupt("return");case 4:return a(Y()),o=r===P[0].id?"&interval=".concat(c.interval):"",t.next=8,fetch("".concat(D.API_ENDPOINT,"?function=").concat(r,"&symbol=").concat(e).concat(o,"&apikey=").concat(D.API_KEY));case 8:return i=t.sent,t.next=11,i.json();case 11:l=t.sent,s=c.jsonKey,a(B(l[s]));case 14:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()))};return Object(n.useEffect)((function(){A()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{utils:u.a},r.a.createElement(E.a,{container:!0,direction:"column"},r.a.createElement(E.a,{container:!0,item:!0,justify:"space-around",alignItems:"center",xs:6},r.a.createElement(E.a,{item:!0,xs:1},r.a.createElement(d.a,{required:!0,id:"standard-basic",label:"Symbol","aria-label":"Symbol",value:o,onChange:function(e){return i(e.target.value)}})),r.a.createElement(E.a,{item:!0,xs:1},r.a.createElement(S.a,{className:e.formControl},r.a.createElement(p.a,{id:"demo-simple-select-label"},"Time Series"),r.a.createElement(b.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:l,onChange:function(e){return t(F(e.target.value))}},ae.map((function(e){return r.a.createElement(f.a,{key:e.id,value:e.id},(t=e.id,(ae.find((function(e){return e.id===t}))||{name:""}).name));var t}))))),r.a.createElement(E.a,{item:!0,xs:3},r.a.createElement(O.a,{disabled:0===o.length,variant:"contained",color:"primary",onClick:A},"See stock info"))),r.a.createElement(h.a,null),r.a.createElement(E.a,{container:!0,item:!0,justify:"space-evenly",alignItems:"center"},r.a.createElement(E.a,{item:!0,xs:2}," ",r.a.createElement("h2",null,"Change view")),r.a.createElement(E.a,{item:!0,xs:2},r.a.createElement(k.a,{disabled:"TIME_SERIES_INTRADAY"===l,margin:"normal",id:"date-picker-dialog-start",label:"Start Date",format:"MM/dd/yyyy",value:w,onChange:function(e){return t(q(e.toISOString()))},KeyboardButtonProps:{"aria-label":"Change Start date"}})),r.a.createElement(E.a,{item:!0,xs:2},r.a.createElement(k.a,{disabled:"TIME_SERIES_INTRADAY"===l,margin:"normal",id:"date-picker-dialog-end",label:"End Date",format:"MM/dd/yyyy",value:R,onChange:function(e){return t(z(e.toISOString()))},KeyboardButtonProps:{"aria-label":"Change end date"}})),r.a.createElement(E.a,{item:!0,xs:2},r.a.createElement(S.a,{className:e.formControl},r.a.createElement(p.a,{id:"price-options-label"},"Prices"),r.a.createElement(b.a,{labelId:"price-options-label",id:"price-options",multiple:!0,value:m,onChange:function(e){return t(J(e.target.value))},input:r.a.createElement(g.a,null),renderValue:function(e){return e.join(", ")}},ne.map((function(e){return r.a.createElement(f.a,{key:e.name,value:e.name},r.a.createElement(I.a,{checked:-1!==m.indexOf(e.name)}),r.a.createElement(v.a,{primary:e.name}))}))))),r.a.createElement(E.a,{item:!0,xs:1},r.a.createElement(y.a,{control:r.a.createElement(j.a,{checked:_,onChange:function(e){return t(V(e.target.checked))},color:"primary",name:"Average",inputProps:{"aria-label":"primary checkbox"}}),label:"Average"}))))))}var ce=a(87),oe=a(288),ie=a(289),le=a(293),se=a(117),ue=a(119),me=a.n(ue),Ee=Object(_.a)((function(e){return Object(m.a)({backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}})})),de=D.STOCKS_TIME_SERIES_PRICES,Se={fill:!1,lineTension:0,borderWidth:1,order:0},pe={"1. open":"rgb(197, 216, 109)","2. high":"rgb(38, 28, 21)","3. low":"rgb(145, 151, 174)","4. close":"rgb(215, 214, 214)",average:"rgb(240, 93, 35)"};var be=function(){var e=Ee(),t=Object(n.useState)({}),a=Object(s.a)(t,2),c=a[0],o=a[1],i=Object(C.c)(H),l=Object(C.c)(Z),u=Object(C.c)(G),m=Object(C.c)($),E=Object(C.c)(Q),d=Object(C.c)(U),S=Object(C.c)(X);return Object(n.useEffect)((function(){if(l){var e=Object.keys(l),t=Object.entries(l);if(e.reverse(),t.reverse(),"TIME_SERIES_INTRADAY"!==u&&d&&S&&d!==S){var a={start:new Date(d),end:new Date(S)};e=e.filter((function(e,n){var r=Object(le.a)(new Date(e),a);return!r&&t.splice(n,1),r}))}var n=m.map((function(e,a){var n,r=(n=e,(de.find((function(e){return e.name===n}))||{jsonKey:""}).jsonKey);return Object(ce.a)({},Se,{label:e,borderColor:pe[r],order:a,data:t.map((function(e){return e[1][r]}))})}));if(E){var r=t.map((function(e){return(parseFloat(e[1]["3. low"])+parseFloat(e[1]["2. high"]))/2}));n.push(Object(ce.a)({},Se,{label:"Average",borderColor:pe.average,borderWidth:3,order:5,data:r}))}o({labels:e,datasets:n})}}),[l,d,S,u,m,E]),r.a.createElement("div",{className:me.a.chart},r.a.createElement(oe.a,{className:e.backdrop,open:i},r.a.createElement(ie.a,{color:"inherit"})),r.a.createElement(se.a,{data:c}))},fe=a(120),Oe=a(122),he=a(123),ge=function(e){Object(he.a)(a,e);var t=Object(Oe.a)(a);function a(e){var n;return Object(w.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(fe.a)(a,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(r.a.PureComponent);var Ie=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{maxWidth:"lg"},r.a.createElement(l.a,null,r.a.createElement(ge,null,r.a.createElement(re,null))),r.a.createElement(ge,null,r.a.createElement(be,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=Object(x.a)({reducer:{stocks:ee}}),ye=a(295);o.a.render(r.a.createElement(C.a,{store:ve},r.a.createElement(ye.a,null,r.a.createElement(Ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[143,1,2]]]);
//# sourceMappingURL=main.d2c3492d.chunk.js.map