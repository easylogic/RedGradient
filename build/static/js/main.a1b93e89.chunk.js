(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{299:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),c=n(39),r=n.n(c),o=(n(49),n(2)),s=n(3),l=n(5),d=n(4),h=(n(50),n(0)),j=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("input",{style:{width:"".concat(this.props.width||"")},type:"number",value:this.props.value,onInput:this.props.HD_onInput})}}]),n}(a.a.Component),p={LINEAR:"linear-gradient",RADIAL:"radial-gradient"},u=120,b=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.rootComponent,e=t.state,i=e.layers,a=e.canvasInfo;return Object(h.jsxs)("div",{style:x.container,children:[Object(h.jsx)("div",{className:"todo",children:"Todo - \ub808\uc774\uc5b4 \ucd94\uac00 \uc0ad\uc81c"}),Object(h.jsx)("div",{className:"todo",children:"Todo - \ub808\uc774\uc5b4 \uadf8\ub8f9 \uc5f4\uace0\ub2eb\uae30"}),Object(h.jsx)("div",{className:"todo",children:"Todo - \ub808\uc774\uc5b4 \ubc30\uacbd \uc0c9\uc0c1 \uc124\uc815"}),i.map((function(i,c){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"layerItemTitle",children:i.title}),Object(h.jsx)("div",{className:"transparent_checker",style:{width:"".concat(u,"px"),height:"".concat(a.height/a.width*u,"px"),cursor:"pointer",borderRadius:"4px",overflow:"hidden"},onClick:function(e){return t.setState({activeData:i,activeSubData:i.items[0]})},children:Object(h.jsx)("div",{className:"layerItem",style:{background:n.calcGradientItems(i.items)}})}),Object(h.jsx)("div",{children:i.items.map((function(c){var r=e.activeSubData===c;return Object(h.jsxs)("div",{style:{opacity:c.visible?1:.5,transition:"opacity 0.2s"},children:[Object(h.jsx)("div",{className:"layerItemSubTitle",children:c.title}),Object(h.jsxs)("div",{className:"transparent_checker",style:{width:"".concat(100,"px"),height:"".concat(a.height/a.width*100,"px"),marginLeft:"".concat(20,"px"),cursor:"pointer",borderRadius:"4px",overflow:"hidden"},onClick:function(e){return t.setState({activeData:i,activeSubData:c})},children:[Object(h.jsx)("div",{className:"layerItem",style:{background:n.calcGradientItem(c)}}),Object(h.jsx)("button",{className:"layerVisible",onClick:function(e){c.visible=!c.visible,t.setState({})},children:c.visible?"on":"off"}),Object(h.jsx)("button",{className:"layerType",children:c.type.charAt(0).toUpperCase()}),Object(h.jsx)("div",{style:r?x.activeLine:x.deActiveLine})]})]})}))})]})}))]})}}]),n}(a.a.Component);b.calcGradients=function(t,e){return t.map((function(t){return b.calcGradientItems(t.items,e)})).join(",")},b.calcGradientItems=function(t,e){return t.map((function(t){return b.calcGradientItem(t,e)})).join(",")},b.calcGradientItem=function(t,e){if(!t)return"";if(e&&!t.visible)return"linear-gradient(45deg, transparent,transparent )";if(t.type===p.LINEAR){var n=t.colorList.map((function(t){var e=void 0===t.range?"":"".concat(t.range).concat(t.rangeUnit);return"".concat(t.color," ").concat(e)})),i=t.position?" ".concat(t.position.x).concat(t.position.xUnit," ").concat(t.position.y).concat(t.position.yUnit):"",a=t.size?" ".concat(t.size.w).concat(t.size.wUnit," ").concat(t.size.h).concat(t.size.hUnit):"";return"".concat(t.type,"(").concat(t.deg,"deg, ").concat(n,") ").concat(i," / ").concat(a)}var c=t.colorList.map((function(t){var e=void 0===t.range?"":"".concat(t.range).concat(t.rangeUnit);return"".concat(t.color," ").concat(e)})),r=t.position?" ".concat(t.position.x).concat(t.position.xUnit," ").concat(t.position.y).concat(t.position.yUnit):"",o=t.size?" ".concat(t.size.w).concat(t.size.wUnit," ").concat(t.size.h).concat(t.size.hUnit):"";return"".concat(t.type,"(").concat(c,") ").concat(r," / ").concat(o)};var v=b,x={container:{borderRight:"1px solid #000",overflowX:"hidden",overflowY:"auto",padding:"10px ".concat(6,"px")},layerItem:{height:"35px",cursor:"pointer"},activeLine:{position:"absolute",top:0,left:0,right:0,bottom:0,border:"2px solid #5e7ade",transition:"border 0.2s"},deActiveLine:{border:"2px solid transparent"}},g=[{title:"512 x 512",width:512,height:512},{title:"Google Pixel 4, 4XL",width:412,height:870},{title:"iPhone 12 Pro Max",width:428,height:926},{title:"web 1366",width:1366,height:768},{title:"web 1920",width:1920,height:1080}],O=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.rootComponent,e=t.state,n=e.canvasInfo,i=e.layers;return console.log(v.calcGradients(i)),Object(h.jsxs)("div",{style:m.container,children:[Object(h.jsxs)("div",{style:m.canvasResizer,children:[Object(h.jsx)(j,{value:n.width,HD_onInput:function(e){n.width=e.target.value,t.setState({})}}),Object(h.jsx)(j,{value:n.height,HD_onInput:function(e){n.height=e.target.value,t.setState({})}}),Object(h.jsx)("div",{children:g.map((function(e){return Object(h.jsx)("button",{onClick:function(i){n.width=e.width,n.height=e.height,t.setState({})},children:Object(h.jsxs)("div",{children:[e.title,"(",e.width,"x",e.height,")"]})})}))}),Object(h.jsx)("div",{className:"todo",children:"Todo - \ub808\uc774\uc5b4\ub97c display item\ud654 \uc2dc\ucf1c\uc11c... \uac1d\uccb4 \uc5d0\ub514\ud305\uc73c\ub85c\ub3c4 \uac12 \ubcc0\uacbd\ud560\uc218\uc788\ub3c4\ub85d"}),Object(h.jsx)("div",{className:"todo",children:"Todo - \ud328\uc2a4\uae30\ubc18 \ub808\uc774\uc5b4\ub3c4 \ucd94\uac00\ud574\uc57c\ud558\ub294\ub370 \uc544\uc9c1 \uc624\ubb18..."})]}),Object(h.jsx)("div",{style:m.canvas,className:"transparent_checker",children:Object(h.jsx)("div",{className:"transparent_checker",style:{width:"".concat(n.width,"px"),height:"".concat(n.height,"px"),background:v.calcGradients(i,!0),transition:"width 0.2s, height 0.2s"}})})]})}}]),n}(a.a.Component),m={container:{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},canvas:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",overflow:"auto"},canvasResizer:{position:"sticky",top:0,left:0,zIndex:1}},f=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"ui_title",children:this.props.title})}}]),n}(a.a.Component),y=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("input",{style:{width:"".concat(this.props.width||"")},type:"text",value:this.props.value,onInput:this.props.HD_onInput})}}]),n}(a.a.Component),w=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsx)("select",{style:{width:"".concat(this.props.width||"","px")},onChange:this.props.HD_change,children:(this.props.options||[]).map((function(e){var n=t.props.value===e;return console.log(e,n),Object(h.jsx)("option",{value:e,selected:n,children:e})}))})}}]),n}(a.a.Component),U=n(300),N=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.rootComponent.state.activeSubData;return Object(h.jsx)("div",{style:C.container,children:Object(h.jsx)("div",{className:"transparent_checker",children:D(t)})})}}]),n}(a.a.Component),C={container:{paddingTop:"10px",paddingBottom:"30px"}},D=function(t){var e=[],n=t.colorList.map((function(t){var n=void 0===t.range?"":"".concat(t.range).concat(t.rangeUnit);return e.push(function(t){return Object(h.jsx)("div",{style:{position:"absolute",top:"-3px",bottom:"-3px",left:"".concat(t.range||0).concat(t.rangeUnit),borderRadius:"5px",width:"10px",background:"#fff",border:"1px solid #000",transform:"translate(-50%,0)",textAlign:"center"},children:Object(h.jsxs)("div",{style:{position:"absolute",bottom:0,transform:"translate(-25%,100%)",textAlign:"center",fontSize:"9px",whiteSpace:"nowrap"},children:[t.range," ",t.rangeUnit]})})}(t)),"".concat(t.color," ").concat(n)}));return Object(h.jsx)("div",{style:{height:"35px",background:"".concat(t.type,"(").concat(t.deg,"deg, ").concat(n,")")},children:e})},S=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.rootComponent,e=t.state.activeSubData;return Object(h.jsxs)("div",{style:_.container,children:[Object(h.jsx)(f,{title:"Red_PropertyEdit"}),Object(h.jsxs)("div",{style:_.contentWrap,children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{style:_.itemContainer,children:["\ud0c0\uc774\ud2c0",Object(h.jsx)("div",{children:Object(h.jsx)(y,{width:"calc(100% - 4px)",value:e.title,HD_onInput:function(n){e.title=n.target.value,t.setState({})}})})]}),Object(h.jsxs)("div",{style:_.itemContainer,children:["Gradient ColorRange",Object(h.jsx)(N,{rootComponent:t}),Object(h.jsx)("div",{className:"todo",children:"Todo - \uc2a4\ud15d\ucd94\uac00/\uc0ad\uc81c, \uc774\ub3d9"}),Object(h.jsx)("div",{className:"todo",children:"TODO - \uadf8\ub77c\ub514\uc5b8\ud2b8 \uceec\ub7ec\uc140\ub809\ud130"})]}),Object(h.jsx)("div",{style:_.itemContainer,children:Object(h.jsx)("div",{className:"todo",children:Object(h.jsx)(w,{value:e.type,options:Object.keys(p),HD_change:function(n){e.type=p[n.target.value],t.setState({})}})})}),e.type===p.LINEAR?Object(h.jsxs)("div",{style:_.itemContainer,children:["Deg ",Object(h.jsx)(j,{width:"80px",value:e.deg||0,HD_onInput:function(n){e.deg=n.target.value,t.setState({})}})]}):"",Object(h.jsxs)("div",{style:_.itemContainer,children:["Position",Object(h.jsxs)("div",{children:[Object(h.jsx)(j,{width:"80px",value:e.position.x||0,HD_onInput:function(n){e.position.x=n.target.value,t.setState({})}}),Object(h.jsx)(w,{value:e.position.xUnit,options:["px","%"],HD_change:function(n){e.position.xUnit=n.target.value,t.setState({})}}),Object(h.jsx)(j,{width:"80px",value:e.position.y||0,HD_onInput:function(n){e.position.y=n.target.value,t.setState({})}}),Object(h.jsx)(w,{value:e.position.yUnit,options:["px","%"],HD_change:function(n){e.position.yUnit=n.target.value,t.setState({})}})]})]}),Object(h.jsxs)("div",{style:_.itemContainer,children:["Size",Object(h.jsxs)("div",{children:[Object(h.jsx)(j,{width:"80px",value:e.size.w||0,HD_onInput:function(n){e.size.w=n.target.value,t.setState({})}}),Object(h.jsx)(w,{value:e.size.wUnit,options:["px","%"],HD_change:function(n){e.size.wUnit=n.target.value,t.setState({})}}),Object(h.jsx)(j,{width:"80px",value:e.size.h||0,HD_onInput:function(n){e.size.h=n.target.value,t.setState({})}}),Object(h.jsx)(w,{value:e.size.hUnit,options:["px","%"],HD_change:function(n){e.size.hUnit=n.target.value,t.setState({})}})]})]}),Object(h.jsx)("div",{className:"todo",children:"TODO - \ubc18\ubcf5 Edit"})]}),Object(h.jsxs)("div",{style:_.itemContainer,children:[Object(h.jsx)("div",{children:"Current Data"}),Object(h.jsx)(U.a,{language:"javascript",wrapLongLines:"pre",children:JSON.stringify(e,null,2)})]})]})]})}}]),n}(a.a.Component),_={container:{width:"300px",borderRight:"1px solid #000",overflowX:"hidden",overflowY:"auto"},contentWrap:{padding:"10px 10px"},layer:{height:"30px"},itemContainer:{padding:"4px 0px",borderBottom:"1px solid rgba(0,0,0,0.5)"}},I=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={canvasInfo:{width:300,height:300},activeData:null,activeSubData:null,layers:[{title:"testLayer sdfsdfsdfsdf",visible:!0,items:[{title:"leftBottom",type:"linear-gradient",deg:45,visible:!0,position:{x:30,xUnit:"px",y:30,yUnit:"px"},size:{w:30,wUnit:"%",h:30,hUnit:"%"},colorList:[{color:"rgba(255,0,0,0.9)",range:25,rangeUnit:"%"},{color:"transparent",range:25,rangeUnit:"%"},{color:"transparent",range:void 0,rangeUnit:"%"}]},{title:"leftTop sdfsdfsdf",type:"linear-gradient",deg:-45,visible:!0,position:{x:0,xUnit:"px",y:0,yUnit:"px"},size:{w:100,wUnit:"%",h:100,hUnit:"%"},colorList:[{color:"rgba(0,255,0,0.9)",range:25,rangeUnit:"%"},{color:"transparent",range:25,rangeUnit:"%"},{color:"transparent",range:void 0,rangeUnit:"%"}]},{title:"test",type:"linear-gradient",deg:90,visible:!0,position:{x:30,xUnit:"px",y:30,yUnit:"px"},size:{w:30,wUnit:"%",h:30,hUnit:"%"},colorList:[{color:"rgba(255,0,0,1)",range:0,rangeUnit:"%"},{color:"rgba(0,255,255,0.1)",range:35,rangeUnit:"%"},{color:"rgba(0,255,0,1)",range:100,rangeUnit:"%"}]},{title:"rightBottom",type:"linear-gradient",deg:-45,visible:!0,position:{x:0,xUnit:"px",y:0,yUnit:"px"},size:{w:100,wUnit:"%",h:100,hUnit:"%"},colorList:[{color:"transparent",range:75,rangeUnit:"%"},{color:"rgba(0,0,255,0.9)",range:75,rangeUnit:"%"}]},{title:"rightTop",type:"linear-gradient",deg:45,visible:!0,position:{x:0,xUnit:"px",y:0,yUnit:"px"},size:{w:100,wUnit:"%",h:100,hUnit:"%"},colorList:[{color:"transparent",range:75,rangeUnit:"%"},{color:"rgba(255,0,255,0.9)",range:75,rangeUnit:"%"}]}]},{title:"testLayer ",visible:!0,items:[{title:"test",type:"radial-gradient",deg:45,visible:!0,position:{x:0,xUnit:"px",y:0,yUnit:"px"},size:{w:100,wUnit:"%",h:100,hUnit:"%"},colorList:[{color:"rgba(255,255,0,0.9)",range:25,rangeUnit:"%"},{color:"transparent",range:50,rangeUnit:"%"},{color:"transparent",range:void 0,rangeUnit:"%"}]}]}]},i.state.activeData=i.state.layers[0],i.state.activeSubData=i.state.activeData.items[0],i}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"frame",children:[Object(h.jsxs)("div",{className:"frame_main_menu",children:["frame Main Menu",Object(h.jsx)("div",{style:k.test,children:"\ucd5c\uc0c1\uc704 \uba54\ub274\uac00 \ub4e4\uc5b4\uac10"}),Object(h.jsx)("div",{style:k.test,children:"\ud14c\uc2a4\ud2b8 \uc544\uc774\ud15c"})]}),Object(h.jsxs)("div",{className:"frame_toolbar",children:["frame ToolBar",Object(h.jsx)("div",{style:k.test,children:"\ud234\ubc14 \uc544\uc774\ud15c"}),Object(h.jsx)("div",{style:k.test,children:"\ud234\ubc14 \uc544\uc774\ud15c"})]}),Object(h.jsx)("div",{className:"frame_middle",children:Object(h.jsxs)("div",{className:"frame_middle_container",children:[Object(h.jsxs)("div",{className:"frame_left",children:["frame Left",Object(h.jsxs)("div",{style:k.test,children:["\uc774\uacf5\uac04\uc774",Object(h.jsx)("br",{}),"\ud604\uc7ac\ub294",Object(h.jsx)("br",{}),"\uc4f8\ubaa8\uc5c6\uc73c\ub098...",Object(h.jsx)("br",{}),"\uc608\ube44\ub85c...\uad6c\uc131\ud568"]})]}),Object(h.jsx)("div",{className:"frame_center",children:Object(h.jsx)(O,{rootComponent:this})}),Object(h.jsx)("div",{className:"frame_right",children:Object(h.jsxs)("div",{style:{display:"flex",height:"100%"},children:[Object(h.jsx)(v,{rootComponent:this}),this.state.activeSubData?Object(h.jsx)(S,{rootComponent:this}):""]})})]})}),Object(h.jsxs)("div",{className:"frame_bottom",children:["frame Bottom",Object(h.jsx)("div",{className:"todo",children:"Todo - Animation Timeline"}),Object(h.jsx)("div",{style:k.test,children:"\uacb0\uacfc \ud14c\uc2a4\ud2b8"}),Object(h.jsx)(U.a,{language:"javascript",wrapLongLines:"pre",children:JSON.stringify(v.calcGradients(this.state.layers),null,2)})]}),Object(h.jsxs)("div",{className:"frame_status",children:["frame Status",Object(h.jsx)("div",{style:k.test,children:"\uc0c1\ud0dc \uc544\uc774\ud15c"}),Object(h.jsx)("div",{style:k.test,children:"\uc0c1\ud0dc \uc544\uc774\ud15c"})]})]})}}]),n}(a.a.Component),k={test:{background:"#5e7ade",margin:"1px"}},z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,301)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),i(t),a(t),c(t),r(t)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root")),z()},49:function(t,e,n){},50:function(t,e,n){}},[[299,1,2]]]);
//# sourceMappingURL=main.a1b93e89.chunk.js.map