import styled from 'styled-components'

const H1 = styled.h1`
  color: var(--primary);
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: normal;
`

const H2 = styled.h2`
  text-align: center;
  margin-top: 60px;
  font-size: 2.6rem;
`

const P = styled.p`
  text-align: center;
`

const Title = () => {
  return (
    <div>
      <H1>firegram</H1>
      <H2>Your Pictures</H2>
      <P>Feel free to upload your pictures.</P>
    </div>
  )
}

export default Title
