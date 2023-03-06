import React, { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'
import Review from './Review'
import AxiosWrapper from '@gravity-ui/axios-wrapper'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow: scroll;

    &:last-child {
        background: #000;
    }
`

const Main = styled.div`
    padding-left: 50px;
`

const Salon = () => {
    const { slug } = useParams()
    const [salon, setSalon] = useState({})
    const [review, setReview] = useState({title: '', description: '', score: 0})
    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        
        
        axios.get(`http://localhost:3000/api/v1/salons/${slug}`)
        .then( resp => {
            setSalon(resp.data) 
            setLoaded(true)
        }
        
        )
        .catch( resp => console.log(resp) )
    }, [])

    const handleChange = (e) => {
        e.preventDefault()

        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))

        console.log('review', review)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector("[name=csrf-token]")
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const salon_id = parseInt(salon.data.id)
        axios.post('http://localhost:3000/api/v1/reviews', {review, salon_id})
        .then( resp => {
            const included = [...salon.included, resp.data.data]
            setSalon({...salon, included})
            setReview({title: '', description: '', score: 0})
        })
        .catch( resp => {})

    }

    // const handleDestroy = (id, e) => {
    //     e.preventDefault()
    
    //     AxiosWrapper.delete(`/api/v1/reviews/${id}`)
    //     .then( (data) => {
    //       const included = [...reviews]
    //       const index = included.findIndex( (data) => data.id === id )
    //       included.splice(index, 1)
    
    //       setReviews(included)
    //     })
    //     .catch( data => console.log('Error', data) )
    //   }

    const setRating = (score, e) => {
        e.preventDefault()
        
        setReview({...review, score})
    }

    let reviews 
    if (loaded && salon.included) {
        reviews = salon.included.map( (item, index) => {
            return(
                <Review 
                    key={index}
                    attributes={item.attributes}
                />
            )
        } ) 
    }

    return (
        <Wrapper>                    
            { 
                loaded && 
                    <Fragment>
                        <Column>
                                <Main>
                                    <Header 
                                        attributes={salon.data.attributes}
                                        reviews={salon.included}
                                    /> 
                                    {reviews}
                                </Main>
                            </Column>
                            <Column>
                                <ReviewForm
                                    handleChange={handleChange}
                                    handleSubmit={handleSubmit}
                                    setRating={setRating}
                                    attributes={salon.data.attributes}
                                    review={review}
                                    
                                />
                            </Column>
                    </Fragment>
            }
        </Wrapper>
    )
}

export default Salon