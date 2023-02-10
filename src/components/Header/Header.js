import React, { useState } from 'react'
import './Header.css'
import logoRestaurant from '../../assets/logo.png'
import iconCart from '../../assets/cart.png'
import iconPhone from '../../assets/phone-icon.png'
const Header = () => {
    const [isMobile, setIsMobile] = useState(false)
    
    return (
     
            <header className='header-restaurant'>
                <div className='header-logo-restaurant'>
                    <img src={logoRestaurant} />
                </div>

                <div className={isMobile ? "navbar-wrap-mobile active" : 'navbar-wrap'}>
                    <nav>
                        <ul className='nav-links'>
                            <li>МЕНЮ</li>
                            <li>О НАС</li>
                            <li>ГАЛЕРЕЯ</li>
                            <li>КОНТАКТЫ</li>
                        </ul>

                    </nav>
                    <div className='header-contact-right'>
                        <div className='header-contact-restaurant'>
                            <img src={iconCart} className='header-icon-cart' />

                            <div className='border-contact' ></div>
                            <div className='div-contact-wrap'>
                                <div className='icon-phone-number'>
                                    <img className='icon-phone' src={iconPhone} />
                                    <div className='phone-number'>+7(708)555-55-55</div>
                                </div>
                                <div className='address-contact'>
                                    Свяжитесь с нами для
                                    бронирования
                                </div>
                            </div>



                        </div>
                        <div className='btn-preventive'>
                            ЗАКАЗ СТОЛИКА
                        </div>
                    </div>
                </div>
                <div id='mobile' onClick={() => setIsMobile(!isMobile)}>

                    <i className={isMobile ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>

            </header>

            
       
    )
}

export default Header