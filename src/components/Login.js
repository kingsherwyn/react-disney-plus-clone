import React from 'react'
import styled from 'styled-components'

export default function Login() {
  return (
    <Container>
        <Contents>
            <CTALogoOne src='/images/cta-logo-one.svg'/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                Get Premier Access to Raya and teh Last Dragon for an additional fee
                with a Disney+ subscrtion. As of 03/26/21, the price of Disney+
                and The Disney Bundle will increase by $1.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png"/>
        </Contents>
    </Container>
  )
}

const Container = styled.div`
    position:  relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    
    &:before {
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-image: url("/images/login-background.jpg");
        background-size: cover;
        background-position: top;
        opacity: 0.7;
        z-index: -1;
    }
`

const Contents = styled.div`
    margin-top: 100px;
    width: 90%;
    max-width: 650px;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CTALogoOne = styled.img`
`

const CTALogoTwo = styled.img` 
width: 90%;
`

const SignUp = styled.a`
    width: 100%;
    background: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;

    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`