import React,{useState,useEffect} from 'react'
import axios from 'axios'


export default function Navigation(props) {


  return (
    <div>
        {
            menuler.map(menu => {
                return(
                    <h2>{menu.baslik}</h2>
                )
            })
        }
    </div>
  )
}
