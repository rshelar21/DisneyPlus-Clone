import React from 'react'
import styled from 'styled-components'

const Viewers = () =>{
    return(
        <>
        <Container>
        <Wrap>
            <img src="/images/viewers-disney.png" alt="" />
            <video autoPlay={true} muted loop={true} playsInline={true}>
                <source src='/videos/video-disney.mp4'  type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png" alt="" />
            <video autoPlay={true} muted loop={true} playsInline={true}>
                <source src='/videos/video-pixar.mp4'  type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png" alt="" />
            <video autoPlay={true} muted loop={true} playsInline={true}>
                <source src='/videos/video-marvel.mp4'  type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png" alt="" />
            <video autoPlay={true} muted loop={true} playsInline={true}>
                <source src='/videos/video-starwars.mp4'  type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png" alt="" />
            <video autoPlay={true} muted loop={true} playsInline={true}>
            <source src='/videos/1564676296-national-geographic.mp4'  type='video/mp4'/>
            </video>
        </Wrap>

        </Container>
            
        </>
    )
}

const Container = styled.div`
margin-top: 30px;
padding: 30px 0px 26px; 
display: grid;
grid-gap: 25px;
/* gap: 25px; */
grid-template-columns: repeat(5, minmax(0, 1fr));

@media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    
}

`;

const Wrap = styled.div`
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    position: relative;
    inset: 0px;
    display: block;
    height: 100%;
    width: 100%;
    z-index: 1;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
  }


  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    inset: 0px;
    position: absolute;
  }

  &:hover{
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      border-color: rgba(249, 249, 249, 0.8);

      video {
          opacity: 1;
      }
  }

`;

export default Viewers;