import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='footer'>
            <div className='footer-content'>
                <p>&copy; {currentYear} ExpenseTracker. All rights reserved.</p>
                <p>Made with Ibrahim Ilshamy</p>
            </div>
        </footer>
    )
}

export default Footer
