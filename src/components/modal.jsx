import styled from 'styled-components'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`

const Img = styled(motion.img)`
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
    <Backdrop
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Img
        src={selectedImg}
        alt=""
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
      remove
    </Backdrop>
  )
}

Modal.propTypes = {
  selectedImg: PropTypes.string.isRequired,
  setSelectedImg: PropTypes.func.isRequired,
}

export default Modal
