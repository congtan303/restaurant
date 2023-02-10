import React from 'react'
import './Cart.css'
import iconMenu from '../../assets/icon-menu.png'
const Cart = () => {
  return (
    <div className='cart-container'>
      <div className='cart-item-wrap'>
        <div className='cart-item'>
          <img src={iconMenu} className='icon-menu' />
          <div className='cart-title'>
            Магическая <span className='cart-title-important'>Атмосфера</span>
          </div>
          <div className='cart-description'>
            В нашем заведении царит магическая атмосфера
            наполненная вкусными ароматами
          </div>
        </div>
        <div className='cart-item'>
          <img src={iconMenu} className='icon-menu' />
          <div className='cart-title'>
            Лучшее качество <span className='cart-title-important'>Еды</span>
          </div>
          <div className='cart-description description-2'>
            Качество нашей
            Еды - отменное!

          </div>
        </div>
        <div className='cart-item'>
          <img src={iconMenu} className='icon-menu' />
          <div className='cart-title'>
            Незабываемый  <span className='cart-title-important'>Вкус</span>
          </div>
          <div className='cart-description cart-description-3'>
            Наши повара готовят удивительно вкусные
            блюда
          </div>
        </div>
      </div>

    </div>

  )
}

export default Cart