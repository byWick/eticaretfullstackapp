import React from 'react'
import {NavLink} from 'react-router-dom'
import './topbar.css'

export default function TopBar() {
  return (
    <div className='topbar-parent'>
        <ul className='topbar-nav'>
          <li><NavLink className='nav-item' to="/siparis-takibi">Sipariş Takibi</NavLink></li>
          <li><NavLink className='nav-item' to="/yardim">Yardım</NavLink></li>
          <li><NavLink className='nav-item' to="/iletisim">İletişim</NavLink></li>
        </ul> 
    </div>
  )
}
