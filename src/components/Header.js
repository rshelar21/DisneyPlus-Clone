import React, { useEffect } from 'react'
import styled from "styled-components"
import {signInWithPopup, signOut} from 'firebase/auth'
import { auth, provider} from '../firebase'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router'
import { selectUserName,
    selectUserEmail, selectUserPhoto, setUserLoginDetails, setSignOutState
 } from '../features/userSlice'




const Header = (props)=>{
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(()=>{
        auth.onAuthStateChanged(async (user) =>{
            if(user){
                setUser(user)
                navigate('/home')
            }
        })

    }, [userName])

    const signInWithGoogle = ()=>{
        if(!userName){
            signInWithPopup(auth, provider).then((result)=>{
                console.log(result.user)
                setUser(result.user)
            }).catch((error)=>{
                console.log(error)
            })
        }
        else{
            signOut(auth).then((data)=>{
                dispatch(setSignOutState())
                navigate('/')
                console.log(data + " no name")
            }).catch((err)=>{
                alert(err.message)
            })
        }
    
    };

    const setUser = (user) =>{
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );

    }
    console.log(userName)
    console.log(userPhoto)



    return(
        <>
        <Nav>
        <Logo>
            <img src="/images/logo.svg" alt="" />
        </Logo>

        {
            !userName ? 
            
            (<Login onClick={signInWithGoogle}>Login
            </Login>)
             : 
            (
            <>
            
        <Navmenu>
            <a href="/">
                <img src="/images/home-icon.svg" alt="home" />
                <span>HOME</span>
            </a>
            <a href="/">
                <img src="/images/search-icon.svg" alt="search" />
                <span>SEARCH</span>
            </a>
            <a href="/">
                <img src="/images/watchlist-icon.svg" alt="watchlist" />
                <span>WATCHLIST</span>
            </a>
            <a href="/">
                <img src="/images/original-icon.svg" alt="originals" />
                <span>ORIGINALS</span>
            </a>
            <a href="/">
                <img src="/images/movie-icon.svg" alt="movies" />
                <span>MOVIES</span>
            </a>
            <a href="/">
                <img src="/images/series-icon.svg" alt="series" />
                <span>SERIES</span>
            </a>   
        </Navmenu>
        <SignOut>
        <UserImg  src={userPhoto} alt={userName}/>
        <ImgMenu>
            <span onClick={signInWithGoogle}>Sign out</span>
        </ImgMenu>
        
        </SignOut>
        </>
        )}
        </Nav>

        </>
    )
}

const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 3;
height: 70px;
padding: 0 36px;
background-color: #090b13;
`;




 
const Logo = styled.a`
width: 80px;
margin: 0;
max-height: 70px;
font-size: 0;
display: inline-block;
margin-top: 4px;
padding: 0;

img{
    display: block;
    width: 100%;
}

`;

const Navmenu = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
/* justify-content: flex-start; */
margin: 0px;
padding: 0px;
position: relative;
margin-right: auto;
margin-left: 25px;


a{
    display: flex;
    align-items: center;
    padding: 0 12px;

    img{
    height: 20px;
    min-width: 20px;
    width: 20px;
}

span{
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing : 1.42px;
    line-height: 1.08;
    white-space: nowrap;
    padding: 2px 0px;
    position: relative;

    &:before{
    background-color:  rgb(249, 249, 249);
    border-radius: 0px 0px 4px 4px;
    bottom: -6px;
    content: '';
    height: 2px;
    position: absolute;
    opacity: 0;
    right: 0px;
    left: 0px;
    transform-origin: left center;
    transform: scaleX(0);
    visibility: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    width: auto;
}
}

&:hover{
    span:before{
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
    }
}
}
`;

const Login = styled.a`
background-color: rgba(0,0,0,0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
font-weight: 600;
cursor: pointer;
border-radius: 4px;
transition: all 0.2 ease 0s;


&:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;

}
`;

const ImgMenu = styled.div`
position: absolute;
top: 48px;
right: 0;
border-radius: 4px;
padding: 10px;
min-width: 100px;
opacity: 0;
background: rgb(19, 19, 19);
border: 1px solid rgba(151, 151, 151, 0.34);
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
`

const SignOut = styled.div`
position: relative;
height: 48px;
width: 48px;
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;

&:hover{
    ${ImgMenu} {
        opacity: 1;
    }
}

`;

const UserImg = styled.img`
height: 100%;
border-radius: 50%;

`;





export default Header;
