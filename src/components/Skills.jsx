import React from 'react'
import styled from 'styled-components'
import TechStack from './TechStack'

const Section = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
display: flex;
justify-content: space-between;
gap: 3rem;

@media only screen and (max-width: 768px) {
  flex-direction: column-reverse;
  align-items: center;
}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: end;
`

const Right = styled.div`
flex: 1;
  display: flex;
  flex-direction: column;
  width: 300px;
`
const About = styled.p`
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`

const techStack = {
  'Rails': './img/Rails-01.png',
  'JavaScript': './img/JavaScript-01.png',
  'React': './img/React-01.png',
  'Ruby': './img/Ruby-01.png',
  'CSS': './img/CSS-3-01.png'
};


const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <Left>
          <TechStack techStack={techStack} />
        </Left>
        <Right>
          <Title>About Me</Title>
          <About>
          I'm a full-stack developer who is passionate about creating web applications of all shapes and sizes!<br /><br /> I love collaborating with others and I'm keen to work on some open source projects that can make a positive impact on the world.<br /><br /> I also love music and getting outside in nature, especially after I've been staring at the same piece of code for hours!
          </About>
        </Right>
      </Container>
    </Section>
  )
}

export default Skills
