import React from "react";
import styled from "styled-components";
import Imgslider from "./Imgslider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import {useDispatch, useSelector } from 'react-redux'
import db from '../firebase'
import { getDocs, collection, onSnapshot } from "firebase/firestore";
import { setMovies  } from "../features/movie/movieSlice";
import { selectUserName } from "../features/userSlice";



const Home = () =>{

    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trendings = [];

    useEffect(() => {
        onSnapshot(collection(db, "movies"), (snapshot) => {
            // console.log(snapshot.docs.map((doc) => doc.data()))
            // console.log(snapshot.docs)
            snapshot.docs.map((doc) =>{
                // console.log(originals)
                switch (doc.data().type) {
                    case "recommend":
                      recommends = [...recommends, { id: doc.id, ...doc.data() }];
                      break;
          
                    case "new":
                      newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                      break;
          
                    case "original":
                      originals = [...originals, { id: doc.id, ...doc.data() }];
                      break;
          
                    case "trending":
                      trendings = [...trendings, { id: doc.id, ...doc.data() }];
                      break;
                  }
            })
            dispatch(
                setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                originals: originals,
                trending: trendings,
                })
            )
        })


       
    }, [userName])




   



    

    


    return(
        <>
        <Container>
        <Imgslider/>
        <Viewers/>
        <Recommends/>
        <NewDisney/>
        <Originals/>
        <Trending/>
        </Container>

        </>
    )
}

const Container = styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);


&:after{
    content: '';
    position: absolute;
    inset: 0px;
    /* top: 0px; // inset alternative of all top bottom right and left
    left: 0px;
    right: 0px;
    bottom: 0px; */
background: url('/images/home-background.png');
background-repeat: no-repeat;
background-position: center;
background-size: cover;
z-index: -1;
opacity: 1;
background-attachment: fixed;

}
`

export default Home;