/*
 *
 *  * RedGL - MIT License
 *  * Copyright (c) 2021~ By RedCamel(webseon@gmail.com)
 *  * https://github.com/redcamel/RedGradient
 *
 */
import React from "react";
import PresetCircle from "./PresetCircle.js";
import PresetCircle2 from "./PresetCircle2.js";
import PresetCircle3 from "./PresetCircle3.js";
import PresetCircle4 from "./PresetCircle4.js";
import CALC_GRADIENT from "../../CALC_GRADIENT.js";
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const presetList = [
  {
    name: 'circle',
    data: PresetCircle
  },
  {
    name: 'circle2',
    data: PresetCircle2
  },
  {
    name: 'circle3',
    data: PresetCircle3
  },
  {
    name: 'circle4',
    data: PresetCircle4
  },
];

class RedPreset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 0
    };
  }

  renderList(list, delMode) {
    const rootComponent = this.props.rootComponent;
    const rootComponentState = rootComponent.state;
    const activeSubData = rootComponentState.activeSubData;
    return list.map((v, index) => {
      return <div
        style={style.iconContainer}
        onClick={e => {
          if (delMode) {
            RedPreset.delUserPreset(rootComponent, index)
          } else {
            const newData = JSON.parse(JSON.stringify(v['data']))
            const idx = rootComponentState.activeLayer.items.indexOf(activeSubData)
            rootComponentState.activeLayer.items.splice(idx, 1, newData)
            rootComponentState.activeSubData = newData
          }
          rootComponent.updateRootState({});
        }}
      >
        <div style={{
          ...style.icon,
          background: CALC_GRADIENT.calcGradientItem(JSON.parse(JSON.stringify(v['data'])))
        }}>
        </div>
        <div style={style.name}>{v['name']}</div>
        {delMode ? <div style={style.del}><FontAwesomeIcon
          icon={faMinusCircle}/></div> : ''}
      </div>;
    })
  }

  render() {
    const userPresetList = RedPreset.getUserPreset()
    return <div>
      <div style={style.container}>{this.renderList(presetList)}</div>
      <div style={style.divide}/>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        User Preset
        <div style={{
          display: 'flex',
          borderRadius: '4px',
          border: '1px solid #000',
          fontSize: '11px',
          marginRight: '4px',
          overflow: 'hidden'
        }}>
          <div
            onClick={e => this.setState({mode: 0})}
            style={{...style.mode, background: this.state.mode === 0 ? '#5e7ade' : '#2f2f2f'}}>view
          </div>
          <div
            onClick={e => this.setState({mode: 1})}
            style={{
              ...style.mode,
              borderLeft: '1px solid #000',
              background: this.state.mode === 1 ? '#5e7ade' : '#2f2f2f'
            }}>del
          </div>
          <div
            onClick={e => RedPreset.exportPreset()}
            style={{...style.mode, borderLeft: '1px solid #000', background: '#2f2f2f'}}>export
          </div>
          <div
            onClick={e => RedPreset.importPreset(this.props.rootComponent)}
            style={{...style.mode, borderLeft: '1px solid #000', background: '#2f2f2f'}}>import
          </div>
        </div>
      </div>
      <div style={style.container}>{this.renderList(userPresetList, this.state.mode === 1)}</div>
    </div>
  }
}

export default RedPreset;
RedPreset.getUserPreset = () => JSON.parse(localStorage.getItem('userPresetList') || '[]')
RedPreset.addUserPreset = (context, v) => {
  let t0 = RedPreset.getUserPreset()
  t0.push({name: v['title'], data: v});
  localStorage.setItem('userPresetList', JSON.stringify(t0))
  context.setState({})
}
RedPreset.delUserPreset = (context, index) => {
  let t0 = RedPreset.getUserPreset()
  t0.splice(index, 1)
  localStorage.setItem('userPresetList', JSON.stringify(t0))
  context.setState({})
}
RedPreset.exportPreset = () => {
  const a = document.createElement('a');
  const file = new Blob([JSON.stringify(RedPreset.getUserPreset())], {type: 'application/json'});
  a.href = URL.createObjectURL(file);
  a.download = `RedGradientPreset.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}
RedPreset.importPreset = (context) => {
  const a = document.createElement('input');
  a.setAttribute('accept', '.json');
  a.setAttribute('type', 'file');
  a.click();
  a.onchange = e => {
    let fileReader = new FileReader();
    fileReader.onload = evt => {
      localStorage.setItem('userPresetList', evt.target.result)
      context.setState({})
    }
    fileReader.readAsText(e.target.files[0]);
  };
}
const style = {
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  mode: {
    padding: '2px 5px',
    cursor: 'pointer',
  },
  name: {
    width: '30px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  iconContainer: {
    margin: '5px',
    cursor: 'pointer',
    textAlign: 'center'
  },
  icon: {
    width: '30px',
    height: '30px',
    background: '#fff',
    borderRadius: '5px',
    border: '1px solid rgba(0,0,0,0.5)'
  },
  divide: {
    margin: '5px 0px',
    height: '2px',
    background: '#4e4e4e',
    borderTop: '1px solid #000'
  },
  del: {
    position: 'absolute',
    top: 0, right: 0,
    transform: 'translate(50%,-50%)',
    fontSize: '14px',
    width: '16px',
    height: '16px'
  }
};
