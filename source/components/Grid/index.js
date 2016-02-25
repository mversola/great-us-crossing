import React from 'react'
import styles from './styles.css'
import cssHelpers from '../../css-helpers.css'

class Grid extends React.Component {
  static childContextTypes = {
    spacing: React.PropTypes.string
  }

  static defaultProps = {
    spacing: 'default'
  }

  getChildContext() {
    return {
      spacing: this.props.spacing
    }
  }

  render () {
    const { spacing, children } = this.props
    const classNames = [
      styles[spacing],
      cssHelpers.clearfix
    ].join(' ')

    return (
      <div className={ classNames }>
        { children }
      </div>
    )
  }
}

export default Grid
