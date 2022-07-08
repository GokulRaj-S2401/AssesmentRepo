import React, { Component } from 'react'
import logo from '../../assets/img/logo.svg'
import '../headerStyle.css'
import Search from './Search'
export default class Header extends Component {
  render() {
    return (
      <header>
        <div className='brandName' >
            <img src={logo} alt="brandLogo" />
        </div>
        <div className='searchBlock' >
            <Search />
        </div>
      </header>
    )
  }
}
