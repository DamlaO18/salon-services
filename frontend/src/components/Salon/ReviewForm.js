import React, { Fragment } from 'react'
import styled from 'styled-components'

const RatingContainer = styled.div`
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    padding: 40px 0 10px 0;
    border: 1px solid #e6e6e6;
    background: #fff
`

const RatingTitle = styled.div``

const RatingBox = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    flex-directionL row-reverse;
    position: relative;

    input {
        display: none;
    }

    label {
        cursor: pointer;
        width: 40px;
        height: 40px;
        background-img: url()
    }
`

const ReviewForm = (props) => {
    const ratingOptions = [5, 4, 3, 2, 1].map( (score, index) => {
        return (
            <Fragment> 
                <input type="radio" value={score} name="rating" onChange={() => console.log('selected:', score)} id={`rating${score}`}></input>
                <label></label>
            </Fragment> 
        )
    })

    return (
        <div className="wrapper">
            <form onSubmit={props.handleSubmit}>
                <div>Have an experience with {props.attributes.name}? Share your review</div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title"></input>
                </div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description"></input>
                </div>
                <div className="field">
                    <RatingContainer>
                        <div className="rating-title-text">Rate This Salon</div>
                        <div className="rating-box">
                            {ratingOptions}
                        </div>
                    </RatingContainer>
                </div>
                <button type="submit">Submit Your Review</button>
            </form>
        </div>
    )
}

export default ReviewForm