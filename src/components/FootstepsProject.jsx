import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
margin-top: 2rem;
display: flex;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (max-width: 768px) {
    align-items: center;
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
  background-color: #A5CC82;
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

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`
const Screenshot = styled.img`
  height: 500px;
  border-radius: 0.2rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }

`
const Links = styled.div`
  display: flex;
  gap: 1rem;
`
const LiveLink = styled.a``

const GitHubLink= styled.a``

const SocialImg = styled.img`
  height: 1.5rem;

  &:hover{
    transition: 0.5s;
    transform: translateY(2px);
  };
`

const FootstepsProject = () => {
  return (
    <Section>
      <Container>
        <Left>
          <ProjectName>Footsteps</ProjectName>
          <Tags>
            <Tag1>Ruby on Rails</Tag1>
            <Tag1>JavaScript</Tag1>
            <Tag1>REST APIs</Tag1>
            <Tag1>SCSS</Tag1>
            <Tag1>Heroku</Tag1>
          </Tags>
          <Description>
            The idea for Footsteps came when I was living in Canada and realised that there is no good way to find people to go hiking with, especially in the UK. <br /> <br /> Footsteps is a full stack mobile application, built using Ruby on Rails to connect hikers with eachother. The app includes a route plotting feature (See README.md for this in action), group messaging between people you are on a hike with and plenty more!
          </Description>
          <p>P.S. Remember to inspect for mobile view</p>
          <Links>
            <LiveLink href="https://www.footsteps.world"><SocialImg src="./img/link-white.png" alt="" /></LiveLink>
            <GitHubLink href="https://github.com/hey24/footsteps"><SocialImg src="./img/github-white.png" alt="" /></GitHubLink>
          </Links>
        </Left>
        <Right>
          <Screenshot src="./img/footsteps-gif.gif" />
        </Right>
      </Container>
    </Section>
  )
}

export default FootstepsProject
