(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n(86)},47:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(30),c=n.n(i),r=(n(47),n(31)),d=n(32),s=n(41),l=n(33),u=n(40),p=n(3),h=n(5),m=n(39),g=n(14),f="skip",b=1e3,w=[{candidate:"Barack Obama",id:"option-0",selected:!1,showIcon:!1},{candidate:"George Bush",id:"option-1",selected:!1,showIcon:!1},{candidate:"Hillary Clinton",id:"option-2",selected:!1,showIcon:!1},{candidate:"Bernie Sanders",id:"option-3",selected:!1,showIcon:!1},{candidate:"Marco Rubio",id:"option-4",selected:!1,showIcon:!1},{candidate:"George Washington",id:"option-5",selected:!1,showIcon:!1},{candidate:"John Adams",id:"option-6",selected:!1,showIcon:!1},{candidate:"Abraham Lincoln",id:"option-7",selected:!1,showIcon:!1},{candidate:"Franklin D. Roosevelt",id:"option-8",selected:!1,showIcon:!1},{candidate:"Ron Swanson",id:"option-9",selected:!1,showIcon:!1}],v=function(e,t,n){var o=Array.from(e),a=o.splice(t,1),i=Object(m.a)(a,1)[0];return o.splice(n,0,i),o},y={opacity:0,transition:"0.2s ease-in-out",position:"absolute",left:-30,top:20,width:30,height:30,viewBox:"0 0 ".concat(30," ").concat(30),fill:"#2c5c6c"},L={width:"100%",padding:"".concat(10,"px 0"),textAlign:"center",fontWeight:"bold",cursor:"pointer",borderRadius:3},I={textAlign:"left",fontWeight:"bold",cursor:"pointer",borderRadius:3,padding:0},E={display:"inline-block",textAlign:"center",width:20,marginRight:20,padding:20,backgroundColor:"#2c5c6c",color:"white",borderRadius:"3px 0 0 3px",cursor:"pointer"},C={fontSize:16},k=Object(h.a)({},L,{marginTop:20,backgroundColor:"#00b06f",color:"white"}),O=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).handleDragEnd=function(e){var t=Object(p.a)(Object(p.a)(n)).container.current,o=e.destination,a=e.source,i=e.draggableId,c=t.querySelector("#".concat(i," select")),r=Array.from(t.querySelectorAll("select")),d=c.value===f||r.some(function(e,t){return e.value===f&&o&&o.index===t});if(o&&!d){var s=v(n.state.items,a.index,o.index);n.setState({items:s})}},n.handleChange=function(e){var t=e.target,o=e.target,a=o.value,i=o.previousValue,c=o.id,r=Object(p.a)(Object(p.a)(n)),d=r.container.current,s=r.state,l=s.options,u=s.items,h=d.querySelectorAll("select"),m=parseInt(c.slice(-1)),g=i&&i!==f;if(g){var w=l.findIndex(function(e){return e.id===i});l[w].selected=!1}if(a!==f){var v=l.findIndex(function(e){return e.id===a});l[v].selected=!0,!g&&m>0&&(u[m].showIcon=!0),!g&&m<l.length-1&&u.push(l[m+1])}else g&&h.forEach(function(e,t){var n=e.value;if(t>m){u.pop();var o=l.find(function(e){return e.id===n});o&&(o.selected=!1)}});t.previousValue=a,n.setState({options:l,items:u}),n.showIconTimeout=setTimeout(function(){u.forEach(function(e){return e.showIcon=!1}),n.setState({items:u})},b)},n.handleSubmit=function(){n.setState({submitted:!n.state.submitted})},n.state={items:[w[0]],options:w,submitted:!1},n.container=Object(o.createRef)(),n.showIconTimeout=null,n}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentWillUnmount",value:function(){clearTimeout(this.showIconTimeout)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{ref:this.container},a.a.createElement("h1",{style:{textAlign:"center"}},"Rank your favorite candidates"),a.a.createElement(g.a,{onDragEnd:this.handleDragEnd},a.a.createElement(g.c,{droppableId:"droppable"},function(t,n){return a.a.createElement("form",{ref:t.innerRef,style:(n.isDraggingOver,{width:330,margin:"0 auto"})},e.state.items.map(function(t,n){return a.a.createElement(g.b,{key:t.id,draggableId:t.id,index:n},function(o,i){return a.a.createElement("div",Object.assign({id:"option-".concat(n),ref:o.innerRef},o.draggableProps,o.dragHandleProps,{style:Object(h.a)({},(c=i.isDragging,r=o.draggableProps.style,Object(h.a)({position:"relative",userSelect:"none",padding:20,margin:"0 0 ".concat(10,"px 0"),background:c?"lightgreen":"#d8d8d8"},r)),I),key:t.id}),a.a.createElement("svg",{style:Object(h.a)({},y,{opacity:t.showIcon?1:0})},a.a.createElement("path",{d:"M13.7578943,16.6318165 L10.6642975,19.7254012 C10.2981644,20.0915329 9.70460909,20.0915329 9.33847592,19.7254012 L6.24487915,16.6318165 C5.65429263,16.0412323 6.07257429,15.0313915 6.90780948,15.0314306 L8.90632706,15.0314306 L8.90628799,11.0937468 L4.9686279,11.0937468 L4.9686279,13.0922566 C4.9686279,13.9274885 3.95882223,14.3457685 3.36819665,13.7551843 L0.274599878,10.6615996 C-0.0915332925,10.2954679 -0.0915332925,9.70187587 0.274599878,9.3357832 L3.36819665,6.24219851 C3.95878316,5.6516143 4.9686279,6.06989433 4.9686279,6.90512625 L4.9686279,8.9062532 L8.90628799,8.9062532 L8.90628799,4.96860849 L6.90511417,4.96860849 C6.06987897,4.96860849 5.65159732,3.95880676 6.24218383,3.36818349 L9.3357806,0.274598805 C9.70191377,-0.091532935 10.295469,-0.091532935 10.6616022,0.274598805 L13.755199,3.36818349 C14.3457855,3.9587677 13.9275038,4.96860849 13.0922686,4.96860849 L11.0937511,4.96860849 L11.0937511,8.9062532 L15.0314112,8.9062532 L15.0314112,6.90774343 C15.0314112,6.07251151 16.0412168,5.65423148 16.6318034,6.24481569 L19.7254001,9.33840038 C20.0915333,9.70453212 20.0915333,10.2981241 19.7254001,10.6642168 L16.6318034,13.7578015 C16.0412168,14.3483857 15.0313721,13.9301057 15.0314112,13.0948737 L15.0314112,11.0937468 L11.0937901,11.0937468 L11.0937901,15.0313915 L13.094964,15.0313915 C13.9301992,15.0313915 14.3484808,16.0411932 13.7578943,16.6318165 Z",id:"Path"})),a.a.createElement("label",{style:E,htmlFor:"menu-".concat(n)},n+1),a.a.createElement("select",{id:"menu-".concat(n),style:C,onChange:e.handleChange},a.a.createElement("option",{defaultValue:!0,value:f},"Select an option (or skip)"),e.state.options.map(function(e,t){return a.a.createElement("option",{key:e.id,value:e.id,disabled:e.selected},e.candidate)})));var c,r})}),t.placeholder,a.a.createElement("div",{onClick:e.handleSubmit,style:k},e.state.submitted?"Nice!":"Submit"))})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,2,1]]]);
//# sourceMappingURL=main.0a6a90bb.chunk.js.map