import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    text-align: cetner;
`
const SalonLogo = styled.div`
    width: 50px
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;

    img {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        border: 1px solid #efefef;
    }
`
const SalonName = styled.div`
    padding: 20px 0 10px 0;
    padding-bottom: 10px;
`
const LinkWrapper = styled.div`
    margin: 30px 0 20px 0
    height: 50px;

    a {
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        padding-top: 10px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }
`

const SalonCard = (props) => {
    return (
        <div>
            <Card>
                <SalonLogo>
                    <img src= "/salon-img.webp" alt={props.attributes.name}/>
                </SalonLogo>
                <SalonName>{props.attributes.name}</SalonName>
                <div className="salon-score">{props.attributes.avg_score}</div>
                <LinkWrapper>
                    <Link to={`/salons/${props.attributes.slug}`}>View Salon</Link>
                </LinkWrapper>
            </Card>        
        </div>
    )
}

export default SalonCard