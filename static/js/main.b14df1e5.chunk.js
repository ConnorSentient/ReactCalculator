(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(26)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(10),i=a.n(s),r=(a(24),a(5)),o=a(11),l=a(12),u=a(16),m=a(13),v=a(17),d=a(28),h=(a(25),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={active:[],stored:[],answer:0},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"calcClear",value:function(){this.setState({active:[],stored:[],answer:0})}},{key:"activePush",value:function(e){this.setState({active:[].concat(Object(r.a)(this.state.active),[e])})}},{key:"sumPush",value:function(e){var t=this.state.active.join("");this.setState({active:[]}),this.setState({stored:[].concat(Object(r.a)(this.state.stored),[t,e])})}},{key:"calc",value:function(e){var t=[].concat(Object(r.a)(this.state.stored),[e.join("")]).join("");this.setState({answer:Object(d.a)(t)})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"display"},c.a.createElement("h1",null,this.state.active),c.a.createElement("h1",null,this.state.stored),c.a.createElement("h1",null,this.state.answer)),c.a.createElement("div",{className:"gridCont"},[1,2,3,4,5,6,7,8,9,0].map(function(t){return c.a.createElement("div",{className:"x"+t},c.a.createElement("button",{onClick:function(){return e.activePush(t)}},t))}),c.a.createElement("div",{className:"dot"},c.a.createElement("button",{onClick:function(){return e.activePush(".")}},".")),c.a.createElement("div",{className:"ac"},c.a.createElement("button",{onClick:function(){return e.calcClear()}},"A/C")),c.a.createElement("div",{className:"neg"},c.a.createElement("button",null,"+/-")),c.a.createElement("div",{className:"perc"},c.a.createElement("button",null,"%")),c.a.createElement("div",{className:"divide"},c.a.createElement("button",{onClick:function(){return e.sumPush("/")}},"\xf7")),c.a.createElement("div",{className:"multi"},c.a.createElement("button",{onClick:function(){return e.sumPush("*")}},"\xd7")),c.a.createElement("div",{className:"minus"},c.a.createElement("button",{onClick:function(){return e.sumPush("-")}},"-")),c.a.createElement("div",{className:"add"},c.a.createElement("button",{onClick:function(){return e.sumPush("+")}},"+")),c.a.createElement("div",{className:"equals"},c.a.createElement("button",{onClick:function(){return e.calc(e.state.active)}},"="))))}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.b14df1e5.chunk.js.map