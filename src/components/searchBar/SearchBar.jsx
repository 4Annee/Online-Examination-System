import React from 'react'
import './SearchBar.css'
import SEARCH from '../../assets/search.png'

const SearchBar = () => {
  return (
    <div className="search-box">
        <input type="text" name="search" placeholder="Search" />
        <img src={SEARCH} alt="search" />
    </div>
  )
}

export default SearchBar