import React from 'react'
import styled from 'styled-components';


const Login = () =>{
    return(
        <>
        <Container>
            <Content>
            <CTA>
                <CTALogo src='/images/cta-logo-one.svg'/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>Get Premier Access to Raya and the Last Dragon for an additional fee
             with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.</Description>
            <CTALogoTwo src='/images/cta-logo-two.png' />
            </CTA>

            <BgImg/>
            </Content>
        </Container>
        
        </>
    )
        
    
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
display: flex;
position: relative;
box-sizing: border-box;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 100vh;
width: 100vw;
height: 100vh;

`;

const BgImg = styled.div`
height: 100%;
width: 100%;
position: absolute;
top: 0;
left: 0;
right: 0;
background-repeat: no-repeat;
background-position: top;
background-size: cover;
background-image: url('/images/login-background.jpg');
z-index: -1;
`;


const CTA = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto 2vw auto;
margin: 0 auto;
width: 100%;
max-width: 650px;
flex-wrap: wrap;
align-items: center;
text-align: center;

`;

const CTALogo = styled.img`
margin-bottom: 12px;
max-width: 650px;
width: 100%;
min-height: 1px;
display: block;
`;

const SignUp = styled.a`
background-color: #0063e5;
color: #f9f9f9;
font-weight: bold;
margin-bottom: 12px;
letter-spacing: 1.5px;
border-radius: 4px;
border: 1px solid transparent;
font-size: 18px;
padding: 16.5px 0;
width: 100%;


&:hover{
    background-color: #0483ee;
}
`;

const Description = styled.p`
color: hsla(0, 0%, 95.31%, 1);
font-size: 11px;
margin: 0 0 24px;
${'' /* width: 100%; */}
line-height: 1.5;
letter-spacing: 1.2px;
`;

const CTALogoTwo = styled.img`
width: 100%;
max-width: 650px;
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom;
`;

export default Login;