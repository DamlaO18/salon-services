import React from "react";
import { useParams } from 'react-router-dom'

const Header = (props) => {
    const { name, avg_score } = props.attributes
    const total = props.reviews.length



    return (
        <div className="wrapper">
            <h1> <img src="" /> {name}</h1>
            <div>
                <div className="totalReviews">{total} User Reviews</div>
                <div className="starRating"></div>
                <div className="totalOutOf">{avg_score} out of 5</div>
            </div>
        </div>
    )
}

export default Header