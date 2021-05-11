import React from "react";
import PresetCircle from "./PresetCircle";
import RedLayer from "../editor/layer/RedLayer";
import PresetCircle2 from "./PresetCircle2";

const presetList = [
  {
    name: 'circle',
    component: PresetCircle
  },
  {
    name: 'circle2',
    component: PresetCircle2
  },
];

class RedPreset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const rootComponent = this.props.rootComponent;
    const rootComponentState = rootComponent.state;
    const activeSubData = rootComponentState.activeSubData;
    return <div style={style.container}>
      {
        presetList.map(v => {
          return <div
            style={style.iconContainer}
            onClick={e => {
              let t0 = new v['component']();
              for (const k in t0) activeSubData[k] = t0[k];
              rootComponent.setState({activeSubData: activeSubData});
            }}
          >
            <div style={{
              ...style.icon,
              background: RedLayer.calcGradientItem(new v['component']())
            }}>
            </div>
            {v['name']}
          </div>;
        })
      }
    </div>;
  }
}

export default RedPreset;
const style = {
  container: {
    display: 'flex'
  },
  iconContainer: {
    margin: '5px',
    cursor: 'pointer',
    textAlign : 'center'
  },
  icon: {
    width: '30px',
    height: '30px',
    background: '#fff',
    borderRadius: '5px',
    border : '1px solid rgba(0,0,0,0.5)'
  }
};