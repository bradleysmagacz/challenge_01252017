import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>The Red Planet Rovers</h1>
    <Link to='/nasa/home' activeClassName='route--active'>
      Image Of The Day
    </Link>
    { '     |     ' }
    <Link to='/nasa/gallery' activeClassName='route--active'>
      Image Gallery
    </Link>
  </div>
)

export default Header
