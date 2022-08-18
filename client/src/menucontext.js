
import React, { Component } from 'react'
import axios from 'axios'

const MenuContext = React.createContext()

export class MenuProvider extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuler:false
    }
axios.post('/getmenu')
.then((response) => {
    this.setState({
      menuler:response.data
    })
})
.catch(error => {
    console.error(error)
})
  }
  render() {
    return (
      <div>
        <MenuContext value={this.state}>
            {this.props.children}
        </MenuContext>
      </div>
    )
  }
}

const MenuConsumer = MenuContext.Consumer;

export default MenuConsumer;