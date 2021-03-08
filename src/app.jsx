import styled from 'styled-components'
import { Helmet } from 'react-helmet'
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
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
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
