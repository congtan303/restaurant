import React from 'react'
import './Banner.css'
import imgBeefSteak from '../../assets/beef-steak-banner.png'
const Banner = () => {
    return (
        <div className='div-banner'>
            {/* <img src={imgBanner} className='img-banner' /> */}
            <div className='banner-introduction'>
                <div className='introduction-first'>Добро пожаловать в </div>
                <div className='introduction-second'>Наш ресторан</div>
                <div className='introduction-description'>
                    <span className='dash'></span>
                    ДОМ ЛУЧШЕЙ ЕДЫ
                    <span className='dash'></span>
                </div>
                <div className='div-btn-menu'>

                    <button className='btn-menu'>
                        МЕНЮ
                    </button>
                </div>
            </div>
            <div className='img-horse' > </div>
            <div className='beef-steak'>
                <img src={imgBeefSteak} />
            </div>

        </div >
    )
}

export default Banner