import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuContext } from '../Contexts/MenuContext'
import './navigation.css'
import FeatherIcon from 'feather-icons-react'
import MegaMenu from '../MegeMenu/MegaMenu'
import axios from 'axios'

export default function Navigation(props) {
  const menuler = useContext(MenuContext)
  const [relatedActive, setRelated] = useState(false)
  const [userHover,setUserHover] = useState(false)
  const [heartHover,setHeartHover] = useState(false)
  const [cartHover,setCartHover] = useState(false) 
  const [megaState,setMegaState] = useState(false)
  const [currentMenuInfo,setCurrentMenu] = useState(false)
  const setCur = (e) => {
    let secilenMenuId = e.target.getAttribute('data-id')
    setCurrentMenu(secilenMenuId)
  }


  return (
    <div>
      <div className='navigation-div-1'>
        <div>
          <h1 className='logo-text'>LOGO</h1>
        </div>
        <div>
          <div className='search-area'>
            <input placeholder='Kategori,marka veya ürün ara' onFocus={() => setRelated(true)} onBlur={() => { setRelated(false) }} />
            <button className='search-button'>
            <FeatherIcon className="arama-ikonu" icon="search" stroke="white" size="24" strokeWidth="1" />
            </button>
            {
              relatedActive ? <div className='related-results'>

              </div> : null
            }
          </div>
        </div>
        <div>
          <ul className='user-nav'>
            <li className='usernav-item' onMouseOver={() => {setUserHover(true)}} onMouseLeave={() => setUserHover(false)}>
              <div>

                {
                  userHover ? <FeatherIcon className="nav-icon"  icon="user" size='24' strokeWidth="0"  fill="coral" /> :<FeatherIcon className="nav-icon"  icon="user" size='24' strokeWidth="1" />
                }
               
                </div>
              <div className='usernav-text'>Giriş Yap/Kayıt Ol</div>
            </li>
            <li className='usernav-item' onMouseOver={() => {setHeartHover(true)}} onMouseLeave={() => setHeartHover(false)}>
              <NavLink className='usernav-link' to='/favorilerim'>
                <div> 
                   
                {
                  heartHover ? <FeatherIcon className="nav-icon"  icon="heart" size='24' strokeWidth="0"  fill="coral" /> :<FeatherIcon className="nav-icon"  icon="heart" size='24' strokeWidth="1" />
                }
                </div>
                <div className='usernav-text'>Favorilerim</div>
              </NavLink>
            </li>

            <li className='usernav-item' onMouseOver={() => {setCartHover(true)}} onMouseLeave={() => setCartHover(false)}>
              <NavLink className='usernav-link' to='/favorilerim'>
                <div> 
                {
                  cartHover ? <FeatherIcon className="nav-icon"  icon="shopping-cart" size='24' strokeWidth="0"  fill="coral" /> :<FeatherIcon className="nav-icon"  icon="shopping-cart" size='24' strokeWidth="1" />
                }
                </div>
                <div className='usernav-text'>Sepetim</div>
              </NavLink>
              <span className='cart-badge'>0</span>
            </li>

          </ul>
        </div>
      </div>
      <div className='navigation-div-2' onMouseLeave = {() => setMegaState(false)}>
        <ul>
          {
            menuler ? menuler.map((menu, index) => {
              if(menu.seviye === 0){
                return (
                  <li key={index} ><NavLink data-id={menu.id} onMouseOver={setCur}  className="category-link" to={menu.sef_link}>{menu.baslik}</NavLink></li>
                )
              }
            }) : null
          }
        </ul>
        <div className='parent-mega'>
        {
                menuler.map(menu => {
                  return(
                    <div className='col-parent'>
                <h5><NavLink to='/giyim' className="mid-menu-title">Giyim</NavLink></h5>
                <ul className='mid-menu-list'>
                  <li><NavLink to='/kadin-elbise' className="sub-menu-title">Elbise</NavLink></li>
                  <li><NavLink to='/kadin-elbise' className="sub-menu-title">Elbise</NavLink></li>
                  <li><NavLink to='/kadin-elbise' className="sub-menu-title">Elbise</NavLink></li>
                  <li><NavLink to='/kadin-elbise' className="sub-menu-title">Elbise</NavLink></li>
                  <li><NavLink to='/kadin-elbise' className="sub-menu-title">Elbise</NavLink></li>
                  <li><NavLink to='/kadin-elbise' className="sub-menu-title">Elbise</NavLink></li>
                  <li><NavLink to='/kadin-elbise' className="sub-menu-title">Elbise</NavLink></li>
                  <li><NavLink to='/kadin-elbise' className="sub-menu-title">Elbise</NavLink></li>
                </ul>
              </div>
                  )
                })
              }
        </div>  
      </div>
     
    </div>
  )
}
