import React from 'react'
import styles from './styles.css'

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

    return (
      <div className={ styles[spacing] }>
        { children }
      </div>
    )
  }
}

export default Grid
