(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/Blot1.11c3857f.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/Blot2.896ed59e.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/Blot3.0de331bc.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/Blot4.f6d5bbf3.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/Blot5.f5024377.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/Blot6.0b838438.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/Blot7.3a071c80.jpg"},28:function(e,t,a){e.exports=a.p+"static/media/Blot8.6e80ea02.jpg"},29:function(e,t,a){e.exports=a.p+"static/media/Blot9.34295a98.jpg"},32:function(e,t,a){e.exports=a(46)},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(12),r=a.n(o),i=(a(37),a(6)),s=a(7),l=a(9),u=a(8),p=(a(38),a(50)),d=(a(39),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(p.a,{bg:"light",variant:"light"},n.a.createElement(p.a.Brand,null,n.a.createElement("h1",{className:"text",size:"60"},"Rorschach's Clicky Game")))}}]),a}(n.a.Component)),m=a(48),h=a(51),f=a(20),g=(a(43),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement(m.a,{className:"cards"},this.props.cards.map((function(t){return n.a.createElement(h.a,{className:"card"},n.a.createElement(h.a.Body,null,n.a.createElement(f.a,{index:"",src:t.image,className:"img",id:t.id,onClick:function(){e.props.checkForDuplicate(t)}})))}))))}}]),a}(n.a.Component)),b=a(21),k=a.n(b),j=a(22),E=a.n(j),v=a(23),y=a.n(v),O=a(24),x=a.n(O),B=a(25),S=a.n(B),w=a(26),N=a.n(w),C=a(27),D=a.n(C),F=a(28),T=a.n(F),I=a(29),J=a.n(I),R=a(49),W=(a(44),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(m.a,{className:"flexy"},n.a.createElement(R.a,{className:"column"},n.a.createElement("h1",{className:"padding"},"Current Score:"),n.a.createElement("h1",{className:"padding"},this.props.score)),n.a.createElement("hr",null),n.a.createElement(R.a,{className:"column"},n.a.createElement("h1",{className:"padding"},"Top Score:"),n.a.createElement("h1",{className:"padding"},this.props.topScore)))}}]),a}(c.Component)),z=a(45),A=[{id:1,image:k.a,clicked:!1},{id:2,image:E.a,clicked:!1},{id:3,image:y.a,clicked:!1},{id:4,image:x.a,clicked:!1},{id:5,image:S.a,clicked:!1},{id:6,image:N.a,clicked:!1},{id:7,image:D.a,clicked:!1},{id:8,image:T.a,clicked:!1},{id:9,image:J.a,clicked:!1}],G=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={score:0,topScore:0,cards:z(A),selectedCards:[]},e.checkForDuplicate=function(t){console.log(t.id);var a=e.state.selectedCards;a.includes(t.id)?(console.log("you're terrible!"),e.setState({score:0})):(a.push(t.id),e.setState({selectedCards:a,cards:z(e.state.cards),score:e.state.score+1},(function(){e.setState({topScore:e.state.topScore<e.state.score?e.state.score:e.state.topScore})})),console.log("bueno clicko"))},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(d,null),n.a.createElement(W,{score:this.state.score,topScore:this.state.topScore}),n.a.createElement("h3",{className:"objective"},"Objective: Click on each Rorschach Tile. Do not repeat. Try to click on each tile without repeating one that you've already clicked. If you re-click a tile, your game will start over. You want to achieve the top score."),n.a.createElement(m.a,null,n.a.createElement(g,{cards:this.state.cards,checkForDuplicate:this.checkForDuplicate})))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.fd58a52e.chunk.js.map