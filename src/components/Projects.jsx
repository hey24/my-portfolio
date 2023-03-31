import React from 'react'
import FootstepsProject from './FootstepsProject'
import SharkBaitProject from './SharkBaitProject'
import styled from 'styled-components'

const Section = styled.div`
height: 130vh;
display: flex;
justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const Title = styled.h1`
  margin-top: 6rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <Title>My Projects</Title>
        <FootstepsProject />
        <SharkBaitProject />
      </Container>
    </Section>
  )
}

export default Projects
