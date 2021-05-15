/*
 *
 *  * RedGL - MIT License
 *  * Copyright (c) 2021~ By RedCamel(webseon@gmail.com)
 *  * https://github.com/redcamel/RedGradient
 *
 */

import React from "react";
import DataItem from "../data/DataItem.js";
import RedLayerSubItem from "./RedLayerSubItem.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEyeSlash,
  faFolder,
  faFolderOpen,
  faMinusCircle,
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons';
import RedLayerTop from "./RedLayerTop.jsx";
import CALC_GRADIENT from "../CALC_GRADIENT";
import RedTitle from "../../core/RedTitle.jsx";



//TODO - 여기 정리해야함
class RedLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layerBgColor: 'transparent',
      SIZE : props.size || 100
    };
    
  }

  _toggleVisible(data) {
    data.visible = !data.visible;
    this.props.rootComponent.updateRootState({});
  }

  render() {
    const rootComponent = this.props.rootComponent;
    const rootComponentState = rootComponent.state;
    const layers = rootComponentState.layers;
    return <div style={{flexDirection: 'column', display: 'flex'}}>
      <RedLayerTop rootComponent={rootComponent} layersComponent={this} />
      <div style={style.container}>
        {
          layers.map((layer) => {
            const layerSize = layer['size'];
            return <div style={{
              opacity: layer.visible ? 1 : 0.5, transition: 'opacity 0.2s',
              border: '1px solid rgba(0,0,0,0.36)', borderRadius: '4px',
              background: '#0e0d0d',
              margin: '4px', padding: '0px 4px'
            }}>
              <div
                className={'layerItemTitle'}
                style={{cursor: 'pointer',textOverflow: 'ellipsis', width: '123px', overflow: 'hidden', whiteSpace: 'nowrap'}}
                onClick={() => {
                  layer.openYn = !layer.openYn;
                  rootComponent.updateRootState({});
                }}
              >

                <FontAwesomeIcon
                  icon={layer.openYn ? faFolderOpen : faFolder}
                  style={{fontSize: '11px', marginRight: '5px', }}
                  />
                {layer.title}
              </div>
              <div>
                <button className={'layerVisible'} onClick={() => this._toggleVisible(layer)}>
                  <FontAwesomeIcon icon={layer.visible ? faEye : faEyeSlash} />
                </button>
                <button className={'layerDel'}
                        style={{opacity: layers.length > 1 ? 1 : 0.25}}
                        onClick={e => {
                          e.stopPropagation();
                          if (layers.length > 1) {
                            let idx = layers.indexOf(layer);
                            layers.splice(idx, 1);
                            let targetLayer;
                            if (layers[idx]) targetLayer = layers[idx];
                            else targetLayer = layers[0];
                            rootComponent.updateRootState({activeLayer: targetLayer, activeSubData: targetLayer['items'][0]});
                          }
                        }}
                ><FontAwesomeIcon icon={faMinusCircle} />
                </button>
                <button className={'layerAdd'}
                        onClick={e => {
                          e.stopPropagation();
                          layer.items.splice(0, 0, new DataItem());
                          rootComponent.updateRootState({activeSubData: layer.items[0]});
                        }}
                ><FontAwesomeIcon icon={faPlusCircle} />
                </button>
              </div>
              <div
                className={'transparent_checker'}
                style={{
                  width: `${this.state.SIZE}px`,
                  height: `${this.state.SIZE}px`,
                  cursor: 'pointer',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  transition: 'height 0.2s'
                }}
                onClick={() => rootComponent.updateRootState({activeLayer: layer, activeSubData: layer.items[0]})}
              >
                <div className={'layerItem'}
                     style={{background: `${CALC_GRADIENT.calcGradientItems(layer['items'], false, layer)},${this.state.layerBgColor}`}} />
              </div>
              <div>{layer.openYn ? layer.items.map(item => <RedLayerSubItem layer={layer} item={item}
                                                                            rootComponent={rootComponent} size={this.state.SIZE}/>) : ''}</div>
            </div>;
          })
        }
      </div>
    </div>;
  }
}

export default RedLayer;
const style = {
  container: {
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: `0px 0px 10px 0px`
  },
  layerItem: {
    height: '35px',
    cursor: 'pointer'
  },
  activeLine: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    border: '2px solid #5e7ade',
    transition: 'border 0.2s'
  },
  deActiveLine: {
    border: '2px solid transparent',
  }
};
