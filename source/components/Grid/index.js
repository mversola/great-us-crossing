import React from 'react'
import styles from './styles.css'
import { clearfix } from '../../css-helpers.css'

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
      <div className={ `${ clearfix } ${ styles[spacing] }` }>
        { children }
      </div>
    )
  }
}

export default Grid
