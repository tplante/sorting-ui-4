(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n(86)},47:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(30),r=n.n(o),c=(n(47),n(31)),d=n(32),l=n(41),s=n(33),u=n(40),p=n(3),g=n(5),m=n(39),h=n(14),b="skip",f=[{candidate:"Barack Obama",id:"option-0",selected:!1},{candidate:"George Bush",id:"option-1",selected:!1},{candidate:"Hillary Clinton",id:"option-2",selected:!1},{candidate:"Bernie Sanders",id:"option-3",selected:!1},{candidate:"Marco Rubio",id:"option-4",selected:!1},{candidate:"George Washington",id:"option-5",selected:!1},{candidate:"John Adams",id:"option-6",selected:!1},{candidate:"Abraham Lincoln",id:"option-7",selected:!1},{candidate:"Franklin D. Roosevelt",id:"option-8",selected:!1},{candidate:"Ron Swanson",id:"option-9",selected:!1}],v=function(e,t,n){var a=Array.from(e),i=a.splice(t,1),o=Object(m.a)(i,1)[0];return a.splice(n,0,o),a},L={opacity:0,transition:"0.2s ease-in-out",position:"absolute",left:-25,top:20,width:25,height:25,viewBox:"0 0 ".concat(25," ").concat(25),fill:"#2c5c6c"},y={width:"100%",padding:"".concat(10,"px 0"),textAlign:"center",fontWeight:"bold",cursor:"pointer",borderRadius:3},w={textAlign:"left",fontWeight:"bold",cursor:"pointer",borderRadius:3,padding:0},C={display:"inline-block",textAlign:"center",width:20,marginRight:20,padding:20,backgroundColor:"#2c5c6c",color:"white",borderRadius:"3px 0 0 3px",cursor:"pointer"},E={fontSize:16},k=Object(g.a)({},y,{marginTop:20,backgroundColor:"#00b06f",color:"white"}),O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).handleDragEnd=function(e){var t=Object(p.a)(Object(p.a)(n)).container.current,a=e.destination,i=e.source,o=e.draggableId,r=t.querySelector("#".concat(o," select")),c=Array.from(t.querySelectorAll("select")),d=r.value===b||c.some(function(e,t){return e.value===b&&a&&a.index===t});if(a&&!d){var l=v(n.state.items,i.index,a.index);n.setState({items:l})}},n.handleChange=function(e){var t=e.target,a=e.target,i=a.value,o=a.previousValue,r=a.id,c=Object(p.a)(Object(p.a)(n)),d=c.container.current,l=c.state,s=l.options,u=l.items,g=d.querySelectorAll("select"),m=parseInt(r.slice(-1)),h=o&&o!==b;if(h){var f=s.findIndex(function(e){return e.id===o});s[f].selected=!1}if(i!==b){var v=s.findIndex(function(e){return e.id===i});s[v].selected=!0,!h&&m>0&&n.setState({showIcon:!0}),!h&&m<s.length-1&&u.push(s[m+1])}else h&&g.forEach(function(e,t){var n=e.value;if(t>m){u.pop();var a=s.find(function(e){return e.id===n});a&&(a.selected=!1)}});t.previousValue=i,n.setState({options:s,items:u})},n.handleSubmit=function(){n.setState({submitted:!n.state.submitted})},n.state={items:[f[0]],options:f,submitted:!1,showIcon:!1},n.container=Object(a.createRef)(),n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{ref:this.container},i.a.createElement("h1",{style:{textAlign:"center"}},"Rank your favorite candidates"),i.a.createElement(h.a,{onDragEnd:this.handleDragEnd},i.a.createElement(h.c,{droppableId:"droppable"},function(t,n){return i.a.createElement("form",{ref:t.innerRef,style:(n.isDraggingOver,{width:315,margin:"0 auto"})},e.state.items.map(function(t,n){return i.a.createElement(h.b,{key:t.id,draggableId:t.id,index:n},function(a,o){return i.a.createElement("div",Object.assign({id:"option-".concat(n),ref:a.innerRef},a.draggableProps,a.dragHandleProps,{style:Object(g.a)({},(r=o.isDragging,c=a.draggableProps.style,Object(g.a)({position:"relative",userSelect:"none",padding:20,margin:"0 0 ".concat(10,"px 0"),background:r?"lightgreen":"#d8d8d8"},c)),w),key:t.id}),n<e.state.items.length-1&&i.a.createElement("svg",{style:Object(g.a)({},L,{opacity:e.state.showIcon?1:0})},i.a.createElement("path",{d:"M13.7578943,16.6318165 L10.6642975,19.7254012 C10.2981644,20.0915329 9.70460909,20.0915329 9.33847592,19.7254012 L6.24487915,16.6318165 C5.65429263,16.0412323 6.07257429,15.0313915 6.90780948,15.0314306 L8.90632706,15.0314306 L8.90628799,11.0937468 L4.9686279,11.0937468 L4.9686279,13.0922566 C4.9686279,13.9274885 3.95882223,14.3457685 3.36819665,13.7551843 L0.274599878,10.6615996 C-0.0915332925,10.2954679 -0.0915332925,9.70187587 0.274599878,9.3357832 L3.36819665,6.24219851 C3.95878316,5.6516143 4.9686279,6.06989433 4.9686279,6.90512625 L4.9686279,8.9062532 L8.90628799,8.9062532 L8.90628799,4.96860849 L6.90511417,4.96860849 C6.06987897,4.96860849 5.65159732,3.95880676 6.24218383,3.36818349 L9.3357806,0.274598805 C9.70191377,-0.091532935 10.295469,-0.091532935 10.6616022,0.274598805 L13.755199,3.36818349 C14.3457855,3.9587677 13.9275038,4.96860849 13.0922686,4.96860849 L11.0937511,4.96860849 L11.0937511,8.9062532 L15.0314112,8.9062532 L15.0314112,6.90774343 C15.0314112,6.07251151 16.0412168,5.65423148 16.6318034,6.24481569 L19.7254001,9.33840038 C20.0915333,9.70453212 20.0915333,10.2981241 19.7254001,10.6642168 L16.6318034,13.7578015 C16.0412168,14.3483857 15.0313721,13.9301057 15.0314112,13.0948737 L15.0314112,11.0937468 L11.0937901,11.0937468 L11.0937901,15.0313915 L13.094964,15.0313915 C13.9301992,15.0313915 14.3484808,16.0411932 13.7578943,16.6318165 Z",id:"Path"})),i.a.createElement("label",{style:C,htmlFor:"menu-".concat(n)},n+1),i.a.createElement("select",{id:"menu-".concat(n),style:E,onChange:e.handleChange},i.a.createElement("option",{defaultValue:!0,value:b},"Select an option (or skip)"),e.state.options.map(function(e,t){return i.a.createElement("option",{key:e.id,value:e.id,disabled:e.selected},e.candidate)})));var r,c})}),t.placeholder,i.a.createElement("div",{onClick:e.handleSubmit,style:k},e.state.submitted?"Nice!":"Submit"))})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,2,1]]]);
//# sourceMappingURL=main.b2136603.chunk.js.map