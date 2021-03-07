import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`

const Img = styled.img`
  display: block;
  max-width: 60%;
  max-height: 80%;
  margin: 60px auto;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  border: 3px solid white;
`

const Modal = (props) => {
  const { selectedImg, setSelectedImg } = props

  const handleClick = (event) => {
    console.log(event.target, 'type', event.target.tagName)
    if (event.target.tagName !== 'IMG') {
      setSelectedImg(null)
    }
  }

  return (
    <Backdrop onClick={handleClick}>
      <Img src={selectedImg} alt="" />
    </Backdrop>
  )
}

export default Modal
