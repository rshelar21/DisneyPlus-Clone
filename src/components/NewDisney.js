import React from "react";
import styled from 'styled-components';
import { Link } from  'react-router-dom'
import { useSelector } from "react-redux";
import {selectNewDisney } from '../features/movie/movieSlice'

const NewDisney = () =>{
    const movies = useSelector(selectNewDisney)
    return(
        <><Container>
            <h4>New to Disney+</h4>
            <Content>
                {movies && 
                    movies.map((data, index) => {
                        {/* console.log(data.id) */}
                        return(
                        <Wrap key={index}>
                        <Link to={'/detail/' + data.id}>
                        <img src={data.cardimg} alt={data.title} />
                        </Link>
                        </Wrap>
                        )
                })}
            </Content>

            {/* <Content>
               <Wrap>
               <Link to='/'>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg" alt="" />
               </Link>
               </Wrap>

               <Wrap>
               <Link to='/'>
               <img src= "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg" alt=""/>
               </Link>
               </Wrap>

               <Wrap>
               <Link to='/'>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
               </Link>
               </Wrap>

               <Wrap>
               <Link to='/'>
               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg" alt="" />
               </Link>
               </Wrap>
               
            </Content> */}
        </Container>

        </>
    )
};


const Container = styled.div`
padding-bottom: 25px;



`;

const Content  = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
grid-gap: 25px;

@media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));


    
}



`;

const Wrap  = styled.div`
position: relative;
border-radius: 10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 3px solid rgba(249, 249, 249, 0.1);
overflow: hidden;
cursor: pointer;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
        inset: 0px;
        object-fit: cover;
        opacity: 1;
        transition: opacity 500ms ease-in-out 0s;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

      border-color: rgba(249, 249, 249, 0.8);
      transform: scale(1.05);
      

    }



`;


export default NewDisney;