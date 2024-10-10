import { useState } from 'react'
import './menu.css'

function Menu() {
    return(
        <>
        <div>
        <nav className='menu'>
            <img src="https://slcm.manipal.edu/images/logo.png" alt="Manipal logo" />
            <h4 className='titles'>admissions</h4>
            <h4 className='titles'>finance</h4>
            <h4 className='titles'>career</h4>
        </nav>
        </div>
        <div>
            <hr color='#CF4E33' size = '4'></hr>
        </div>
        <div>
            <nav className='Homebar'>
                
                <h5 className='hometitle'>My home page</h5>
            </nav>
        </div>
        </>
    )
    
}
export default Menu