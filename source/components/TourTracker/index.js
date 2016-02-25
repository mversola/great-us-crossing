import React from 'react'
import ReactDOM from 'react-dom'

export default class extends React.Component {
  static propTypes = {
    route: React.PropTypes.array.isRequired,
  }

  static defaultProps = {
    route: []
  }

  componentDidMount () {
    this._L = require('leaflet')
    this._map = this._L.map(ReactDOM.findDOMNode(this), { zoomControl: false })

    this._map.dragging.disable()
    this._map.touchZoom.disable()
    this._map.doubleClickZoom.disable()
    this._map.scrollWheelZoom.disable()
    this._map.keyboard.disable()

    if (this._map.tap) this._map.tap.disable()

    const routePoints = this.props.route.map(
      (routeDatum) => routeDatum.point
    )
    this._map.fitBounds(routePoints, {
      padding: [50, 50]
    })
    this._L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy <a href="http://cartodb.com/attributions">CartoDB</a>'
    }).addTo(this._map)
    this.renderRoutes()
  }

  shouldComponentUpdate () {
    return false
  }

  renderRoutes () {
    const { route } = this.props
    const routePoints = route.map(
      (routeDatum) => routeDatum.point
    )
    this.renderRoute(routePoints, {
      color: '#f3391f'
    })
  }

  renderRoute (points, style) {
    this._L.polyline(points, {
      ...style,
      opacity: 1,
      weight: 5
    }).addTo(this._map)
  }

  render () {
    return <div style={{ height: '100%' }} />
  }
}
