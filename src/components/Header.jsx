import React, { useEffect } from 'react';
import logo from '../image/logo.png'


const Header = () => {

    useEffect(() => {
        var dateInput = document.getElementById('dateInput');
        var date = new Date();
        var yr = date.getFullYear();
        var month = date.getMonth() + 1;

        if(month < 10) {
           var mth = '0' + month
        }

        var day = date.getDate()

        if(day < 10) {
            var dy = '0' + day
        }

        dateInput.value = yr + '-' + mth + '-' + dy;

      }, []);

  return (
    <header>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <nav>
            <ul>
                <li>Konvertor</li>
                <li>Kalkulyator</li>
                <li>Mezenneler</li>
                <li>Qrafikler</li>
                <li>Seyahet Konvertoru</li>
            </ul>
        </nav>
        
        <div className='date-time'>
            <input className='date-input' type='date' id='dateInput'/>
        </div>
    </header>
  )
}

export default Header
