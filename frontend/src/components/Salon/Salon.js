import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'

const Salon = () => {
    const { slug } = useParams()
    const [salon, setSalon] = useState({})
    const [review, setReview] = useState({title: '', description: '', score: 0})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        
        
        axios.get(`http://localhost:3000/api/v1/salons/${slug}`)
        .then( resp => 
            {
            setSalon(resp.data) 
            setLoaded(true)
        }
        
        )
        .catch( resp => console.log(resp) )
    }, [])


    return (
        <div className="wrapper">
            <div className="column">
                { loaded && 
                <Header 
                    attributes={salon.data.attributes}
                    reviews={salon.included}
                /> }
                <div className="reviews"></div>
            </div>
            <div className="column">
                <div className="review-form">[Review form goes here.]</div>
            </div>
        </div>
    )
}

export default Salon