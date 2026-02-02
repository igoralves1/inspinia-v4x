import { getColor } from '@/helpers/color';
export const getWorldMapOptions = () => ({
  map: 'world',
  zoomOnScroll: false,
  zoomButtons: true,
  markersSelectable: true,
  markers: [{
    name: 'Greenland',
    coords: [72, -42]
  }, {
    name: 'Canada',
    coords: [56.1304, -106.3468]
  }, {
    name: 'Brazil',
    coords: [-14.235, -51.9253]
  }, {
    name: 'Egypt',
    coords: [26.8206, 30.8025]
  }, {
    name: 'Russia',
    coords: [61, 105]
  }, {
    name: 'China',
    coords: [35.8617, 104.1954]
  }, {
    name: 'United States',
    coords: [37.0902, -95.7129]
  }, {
    name: 'Norway',
    coords: [60.472024, 8.468946]
  }, {
    name: 'Ukraine',
    coords: [48.379433, 31.16558]
  }],
  markerStyle: {
    initial: {
      fill: getColor('primary')
    },
    selected: {
      fill: getColor('primary')
    }
  },
  regionStyle: {
    initial: {
      stroke: '#aab9d14d',
      strokeWidth: 0.25,
      fill: '#aab9d14d',
      fillOpacity: 1
    }
  },
  labels: {
    markers: {
      render: marker => marker.name
    }
  }
});
export const getWorldMarkerLineOptions = () => ({
  map: 'world_merc',
  zoomOnScroll: false,
  zoomButtons: false,
  markers: [{
    name: 'Greenland',
    coords: [72, -42]
  }, {
    name: 'Canada',
    coords: [56.1304, -106.3468]
  }, {
    name: 'Brazil',
    coords: [-14.235, -51.9253]
  }, {
    name: 'Egypt',
    coords: [26.8206, 30.8025]
  }, {
    name: 'Russia',
    coords: [61, 105]
  }, {
    name: 'China',
    coords: [35.8617, 104.1954]
  }, {
    name: 'United States',
    coords: [37.0902, -95.7129]
  }, {
    name: 'Norway',
    coords: [60.472024, 8.468946]
  }, {
    name: 'Ukraine',
    coords: [48.379433, 31.16558]
  }],
  lines: [{
    from: 'Canada',
    to: 'Egypt'
  }, {
    from: 'Russia',
    to: 'Egypt'
  }, {
    from: 'Greenland',
    to: 'Egypt'
  }, {
    from: 'Brazil',
    to: 'Egypt'
  }, {
    from: 'United States',
    to: 'Egypt'
  }, {
    from: 'China',
    to: 'Egypt'
  }, {
    from: 'Norway',
    to: 'Egypt'
  }, {
    from: 'Ukraine',
    to: 'Egypt'
  }],
  regionStyle: {
    initial: {
      stroke: '#aab9d14d',
      strokeWidth: 0.25,
      fill: '#aab9d14d',
      fillOpacity: 1
    }
  },
  markerStyle: {
    initial: {
      fill: getColor('secondary')
    },
    selected: {
      fill: getColor('secondary')
    }
  },
  lineStyle: {
    animation: true,
    strokeDasharray: '6 3 6'
  }
});
export const getUSAMapOptions = () => ({
  map: 'us_aea_en',
  regionStyle: {
    initial: {
      fill: getColor('primary')
    }
  }
});
export const getIndiaMapOptions = () => ({
  map: 'in_mill',
  backgroundColor: 'transparent',
  regionStyle: {
    initial: {
      fill: '#aab9d14d'
    },
    selected: {
      fill: getColor('secondary')
    }
  },
  selectedRegions: ['IN-GJ']
});
export const getCanadaMapOptions = () => ({
  map: 'canada',
  zoomOnScroll: false,
  regionStyle: {
    initial: {
      fill: '#aab9d14d'
    }
  }
});
export const getRussiaMapOptions = () => ({
  map: 'russia',
  zoomOnScroll: false,
  regionStyle: {
    initial: {
      fill: getColor('primary')
    }
  }
});
export const getIraqMapOptions = () => ({
  map: 'iraq',
  zoomOnScroll: false,
  regionStyle: {
    initial: {
      fill: '#aab9d14d'
    }
  }
});
export const getSpainMapOptions = () => ({
  map: 'spain',
  zoomOnScroll: false,
  regionStyle: {
    initial: {
      fill: getColor('primary')
    }
  }
});