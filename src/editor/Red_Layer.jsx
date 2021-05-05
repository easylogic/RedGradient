import React from "react";
import GRADIENT_TYPE from "./GRADIENT_TYPE";

class Red_Layer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rootComponent = this.props.rootComponent;
    const rootComponentState = rootComponent.state;
    const layers = rootComponentState.layers;
    return <div style={style.container}>
      {
        layers.map((layer, index) => {
          return <div>
            <div className={'layerItemTitle'}>{layer.title}</div>
            <div
              className={'transparent_checker'}
              style={{height: '35px', cursor: 'pointer'}}
              onClick={e => rootComponent.setState({
                activeData: layer,
                activeSubData: layer.items[0]
              })}
            >
              <div
                className={'layerItem'}
                style={{background: Red_Layer.calcGradientItems(layer['items'])}}
              />
            </div>
            <div>
              {
                layer.items.map(item => {
                  const activeSubDataYn = rootComponentState.activeSubData === item;
                  return <div>
                    <div className={'layerItemSubTitle'}>{item.title}</div>
                    <div
                      className={'transparent_checker'}
                      style={{height: '55px', marginLeft: '20px', cursor: 'pointer'}}
                      onClick={e => rootComponent.setState({
                        activeData: layer,
                        activeSubData: item
                      })}
                    >
                      <div
                        className={'layerItem'}
                        style={{background: Red_Layer.calcGradientItem(item)}}
                      />
                      <div style={activeSubDataYn ? style.activeLine : style.deActiveLine} />
                    </div>

                  </div>;
                })
              }

            </div>
          </div>;
        })
      }
    </div>;
  }
}

Red_Layer.calcGradients = layers => layers.map(layer => Red_Layer.calcGradientItems(layer['items'])).join(',');
Red_Layer.calcGradientItems = items => items.map(item => Red_Layer.calcGradientItem(item)).join(',');
Red_Layer.calcGradientItem = data => {
  if (!data) return '';
  //TODO - 여기정리
  if (data['type'] === GRADIENT_TYPE.LINEAR) {
    const gradients = data['datas'].map(v => {
      let colorRangeTxt = v['range'] === undefined ? '' : `${v['range']}${v['rangeUnit']}`;
      return `${v['color']} ${colorRangeTxt}`;
    });
    let positionTxt = data['position'] ? ` ${data['position']['x']}${data['position']['xUnit']} ${data['position']['y']}${data['position']['yUnit']}` : '';
    let sizeTxt = data['size'] ? ` ${data['size']['w']}${data['size']['wUnit']} ${data['size']['h']}${data['size']['hUnit']}` : '';

    return `${data['type']}(${data['deg']}deg, ${gradients}) ${positionTxt} / ${sizeTxt}`;
  } else {
    const gradients = data['datas'].map(v => {
      let colorRangeTxt = v['range'] === undefined ? '' : `${v['range']}${v['rangeUnit']}`;
      return `${v['color']} ${colorRangeTxt}`;
    });
    let positionTxt = data['position'] ? ` ${data['position']['x']}${data['position']['xUnit']} ${data['position']['y']}${data['position']['yUnit']}` : '';
    let sizeTxt = data['size'] ? ` ${data['size']['w']}${data['size']['wUnit']} ${data['size']['h']}${data['size']['hUnit']}` : '';

    return `${data['type']}(${gradients}) ${positionTxt} / ${sizeTxt}`;
  }

};
export default Red_Layer;
const style = {
  container: {
    width: '100px',
    borderRight: '1px solid #000',
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  layerItem: {
    height: '35px',
    cursor: 'pointer'
  },
  activeLine: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    border: '2px solid rgba(255,0,0,1)',
    transition: 'border 0.2s'
  },
  deActiveLine: {
    border: '2px solid rgba(255,0,0,0)',
  }
};
