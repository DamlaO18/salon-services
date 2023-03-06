import React, { Fragment } from 'react'
import styled from 'styled-components'
import blankstar from './Stars/blankstar.png'
import hoverstar from './Stars/hoverstar.png'
import selectedstar from './Stars/selectedstar.png'


const RatingContainer = styled.div`
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    padding: 40px 0 10px 0;
    border: 1px solid #e6e6e6;
    background: #fff
`

const RatingBox = styled.div`
    background: #fff;
    display: flex;
    width: 100%;
    justify-content: center;
    overflow: hidden;
    flex-direction: row-reverse;
    position: relative;

    input {
        display: none;
        background-image: url(${blankstar});
    }

    label {
        cursor: pointer;
        width: 40px;
        height: 40px;
        margin-top: auto;
        background-image: url(${blankstar});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 76%;
        transition: .3s;
      }

      input:not(:checked) ~ label:hover,
      input:not(:checked) ~ label:hover ~ label {
        background-image: url(${hoverstar});
        background-repeat: no-repeat;
      }

      input:checked ~ label, 
      input:checked ~ label ~ label {
        background-image: url(${selectedstar});
        background-repeat: no-repeat;
      }
`

const Field = styled.div`
    border-radius: 4px;

    input {
        min-height: 50px;
        border-radius: 4px;
        border: 1px solid #e6e6e6;
        margin: 0 0 12px 0;
        padding: 12px;
        width: 95%;
        margin-bottom: 20px;
    }

    textarea {
        width: 100%;
        min-height: 80px;
        border-radius: 4px;
        border: 1px solid #e6e6e6;
        margin: 12px 0;
        padding: 12px
    }
`

const Wrapper = styled.div`
    background: #d3d3d3;
    padding: 20px;
    height: 100vh;
    padding-top: 100px;
`

const SubmitBtn = styled.div`
    background: #0BDA51;
    border-radius: 4px;
    padding: 12px;
    font-size: 18px;
    cursor: pointer;
    transition: ease-in-out 0.1s;
    width: 95%;
    margin-top: 20px;
    text-align: center;

    &:hover {
        background: #000;
        color: #fff;
    }
`

const Headline = styled.div`
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
`

const RatingTitle = styled.div`
    font-size: 20px;
    padding-bottom: 20px;
    font-weight: bold;
`

const ReviewForm = (props) => {

    const ratingOptions = [5, 4, 3, 2, 1].map( (score, index) => {
        return (
            <Fragment> 
                <input type="radio" value={score}  checked={props.review.score === score} onChange={()=>console.log('onChange')} name="rating" id={`rating${score}`}></input>
                <label onClick={props.setRating.bind(this, score)}></label>
            </Fragment> 
        )
    })

    return (
        <Wrapper>
            <form>
                <Headline>Have an experience with {props.attributes.name}? Share your review</Headline>
                <Field>
                    <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title"></input>
                </Field>
                <Field>
                    <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description"></input>
                </Field>
                <Field>
                    <RatingContainer>
                        <RatingTitle>Rate This Salon</RatingTitle>
                        <RatingBox>
                            {ratingOptions}
                        </RatingBox>
                    </RatingContainer>
                </Field>
                <SubmitBtn type="submit" onClick={props.handleSubmit}>Submit Your Review</SubmitBtn>
            </form>
        </Wrapper>

    )
}

export default ReviewForm