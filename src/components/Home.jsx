import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(100%);
  animation-name: fadeUp;
  animation-duration: 1.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  @keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`
const PhotoContainer = styled.div`
  height: 14rem;
  width: 14rem;
  border-radius: 50%;
  background-image: url("./img/profile.jpeg");
  background-position: center;
  background-size: cover;
  border: 1px solid white;
`

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;

@media only screen and (max-width: 768px) {
  flex-direction: column;
  padding: 1rem;
}

`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(100%);
  animation-name: fadeUp;
  animation-duration: 1.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  @keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`
const Name = styled.h1`
  font-size: 4rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 3.5rem;
  }
`
const Job = styled.h2`
  font-size: 2.5rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
  }
`
const Description = styled.p`

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`


const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const CheckOut = styled.p`
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

const SocialLinks = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`

const Social = styled.a``

const SocialImg = styled.img`
  height: 2rem;

  &:hover{
    transition: 0.5s;
    transform: translateY(2px);
  };
`



const Home = () => {
  return (
    <Section id="about">
      <Container>
        <PhotoContainer></PhotoContainer>
        <Content>
          <Name>Hey there, I'm Ben 👋</Name>
          <Job>I'm a Junior Full Stack Developer</Job>
          <Description>Find out more and see my projects below 👇</Description>
        </Content>
        <SocialContainer>
          <CheckOut>Check out my LinkedIn and GitHub:</CheckOut>
          <SocialLinks>
            <Social href="https://www.linkedin.com/in/ben-h-/"><SocialImg src="./img/linkedin-white.png" alt="" /></Social>
            <Social href="https://github.com/hey24"><SocialImg src="./img/github-white.png" alt="" /></Social>
          </SocialLinks>
        </SocialContainer>
      </Container>
    </Section>
  )
}

export default Home
