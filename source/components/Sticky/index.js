import React from 'react'
import ReactDOM from 'react-dom'
import createStickyfill from 'stickyfill'

export default class extends React.Component {
  componentWillMount () {
    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
      this._Stickyfill = createStickyfill(document, window)
    }
  }

  componentDidMount () {
    this._Stickyfill.add(ReactDOM.findDOMNode(this))
  }

  componentWillUnmount () {
    this._Stickyfill.remove(ReactDOM.findDOMNode(this))
  }

  render () {
    return (this.props.children)
  }
}
