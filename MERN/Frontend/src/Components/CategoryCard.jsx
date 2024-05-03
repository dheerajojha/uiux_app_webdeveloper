import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
const CategoryCard = ({ data }) => {
    return (
        <CategoryCardContainer>
            <div className='card-container'>
                {data.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.image} alt={item.title} />
                        <div className="card-body gap">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className='cta-white'>
                                <Link to=''>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </CategoryCardContainer>
    )
}

const CategoryCardContainer = styled.section`
.card-container{
display:grid;
grid-template-columns:repeat(3,1fr);
justify-content:center;
gap:1rem;
.card{
    position:relative;
    color:var(--whiteColor);
    &::after{
            content:'';
            position: absolute;
            top:0%;
            left:0%;
            width:100%;
            height:100%;
            background-color:rgba(0,0,0,0.2);
        }
    img{
        width:400px;
        height:500px;
        object-fit:cover;
        border-radius:5px;
        position: relative;
       
    }
    .card-body{
        position:absolute;
        left:10%;
        bottom:10%;
    }
}
}

@media screen and (max-width:768px) {
    .card-container{
        grid-template-columns:1fr;
    }
    
}
`
export default CategoryCard