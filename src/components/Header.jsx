import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          💰 ExpenseTracker
        </Link>
        <nav className='nav-menu'>
          <Link to='/' className='nav-link'>
            Dashboard
          </Link>
          <Link to='/form' className='nav-link btn-add'>
            + Add Expense
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
