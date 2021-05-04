import React from "react"
import UI_Number from "./UI_Number";
import Layer from "./Layer";
class Canvas extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    const rootComponent = this.props.rootComponent
    const rootComponentState = rootComponent.state
    const canvasInfo = rootComponentState.canvasInfo
    const layers = rootComponentState.layers
    return <div style={style.container}>
      <div style={style.canvasResizer}>
        <UI_Number value={canvasInfo.width} HD_onInput={e=> {
          canvasInfo.width = e.target.value
          rootComponent.setState({})
        }}/>
        <UI_Number value={canvasInfo.height} HD_onInput={e=> {
          canvasInfo.height = e.target.value
          rootComponent.setState({})
        }}/>
      </div>
      <div style={style.canvas}>

        <div className={'transparent_checker'} style={{
          width : `${canvasInfo.width}px`,
          height : `${canvasInfo.height}px`,
          background : Layer.calcGradients(layers)
        }}>
        </div>
      </div>

    </div>
  }
}
export default Canvas
const style = {
  container : {
    position : 'absolute',
    top : 0,left : 0,right :0,bottom : 0,
    overflow: 'hidden'


  },
  canvas : {
    position: 'absolute',
    top : '50%',
    left : '50%',
    transform : 'translate(-50%,-50%)',
    overflow : 'auto'
  },
  canvasResizer : {
    position : 'sticky',
    top : 0,
    left : 0,
    zIndex : 1
  }
}
