(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{124:function(e,t,n){},125:function(e,t,n){},485:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(110),o=n.n(i),s=(n(124),n(4)),c=n(5),l=n(7),d=n(6),p=(n(125),n(8)),u={LINEAR:"linear-gradient",RADIAL:"radial-gradient"},b=0;var h=function(){return{title:"gradient".concat(b++),type:"linear-gradient",repeatType:"repeat",deg:90,visible:!0,position:{x:0,xUnit:"%",y:0,yUnit:"%"},size:{w:100,wUnit:"%",h:100,hUnit:"%"},colorList:[{color:"rgba(255,255,255,1)",rangeUnit:"%",range:0},{color:"rgba(255,255,255,0.1)",rangeUnit:"%",range:100}]}},x=n(1),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(x.jsx)("input",{style:{width:"".concat(this.props.width||"")},type:"number",max:this.props.maxValue,value:this.props.value,onInput:this.props.HD_onInput,onBlur:this.props.HD_blur})}}]),n}(a.a.Component),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(x.jsx)("select",{style:{width:"".concat(this.props.width||"","px")},onChange:this.props.HD_change,onBlur:this.props.HD_blur,children:(this.props.options||[]).map((function(t){var n=e.props.value===t;return Object(x.jsx)("option",{value:t,selected:n,children:t})}))})}}]),n}(a.a.Component),v=0;var f=function(){return{title:"layer".concat(v++),visible:!0,openYn:!0,items:[new h]}},O=n(10),m=n(14),y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={layerBgColor:"transparent"},r}return Object(c.a)(n,[{key:"_toggleVisible",value:function(e){e.visible=!e.visible,this.props.rootComponent.setState({})}},{key:"render",value:function(){var e=this,t=this.props.rootComponent,n=t.state,r=this.props.item,a=this.props.layer,i=(a.size,n.activeSubData===r);return Object(x.jsxs)("div",{style:{opacity:r.visible?1:.5,transition:"opacity 0.2s",padding:"0px 5px 5px 5px",background:"#232323",boxShadow:i?"0px 0px 5px rgba(255,0,0,0.5)":"",border:"1px solid #333",borderRadius:"8px",margin:"4px 0px 4px 10px"},children:[Object(x.jsx)("div",{className:"layerItemSubTitle",style:{textOverflow:"ellipsis",width:"100px",overflow:"hidden",whiteSpace:"nowrap"},children:r.title}),Object(x.jsxs)("div",{style:{margin:"2px 2px 2px 0px"},children:[Object(x.jsx)("button",{style:Object(p.a)(Object(p.a)({},w.bgItem),{},{background:"#000",color:"#fff"}),onClick:function(){return e.setState({layerBgColor:"black"})},children:"B"}),Object(x.jsx)("button",{style:Object(p.a)(Object(p.a)({},w.bgItem),{},{background:"#fff",color:"#000"}),onClick:function(){return e.setState({layerBgColor:"white"})},children:"W"}),Object(x.jsx)("button",{style:Object(p.a)({},w.bgItem),className:"transparent_checker",onClick:function(){return e.setState({layerBgColor:"transparent"})},children:"T"})]}),Object(x.jsxs)("div",{style:{margin:"2px 2px 2px 0px"},children:[Object(x.jsx)("button",{className:"layerVisible",onClick:function(){return e._toggleVisible(r)},children:Object(x.jsx)(m.a,{icon:r.visible?O.b:O.c})}),Object(x.jsx)("button",{className:"layerDel",style:{opacity:a.items.length>1?1:.25},onClick:function(e){if(e.stopPropagation(),a.items.length>1){var n=a.items.indexOf(r);a.items.splice(n,1),a.items.length||(a.items.push(new h),n=0),a.items[n]||(n-=1),t.setState({activeSubData:a.items[n]})}},children:Object(x.jsx)(m.a,{icon:O.f})}),Object(x.jsx)("button",{className:"layerType",children:r.type.charAt(0).toUpperCase()})]}),Object(x.jsxs)("div",{className:"transparent_checker",style:{width:"".concat(100,"px"),height:"".concat(100,"px"),cursor:"pointer",borderRadius:"4px",overflow:"hidden",transition:"height 0.2s"},onClick:function(){return t.setState({activeLayer:a,activeSubData:r})},children:[Object(x.jsx)("div",{className:"layerItem",style:{background:"".concat(D.calcGradientItem(r,!1,a),",").concat(this.state.layerBgColor)}}),Object(x.jsx)("div",{style:i?w.activeLine:w.deActiveLine})]})]})}}]),n}(a.a.Component),w={activeLine:{position:"absolute",top:0,left:0,right:0,bottom:0,border:"2px solid #5e7ade",transition:"border 0.2s"},deActiveLine:{border:"2px solid transparent"},bgItem:{padding:"2px",marginRight:"1px",width:"30px",height:"20px",fontSize:"10px",cursor:"pointer",border:0,fontWeight:"bold"}},C={REPEAT_X:"repeat-x",REPEAT_Y:"repeat-y",REPEAT:"repeat",SPACE:"space",ROUND:"round",NO_REPEAT:"no-repeat"},S=["black","white","transparent"],k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.rootComponent,t=e.state.layers,n=this.props.layersComponent;return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{style:U.addLayer,children:[Object(x.jsx)("div",{style:U.addLayerItem,onClick:function(){var n;t.splice(0,0,n=new f),e.setState({activeLayer:n,activeSubData:n.items[0]})},children:"Add Layer"}),Object(x.jsx)("select",{style:{width:"100%"},onChange:function(e){return n.setState({layerBgColor:e.target.value})},children:S.map((function(e){return Object(x.jsx)("option",{value:e,children:e})}))})]})})}}]),n}(a.a.Component),U={addLayer:{position:"sticky",padding:"5px 4px 3px 4px",top:0,zIndex:1,background:"#000"},addLayerItem:{background:"#5e7ade",padding:"4px 8px",fontSize:"11px",borderRadius:"4px",marginBottom:"4px",cursor:"pointer"},bgItem:{padding:"2px",margin:"2px 0px",fontSize:"11px",cursor:"pointer",border:"1px solid rgba(255,255,255,0.16)",borderRadius:"4px"}},I=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={layerBgColor:"transparent"},r}return Object(c.a)(n,[{key:"_toggleVisible",value:function(e){e.visible=!e.visible,this.props.rootComponent.setState({})}},{key:"render",value:function(){var e=this,t=this.props.rootComponent,r=t.state.layers;return Object(x.jsxs)("div",{style:{flexDirection:"column",display:"flex"},children:[Object(x.jsx)(k,{rootComponent:t,layersComponent:this}),Object(x.jsx)("div",{style:L.container,children:r.map((function(a){a.size;return Object(x.jsxs)("div",{style:{opacity:a.visible?1:.5,transition:"opacity 0.2s",border:"1px solid rgba(0,0,0,0.36)",borderRadius:"4px",background:"#0e0d0d",margin:"4px",padding:"0px 4px"},children:[Object(x.jsxs)("div",{className:"layerItemTitle",style:{textOverflow:"ellipsis",width:"123px",overflow:"hidden",whiteSpace:"nowrap"},children:[Object(x.jsx)(m.a,{icon:a.openYn?O.e:O.d,style:{fontSize:"11px",marginRight:"5px",cursor:"pointer"},onClick:function(){a.openYn=!a.openYn,t.setState({})}}),a.title]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{className:"layerVisible",onClick:function(){return e._toggleVisible(a)},children:Object(x.jsx)(m.a,{icon:a.visible?O.b:O.c})}),Object(x.jsx)("button",{className:"layerDel",style:{opacity:r.length>1?1:.25},onClick:function(e){if(e.stopPropagation(),r.length>1){r.splice(r.indexOf(a),1);var n=a;r.length||r.push(new f),t.setState({activeLayer:n,activeSubData:n.items[0]})}},children:Object(x.jsx)(m.a,{icon:O.f})}),Object(x.jsx)("button",{className:"layerAdd",onClick:function(e){e.stopPropagation(),a.items.splice(0,0,new h),t.setState({activeSubData:a.items[0]})},children:Object(x.jsx)(m.a,{icon:O.h})})]}),Object(x.jsx)("div",{className:"transparent_checker",style:{width:"".concat(100,"px"),height:"".concat(100,"px"),cursor:"pointer",borderRadius:"4px",overflow:"hidden",transition:"height 0.2s"},onClick:function(){return t.setState({activeLayer:a,activeSubData:a.items[0]})},children:Object(x.jsx)("div",{className:"layerItem",style:{background:"".concat(n.calcGradientItems(a.items,!1,a),",").concat(e.state.layerBgColor)}})}),Object(x.jsx)("div",{children:a.openYn?a.items.map((function(e){return Object(x.jsx)(y,{layer:a,item:e,rootComponent:t})})):""})]})}))})]})}}]),n}(a.a.Component);I.calcGradients=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"transparent";return e.map((function(e){return I.calcGradientItems(e.items,t,e)})).join(",")+",".concat(n)},I.calcGradientItems=function(e,t,n){return e.length?e.map((function(e){return I.calcGradientItem(e,t,n)})).join(","):""},I.calcGradientItem=function(e,t,n){if(!e)return"";if(!e.colorList.length)return"";if(t&&!e.visible)return"linear-gradient(45deg, transparent,transparent )";if(n&&!n.visible)return"linear-gradient(45deg, transparent,transparent )";var r=e.colorList.map((function(e){var t=void 0===e.range?"":"".concat(e.range).concat(e.rangeUnit);return"".concat(e.color," ").concat(t)})),a=e.position?" ".concat(e.position.x).concat(e.position.xUnit," ").concat(e.position.y).concat(e.position.yUnit):"",i=e.size?" ".concat(e.size.w).concat(e.size.wUnit," ").concat(e.size.h).concat(e.size.hUnit):"100% 100%",o=e.repeatType===C.REPEAT?"":e.repeatType;return e.type===u.LINEAR?"".concat(e.type,"(").concat(e.deg,"deg, ").concat(r,") ").concat(a," / ").concat(i," ").concat(o):"".concat(e.type,"(").concat(r,") ").concat(a," / ").concat(i," ").concat(o)};var D=I,L={container:{borderRight:"1px solid #000",overflowX:"hidden",overflowY:"auto",padding:"0px 0px 10px 0px"},layerItem:{height:"35px",cursor:"pointer"},activeLine:{position:"absolute",top:0,left:0,right:0,bottom:0,border:"2px solid #5e7ade",transition:"border 0.2s"},deActiveLine:{border:"2px solid transparent"}},R=n(40),_=[{title:"512 x 512",width:512,height:512},{title:"Google Pixel 4, 4XL",width:412,height:870,type:"mobile"},{title:"iPhone 12 Pro Max",width:428,height:926,type:"mobile"},{title:"web 1366",width:1366,height:768},{title:"web 1920",width:1920,height:1080}];var N=function(){var e=this,t=this.props.rootComponent,n=t.state,r=n.canvasInfo;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{style:z.canvasViewInfo,children:[Object(x.jsxs)("div",{children:["center : ",this.state.canvasViewOffsetX,",",this.state.canvasViewOffsetY," / canvasViewScale : ",this.state.canvasViewScale]}),Object(x.jsx)("button",{style:z.toCenter,onClick:function(){return e.setState({canvasViewOffsetX:0,canvasViewOffsetY:0})},children:"set Center"}),Object(x.jsx)("button",{style:z.toScale,onClick:function(){return e.setState({canvasViewScale:1})},children:"setScale 1"}),Object(x.jsx)("button",{style:z.toScale,onClick:function(){return e.setState({canvasViewScale:.5})},children:"setScale 0.5"}),Object(x.jsx)("div",{style:{display:"inline-block",marginLeft:"5px"},children:_.map((function(e){return Object(x.jsx)("button",{style:z.presetButton,onClick:function(){r.width=e.width,r.height=e.height,t.setState({})},children:Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{icon:"mobile"===e.type?O.g:O.a})," ",e.title,"(",e.width,"x",e.height,")"]})})}))})]}),Object(x.jsxs)("div",{style:z.canvasResizer,children:[Object(x.jsx)(j,{width:"60px",value:r.width,HD_onInput:function(e){r.width=e.target.value,t.setState({})}}),Object(x.jsx)(j,{width:"60px",value:r.height,HD_onInput:function(e){r.height=e.target.value,t.setState({})}}),Object(x.jsxs)("div",{style:{display:"inline-flex",alignItems:"center"},children:["\ubc30\uacbd\uc0c9\uc0c1",Object(x.jsx)("div",{className:"transparent"===n.bgColor?"transparent_checker":"",style:{display:"inline-block",width:"25px",height:"25px",background:"transparent"===n.bgColor?"":n.bgColor,borderRadius:"4px",marginRight:"10px",border:"1px solid #000",cursor:"pointer"},onClick:function(){return e.setState({canvasBgColorPickerOpenYn:!0})}}),this.state.canvasBgColorPickerOpenYn?Object(x.jsxs)("div",{style:{zIndex:1,position:"absolute",top:0,left:"0%",transform:"translate(-50% , 0px)",boxShadow:"0px 0px 16px rgba(0,0,0,0.16)",background:"#fff",borderRadius:"8px",overflow:"hidden"},children:[Object(x.jsx)(R.a,{width:250,color:n.bgColor,onChange:function(e){n.bgColor="rgba(".concat(e.rgb.r,",").concat(e.rgb.g,",").concat(e.rgb.b,",").concat(e.rgb.a,")"),t.setState({})}}),Object(x.jsx)("div",{style:{padding:"4px",background:"#5e7ade",cursor:"pointer",textAlign:"center"},onClick:function(){return e.setState({canvasBgColorPickerOpenYn:null})},children:"\uc644\ub8cc"})]}):""]}),Object(x.jsxs)("div",{children:["\ub808\uc774\uc5b4 \uc601\uc5ed \ubcf4\uae30",Object(x.jsx)("input",{type:"checkbox",checked:this.state.layerSizeView,style:{display:"inline-block",width:"15px",height:"15px",background:"transparent"===n.bgColor?"":n.bgColor,borderRadius:"4px",marginRight:"10px",border:"1px solid #000",cursor:"pointer"},onClick:function(){return e.setState({layerSizeView:!e.state.layerSizeView})}}),Object(x.jsx)("div",{className:"todo",children:"Todo - \ub808\uc774\uc5b4 & \ub808\uc774\uc5b4\ub0b4 \uc544\uc774\ud15c \ub4dc\ub798\uadf8 \ub4dc\ub86d\uc73c\ub85c \uc62e\uae30\uae30"}),Object(x.jsx)("div",{className:"todo",children:"Todo - \uc560\ub2c8\uba54\uc774\uc158 \uad6c\uc0c1"}),Object(x.jsx)("div",{className:"todo",children:"Todo - undo,redo"}),Object(x.jsx)("div",{className:"todo",children:"Todo - save,load"}),Object(x.jsx)("div",{className:"todo",children:"Todo - preview \uad6c\uc0c1"})]})]})]})},z={canvasResizer:{position:"sticky",top:0,left:0,zIndex:1},canvasViewInfo:{position:"absolute",bottom:0,left:0,padding:"4px",fontSize:"12px",zIndex:1},toCenter:{padding:"3px 5px",background:"#5e7ade",color:"#fff",marginTop:"4px",borderRadius:"4px",border:0,fontSize:"12px",outline:"none",cursor:"pointer"},toScale:{marginLeft:"4px",padding:"3px 5px",background:"#7235d4",color:"#fff",marginTop:"4px",borderRadius:"4px",border:0,fontSize:"12px",outline:"none",cursor:"pointer"},presetButton:{background:"linear-gradient(rgb(84, 84, 84), rgb(64, 63, 63))",border:"1px solid rgb(31, 31, 31)",outline:"none",color:"#fff",fontSize:"12px",padding:"4px 8px",borderRadius:"4px",margin:"1px",cursor:"pointer",boxShadow:"rgba(0, 0, 0, 0.25) 1px 1px 1px"}},E=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).draw_canvasUI=N,r.state={canvasMoveState:!1,canvasViewOffsetX:0,canvasViewOffsetY:0,canvasViewScale:1,layerSizeView:!0,canvasBgColorPickerOpenYn:!1},r}return Object(c.a)(n,[{key:"drawCall",value:function(e,t,n){var r=this.props.rootComponent.state.activeSubData;return Object(x.jsxs)("div",{style:Object(p.a)(Object(p.a)({},T.canvas),{},{transform:"translate(calc(-50% + ".concat(this.state.canvasViewOffsetX,"px),calc(-50% + ").concat(this.state.canvasViewOffsetY,"px)) scale(").concat(this.state.canvasViewScale,")")}),className:"transparent_checker",children:[Object(x.jsx)("div",{className:"transparent_checker",style:{width:"".concat(e.width,"px"),height:"".concat(e.height,"px"),background:D.calcGradients(t,!0,n),transition:"width 0.2s, height 0.2s"}}),this.state.layerSizeView?Object(x.jsx)("div",{style:{position:"absolute",left:"".concat(r.position.x).concat(r.position.xUnit),top:"".concat(r.position.y).concat(r.position.yUnit),width:"".concat(e.width,"px"),height:"".concat(e.height,"px"),border:"1px dashed #000",color:"#000"},children:r.title}):""]})}},{key:"render",value:function(){var e=this,t=this.props.rootComponent.state,n=t.canvasInfo,r=t.layers,a=t.activeLayer;return Object(x.jsxs)("div",{style:T.container,onMouseMove:function(t){e.state.useMove&&(t=t.nativeEvent,T.canvas.transition="",e.setState({canvasViewOffsetX:e.state.canvasViewOffsetX+t.movementX,canvasViewOffsetY:e.state.canvasViewOffsetY+t.movementY}),document.body.style.cursor="move",console.log(t))},onMouseLeave:function(){return e.state.useMove?e.setState({useMove:!1}):0},onMouseUp:function(){return e.state.useMove?(e.setState({useMove:!1}),document.body.style.cursor="default"):0},onMouseDown:function(t){return 1===t.nativeEvent.button?e.setState({useMove:!0}):0},onWheel:function(t){var n=e.state.canvasViewScale-t.nativeEvent.deltaY/1e3;n<0&&(n=.01),e.setState({canvasViewScale:n}),T.canvas.transition="transform 0.1s"},children:[this.draw_canvasUI(),this.drawCall(n,r,t.bgColor,a)]})}}]),n}(a.a.Component),T={container:{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},canvas:{position:"absolute",top:"50%",left:"50%",transition:"transform 0.01s"},itemContainer:{whiteSpace:"nowrap"}},A=n(487),B=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"ui_title",children:this.props.title})}}]),n}(a.a.Component),F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(x.jsx)("input",{style:{width:"".concat(this.props.width||"")},type:"text",value:this.props.value,onInput:this.props.HD_onInput})}}]),n}(a.a.Component);var V,H,P,M,Y,X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rgba(255,255,255,1)",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{color:e,range:t}},G=function(e){if(P.current){var t=(e.pageX-P.current.getBoundingClientRect().x)/(P.current.clientWidth+16)*100;t=Math.max(Math.min(100,t),0),"%"===H.rangeUnit?H.range=t:H.range=t/100*V.props.rootComponent.state.canvasInfo.width,V.props.rootComponent.setState({})}},W=function e(t){V.props.HD_sort(t),window.removeEventListener("mousemove",G),window.removeEventListener("mouseup",e),requestAnimationFrame((function(){V.setState({activeIDX:V.getIndex()}),V=null,H=null,P=null}))},J=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={},r.refBar=a.a.createRef(),r}return Object(c.a)(n,[{key:"getIndex",value:function(){var e=this.props.rootComponent.state.activeSubData,t=this.props.colorData;return e.colorList.indexOf(t)}},{key:"render",value:function(){var e=this,t=this.props.rootComponent,n=t.state,r=n.activeSubData,a=n.canvasInfo,i=this.props.colorData,o=this.props.activeYn,s=i.color;return Object(x.jsxs)("div",{style:{margin:"3px 0px",cursor:"pointer",border:o?"1px solid #5e7ade":"1px solid rgba(255,255,255,0.1)",borderRadius:"4px"},onClick:function(){return e.props.HD_active(e.getIndex())},onMouseDown:function(){return e.props.HD_active(e.getIndex())},children:[Object(x.jsx)("button",{style:q.add,onClick:function(){var n=r.colorList[e.getIndex()-1],a=i.range,o=a;n&&n.xUnit===i.xUnit&&(o=a-.5*(a-n.range));var s=new X(i.color,o);r.colorList.splice(e.getIndex(),0,s),t.setState({})},children:"+"}),Object(x.jsxs)("div",{style:{display:"flex",padding:"4px 4px 0px"},children:[Object(x.jsx)("div",{className:"transparent"===s?"transparent_checker":"",style:{background:"transparent"===s?"":s,width:"25px",height:"25px",borderRadius:"4px",border:"1px solid #000",marginRight:"10px"},onClick:function(){return e.setState({openColorPicker:i})}}),Object(x.jsxs)("div",{children:[Object(x.jsx)(j,{width:"auto",value:i.range||0,HD_onInput:function(n){i.range=+n.target.value;for(var a=r.colorList.length;a--;)r.colorList[a]===i&&e.props.HD_active(e.getIndex());t.setState({})},HD_blur:function(t){e.props.HD_sort(t),e.props.HD_active(e.getIndex())}}),Object(x.jsx)(g,{value:i.rangeUnit,options:["px","%"],HD_change:function(e){var n=e.target.value;i.rangeUnit!==n&&("%"===i.rangeUnit?i.range=a.width*i.range/100:i.range=i.range/a.width*100),i.rangeUnit=n,t.setState({})}}),Object(x.jsx)("button",{style:q.del,onClick:function(){r.colorList.splice(e.getIndex(),1),t.setState({})},children:"Del"}),Object(x.jsx)("button",{style:q.lock,onClick:function(){},children:"Todo Lock"}),Object(x.jsx)("div",{children:i.color})]})]}),Object(x.jsxs)("div",{style:{margin:"8px 8px",alignItems:"center"},children:[Object(x.jsx)("div",{style:q.line,ref:this.refBar}),Object(x.jsx)("div",{style:Object(p.a)(Object(p.a)({},q.ball),{},{left:"".concat("px"===i.rangeUnit?i.range/a.width*100:i.range,"%"),background:o?"#5e7ade":"#fff"}),onMouseDown:function(){V=e,H=i,P=e.refBar,window.addEventListener("mousemove",G),window.addEventListener("mouseup",W)}})]}),this.state.openColorPicker?Object(x.jsxs)("div",{style:q.colorPicker,children:[Object(x.jsx)(R.a,{width:250,color:this.state.openColorPicker.color,onChange:function(n){e.state.openColorPicker.color="rgba(".concat(n.rgb.r,",").concat(n.rgb.g,",").concat(n.rgb.b,",").concat(n.rgb.a,")"),t.setState({})}}),Object(x.jsx)("div",{style:q.complete,onClick:function(){return e.setState({openColorPicker:null})},children:"\uc644\ub8cc"})]}):""]})}}]),n}(a.a.Component),q={container:{paddingTop:"10px"},colorPicker:{zIndex:1,position:"absolute",top:0,left:"50%",transform:"translate(-50% , -50%)",boxShadow:"0px 0px 16px rgba(0,0,0,0.5)",background:"#fff",borderRadius:"8px",overflow:"hidden"},complete:{padding:"4px",background:"#5e7ade",cursor:"pointer",textAlign:"center"},line:{height:"10px",background:"rgba(255,255,255,0.25)",borderRadius:"5px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 0px 10px inset",border:"1px solid rgb(31, 31, 31)"},add:{position:"absolute",width:"20px",height:"16px",lineHeight:1,top:0,right:0,background:"#5e7ade",borderRadius:"4px",color:"#fff",fontSize:"11px",border:"1px solid #000",transform:"translate(50%,-50%)",cursor:"pointer",boxShadow:"0px 0px 10px rgba(0,0,0,0.46)"},ball:{position:"absolute",height:"25px",top:"50%",borderRadius:"50%",width:"25px",border:"1px solid #000",transform:"translate(-50%,-50%)",textAlign:"center",cursor:"pointer",transition:"background 0.2s, top 0.2s, bottom 0.2s",boxShadow:"0px 0px 10px rgba(0,0,0,0.46)"},del:{fontSize:"11px",color:"#fff",background:"#5e7ade",outline:"none",border:"1px solid #000",borderRadius:"4px",height:"23px",cursor:"pointer"},lock:{fontSize:"11px",color:"#fff",background:"red",outline:"none",border:"1px solid #000",borderRadius:"4px",height:"23px",cursor:"pointer"}},K=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={activeIDX:0},r.refBar=a.a.createRef(),r}return Object(c.a)(n,[{key:"renderGradientColorList",value:function(e){var t=this,n=[],r=e.colorList.map((function(e,r){var a,i=t.state.activeIDX===r;return a="".concat(e.range,"%"),n.push(t.renderColorStep(e,r,i)),"".concat(e.color," ").concat(a)})),a="".concat(u.LINEAR,"(90deg, ").concat(r,"),").concat(this.state.layerBgColor);return Object(x.jsx)("div",{style:{height:"55px",background:a,transition:"background 0.2s"},children:n})}},{key:"renderColorStep",value:function(e,t,n){var r;return r="".concat(e.range,"%"),Object(x.jsx)("div",{style:{position:"absolute",height:"10px",bottom:0,left:r,borderRadius:"4px",width:"4px",background:n?"#5e7ade":"#fff",border:"1px solid #000",transform:"translate(-50%,100%)",textAlign:"center",cursor:"pointer",transition:"background 0.2s, top 0.2s, bottom 0.2s",boxShadow:"0px 0px 10px rgba(0,0,0,0.46)"}})}},{key:"sortColorList",value:function(){var e=this.props.rootComponent.state.canvasInfo;this.props.rootComponent.state.activeSubData.colorList.sort((function(t,n){var r="%"===t.rangeUnit?t.range:t.range/e.width*100,a="%"===n.rangeUnit?n.range:n.range/e.width*100;return r>a?1:r<a?-1:0}))}},{key:"render",value:function(){var e=this,t=this.props.rootComponent,n=t.state.activeSubData;return Object(x.jsxs)("div",{style:Q.container,children:[Object(x.jsxs)("div",{style:{display:"flex",margin:"4px 0px",justifyContent:"space-between"},children:["Gradient ColorRange",Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{style:Object(p.a)(Object(p.a)({},Q.bgItem),{},{background:"#000",color:"#fff"}),onClick:function(){return e.setState({layerBgColor:"black"})},children:"B"}),Object(x.jsx)("button",{style:Object(p.a)(Object(p.a)({},Q.bgItem),{},{background:"#fff",color:"#000"}),onClick:function(){return e.setState({layerBgColor:"white"})},children:"W"}),Object(x.jsx)("button",{style:Object(p.a)({},Q.bgItem),className:"transparent_checker",onClick:function(){return e.setState({layerBgColor:"transparent"})},children:"T"})]})]}),Object(x.jsx)("div",{ref:this.refBar,className:"transparent_checker",style:{border:"1px solid rgba(0,0,0,1)"},children:this.renderGradientColorList(n)}),Object(x.jsx)("div",{style:{marginTop:"20px"},children:n.colorList.map((function(n,r){return Object(x.jsx)(J,{rootComponent:t,colorData:n,activeYn:e.state.activeIDX===r,HD_active:function(t){e.setState({activeIDX:t})},HD_sort:function(){e.sortColorList()}})}))})]})}}]),n}(a.a.Component),Q={container:{},bgItem:{padding:"2px",marginRight:"1px",width:"30px",height:"20px",fontSize:"10px",cursor:"pointer",border:0,fontWeight:"bold"}},Z=100,$=function(e){M.calcSize(e)},ee=function e(){window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",e)},te=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).refRect=a.a.createRef(),r}return Object(c.a)(n,[{key:"calcSize",value:function(e){var t=M.props.rootComponent,n=t.state,r=n.activeSubData,a=(n.activeLayer.size,n.canvasInfo),i=M.refRect.current.getBoundingClientRect(),o=e.pageX-i.x,s=e.pageY-i.y,c=a.width,l=a.height,d="%"===r.position.xUnit?o/Z*100:o*c/Z,p="%"===r.position.yUnit?s/Z*100:s*l/Z;r.position.x=d,r.position.y=p,t.setState({})}},{key:"render",value:function(){var e=this,t=this.props.rootComponent.state,n=t.activeSubData,r=(t.activeLayer.size,n.position),a=t.canvasInfo,i=a.width,o=a.height,s="%"===r.xUnit?r.x/100*Z%100:r.x/i*100%100,c="%"===r.yUnit?r.y/100*Z%100:r.y/o*100%100;return s<0&&(s=100+s),c<0&&(c=100+c),Object(x.jsx)("div",{children:Object(x.jsx)("div",{ref:this.refRect,className:"grid",style:ne.box,onMouseDown:function(){M=e,window.addEventListener("mousemove",$),window.addEventListener("mouseup",ee)},onClick:function(t){M=e,e.calcSize(t.nativeEvent)},children:Object(x.jsx)("div",{style:Object(p.a)(Object(p.a)({},ne.degreeItem),{},{top:"".concat(c,"%"),left:"".concat(s,"%")})})})})}}]),n}(a.a.Component),ne={box:{display:"inline-block",margin:"5px",width:"".concat(Z,"px"),height:"".concat(Z,"px"),border:"1px solid #5e7ade",borderRadius:"4px",cursor:"pointer"},degreeItem:{width:"10px",height:"10px",border:"1px solid #5e7ade",borderRadius:"50%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},re=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={},r}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.rootComponent,t=e.state.activeSubData;return Object(x.jsxs)("div",{children:["Type",Object(x.jsx)(g,{value:t.type.split("-")[0].toUpperCase(),options:Object.keys(u),HD_change:function(n){t.type=u[n.target.value],e.setState({})}})]})}}]),n}(a.a.Component),ae=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={},r}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.rootComponent,t=e.state.activeSubData;return Object(x.jsxs)("div",{children:["Position",Object(x.jsxs)("div",{children:[Object(x.jsx)(j,{width:"80px",value:t.position.x||0,HD_onInput:function(n){t.position.x=n.target.value,e.setState({})}}),Object(x.jsx)(g,{value:t.position.xUnit,options:["px","%"],HD_change:function(n){t.position.xUnit=n.target.value,e.setState({})}}),Object(x.jsx)(j,{width:"80px",value:t.position.y||0,HD_onInput:function(n){t.position.y=n.target.value,e.setState({})}}),Object(x.jsx)(g,{value:t.position.yUnit,options:["px","%"],HD_change:function(n){t.position.yUnit=n.target.value,e.setState({})}})]}),"Size",Object(x.jsxs)("div",{children:[Object(x.jsx)(j,{width:"80px",value:t.size.w||0,HD_onInput:function(n){t.size.w=n.target.value,e.setState({})}}),Object(x.jsx)(g,{value:t.size.wUnit,options:["px","%"],HD_change:function(n){t.size.wUnit=n.target.value,e.setState({})}}),Object(x.jsx)(j,{width:"80px",value:t.size.h||0,HD_onInput:function(n){t.size.h=n.target.value,e.setState({})}}),Object(x.jsx)(g,{value:t.size.hUnit,options:["px","%"],HD_change:function(n){t.size.hUnit=n.target.value,e.setState({})}})]})]})}}]),n}(a.a.Component),ie=function(e){Y.calcDegree(e)},oe=function e(){window.removeEventListener("mousemove",ie),window.removeEventListener("mouseup",e)},se=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).refCenter=a.a.createRef(),r}return Object(c.a)(n,[{key:"calcDegree",value:function(e){var t=Y.props.rootComponent,n=t.state.activeSubData,r=Y.refCenter.current.getBoundingClientRect(),a=e.pageX-(r.x+r.width/2),i=e.pageY-(r.y+r.height/2),o=Math.atan2(i,a);n.deg=180*o/Math.PI,n.deg+=90,n.deg<0&&(n.deg+=360),n.deg=n.deg%360,t.setState({})}},{key:"render",value:function(){var e=this,t=this.props.rootComponent,n=t.state.activeSubData,r=n.deg;return Object(x.jsx)("div",{children:n.type===u.LINEAR?Object(x.jsxs)(x.Fragment,{children:["Deg ",Object(x.jsx)(j,{width:"71px",value:r||0,HD_onInput:function(e){n.deg=e.target.value,t.setState({})}}),Object(x.jsx)("div",{style:{textAlign:"center"},children:Object(x.jsxs)("div",{style:ce.box,onMouseDown:function(){Y=e,window.addEventListener("mousemove",ie),window.addEventListener("mouseup",oe)},onClick:function(t){Y=e,e.calcDegree(t.nativeEvent)},children:[Object(x.jsx)("div",{style:ce.centerItem,ref:this.refCenter}),Object(x.jsx)("div",{style:Object(p.a)(Object(p.a)({},ce.degreeItem),{},{top:"calc(50% + ".concat(50*Math.sin(Math.PI/180*(r-90))/3,"px)"),left:"calc(50% + ".concat(50*Math.cos(Math.PI/180*(r-90))/3,"px)")})})]})})]}):""})}}]),n}(a.a.Component),ce={box:{display:"inline-block",margin:"5px",width:"".concat(50,"px"),height:"".concat(50,"px"),border:"1px solid #5e7ade",borderRadius:"50%",cursor:"pointer"},centerItem:{width:"5px",height:"5px",background:"#5e7ade",borderRadius:"50%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},degreeItem:{width:"10px",height:"10px",border:"1px solid #5e7ade",borderRadius:"50%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},le=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.rootComponent,t=e.state.activeSubData;return Object(x.jsxs)("div",{children:["Repeat",Object(x.jsx)(g,{value:t.repeatType.replace("-","_").toUpperCase(),options:Object.keys(C),HD_change:function(n){t.repeatType=C[n.target.value],e.setState({})}})]})}}]),n}(a.a.Component),de=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.rootComponent,t=e.state,n=t.activeLayer,r=t.activeSubData;return Object(x.jsxs)("div",{style:pe.container,children:[Object(x.jsx)(B,{title:"RedPropertyEdit"}),Object(x.jsxs)("div",{style:pe.contentWrap,children:[Object(x.jsx)("div",{children:Object(x.jsxs)("div",{style:Object(p.a)(Object(p.a)({},pe.itemContainer),{},{display:"flex"}),children:[Object(x.jsxs)("div",{style:{flexGrow:100,marginRight:"5px"},children:[Object(x.jsx)("div",{children:"Title"}),Object(x.jsx)(F,{width:"calc(100% - 4px)",value:r.title,HD_onInput:function(t){r.title=t.target.value,e.setState({})}}),Object(x.jsx)(re,{rootComponent:e}),Object(x.jsx)(ae,{rootComponent:e}),Object(x.jsx)(le,{rootComponent:e}),Object(x.jsx)("div",{className:"todo",children:"TODO - Radial\uc77c\ub54c \uc13c\ud130 \ud3ec\uc9c0\uc158? \uc124\uc815\ubd84\ub9ac\ud574\uc57c\ud568"}),Object(x.jsx)("div",{className:"todo",children:"TODO - conic \ud0c0\uc785\ucd94\uac00"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:"Start Position"}),Object(x.jsx)(te,{rootComponent:e}),Object(x.jsx)("div",{style:{height:"5px"}}),Object(x.jsx)(se,{rootComponent:e})]})]})}),Object(x.jsxs)("div",{style:pe.itemContainer,children:[Object(x.jsx)("div",{className:"todo",children:"Todo - \ub2e8\uc704 \ubcc0\uacbd\uc2dc \uc18c\ud305\ubc0f \ud53d\uc140 \uacc4\uc0b0\ucc98\ub9ac"}),Object(x.jsx)(K,{rootComponent:e})]}),Object(x.jsxs)("div",{style:pe.itemContainer,children:[Object(x.jsx)("div",{children:"Current Data"}),Object(x.jsx)(A.a,{language:"css",wrapLongLines:"pre",children:JSON.stringify(D.calcGradientItem(r,!1,n)).replace(/"/g,"")}),Object(x.jsx)(A.a,{language:"javascript",wrapLongLines:"pre",children:JSON.stringify(r,null,2)})]})]})]})}}]),n}(a.a.Component),pe={container:{width:"350px",borderRight:"1px solid #000",overflowX:"hidden",overflowY:"auto"},contentWrap:{padding:"10px 10px"},layer:{height:"30px"},itemContainer:{padding:"4px 0px",borderBottom:"1px solid rgba(0,0,0,0.5)"}},ue=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={canvasInfo:{width:300,height:300},activeLayer:null,activeSubData:null,bgColor:"#fff",layers:[{title:"testLayer sdfsdfsdfsdf",visible:!0,openYn:!0,items:[{title:"test1",type:"linear-gradient",repeatType:"repeat",deg:45,visible:!0,position:{x:0,xUnit:"px",y:0,yUnit:"px"},size:{w:30,wUnit:"%",h:30,hUnit:"%"},colorList:[{color:"transparent",rangeUnit:"%",range:0},{color:"transparent",rangeUnit:"%",range:24.1867043847},{color:"#FFEA53",rangeUnit:"%",range:25.6011315417},{color:"#FFEA53",rangeUnit:"%",range:25.6011315417},{color:"transparent",rangeUnit:"%",range:25.6011315417},{color:"transparent",rangeUnit:"%",range:74.3988684583},{color:"#FFEA53",rangeUnit:"%",range:74.3988684583},{color:"#FFEA53",rangeUnit:"%",range:75.8132956153},{color:"transparent",rangeUnit:"%",range:75.8132956153},{color:"transparent",rangeUnit:"%",range:100}]},{title:"test2",type:"linear-gradient",repeatType:"repeat",deg:-45,visible:!0,position:{x:0,xUnit:"px",y:0,yUnit:"px"},size:{w:30,wUnit:"%",h:30,hUnit:"%"},colorList:[{color:"transparent",rangeUnit:"%",range:0},{color:"transparent",rangeUnit:"%",range:24.1867043847},{color:"#FFEA53",rangeUnit:"%",range:25.6011315417},{color:"#FFEA53",rangeUnit:"%",range:25.6011315417},{color:"transparent",rangeUnit:"%",range:25.6011315417},{color:"transparent",rangeUnit:"%",range:74.3988684583},{color:"#FFEA53",rangeUnit:"%",range:74.3988684583},{color:"#FFEA53",rangeUnit:"%",range:75.8132956153},{color:"transparent",rangeUnit:"%",range:75.8132956153},{color:"transparent",rangeUnit:"%",range:100}]},{title:"test3",type:"linear-gradient",repeatType:"repeat",deg:45,visible:!0,position:{x:0,xUnit:"px",y:0,yUnit:"px"},size:{w:30,wUnit:"%",h:30,hUnit:"%"},colorList:[{color:"#8F225C",rangeUnit:"%",range:0},{color:"#8F225C",rangeUnit:"%",range:12.4469589816},{color:"#FFEA53",rangeUnit:"%",range:12.4469589816},{color:"#FFEA53",rangeUnit:"%",range:13.8613861386},{color:"transparent",rangeUnit:"%",range:13.8613861386},{color:"transparent",rangeUnit:"%",range:86.1386138614},{color:"#FFEA53",rangeUnit:"%",range:86.1386138614},{color:"#FFEA53",rangeUnit:"%",range:87.5530410184},{color:"#8F225C",rangeUnit:"%",range:87.5530410184},{color:"#8F225C",rangeUnit:"%",range:100}]}]},{title:"testLayer ",visible:!0,openYn:!0,items:[{title:"test",type:"radial-gradient",repeatType:"no-repeat",deg:45,visible:!0,position:{x:0,xUnit:"px",y:0,yUnit:"px"},size:{w:30,wUnit:"%",h:30,hUnit:"%"},colorList:[{color:"rgba(255,255,0,0.9)",rangeUnit:"%",range:25},{color:"rgba(255,0,0,0.5)",rangeUnit:"%",range:55},{color:"transparent",rangeUnit:"%",range:75},{color:"transparent",rangeUnit:"%",range:100}]}]}]},r.state.activeLayer=r.state.layers[0],r.state.activeSubData=r.state.activeLayer.items[0],r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({})}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"frame",children:[Object(x.jsxs)("div",{className:"frame_main_menu",children:["frame Main Menu",Object(x.jsx)("div",{style:be.test,children:"\uc5ec\uae30\ub2e4\uac00 \uba54\ub274\ub97c \ub9cc\ub4e4\uc5b4\uc57c\uaca0\ub139"}),Object(x.jsx)("div",{style:be.test,children:"\ub2e8\ucd95\ud0a4\ub3c4 \ud574\uc57c\ud558\ub098 -_-"}),Object(x.jsx)("div",{style:be.test,children:"\uc5f4\uae30"}),Object(x.jsx)("div",{style:be.test,children:"\uc800\uc7a5"}),Object(x.jsx)("div",{style:be.test,children:"\uc5b8\ub450/\ub9ac\ub450"})]}),Object(x.jsxs)("div",{className:"frame_toolbar",children:["frame ToolBar",Object(x.jsx)("div",{style:be.test,children:"\ud234\ubc14 \uc544\uc774\ud15c"}),Object(x.jsx)("div",{style:be.test,children:"\ud234\ubc14 \uc544\uc774\ud15c"})]}),Object(x.jsx)("div",{className:"frame_middle",children:Object(x.jsxs)("div",{className:"frame_middle_container",children:[Object(x.jsxs)("div",{className:"frame_left",children:["frame Left",Object(x.jsx)("div",{className:"todo",children:"\ud504\ub9ac\uc14b\uacf5\uac04"}),Object(x.jsx)("div",{className:"todo",children:"Todo - Rect"}),Object(x.jsx)("div",{className:"todo",children:"Todo - Circle"}),Object(x.jsx)("div",{className:"todo",children:"Todo - Line"}),Object(x.jsx)("div",{className:"todo",children:"Todo - Etc"})]}),Object(x.jsx)("div",{className:"frame_center",children:Object(x.jsx)(E,{rootComponent:this})}),Object(x.jsx)("div",{className:"frame_right",children:Object(x.jsxs)("div",{style:{display:"flex",height:"100%"},children:[Object(x.jsx)(D,{rootComponent:this}),this.state.activeSubData?Object(x.jsx)(de,{rootComponent:this}):"",Object(x.jsxs)("div",{style:{display:"flex",height:"100%",alignContent:"space-between",flexDirection:"column"},children:[Object(x.jsxs)("div",{style:{width:"300px"},children:[Object(x.jsx)("div",{style:be.test,children:"\uacb0\uacfc \ud14c\uc2a4\ud2b8"}),Object(x.jsx)(A.a,{language:"css",wrapLongLines:"pre",children:JSON.stringify(D.calcGradients(this.state.layers),null,2,this.state.bgColor).replace(/"/g,"")})]}),Object(x.jsx)("div",{children:"TODO - \uc560\ub4dc\uc13c\uc2a4\uc790\ub9ac"})]})]})})]})}),Object(x.jsx)("div",{className:"frame_bottom",children:"frame Bottom"}),Object(x.jsxs)("div",{className:"frame_status",children:["frame Status",Object(x.jsx)("div",{style:be.test,children:"\uc0c1\ud0dc \uc544\uc774\ud15c"}),Object(x.jsx)("div",{style:be.test,children:"\uc0c1\ud0dc \uc544\uc774\ud15c"})]})]})}}]),n}(a.a.Component),be={test:{background:"#5e7ade",margin:"1px"}},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,488)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(ue,{})}),document.getElementById("root")),he()}},[[485,1,2]]]);
//# sourceMappingURL=main.f405c9ca.chunk.js.map