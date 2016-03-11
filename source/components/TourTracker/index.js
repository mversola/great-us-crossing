import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.css'

export default class extends React.Component {
  static propTypes = {
    route: React.PropTypes.array.isRequired,
  }

  static defaultProps = {
    route: []
  }

  componentDidMount () {
    this._L = global.L
    this._L.mapbox.accessToken = 'pk.eyJ1IjoicGFya2VyYnJhZHMiLCJhIjoiY2lsYWVua2lhMDR4aXVna250aXc3eG54OCJ9.QjhkzoGgIOoLpV9k-ImrBw'
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
    this._L.tileLayer('https://api.mapbox.com/v4/parkerbrads.6bc7d29e/{z}/{x}/{y}@2x.png?access_token=' + this._L.mapbox.accessToken, {
      attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
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
      color: '#FFF'
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
    return <div className={ styles.base } />
  }
}
