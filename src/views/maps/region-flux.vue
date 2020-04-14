<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import { sampleFill, particles, source, arrows } from '@astrosat/windgl'
import indoor from '@/assets/data/region/440100.json'
import transColor from '@/assets/data/region/trans-color.json'

export default {
  name: 'RegionFlux',
  data() {
    return {
      ani: null,
      speed: 1000,
      progress: Math.floor(new Date().getHours() / 3),
      play: false,
      legend: {
        name: 'PM2.5输送速率',
        unit: '（kg/s）',
        color: [
          { val: -100, color: '#37C5C2' },
          { val: -50, color: '#26D17C' },
          { val: 0, color: '#F2E100' },
          { val: 50, color: '#F77722' },
          { val: 100, color: '#F91932' }
        ]
      },
      ticks: {
        days: [],
        hours: ['03', '06', '09', '12', '15', '18', '21']
      }
    }
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlbnl5ODIyIiwiYSI6ImNrN29hemRpaTA3amUzZnA2cndmaGV3ajcifQ.TjROyHMx1F96IHxrXj5q4A'
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [113.280637, 23.125178],
      zoom: 8,
      pitch: 10,
      bearing: 10,
      antialias: true
    })
    map.on('load', () => {
      map.addSource('floorplan1', {
        type: 'geojson',
        data: transColor
      })
      map.addLayer({
        id: 'room-extrusion1',
        type: 'fill-extrusion',
        source: 'floorplan1',
        paint: {
          'fill-extrusion-color': ['get', 'color'],
          'fill-extrusion-height': ['get', 'height'],
          'fill-extrusion-base': ['get', 'base_height'],
          'fill-extrusion-opacity': 1
        }
      })

      map.addSource('floorplan', {
        type: 'geojson',
        data: indoor
      })
      map.addLayer({
        id: 'xxx-extrusion',
        type: 'fill-extrusion',
        source: 'floorplan',
        paint: {
          'fill-extrusion-color': ['get', 'color'],
          'fill-extrusion-height': ['get', 'height'],
          'fill-extrusion-base': ['get', 'base_height'],
          'fill-extrusion-opacity': 0.1
        }
      })

      // const layer = particles({
      //   source: source('static/data/wind/tile.json'),
      //   id: 'particles',
      //   'particle-speed': ['interpolate', ['linear'], ['zoom'], 0, 0.5, 10, 0.8],
      //   'particle-color': 'rgba(73, 139, 170, 1)'
      // })
      // map.addLayer(layer, 'waterway-label')
    })
  }
}
</script>
<style scoped>
#map {
  height: 100%;
  width: 100%;
}
.selectInfo {
  position: absolute;
  top: 10px;
  right: 10px;
}
.time-progress {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding-left: 50px;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
}
.play-btn {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 50%;
  background: #fff;
  text-align: center;
  line-height: 40px;
  box-sizing: border-box;
  cursor: pointer;
}
.play-btn > .ivu-icon {
  vertical-align: top;
}
.days {
  width: 100%;
  display: flex;
  list-style: none;
  user-select: none;
}
.days > li {
  flex: 1;
  height: 50px;
  text-align: center;
  color: #fff;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
}
.hours {
  width: 100%;
  display: flex;
  list-style: none;
}
.hours > li {
  position: relative;
  flex: 1;
  font-size: 12px;
  line-height: 12px;
  cursor: pointer;
}
.hours > li::before {
  content: '';
  display: inline-block;
  vertical-align: top;
  height: 10px;
  width: 100%;
  margin-bottom: 5px;
  background: #fff;
  border-right: 1px solid #ddd;
}
.hours > li:last-child::before {
  border: none;
}
.hours > li.active::before {
  background: #08e400;
}
.legend {
  position: absolute;
  right: 10px;
  bottom: 60px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #2eb2d1 !important;
  width: 400px;
  height: 85px;
  padding: 8px;
  border-radius: 8px;
  box-sizing: border-box;
}
.legend .name {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.legend .color {
  height: 10px;
  width: 100%;
  margin-top: 10px;
}
.legend ul {
  display: flex;
  width: 100%;
  list-style: none;
}
.legend ul > li {
  flex: 1;
  margin-top: 7px;
  color: #fff;
  line-height: 14px;
  font-size: 12px;
  text-align: center;
}
</style>
