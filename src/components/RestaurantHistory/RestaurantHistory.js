import React from 'react'
import './RestaurantHistory.css'
import imgDetailFood from '../../assets/img-detail-food.png'
const RestaurantHistory = () => {
   
    return (

        <div className='history-container'>
            <div>
                <div className='history-title'>
                    Наша <span className='history-title-important'>История</span>
                </div>
                <div className='history-wrap'>
                    <div className='history-description'>
                        Как и у любого другого самобытного места,
                        у нас есть своя, особая история.
                        Идея ресторана пришла основателям неожиданно.
                        Во время прогулки по лесу создатель нашего ресторана застрял в сотнях километров
                        от ближайшего населенного пункта.
                        Вдали от цивилизации и связи им пришлось навремя обустровать себе нехитрый быт,
                        добывать и готовить себе еду.
                    </div>

                </div>

                <div className='food-and-beverage'>
                    <div className='beverages'>
                        <div className='beverages-quantity'>93</div>
                        <div className='beverages-name'>Напитки</div>
                    </div>
                    <div className='foods'>
                        <div className='foods-quantity'>206</div>
                        <div className='foods-name'>Еда</div>
                    </div>
                    <div className='snacks'>
                        <div className='snacks-quantity'>71</div>
                        <div className='snacks-name'>Закуски</div>
                    </div>
                </div>
            </div>

            <div className="div-img-detail-food">

                <img src={imgDetailFood} className="img-detail-food" />
            </div>

        </div>
    )
}

export default RestaurantHistory