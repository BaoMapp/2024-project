
import React, {useRef} from 'react'
import "./header.css"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png"
import userIcon from '../../assets/images/user-icon.png'
import { motion } from 'framer-motion'

import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux"
import useAuth from '../../custom-hooks/useAuth'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

const nav_links = [
  {
    path:"home",
    display: "Home",
  },
  {
    path:"shop",
    display: "Shop",
  },
  {
    path:"cart",
    display: "Cart",
  },
]


const Header = () => {

  const navigate = useNavigate()
  
  const profileActionRef = useRef(null)
  const {currentUser} = useAuth()
  const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileActions')
  
  const logout = () => {

    signOut(auth)
    .then(()=>{
      toast.success('Logged out');
      navigate('/home')
    }).catch(err=>{
      toast.error(err.message)
    })
  
    }
  


  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  return <header className="header">
    <Container>
      <Row>
        <div className="nav__wrapper">
          <div className="logo">
            <img 
            src={logo} 
            alt='logo'/>
            <div>
              <h1>Phone Plus</h1>
            </div>
          </div>

          <div className="navigation">
          <ul className='menu'>
                {
                  nav_links.map((item, index)=>(
                    <li className="nav_item" key={index}>
                  <NavLink to ={item.path} className={(navClass)=> navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                </li>
                  ))
                }
              </ul>
          </div>
          
          <div className="nav__icons">
          <span className='fav__icon'>
            <Link to="/likeproduct">
              <i class="ri-heart-3-line"></i></Link>
              <span className="badge"></span> 
              </span>
              <span className='cart__icon'>
                <Link to="/cart">
              <i class="ri-shopping-cart-line"/></Link>
              <span className={totalQuantity}></span>
              </span>
              <div className='profile'>
              <motion.img whileTap={{ scale: 1.2 }} 
                src={currentUser?currentUser.photaURL : userIcon} 
                alt='' 
                onClick={toggleProfileActions}
              />
              <div className="profile__actions"
               ref={profileActionRef} onClick={toggleProfileActions}>
                {
                currentUser ? <span onClick={logout}>Logout</span> : 
                  <div className='d-flex align-items-center justify-content-center flex-column'> 
                    <Link to ='/signup' >Signup</Link>
                    <Link to ='/login' >Login</Link>
                    <Link to ='/dashboard' >Dashboard</Link>
                  </div>
                } 

              </div>
              </div>
              </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header
