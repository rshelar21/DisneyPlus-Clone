import React from "react";
import styled from 'styled-components'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from '../firebase'
import { doc, getDocs, getDoc, collection, onSnapshot } from "firebase/firestore";



const Details = (props) => {
    const { id } = useParams()
    const [detail, setDetail] = useState({})

   

    useEffect(() => {
        

        const GetData = async() => {
            var ref = doc(db, 'movies', id)
            const docSnap = await getDoc(ref)
            

            if(docSnap.exists()){
                 // console.log(docSnap.data())
                setDetail(docSnap.data())
            }
            else {
                console.log('no')
            }

        }

        GetData();
        
    }, [id])

    // console.log(detail.backgroundimg)
   

    



    return(
        <>
        <Container>
            <BackGround>
                <img src={detail.backgroundimg} alt={detail.title}/>
            </BackGround>

            <ImgTitle>
                <img src={detail.titleImg} alt={detail.title} />
                
            </ImgTitle>
            <Content>
            <Control>
                <Player>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>Play</span>
                </Player>
                <Trailer>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </Trailer>
                <AddList>
                    <span/>
                    <span/>
                </AddList>
                <Groupicon>
                    <div>
                        <img src="/images/group-icon.png" alt="" />
                    </div>
                </Groupicon>

            </Control>
            <SubTitle>
            {detail.subtitle}
            </SubTitle>
            <Description>
            {detail.description}
            </Description>

            </Content>

        </Container>
        </>
    )
};

const Container = styled.div`
position: relative;
top: 70px;
display: block;
overflow: hidden;
min-height: calc(100vh - 250px);
padding: 0 calc(3.5vw + 5px);
`;

const BackGround = styled.div`
position: fixed;
left: 0px;
right: 0px;
top: 0px;
opacity: 0.8;
z-index: -1;


img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
        width: initial;
        /* max-height: auto; */
        /* max-width: 100%;
        min-width: auto; */

    }
}
`;

const ImgTitle = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-end;
-webkit-box-pack: start;
margin: 0 auto;
height: 30vw;
width: 100%;
min-height: 170px;
padding-bottom: 24px;

img {
    width: 35vw;
    max-width: 600px;
    min-width: 200px;
    

}

`;

const Content = styled.div`
max-width: 874px;



`;

const Control = styled.div`
display: flex;
align-items: center;
flex-flow: row nowrap;
margin: 24px 0px;
min-height: 56px;
`;

const Player = styled.button`
font-size: 15px;
padding: 0px 24px;
height: 56px;
margin: 0px 22px 0px 0px;
outline: none;
align-items: center;
cursor: pointer;
border-radius: 5px;
border: none;
display: flex;
justify-content: center;
letter-spacing: 1.8px;
background: rgb(249, 249, 249);
color: rgb(0,0,0);
text-transform: uppercase;

img {
    width: 32px;
}

&:hover {
    background: rgb(198, 198, 198);
}

@media (max-width: 768px) {
    height: 45px;
    padding: 0px 22px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
        width: 25px;
    }
    
}
`;

const Trailer = styled(Player)`
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
`;

const AddList  = styled.div`
margin-right: 16px;
height: 44px;
width: 44px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.6);
border-radius: 50%;
border: 2px solid white;
cursor: pointer;

span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
        height: 2px;
        width: 16px;
        transform: translate(1px, 0px) rotate(0deg);
    }
    &:nth-child(2) {
        width: 2px;
        height: 16px;
        transform: translate(-8px) rotate(0deg);

    }
}

`;


const Groupicon = styled.div`
height: 44px;
width: 44px;
border-radius: 50%;
align-items: center;
display: flex;
justify-content: center;
background: white;
cursor: pointer;

div {
    height: 40px;
    width: 40px;
    background: rgb(0,0,0);
    border-radius: 50%;
    
    img {
        width: 100%;
    }
}

`;

const SubTitle = styled.div`
color: rgb( 249, 249, 249);
font-size: 15px;
min-height: 20px;

@media (max-width: 768px) {
    font-size: 12px;

}

`;

const Description = styled.div`
line-height: 1.4;
font-size: 20px;
padding: 16px 0px;

color: rgb(249, 249, 249);

@media (max-width: 768px) {
    font-size: 14px;
    
}

`;



export default Details;