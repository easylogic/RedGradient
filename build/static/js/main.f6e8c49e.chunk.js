(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{121:function(t,e,n){},122:function(t,e,n){},479:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(107),r=n.n(a),s=(n(121),n(5)),c=n(6),l=n(8),d=n(7),p=(n(122),n(66)),u={LINEAR:"linear-gradient",RADIAL:"radial-gradient"},h=0;var b=function(){return{title:"gradient".concat(h++),type:"linear-gradient",deg:90,visible:!0,position:{x:0,xUnit:"%",y:0,yUnit:"%"},colorList:[{color:"rgba(255,255,255,1)",range:0},{color:"rgba(255,255,255,0.1)",range:100}]}},j=n(1),x=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(j.jsx)("input",{style:{width:"".concat(this.props.width||"")},type:"number",max:this.props.maxValue,value:this.props.value,onInput:this.props.HD_onInput,onBlur:this.props.HD_blur})}}]),n}(o.a.Component),v=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)("select",{style:{width:"".concat(this.props.width||"","px")},onChange:this.props.HD_change,onBlur:this.props.HD_blur,children:(this.props.options||[]).map((function(e){var n=t.props.value===e;return Object(j.jsx)("option",{value:e,selected:n,children:e})}))})}}]),n}(o.a.Component),g=0;var f=function(){return{title:"layer".concat(g++),visible:!0,size:{w:100,wUnit:"%",h:100,hUnit:"%"},items:[new b]}},m=120,O=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"_toggleVisible",value:function(t,e){t.visible=!t.visible,this.props.rootComponent.setState({})}},{key:"render",value:function(){var t=this,e=this.props.rootComponent,i=e.state,o=i.layers;return Object(j.jsxs)("div",{style:w.container,children:[Object(j.jsx)("div",{style:w.addLayer,children:Object(j.jsx)("div",{style:w.addLayerItem,onClick:function(t){var n;o.splice(0,0,n=new f),e.setState({activeLayer:n,activeSubData:n.items[0]})},children:"Add Layer"})}),o.map((function(a,r){var s=a.size;return Object(j.jsxs)("div",{style:{opacity:a.visible?1:.5,transition:"opacity 0.2s",border:"1px solid rgba(0,0,0,0.36)",background:"rgba(0,0,0,0.3)",borderRadius:"4px",margin:"4px",padding:"4px"},children:[Object(j.jsx)("div",{className:"layerItemTitle",children:a.title}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"layerVisible",onClick:function(e){return t._toggleVisible(a)},children:a.visible?"on":"off"}),Object(j.jsx)("button",{className:"layerDel",onClick:function(t){t.stopPropagation(),o.splice(o.indexOf(a),1);var n=a;o.length||o.push(new f),e.setState({activeLayer:n,activeSubData:n.items[0]})},children:"Del"}),Object(j.jsx)("button",{className:"layerAdd",onClick:function(t){t.stopPropagation(),a.items.splice(0,0,new b),e.setState({activeSubData:a.items[0]})},children:"Add"})]}),Object(j.jsx)("div",{className:"transparent_checker",style:{width:"".concat(m,"px"),height:"".concat(s.h/s.w*m,"px"),cursor:"pointer",borderRadius:"4px",overflow:"hidden",transition:"height 0.2s"},onClick:function(t){return e.setState({activeLayer:a,activeSubData:a.items[0]})},children:Object(j.jsx)("div",{className:"layerItem",style:{background:n.calcGradientItems(a.items,!1,a)}})}),Object(j.jsxs)("div",{style:w.itemContainer,children:["Layer Size",Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{width:"70px",value:s.w||0,HD_onInput:function(t){s.w=t.target.value,e.setState({})}}),Object(j.jsx)(v,{value:s.wUnit,options:["px","%"],HD_change:function(t){s.wUnit=t.target.value,e.setState({})}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{width:"70px",value:s.h||0,HD_onInput:function(t){s.h=t.target.value,e.setState({})}}),Object(j.jsx)(v,{value:s.hUnit,options:["px","%"],HD_change:function(t){s.hUnit=t.target.value,e.setState({})}})]})]}),Object(j.jsx)("div",{children:a.items.map((function(o){var r=i.activeSubData===o;return Object(j.jsxs)("div",{style:{opacity:o.visible?1:.5,transition:"opacity 0.2s"},children:[Object(j.jsx)("div",{className:"layerItemSubTitle",children:o.title}),Object(j.jsxs)("div",{style:{margin:"2px 2px 2px 20px"},children:[Object(j.jsx)("button",{className:"layerVisible",onClick:function(e){return t._toggleVisible(o)},children:o.visible?"on":"off"}),Object(j.jsx)("button",{className:"layerDel",onClick:function(t){t.stopPropagation();var n=a.items.indexOf(o);a.items.splice(n,1),a.items.length||(a.items.push(new b),n=0),e.setState({activeSubData:a.items[n]})},children:"Del"}),Object(j.jsx)("button",{className:"layerType",children:o.type.charAt(0).toUpperCase()})]}),Object(j.jsxs)("div",{className:"transparent_checker",style:{width:"".concat(100,"px"),height:"".concat(s.h/s.w*100,"px"),marginLeft:"".concat(20,"px"),cursor:"pointer",borderRadius:"4px",overflow:"hidden",transition:"height 0.2s"},onClick:function(t){return e.setState({activeLayer:a,activeSubData:o})},children:[Object(j.jsx)("div",{className:"layerItem",style:{background:n.calcGradientItem(o,!1,a)}}),Object(j.jsx)("div",{style:r?w.activeLine:w.deActiveLine})]})]})}))})]})}))]})}}]),n}(o.a.Component);O.calcGradients=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"transparent";return t.map((function(t){return O.calcGradientItems(t.items,e,t)})).join(",")+",".concat(n)},O.calcGradientItems=function(t,e,n){return t.length?t.map((function(t){return O.calcGradientItem(t,e,n)})).join(","):""},O.calcGradientItem=function(t,e,n){if(!t)return"";if(!t.colorList.length)return"";if(e&&!t.visible)return"linear-gradient(45deg, transparent,transparent )";if(n&&!n.visible)return"linear-gradient(45deg, transparent,transparent )";if(console.log("layer",t,e,n),t.type===u.LINEAR){var i=t.colorList.map((function(t){var e=void 0===t.range?"":"".concat(t.range,"%");return"".concat(t.color," ").concat(e)})),o=t.position?" ".concat(t.position.x).concat(t.position.xUnit," ").concat(t.position.y).concat(t.position.yUnit):"",a=n.size?" ".concat(n.size.w).concat(n.size.wUnit," ").concat(n.size.h).concat(n.size.hUnit):"";return"".concat(t.type,"(").concat(t.deg,"deg, ").concat(i,") ").concat(o," / ").concat(a)}var r=t.colorList.map((function(t){var e=void 0===t.range?"":"".concat(t.range,"%");return"".concat(t.color," ").concat(e)})),s=t.position?" ".concat(t.position.x).concat(t.position.xUnit," ").concat(t.position.y).concat(t.position.yUnit):"",c=n.size?" ".concat(n.size.w).concat(n.size.wUnit," ").concat(n.size.h).concat(n.size.hUnit):"";return"".concat(t.type,"(").concat(r,") ").concat(s," / ").concat(c)};var y=O,w={container:{borderRight:"1px solid #000",overflowX:"hidden",overflowY:"auto",padding:"0px 0px 10px 0px"},layerItem:{height:"35px",cursor:"pointer"},activeLine:{position:"absolute",top:0,left:0,right:0,bottom:0,border:"2px solid #5e7ade",transition:"border 0.2s"},deActiveLine:{border:"2px solid transparent"},addLayer:{position:"sticky",padding:"5px 4px 3px 4px",top:0,zIndex:1,background:"#000"},addLayerItem:{background:"#5e7ade",padding:"4px 8px",fontSize:"11px",borderRadius:"4px",marginBottom:"4px",cursor:"pointer"}},S=n(36),C=[{title:"512 x 512",width:512,height:512},{title:"Google Pixel 4, 4XL",width:412,height:870},{title:"iPhone 12 Pro Max",width:428,height:926},{title:"web 1366",width:1366,height:768},{title:"web 1920",width:1920,height:1080}];var k=function(){var t=this,e=this.props.rootComponent,n=e.state,i=n.canvasInfo;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{style:L.canvasViewInfo,children:[Object(j.jsxs)("div",{children:["center : ",this.state.offsetX,",",this.state.offsetY," / scale : ",this.state.scale]}),Object(j.jsx)("button",{style:L.toCenter,onClick:function(e){return t.setState({offsetX:0,offsetY:0})},children:"set Center"}),Object(j.jsx)("button",{style:L.toScale,onClick:function(e){return t.setState({scale:1})},children:"setScale 1"}),Object(j.jsx)("button",{style:L.toScale,onClick:function(e){return t.setState({scale:.5})},children:"setScale 0.5"})]}),Object(j.jsxs)("div",{style:L.canvasResizer,children:[Object(j.jsx)(x,{width:"60px",value:i.width,HD_onInput:function(t){i.width=t.target.value,e.setState({})}}),Object(j.jsx)(x,{width:"60px",value:i.height,HD_onInput:function(t){i.height=t.target.value,e.setState({})}}),Object(j.jsxs)("div",{style:{display:"inline-flex",alignItems:"center"},children:["\ubc30\uacbd\uc0c9\uc0c1",Object(j.jsx)("div",{className:"transparent"===n.bgColor?"transparent_checker":"",style:{display:"inline-block",width:"25px",height:"25px",background:"transparent"===n.bgColor?"":n.bgColor,borderRadius:"4px",marginRight:"10px",border:"1px solid #000",cursor:"pointer"},onClick:function(e){t.setState({colorPicker:!0})}}),this.state.colorPicker?Object(j.jsxs)("div",{style:{zIndex:1,position:"absolute",top:0,left:"0%",transform:"translate(-50% , 0px)",boxShadow:"0px 0px 16px rgba(0,0,0,0.16)",background:"#fff",borderRadius:"8px",overflow:"hidden"},children:[Object(j.jsx)(S.a,{width:250,color:n.bgColor,onChange:function(t){n.bgColor="rgba(".concat(t.rgb.r,",").concat(t.rgb.g,",").concat(t.rgb.b,",").concat(t.rgb.a,")"),e.setState({})}}),Object(j.jsx)("div",{style:{padding:"4px",background:"#5e7ade",cursor:"pointer",textAlign:"center"},onClick:function(e){t.setState({colorPicker:null})},children:"\uc644\ub8cc"})]}):""]}),Object(j.jsx)("div",{children:C.map((function(t){return Object(j.jsx)("button",{style:{background:"#464141",border:0,outline:"none",color:"#fff",fontSize:"11px",padding:"8px",borderRadius:"4px",margin:"1px",cursor:"pointer"},onClick:function(n){i.width=t.width,i.height=t.height,e.setState({})},children:Object(j.jsxs)("div",{children:[t.title,"(",t.width,"x",t.height,")"]})})}))}),Object(j.jsx)("div",{className:"todo",children:"Todo - \ub808\uc774\uc5b4\ub97c display item\ud654 \uc2dc\ucf1c\uc11c... \uac1d\uccb4 \uc5d0\ub514\ud305\uc73c\ub85c\ub3c4 \uac12 \ubcc0\uacbd\ud560\uc218\uc788\ub3c4\ub85d"}),Object(j.jsx)("div",{className:"todo",children:"Todo - \ud328\uc2a4\uae30\ubc18 \ub808\uc774\uc5b4\ub3c4 \ucd94\uac00\ud574\uc57c\ud558\ub294\ub370 \uc544\uc9c1 \uc624\ubb18..."}),Object(j.jsx)("div",{className:"todo",children:"Todo - \uce94\ubc84\uc2a4 \uc2a4\ucf00\uc77c\uae30\ubc18 Viewer"})]})]})},L={canvasResizer:{position:"sticky",top:0,left:0,zIndex:1},canvasViewInfo:{position:"absolute",bottom:0,left:0,padding:"4px",fontSize:"10px",zIndex:1},toCenter:{padding:"3px 5px",background:"#5e7ade",color:"#fff",marginTop:"4px",borderRadius:"4px",border:0,fontSize:"10px",outline:"none",cursor:"pointer"},toScale:{marginLeft:"4px",padding:"3px 5px",background:"#7235d4",color:"#fff",marginTop:"4px",borderRadius:"4px",border:0,fontSize:"10px",outline:"none",cursor:"pointer"}},I=100,D=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).draw_canvasUI=k,i.state={moveCenterStart:!1,useMove:!1,offsetX:0,offsetY:0,scale:1,colorPicker:!1},i}return Object(c.a)(n,[{key:"draw",value:function(t,e,n){return Object(j.jsx)("div",{style:Object(p.a)(Object(p.a)({},N.canvas),{},{transform:"translate(calc(-50% + ".concat(this.state.offsetX,"px),calc(-50% + ").concat(this.state.offsetY,"px)) scale(").concat(this.state.scale,")")}),className:"transparent_checker",children:Object(j.jsx)("div",{className:"transparent_checker",style:{width:"".concat(t.width,"px"),height:"".concat(t.height,"px"),background:y.calcGradients(e,!0,n),transition:"width 0.2s, height 0.2s"}})})}},{key:"addItem",value:function(){}},{key:"removeItem",value:function(){}},{key:"render",value:function(){var t=this,e=this.props.rootComponent,n=e.state,i=n.canvasInfo,o=n.layers,a=n.activeLayer,r=n.activeSubData,s=a.size;return Object(j.jsxs)("div",{style:N.container,onMouseMove:function(e){t.state.useMove&&(e=e.nativeEvent,t.state.offsetX+=e.movementX,t.state.offsetY+=e.movementY,N.canvas.transition="",t.setState({}),document.body.style.cursor="move",console.log(e))},onMouseLeave:function(e){return t.state.useMove?t.setState({useMove:!1}):0},onMouseUp:function(e){return t.state.useMove?(t.setState({useMove:!1}),document.body.style.cursor="default"):0},onMouseDown:function(e){return 1===e.nativeEvent.button?t.setState({useMove:!0}):0},onWheel:function(e){var n=t.state.scale-e.nativeEvent.deltaY/1e3;n<0&&(n=.01),t.setState({scale:n}),N.canvas.transition="transform 0.1s"},children:[this.draw_canvasUI(),this.draw(i,o,n.bgColor),Object(j.jsxs)("div",{style:{position:"absolute",right:"4px",bottom:"4px",width:"".concat(I,"px"),height:"".concat(s.h/s.w*I,"px"),border:"1px solid red",transition:"width 0.2s,height 0.2s"},onMouseDown:function(e){return t.state.moveCenterStart=!0},onMouseMove:function(n){if(t.state.moveCenterStart&&"layerItem"===n.target.className){var i=(n=n.nativeEvent).layerX/I*("%"===r.position.xUnit?100:s.w),o=n.layerY/(s.h/s.w*I)*("%"===r.position.yUnit?100:s.h);r.position.x=i,r.position.y=o,e.setState({})}},onClick:function(e){return t.state.moveCenterStart=!1},onMouseLeave:function(e){return t.state.moveCenterStart=!1},children:[Object(j.jsx)("div",{style:{position:"absolute",top:0,left:"50%",transform:"translate(-50%,calc(-100% - 5px)",whiteSpace:"nowrap",fontSize:"9px"},children:"Edit Center"}),Object(j.jsx)("div",{className:"transparent_checker",style:{width:"100%",height:"100%",cursor:"pointer",borderRadius:"4px",overflow:"hidden",transition:"height 0.2s"},children:Object(j.jsx)("div",{className:"layerItem",style:{background:y.calcGradientItem(r,!1,a)}})}),Object(j.jsx)("div",{style:{position:"absolute",top:"".concat(r.position.y*("%"===r.position.yUnit?1:I/s.h)%100,"%"),left:"".concat(r.position.x*("%"===r.position.xUnit?1:I/s.w)%100,"%"),transform:"translate(-50%,-50%)",width:"10px",height:"10px",borderRadius:"50%",background:"#fff",border:"1px solid red",transition:"left 0.1s,top 0.1s",cursor:"pointer"}})]}),Object(j.jsx)("div",{style:{position:"absolute",bottom:"4px",right:"108px",background:"rgba(0,0,0,0.1)",borderRadius:"8px",padding:"16px"},children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{style:N.itemContainer,children:[Object(j.jsx)(v,{value:r.type.split("-")[0].toUpperCase(),options:Object.keys(u),HD_change:function(t){r.type=u[t.target.value],e.setState({})}}),r.type===u.LINEAR?Object(j.jsxs)(j.Fragment,{children:["Deg ",Object(j.jsx)(x,{width:"80px",value:r.deg||0,HD_onInput:function(t){r.deg=t.target.value,e.setState({})}})]}):""]}),Object(j.jsxs)("div",{style:N.itemContainer,children:["Position",Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{width:"80px",value:r.position.x||0,HD_onInput:function(t){r.position.x=t.target.value,e.setState({})}}),Object(j.jsx)(v,{value:r.position.xUnit,options:["px","%"],HD_change:function(t){r.position.xUnit=t.target.value,e.setState({})}}),Object(j.jsx)(x,{width:"80px",value:r.position.y||0,HD_onInput:function(t){r.position.y=t.target.value,e.setState({})}}),Object(j.jsx)(v,{value:r.position.yUnit,options:["px","%"],HD_change:function(t){r.position.yUnit=t.target.value,e.setState({})}})]})]}),Object(j.jsx)("div",{className:"todo",children:"TODO - \ubc18\ubcf5 Edit"})]})})]})}}]),n}(o.a.Component),N={container:{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},canvas:{position:"absolute",top:"50%",left:"50%",overflow:"auto",transition:"transform 0.01s"},itemContainer:{whiteSpace:"nowrap"}},_=n(481),U=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"ui_title",children:this.props.title})}}]),n}(o.a.Component),F=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(j.jsx)("input",{style:{width:"".concat(this.props.width||"")},type:"text",value:this.props.value,onInput:this.props.HD_onInput})}}]),n}(o.a.Component),z=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).state={activeIDX:0,colorPicker:null},i}return Object(c.a)(n,[{key:"renderGradientColorList",value:function(t){var e=this,n=[],i=t.colorList.map((function(t,i){var o,a=e.state.activeIDX===i;return o="".concat(t.range),n.push(e.renderColorStep(t,i,a)),"".concat(t.color," ").concat(o)})),o="".concat(u.LINEAR,"(90deg, ").concat(i,")");return Object(j.jsx)("div",{style:{height:"35px",background:o},children:n})}},{key:"renderColorStep",value:function(t,e,n){var i,o=this,a=this.props.rootComponent.state.canvasInfo;return i="%"===t.rangeUnit?"".concat(t.range||0,"%"):"".concat(t.range/a.width*100,"%"),Object(j.jsx)("div",{style:{position:"absolute",top:"-3px",bottom:"-3px",left:i,borderRadius:"5px",width:"10px",background:n?"#5e7ade":"#fff",border:"1px solid #000",transform:"translate(-50%,0)",textAlign:"center",cursor:"pointer",transition:"left 0.2s,background 0.2s"},onClick:function(t){t.stopPropagation(),o.setState({activeIDX:e})},children:Object(j.jsxs)("div",{style:{position:"absolute",bottom:0,transform:"translate(-25%,100%)",textAlign:"center",fontSize:"9px",whiteSpace:"nowrap"},children:[t.range,"%"]})})}},{key:"sortColorList",value:function(t){this.props.rootComponent.state.canvasInfo;t.sort((function(t,e){var n=t.range,i=e.range;return n>i?1:n<i?-1:0}))}},{key:"render",value:function(){var t=this,e=this.props.rootComponent,n=e.state,i=n.activeSubData,o=n.canvasInfo;return Object(j.jsxs)("div",{style:T.container,children:[Object(j.jsx)("div",{className:"transparent_checker",onClick:function(n){for(var a=(n.nativeEvent.layerX/o.width*100).toFixed(0),r=0,s=i.colorList.length,c=0;c<s;c++){if(i.colorList[c].range>a){r=c;break}}var l={color:i.colorList[r-1]?i.colorList[r-1].color:"#ffffff",range:a};i.colorList.splice(r,null,l),t.setState({activeIDX:r}),e.setState({})},children:this.renderGradientColorList(i)}),Object(j.jsx)("div",{style:{marginTop:"20px"},children:i.colorList.map((function(n,o){var a=t.state.activeIDX===o,r=n.color;return Object(j.jsx)("div",{style:{margin:"3px",border:a?"1px solid #5e7ade":"1px solid rgba(255,255,255,0.1)",padding:"4px",cursor:"pointer"},onClick:function(e){t.setState({activeIDX:o})},children:Object(j.jsxs)("div",{style:{display:"flex"},children:[Object(j.jsx)("div",{className:"transparent"===r?"transparent_checker":"",style:{width:"50px",height:"50px",background:"transparent"===r?"":r,borderRadius:"4px",marginRight:"10px",border:"1px solid #000"},onClick:function(e){t.setState({colorPicker:n})}}),Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{width:"auto",value:n.range||0,HD_onInput:function(o){n.range=+o.target.value;for(var a=i.colorList.length;a--;)i.colorList[a]===n&&t.setState({activeIDX:a});e.setState({})},HD_blur:function(n){t.sortColorList(i.colorList),e.setState({})}}),n.color,Object(j.jsx)("div",{className:"todo",children:"Todo - \uceec\ub7ec\uc9c0\uc6d0\ubc94\uc704 & \ud3ec\uba67 \uacb0\uc815"}),Object(j.jsx)("div",{onClick:function(t){i.colorList.splice(i.colorList.indexOf(n),1),e.setState({})},children:"\uc0ad\uc81c"})]})]})})}))}),this.state.colorPicker?Object(j.jsxs)("div",{style:{zIndex:1,position:"absolute",top:0,left:"50%",transform:"translate(-50% , 0px)",boxShadow:"0px 0px 16px rgba(0,0,0,0.16)",background:"#fff",borderRadius:"8px",overflow:"hidden"},children:[Object(j.jsx)(S.a,{width:250,color:this.state.colorPicker.color,onChange:function(n){t.state.colorPicker.color="rgba(".concat(n.rgb.r,",").concat(n.rgb.g,",").concat(n.rgb.b,",").concat(n.rgb.a,")"),e.setState({})}}),Object(j.jsx)("div",{style:{padding:"4px",background:"#5e7ade",cursor:"pointer",textAlign:"center"},onClick:function(e){t.setState({colorPicker:null})},children:"\uc644\ub8cc"})]}):""]})}}]),n}(o.a.Component),T={container:{paddingTop:"10px"}},A=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.rootComponent,e=t.state,n=e.activeLayer,i=e.activeSubData;return Object(j.jsxs)("div",{style:R.container,children:[Object(j.jsx)(U,{title:"Red_PropertyEdit"}),Object(j.jsxs)("div",{style:R.contentWrap,children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{style:R.itemContainer,children:["\ud0c0\uc774\ud2c0",Object(j.jsx)("div",{children:Object(j.jsx)(F,{width:"calc(100% - 4px)",value:i.title,HD_onInput:function(e){i.title=e.target.value,t.setState({})}})})]}),Object(j.jsxs)("div",{style:R.itemContainer,children:["Gradient ColorRange",Object(j.jsx)(z,{rootComponent:t}),Object(j.jsx)("div",{className:"todo",children:"Todo - \uc2a4\ud15d\ucd94\uac00/\uc0ad\uc81c, \uc774\ub3d9"}),Object(j.jsx)("div",{className:"todo",children:"Todo - \uceec\ub7ec\ubd84\ud574\uc2e0\uacf5\ub3c4 \ud544\uc694\ud568"}),Object(j.jsx)("div",{className:"todo",children:"TODO - \uadf8\ub77c\ub514\uc5b8\ud2b8 \uceec\ub7ec\uc140\ub809\ud130"}),Object(j.jsx)("div",{className:"todo",children:"TODO - \uc774\ub3d9\uc5d0\ub530\ub978 \uc2a4\ud15d\uc815\ub82c"}),Object(j.jsx)("div",{className:"todo",children:"TODO - \uc77c\ub2e8 \uc774\uac8c \uc624\ub978\ucabd\uc5d0 \uc704\uce58\ud558\ub294\uac8c \uc62c\ubc14\ub978\uac83\uc778\uac00...."})]})]}),Object(j.jsxs)("div",{style:R.itemContainer,children:[Object(j.jsx)("div",{children:"Current Data"}),Object(j.jsx)(_.a,{language:"javascript",wrapLongLines:"pre",children:JSON.stringify(y.calcGradientItem(i,!1,n),null,2)}),Object(j.jsx)(_.a,{language:"javascript",wrapLongLines:"pre",children:JSON.stringify(i,null,2)})]})]})]})}}]),n}(o.a.Component),R={container:{width:"450px",borderRight:"1px solid #000",overflowX:"hidden",overflowY:"auto"},contentWrap:{padding:"10px 10px"},layer:{height:"30px"},itemContainer:{padding:"4px 0px",borderBottom:"1px solid rgba(0,0,0,0.5)"}},E=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(s.a)(this,n),(i=e.call(this,t)).state={canvasInfo:{width:300,height:300},activeLayer:null,activeSubData:null,bgColor:"#fff",layers:[{title:"testLayer sdfsdfsdfsdf",visible:!0,size:{w:100,wUnit:"px",h:100,hUnit:"px"},items:[{title:"test1",type:"linear-gradient",deg:45,visible:!0,position:{x:0,xUnit:"px",y:0,yUnit:"px"},colorList:[{color:"transparent",range:0},{color:"transparent",range:24.1867043847},{color:"#FFEA53",range:25.6011315417},{color:"#FFEA53",range:25.6011315417},{color:"transparent",range:25.6011315417},{color:"transparent",range:74.3988684583},{color:"#FFEA53",range:74.3988684583},{color:"#FFEA53",range:75.8132956153},{color:"transparent",range:75.8132956153},{color:"transparent",range:100}]},{title:"test2",type:"linear-gradient",deg:-45,visible:!0,position:{x:0,xUnit:"px",y:0,yUnit:"px"},colorList:[{color:"transparent",range:0},{color:"transparent",range:24.1867043847},{color:"#FFEA53",range:25.6011315417},{color:"#FFEA53",range:25.6011315417},{color:"transparent",range:25.6011315417},{color:"transparent",range:74.3988684583},{color:"#FFEA53",range:74.3988684583},{color:"#FFEA53",range:75.8132956153},{color:"transparent",range:75.8132956153},{color:"transparent",range:100}]},{title:"test3",type:"linear-gradient",deg:45,visible:!0,position:{x:0,xUnit:"px",y:0,yUnit:"px"},colorList:[{color:"#8F225C",range:0},{color:"#8F225C",range:12.4469589816},{color:"#FFEA53",range:12.4469589816},{color:"#FFEA53",range:13.8613861386},{color:"transparent",range:13.8613861386},{color:"transparent",range:86.1386138614},{color:"#FFEA53",range:86.1386138614},{color:"#FFEA53",range:87.5530410184},{color:"#8F225C",range:87.5530410184},{color:"#8F225C",range:100}]}]},{title:"testLayer ",visible:!0,size:{w:50,wUnit:"px",h:50,hUnit:"px"},items:[{title:"test",type:"radial-gradient",deg:45,visible:!0,position:{x:0,xUnit:"px",y:0,yUnit:"px"},colorList:[{color:"rgba(255,255,0,0.9)",range:25},{color:"rgba(255,0,0,0.5)",range:55},{color:"transparent",range:75},{color:"transparent",range:100}]}]}]},i.state.activeLayer=i.state.layers[0],i.state.activeSubData=i.state.activeLayer.items[0],i}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"frame",children:[Object(j.jsxs)("div",{className:"frame_main_menu",children:["frame Main Menu",Object(j.jsx)("div",{style:H.test,children:"\ucd5c\uc0c1\uc704 \uba54\ub274\uac00 \ub4e4\uc5b4\uac10"}),Object(j.jsx)("div",{style:H.test,children:"\ud14c\uc2a4\ud2b8 \uc544\uc774\ud15c"})]}),Object(j.jsxs)("div",{className:"frame_toolbar",children:["frame ToolBar",Object(j.jsx)("div",{style:H.test,children:"\ud234\ubc14 \uc544\uc774\ud15c"}),Object(j.jsx)("div",{style:H.test,children:"\ud234\ubc14 \uc544\uc774\ud15c"})]}),Object(j.jsx)("div",{className:"frame_middle",children:Object(j.jsxs)("div",{className:"frame_middle_container",children:[Object(j.jsxs)("div",{className:"frame_left",children:["frame Left",Object(j.jsx)("div",{className:"todo",children:"\ud504\ub9ac\uc14b\uacf5\uac04"}),Object(j.jsx)("div",{className:"todo",children:"Todo - Rect"}),Object(j.jsx)("div",{className:"todo",children:"Todo - Circle"}),Object(j.jsx)("div",{className:"todo",children:"Todo - Line"}),Object(j.jsx)("div",{className:"todo",children:"Todo - Etc"})]}),Object(j.jsx)("div",{className:"frame_center",children:Object(j.jsx)(D,{rootComponent:this})}),Object(j.jsx)("div",{className:"frame_right",children:Object(j.jsxs)("div",{style:{display:"flex",height:"100%"},children:[Object(j.jsx)(y,{rootComponent:this}),this.state.activeSubData?Object(j.jsx)(A,{rootComponent:this}):""]})})]})}),Object(j.jsxs)("div",{className:"frame_bottom",style:{height:"500px",maxHeight:"500px",overflow:"auto"},children:["frame Bottom",Object(j.jsxs)("div",{className:"todo",children:[Object(j.jsx)("div",{children:"Todo - Animation Timeline"}),Object(j.jsx)("div",{children:"Todo - \uc544\ub9c8\ub3c4 \uc804\uccb4 \ub808\uc774\uc5b4 \uc544\uc774\ud15c\uc774 \ub4e4\uc5b4\uc62c\uac83 \uac19\uace0"}),Object(j.jsx)("div",{children:"Todo - \uc560\ub2c8\uba54\uc774\uc158 \uc774\ub984, delay, duration, timing\ub4f1\uc744 \uac1c\ubcc4 \uc124\uc815"}),Object(j.jsx)("div",{children:"Todo - \uadf8\uac78 \uc2dc\uc791\ud654 \ud574\uc11c \ubcf4\uc5ec\uc8fc\uba74 \ub420\ub4ef"}),Object(j.jsx)("div",{children:"Todo - \ud504\ub9ac\ubdf0\ub294 \uc5b4\ucc0c\ud560\uac83 \uc778\uac00.."})]}),Object(j.jsx)("div",{style:H.test,children:"\uacb0\uacfc \ud14c\uc2a4\ud2b8"}),Object(j.jsx)(_.a,{language:"javascript",wrapLongLines:"pre",children:JSON.stringify(y.calcGradients(this.state.layers),null,2,this.state.bgColor)})]}),Object(j.jsxs)("div",{className:"frame_status",children:["frame Status",Object(j.jsx)("div",{style:H.test,children:"\uc0c1\ud0dc \uc544\uc774\ud15c"}),Object(j.jsx)("div",{style:H.test,children:"\uc0c1\ud0dc \uc544\uc774\ud15c"})]})]})}}]),n}(o.a.Component),H={test:{background:"#5e7ade",margin:"1px"}},M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,482)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),i(t),o(t),a(t),r(t)}))};r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root")),M()}},[[479,1,2]]]);
//# sourceMappingURL=main.f6e8c49e.chunk.js.map