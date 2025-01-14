/*
 *
 *  * RedGL - MIT License
 *  * Copyright (c) 2021~ By RedCamel(webseon@gmail.com)
 *  * https://github.com/redcamel/RedGradient
 *
 */
import React from "react";
import RedNumber from "../../../../core/RedNumber.jsx";

class RedCanvasFilterBlur extends React.Component {
  constructor(props) {
    super(props);
  }

  getCss(filterData) {
    return RedCanvasFilterBlur.getCss(filterData)
  }

  render() {
    const rootComponent = this.props.rootComponent;
    const filterData = this.props.filterData
    return <div>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        size <RedNumber
        value={filterData['values']['amount'] || 0}
        HD_onInput={e => {
          filterData['values']['amount'] = e.target.value;
          filterData['css'] = this.getCss(filterData)
          rootComponent.updateRootState({});
        }}/>
      </div>
    </div>;
  }
}

RedCanvasFilterBlur.getCss = filterData => {
  return `blur(${filterData['values']['amount']}px)`
}
RedCanvasFilterBlur.getNewDataValues = () => {
  return {
    amount: 10
  }
}
export default RedCanvasFilterBlur;
