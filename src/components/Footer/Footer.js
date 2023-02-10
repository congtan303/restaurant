import React from 'react'
import './Footer.css'
import imgLogo from '../../assets/logo.png'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-left'>
                <img src={imgLogo} />
                <div className='footer-description'>
                    Наш ресторан ждет вас, обслуживание и еда на самом высоком уровне,
                    потому что вы этого заслуживаете
                </div>
                <div className='working-hours'>
                    <div className='working-hours-title'>Время работы</div>
                    <div className='working-hours-in-week'>
                        Понедельниц - Пятница
                        8:00 утра до 9:00 вечера
                    </div>
                    <div className='working-hours-weekend'>
                        <div className='working-hours-weekend-title'>
                            Суббота
                        </div>
                        <div className='working-hours-weekend-hours'>
                            8:00 до 9:00 вечера
                        </div>

                    </div>
                    <div className='working-hours-weekend-closed'>
                        <div className='working-hours-weekend-closed-title'>
                            Воскресенье
                        </div>
                        <div className='working-hours-weekend-closed-description'>
                            Закрыто
                        </div>

                    </div>
                </div>

            </div>
            <div className='footer-right'>
                <div className='footer-instruction'>
                    <div className='footer-instruction-title'>Навигация</div>
                    <div className='footer-intruction-list'>
                        Меню <br/>
                        О нас<br/>
                        Контакты<br/>
                        Галерея<br/>
                    </div>
                </div>
                <div className='footer-dishes'>
                    <div className='footer-dishes-title'>Блюда</div>
                    <div className='footer-dishes-list'>
                        Рыба с овощами <br/>
                        Чили с тофу<br/>
                        Яичница с огурцом<br/>
                        Остальные блюда<br/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer   