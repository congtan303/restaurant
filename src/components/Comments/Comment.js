import React from 'react'
import './Comment.css'
import imgAvatarComment from '../../assets/img-avatar.png'
import slider from '../../assets/slider.png'
const Comment = () => {
    return (
        <div className='comment-container'>

            <div className='comment-description'>
                Вид из ресторана потрясающий, интерьер необычный,
                еда отличная, обслуживание отличное, понравились закуски и десерт,
                утка с картошкой была восхитительна,
                все отлично дома в Мексике я не встречал таких отменных заведений,
                однозначно рекомендую.
            </div>

            <div className='comment-avatar'>
                <img src={imgAvatarComment} />
            </div>
            <div className='comment-customer-name'>Посетитель</div>
            <div className='comment-customer-sur-name'>Серхио</div>
            <img src={slider} className='icon-slider' />


        </div>
    )
}

export default Comment