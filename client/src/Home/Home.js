import React,{useState} from 'react'
import Navigation from '../Navigation/Navigation'
import TopBar from '../TopBar/TopBar'
import {MenuContext} from '../Contexts/MenuContext'
import axios from 'axios'


export default function Home(props) {
  const [allMenus,setMenu] = useState(false)
  axios.post('/getmenu')
    .then(response => {
        setMenu(response.data)
    })
    .catch(error => {
      console.error(error)
    })
  return (
   <MenuContext.Provider value={allMenus}>
     <div>
        <TopBar/>
        <Navigation/>
        <i data-feather="circle"></i>
    </div>
   </MenuContext.Provider>
  )
}

