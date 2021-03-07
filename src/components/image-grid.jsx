import React from 'react'
import styled from 'styled-components'
import useFireStore from '../hooks/useFirestore'
import PropTypes from 'prop-types'

const Grid = styled.div`
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
`

const ImgWrap = styled.div`
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  /* padding controls height, will always be perfectly square regardless of width */
  position: relative;
  opacity: 0.8;
`

const Img = styled.img`
  min-width: 100%;
  min-height: 100%;
  max-width: 150%;
  position: absolute;
  top: 0;
  left: 0;
`

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFireStore('images')
  return (
    <Grid>
      {docs?.map((doc) => (
        <ImgWrap key={doc.id} onClick={() => setSelectedImg(doc.url)}>
          <Img src={doc.url} alt="" />
        </ImgWrap>
      ))}
    </Grid>
  )
}

ImageGrid.propTypes = {
  setSelectedImg: PropTypes.func.isRequired,
}

export default ImageGrid
