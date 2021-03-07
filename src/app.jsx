import styled from 'styled-components'
import { useState } from 'react'
import GlobalStyles from './components/global-styles'
import ImageGrid from './components/image-grid'
import Title from './components/title'
import UploadFile from './components/upload-file'
import Modal from './components/modal'

const Div = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <Div>
      <GlobalStyles />
      <Title />
      <UploadFile />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </Div>
  )
}

export default App
