import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height: 100vh;
margin: 2rem 0;
display: flex;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 1rem;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (max-width: 768px) {
    // display: flex;
    // justify-content: center;
  }
`
const ProjectName = styled.h2`
@media only screen and (max-width: 768px) {
  text-align: center;
}
`
const Tags = styled.div`
  display: flex;
  gap: 1rem;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    width: 100%
  }
`
const Tag1 = styled.p`
  background-color: #00467F;
  padding: 0.4rem;
  border-radius: 0.2rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
    background-color: transparent;
    padding: 0.1rem;
  }

  &:hover{
    transition: 0.5s;
    transform: translateY(-2px);
  }
`
const Description = styled.p`
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (max-width: 768px) {
    align-items: center;
    flex: 0;
  }
`
const Screenshot = styled.img`
  height: 350px;
  border-radius: 0.2rem;

  @media only screen and (max-width: 768px) {
    height: 150px
  }
`
const Links = styled.div`
  display: flex;
  gap: 1rem;
`
const LiveLink = styled.a``
const GitHubLink= styled.a`
text-shadow: 1px 1px 4px gray;`

const SocialImg = styled.img`
  height: 1.5rem;
  text-shadow: 1px 1px 4px gray;

  &:hover{
    transition: 0.5s;
    transform: translateY(2px);
  };
`

const SharkBaitProject = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Screenshot src="./img/sharkbait-gif.gif" />
        </Left>
        <Right>
          <ProjectName>SharkBait</ProjectName>
          <Tags>
            <Tag1>Ruby on Rails</Tag1>
            <Tag1>JavaScript</Tag1>
            <Tag1>SCSS</Tag1>
            <Tag1>Heroku</Tag1>
          </Tags>
          <Description>
            SharkBait is a website and online marketplace to browse and rent sharks. It was created as a part of our team project to create a full-stack application.
          </Description>
          <Links>
            <LiveLink href="https://sharkbait-hey24.herokuapp.com"><SocialImg src="./img/link-white.png" alt="" /></LiveLink>
            <GitHubLink href="https://github.com/hey24/SharkBait"><SocialImg src="./img/github-white.png" alt="" /></GitHubLink>
          </Links>

        </Right>
      </Container>
    </Section>
  )
}

export default SharkBaitProject
