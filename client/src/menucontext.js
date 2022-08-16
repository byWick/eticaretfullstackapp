
import React, { Component } from 'react'

const MenuContext = React.createContext()

export default class context extends Component {
  render() {
    return (
      <div>
        <GlobalContext>
            {this.props.children}
        </GlobalContext>
      </div>
    )
  }
}
