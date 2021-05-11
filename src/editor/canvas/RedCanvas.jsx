/*
 *
 *  * RedGL - MIT License
 *  * Copyright (c) 2021~ By RedCamel(webseon@gmail.com)
 *  * https://github.com/redcamel/RedGradient
 *
 */

import React from "react";
import RedLayer from "../layer/RedLayer.jsx";
import drawCanvasUI from "./drawCanvasUI.js";
import GRADIENT_TYPE from "../GRADIENT_TYPE";

class RedCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasMoveState: false,
      canvasViewOffsetX: 0,
      canvasViewOffsetY: 0,
      canvasViewScale: 1,
      layerSizeView: true,
      canvasBgColorPickerOpenYn: false
    };
    this.refColorPickerContainer = React.createRef();
  }

  draw_canvasUI = drawCanvasUI;

  drawCall(canvasInfo, layers, bgColor) {
    const rootComponent = this.props.rootComponent;
    const rootComponentState = rootComponent.state;
    const activeSubData = rootComponentState.activeSubData;
    const activeSubDataPosition = activeSubData['position'];
    const activeSubDataAt = activeSubData['at'];
    const activeSubDataSize = activeSubData['size'];
    const layoutSize = {
      w: activeSubDataSize['wUnit'] === '%' ? canvasInfo['width'] * activeSubDataSize['w'] / 100 : activeSubDataSize['w'],
      h: activeSubDataSize['hUnit'] === '%' ? canvasInfo['height'] * activeSubDataSize['h'] / 100 : activeSubDataSize['h'],
    };
    const lX = activeSubDataAt['xUnit'] === 'px' ? `${activeSubDataAt['x']}${activeSubDataAt['xUnit']}` : `${layoutSize['w'] * activeSubDataAt['x'] / 100}px`;
    const lY = activeSubDataAt['yUnit'] === 'px' ? `${activeSubDataAt['y']}${activeSubDataAt['yUnit']}` : `${layoutSize['h'] * activeSubDataAt['y'] / 100}px`;
    return <div style={{
      ...style.canvas,
      transform: `translate(calc(-50% + ${this.state.canvasViewOffsetX}px),calc(-50% + ${this.state.canvasViewOffsetY}px)) scale(${this.state.canvasViewScale})`
    }} className={'transparent_checker'}>
      <div
        className={'transparent_checker'}
        style={{
          width: `${canvasInfo.width}px`, height: `${canvasInfo.height}px`,
          background: RedLayer.calcGradients(layers, true, bgColor),
          transition: 'width 0.2s, height 0.2s'
        }}
      />
      {
        this.state.layerSizeView ? <div
          style={{
            position: 'absolute',
            left: `${activeSubDataPosition['x']}${activeSubDataPosition['xUnit']}`,
            top: `${activeSubDataPosition['y']}${activeSubDataPosition['yUnit']}`,
            width: `${layoutSize['w']}px`,
            height: `${layoutSize['h']}px`,
            border: '1px dashed #000',
            color: '#000'
          }}
        >
          {activeSubData['title']}
          {
            activeSubData['type'] === GRADIENT_TYPE.RADIAL ? <>
              <div
                style={{
                  position: 'absolute',
                  left: lX,
                  top: lY,
                  width: `${canvasInfo['width']}px`,
                  height: `${canvasInfo['height']}px`,
                  border: '1px dashed rgba(0,0,0,0.25)',
                  color: '#000'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: lX,
                  top: lY,
                  width: `10px`,
                  height: `10px`,
                  borderRadius: '50%',
                  background: 'red',
                  transform: 'translate(-50%,-50%)',
                  color: '#000'
                }}
              />
            </> : ''
          }
        </div> : ''
      }


    </div>;
  }

  render() {
    const rootComponent = this.props.rootComponent;
    const rootComponentState = rootComponent.state;
    const canvasInfo = rootComponentState.canvasInfo;
    const layers = rootComponentState.layers;
    const activeLayer = rootComponentState.activeLayer;
    return <div
      style={style.container}
      onMouseMove={e => {
        if (this.state.useMove) {
          e = e.nativeEvent;
          style.canvas.transition = '';
          this.setState({
            canvasViewOffsetX: this.state.canvasViewOffsetX + e.movementX,
            canvasViewOffsetY: this.state.canvasViewOffsetY + e.movementY
          });
          document.body.style.cursor = 'move';
          console.log(e);
        }
      }}
      onMouseLeave={() => this.state.useMove ? this.setState({useMove: false}) : 0}
      onMouseUp={() => this.state.useMove ? (this.setState({useMove: false}), document.body.style.cursor = 'default') : 0}
      onMouseDown={e => e.nativeEvent.button === 1 ? this.setState({useMove: true}) : 0}
      onWheel={e => {
        let t0 = this.state.canvasViewScale - e.nativeEvent.deltaY / 1000;
        if (t0 < 0) t0 = 0.01;
        this.setState({canvasViewScale: t0});
        style.canvas.transition = 'transform 0.1s';
      }}
    >
      {this.draw_canvasUI()}
      {this.drawCall(canvasInfo, layers, rootComponentState.bgColor, activeLayer)}
    </div>;
  }
}

export default RedCanvas;
const style = {
  container: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    overflow: 'hidden'
  },
  canvas: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    // overflow: 'hidden',
    transition: 'transform 0.01s'
  },
  itemContainer: {
    whiteSpace: 'nowrap'
  }
};
