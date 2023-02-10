import React from 'react'
import './Dishes.css'
import imgFoods from '../../assets/img-foods.png'
import imgSpringRoll from '../../assets/img-spring-roll.png'
import imgFish from '../../assets/fish-card.png'
import imgTofu from '../../assets/img-tofu.png'
import imgEggRice from '../../assets/img-egg-rice.png'
const Dishes = () => {
    return (
        <div className='dishes-container'>
            <div className='dishes-title'>Блюда</div>
            <div className='dishes-content'>
                <img src={imgFoods} className='img-dishes' />
                <div className='div-img-dishes'>
                    <img src={imgSpringRoll} className='dishes-spring-roll'/>
                    <img src={imgFish} className='dishes-fish' />
                    <img src={imgTofu} className='dishes-tofu'/>
                    <img src={imgEggRice} className='dishes-egg-rice'/>
                </div>
            </div>
        </div>
    )
}

export default Dishes