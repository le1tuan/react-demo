const theme = {
  area: {
    padding: 50,
    height: 300,
    width: 450,
    style: {
      data: { fill: '#06c', fillOpacity: 0.3, strokeWidth: 2 },
      labels: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 10, stroke: 'transparent', textAnchor: 'middle'
      }
    },
    colorScale: ['#06c', '#4cb140', '#009596', '#f4c145', '#ec7a08', '#8bc1f7', '#23511e', '#a2d9d9', '#f9e0a2', '#8f4700', '#002f5d', '#bde2b9', '#003737', '#c58c00', '#f4b678', '#519de9', '#38812f', '#73c5c5', '#f6d173', '#c46100', '#004b95', '#7cc674', '#005f60', '#f0ab00', '#ef9234']
  },
  axis: {
    padding: 50,
    height: 300,
    width: 450,
    style: {
      axis: {
        fill: 'transparent', strokeWidth: 1, stroke: '#d2d2d2', strokeLinecap: 'round', strokeLinejoin: 'round'
      },
      axisLabel: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 40, stroke: 'transparent', textAnchor: 'middle'
      },
      grid: {
        fill: 'none', stroke: 'none', pointerEvents: 'painted', strokeLinecap: 'round', strokeLinejoin: 'round'
      },
      ticks: {
        fill: 'transparent', size: 5, stroke: '#d2d2d2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1
      },
      tickLabels: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 10, stroke: 'transparent', fill: '#4f5255'
      }
    },
    colorScale: ['#06c', '#4cb140', '#009596', '#f4c145', '#ec7a08', '#8bc1f7', '#23511e', '#a2d9d9', '#f9e0a2', '#8f4700', '#002f5d', '#bde2b9', '#003737', '#c58c00', '#f4b678', '#519de9', '#38812f', '#73c5c5', '#f6d173', '#c46100', '#004b95', '#7cc674', '#005f60', '#f0ab00', '#ef9234']
  },
  bar: {
    padding: 50,
    height: 300,
    width: 450,
    barWidth: 10,
    style: {
      data: {
        fill: '#06c', padding: 8, stroke: 'none', strokeWidth: 0
      },
      labels: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 10, stroke: 'transparent'
      }
    },
    colorScale: ['#06c', '#4cb140', '#009596', '#f4c145', '#ec7a08', '#8bc1f7', '#23511e', '#a2d9d9', '#f9e0a2', '#8f4700', '#002f5d', '#bde2b9', '#003737', '#c58c00', '#f4b678', '#519de9', '#38812f', '#73c5c5', '#f6d173', '#c46100', '#004b95', '#7cc674', '#005f60', '#f0ab00', '#ef9234']
  },
  boxplot: {
    padding: 50,
    height: 300,
    width: 450,
    style: {
      max: { padding: 8, stroke: '#151515', strokeWidth: 1 },
      maxLabels: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 10, stroke: 'transparent'
      },
      median: { padding: 8, stroke: '#151515', strokeWidth: 1 },
      medianLabels: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 10, stroke: 'transparent'
      },
      min: { padding: 8, stroke: '#151515', strokeWidth: 1 },
      minLabels: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 10, stroke: 'transparent'
      },
      q1: { fill: '#8a8d90', padding: 8 },
      q1Labels: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 10, stroke: 'transparent'
      },
      q3: { fill: '#8a8d90', padding: 8 },
      q3Labels: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 10, stroke: 'transparent'
      }
    },
    boxWidth: 20,
    colorScale: ['#06c', '#4cb140', '#009596', '#f4c145', '#ec7a08', '#8bc1f7', '#23511e', '#a2d9d9', '#f9e0a2', '#8f4700', '#002f5d', '#bde2b9', '#003737', '#c58c00', '#f4b678', '#519de9', '#38812f', '#73c5c5', '#f6d173', '#c46100', '#004b95', '#7cc674', '#005f60', '#f0ab00', '#ef9234']
  },
  candlestick: {
    padding: 50,
    height: 300,
    width: 450,
    candleColors: { positive: '#fff', negative: '#151515' },
    style: {
      data: { stroke: '#151515', strokeWidth: 1 },
      labels: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 10, stroke: 'transparent', textAnchor: 'middle'
      }
    },
    colorScale: ['#06c', '#4cb140', '#009596', '#f4c145', '#ec7a08', '#8bc1f7', '#23511e', '#a2d9d9', '#f9e0a2', '#8f4700', '#002f5d', '#bde2b9', '#003737', '#c58c00', '#f4b678', '#519de9', '#38812f', '#73c5c5', '#f6d173', '#c46100', '#004b95', '#7cc674', '#005f60', '#f0ab00', '#ef9234']
  },
  chart: {
    padding: 50, height: 300, width: 450, colorScale: ['#06c', '#4cb140', '#009596', '#f4c145', '#ec7a08', '#8bc1f7', '#23511e', '#a2d9d9', '#f9e0a2', '#8f4700', '#002f5d', '#bde2b9', '#003737', '#c58c00', '#f4b678', '#519de9', '#38812f', '#73c5c5', '#f6d173', '#c46100', '#004b95', '#7cc674', '#005f60', '#f0ab00', '#ef9234']
  },
  errorbar: {
    padding: 50,
    height: 300,
    width: 450,
    borderWidth: 8,
    style: {
      data: {
        fill: 'transparent', opacity: 1, stroke: '#151515', strokeWidth: 2
      },
      labels: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 10, stroke: 'transparent', textAnchor: 'middle'
      }
    },
    colorScale: ['#06c', '#4cb140', '#009596', '#f4c145', '#ec7a08', '#8bc1f7', '#23511e', '#a2d9d9', '#f9e0a2', '#8f4700', '#002f5d', '#bde2b9', '#003737', '#c58c00', '#f4b678', '#519de9', '#38812f', '#73c5c5', '#f6d173', '#c46100', '#004b95', '#7cc674', '#005f60', '#f0ab00', '#ef9234']
  },
  group: {
    padding: 50, height: 300, width: 450, colorScale: ['#06c', '#4cb140', '#009596', '#f4c145', '#ec7a08', '#8bc1f7', '#23511e', '#a2d9d9', '#f9e0a2', '#8f4700', '#002f5d', '#bde2b9', '#003737', '#c58c00', '#f4b678', '#519de9', '#38812f', '#73c5c5', '#f6d173', '#c46100', '#004b95', '#7cc674', '#005f60', '#f0ab00', '#ef9234']
  },
  legend: {
    gutter: 20,
    orientation: 'horizontal',
    titleOrientation: 'top',
    style: {
      data: { type: 'square' },
      labels: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 10, stroke: 'transparent'
      },
      title: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 2, stroke: 'transparent'
      }
    },
    colorScale: ['#06c', '#4cb140', '#009596', '#f4c145', '#ec7a08', '#8bc1f7', '#23511e', '#a2d9d9', '#f9e0a2', '#8f4700', '#002f5d', '#bde2b9', '#003737', '#c58c00', '#f4b678', '#519de9', '#38812f', '#73c5c5', '#f6d173', '#c46100', '#004b95', '#7cc674', '#005f60', '#f0ab00', '#ef9234']
  },
  line: {
    padding: 50,
    height: 300,
    width: 450,
    style: {
      data: {
        fill: 'transparent', opacity: 1, stroke: '#06c', strokeWidth: 2
      },
      labels: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 10, stroke: 'transparent', textAnchor: 'middle'
      }
    },
    colorScale: ['#06c', '#4cb140', '#009596', '#f4c145', '#ec7a08', '#8bc1f7', '#23511e', '#a2d9d9', '#f9e0a2', '#8f4700', '#002f5d', '#bde2b9', '#003737', '#c58c00', '#f4b678', '#519de9', '#38812f', '#73c5c5', '#f6d173', '#c46100', '#004b95', '#7cc674', '#005f60', '#f0ab00', '#ef9234']
  },
  pie: {
    padding: 20,
    style: {
      data: { padding: 8, stroke: 'transparent', strokeWidth: 1 },
      labels: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 8, stroke: 'transparent'
      }
    },
    height: 230,
    width: 230,
    colorScale: ['#06c', '#4cb140', '#009596', '#f4c145', '#ec7a08', '#8bc1f7', '#23511e', '#a2d9d9', '#f9e0a2', '#8f4700', '#002f5d', '#bde2b9', '#003737', '#c58c00', '#f4b678', '#519de9', '#38812f', '#73c5c5', '#f6d173', '#c46100', '#004b95', '#7cc674', '#005f60', '#f0ab00', '#ef9234'],
    padAngle: 1
  },
  scatter: {
    padding: 50,
    height: 300,
    width: 450,
    style: {
      data: {
        fill: '#151515', opacity: 1, stroke: 'transparent', strokeWidth: 0
      },
      labels: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 10, stroke: 'transparent', textAnchor: 'middle'
      }
    },
    colorScale: ['#06c', '#4cb140', '#009596', '#f4c145', '#ec7a08', '#8bc1f7', '#23511e', '#a2d9d9', '#f9e0a2', '#8f4700', '#002f5d', '#bde2b9', '#003737', '#c58c00', '#f4b678', '#519de9', '#38812f', '#73c5c5', '#f6d173', '#c46100', '#004b95', '#7cc674', '#005f60', '#f0ab00', '#ef9234']
  },
  stack: {
    padding: 50, height: 300, width: 450, style: { data: { strokeWidth: 1 } }, colorScale: ['#06c', '#4cb140', '#009596', '#f4c145', '#ec7a08', '#8bc1f7', '#23511e', '#a2d9d9', '#f9e0a2', '#8f4700', '#002f5d', '#bde2b9', '#003737', '#c58c00', '#f4b678', '#519de9', '#38812f', '#73c5c5', '#f6d173', '#c46100', '#004b95', '#7cc674', '#005f60', '#f0ab00', '#ef9234']
  },
  tooltip: {
    cornerRadius: 0,
    flyoutPadding: 8,
    flyoutStyle: {
      cornerRadius: 0, fill: '#151515', pointerEvents: 'none', stroke: '#151515', strokeWidth: 0
    },
    pointerLength: 10,
    pointerWidth: 20,
    style: { fill: '#f0f0f0', pointerEvents: 'none' }
  },
  voronoi: {
    padding: 50,
    height: 300,
    width: 450,
    style: {
      data: { fill: 'transparent', stroke: 'transparent', strokeWidth: 0 },
      labels: {
        fontFamily: '"RedHatText","Overpass",overpass,helvetica,arial,sans-serif', fontSize: 14, letterSpacing: 'normal', padding: 8, stroke: 'transparent', textAnchor: 'middle', fill: '#f0f0f0', pointerEvents: 'none'
      },
      flyout: {
        fill: '#151515', pointerEvents: 'none', stroke: '#151515', strokeWidth: 1
      }
    },
    colorScale: ['#06c', '#4cb140', '#009596', '#f4c145', '#ec7a08', '#8bc1f7', '#23511e', '#a2d9d9', '#f9e0a2', '#8f4700', '#002f5d', '#bde2b9', '#003737', '#c58c00', '#f4b678', '#519de9', '#38812f', '#73c5c5', '#f6d173', '#c46100', '#004b95', '#7cc674', '#005f60', '#f0ab00', '#ef9234']
  }
};

export default theme;
