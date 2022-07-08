import React, { Component } from 'react'
import searchIcon from '../../assets/img/searchIcon.svg'
export default class Search extends Component {
    
  render() {
    return (
      <div className='searchField' >
        <input placeholder='Search for GIFs and Stickers' type={'text'} />
        <span>
            <img src={searchIcon} alt="search_icon" />
        </span>
      </div>
    )
  }
}
