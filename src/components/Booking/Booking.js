import React from 'react'
import './Booking.css'
const Booking = () => {
    return (
        <div className='booking-container'>
            <div className='booking-wrap'>
                <div className='booking-important'>
                    Отпразднуйте в одном из
                    самых лучших ресторанов.
                </div>
                <div className='booking-description'>
                    Только в этом месяце бизнес-ланч от 3000 тенге
                </div>
            </div>

            <div className='div-btn-booking'>
                <button className='btn-booking'>ЗАКАЗ СТОЛИКА</button>
            </div>

        </div>
    )
}

export default Booking