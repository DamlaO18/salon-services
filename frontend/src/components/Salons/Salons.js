import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import SalonCard from './SalonCard'

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;
    
    h1 {
        font-size: 42px;
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

const Salons = () => {
    const [salons, setSalons] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/api/v1/salons.json')
        .then( resp => setSalons(resp.data.data) )
        .catch( resp => console.log(resp) )
    }, [salons.length])


    const grid = salons.map( item => {
        return (
            <SalonCard 
            key={item.attributes.name}
            attributes={item.attributes}
            />
        )
    })

    


    return (
        <div>
            <Home>
                <Header>
                    <h1>NailsReview</h1>
                    <Subheader>Your opinion of local nail salons.</Subheader>
                </Header>
                <Grid>
                    {grid}
                </Grid>
            </Home>
        </div>
    )
}

export default Salons