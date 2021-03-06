import styled from 'styled-components'
import GlobalStyles from './components/global-styles'
import Title from './components/title'
import UploadFile from './components/upload-file'

const Div = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const App = () => {
  return (
    <Div>
      <GlobalStyles />
      <Title />
      <UploadFile />
    </Div>
  )
}

export default App
