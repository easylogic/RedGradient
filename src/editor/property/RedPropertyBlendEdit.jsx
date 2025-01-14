/*
 *
 *  * RedGL - MIT License
 *  * Copyright (c) 2021~ By RedCamel(webseon@gmail.com)
 *  * https://github.com/redcamel/RedGradient
 *
 */
import React from "react";
import RedSelect from "../../core/RedSelect.jsx";
import BLEND_MODE_TYPE from "../BLEND_MODE_TYPE";

class RedPropertyBlendEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const rootComponent = this.props.rootComponent;
    const rootComponentState = rootComponent.state;
    const activeSubData = rootComponentState.activeSubData;
    return <div>
      Gradient Blend Mode
      <RedSelect
        value={activeSubData['blendMode']}
        options={Object.entries(BLEND_MODE_TYPE)}
        HD_change={e => {
          activeSubData['blendMode'] = e.target.value;
          rootComponent.updateRootState({});
        }}/>
    </div>;
  }
}

export default RedPropertyBlendEdit;
