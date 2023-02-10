import React from 'react'
import "./MealPopular.css"
import food1 from '../../assets/food-1.png'
import food2 from '../../assets/food-2.png'
import food3 from '../../assets/food-3.png'
import food4 from '../../assets/food-4.png'
import food5 from '../../assets/food-5.png'
import food6 from '../../assets/food-6.png'
import chef1 from '../../assets/chef-1.png'
import chef2 from '../../assets/chef-2.png'
import chef3 from '../../assets/chef-3.png'
import imgViewRestaurant from '../../assets/img-view-restaurant-mobile.png'
const MealPopular = () => {
    return (
        <div className='meal-popular-container'>
            <div className='meal'>
                <div className='meal-title'>
                    Галерея <span className='meal-title-important'>Блюд</span>
                </div>
                <div className='div-meal-1'>
                    <img src={food1} />
                    <img src={food2} />
                    <img src={food3} />
                </div>
                <div className='div-meal-2'>
                    <img src={food4} />
                    <img src={food5} />
                    <img src={food6} />
                </div>
            </div>
            <div className='chef'>
                <div className='meal-title'>
                    Наши <span className='meal-title-important'>Повара</span>
                </div>
                <div className='chef-img'>
                    <img src={chef1} />
                    <img src={chef2} />
                    <img src={chef3} />
                </div>
            </div>

            <img src={imgViewRestaurant} className='img-view-restaurant'/>

        </div>
    )
}

export default MealPopular