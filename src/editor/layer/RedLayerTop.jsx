/*
 *
 *  * RedGL - MIT License
 *  * Copyright (c) 2021~ By RedCamel(webseon@gmail.com)
 *  * https://github.com/redcamel/RedGradient
 *
 */
import React from "react";
import DataLayer from "../data/DataLayer.js";
import RedTitle from "../../core/RedTitle.jsx";

const options = [
  'black',
  'white',
  'transparent'
];

class RedLayerTop extends React.Component {
  render() {
    const rootComponent = this.props.rootComponent;
    const rootComponentState = rootComponent.state;
    const layers = rootComponentState.layers;
    const layersComponent = this.props.layersComponent;
    return <div>
      <RedTitle title={'Layer Edit'}/>
      <div style={style.addLayer}>
        <div style={style.addLayerItem}
             onClick={() => {
               let targetLayer;
               layers.splice(0, 0, targetLayer = new DataLayer());
               rootComponent.updateRootState({activeLayer: targetLayer, activeSubData: targetLayer['items'][0]});
             }}
        >Add Layer
        </div>
        <select style={{width: '100%'}} onChange={e => layersComponent.setState({layerBgColor: e.target.value})}>
          {options.map(v => <option value={v}>{v}</option>)}
        </select>
      </div>
    </div>;
  }
}

export default RedLayerTop;
const style = {
  addLayer: {
    position: 'sticky',
    padding: '5px 4px 3px 4px',
    top: 0,
    zIndex: 1,
    background: '#000'
  },
  addLayerItem: {
    background: '#5e7ade',
    padding: '4px 8px',
    fontSize: '11px',
    borderRadius: '4px',
    marginBottom: '4px',
    cursor: 'pointer'
  },
  bgItem: {
    padding: '2px',
    margin: '2px 0px',
    fontSize: '11px',
    cursor: 'pointer',
    border: '1px solid rgba(255,255,255,0.16)',
    borderRadius: '4px'
  }
};
