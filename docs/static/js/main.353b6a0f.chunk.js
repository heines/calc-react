(this["webpackJsonpcalc-react"]=this["webpackJsonpcalc-react"]||[]).push([[0],[,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(4),c=a.n(i),r=(a(15),a(16),a(5)),l=a(6),u=a(8),o=a(7),h=a(9);a(2),a(3);var m=function(e){return s.a.createElement("div",{className:"p-display"},e.param)};var v=function(e){return s.a.createElement("div",{className:"p-calc__cell",onClick:e.onClick},e.value)},p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={ans:0,num:0,ope:"plus",nget:!0,calc:!1,sep:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClickNum",value:function(e){var t=this.state.ans;this.state.num;if(this.state.nget)this.setState({ans:Number(e),nget:!1});else{var a=String(t)+String(e);a.length<15&&this.setState({ans:Number(a)})}}},{key:"handleClickClear",value:function(){this.setState({ans:0,num:0,ope:"plus",nget:!0,calc:!1,sep:!1})}},{key:"handleClickOperator",value:function(e){var t=this.state.ans;this.state.calc&&(t=this.calc()),this.setState({ans:t,num:t,ope:e,nget:!0,calc:!0,sep:!1})}},{key:"calc",value:function(){var e=Number(this.state.num),t=Number(this.state.ans);switch(this.state.ope){case"plus":return this.toExp(e+t);case"minus":return this.toExp(e-t);case"times":return this.toExp(e*t);case"dividedby":return this.toExp(e/t);default:return this.toExp(e+t)}}},{key:"toExp",value:function(e){return String(e).length>15?Number(e).toExponential(8):e}},{key:"handleClickCalc",value:function(){var e=this.calc();this.handleClickClear(),this.setState({ans:e})}},{key:"handleClickPercentage",value:function(){var e=this.toExp(.01*this.state.ans);this.handleClickClear(),this.setState({ans:e})}},{key:"handleClickSign",value:function(){var e=this.toExp(-1*this.state.ans);this.setState({ans:e})}},{key:"handleClickDecPoint",value:function(){var e=this.state.ans;this.state.sep||this.setState({ans:String(e)+".",sep:!0})}},{key:"setNum",value:function(e){var t=this;return s.a.createElement(v,{value:e,onClick:function(){return t.handleClickNum(e)}})}},{key:"setOperator",value:function(e,t){var a=this;return s.a.createElement(v,{value:e,onClick:function(){return a.handleClickOperator(t)}})}},{key:"setCalc",value:function(e){var t=this;return s.a.createElement(v,{value:e,onClick:function(){return t.handleClickCalc()}})}},{key:"setClear",value:function(e){var t=this;return s.a.createElement(v,{value:e,onClick:function(){return t.handleClickClear()}})}},{key:"setSign",value:function(e){var t=this;return s.a.createElement(v,{value:e,onClick:function(){return t.handleClickSign()}})}},{key:"setPercentage",value:function(){var e=this;return s.a.createElement(v,{value:"%",onClick:function(){return e.handleClickPercentage()}})}},{key:"setDecPoint",value:function(){var e=this;return s.a.createElement(v,{value:".",onClick:function(){return e.handleClickDecPoint()}})}},{key:"render",value:function(){var e=this.state.ans;return s.a.createElement("div",{className:"p-calc"},s.a.createElement(m,null),s.a.createElement(m,{param:e}),s.a.createElement("div",{className:"p-calc__row"},this.setClear("AC"),this.setSign("+/-"),this.setPercentage(),this.setOperator("\xf7","dividedby")),s.a.createElement("div",{className:"p-calc__row"},this.setNum("7"),this.setNum("8"),this.setNum("9"),this.setOperator("\xd7","times")),s.a.createElement("div",{className:"p-calc__row"},this.setNum("4"),this.setNum("5"),this.setNum("6"),this.setOperator("\u2212","minus")),s.a.createElement("div",{className:"p-calc__row"},this.setNum("1"),this.setNum("2"),this.setNum("3"),this.setOperator("+","plus")),s.a.createElement("div",{className:"p-calc__row"},this.setNum("0"),this.setNum("00"),this.setDecPoint(),this.setCalc("=")))}}]),t}(s.a.Component);var k=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.353b6a0f.chunk.js.map