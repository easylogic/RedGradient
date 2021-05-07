function DataItem(){
  return {
    title: 'untitle',
    type: 'linear-gradient',
    deg: 90,
    visible: true,
    position: {x: 0, xUnit: '%', y: 0, yUnit: '%'},
    size: {w: 100, wUnit: '%', h: 100, hUnit: '%'},
    colorList: [
      {color: 'rgba(255,255,255,1)', range: 0, rangeUnit: '%'},
      {color: 'rgba(255,255,255,0.1)', range: 100, rangeUnit: '%'}
    ]
  }
}

export default DataItem
