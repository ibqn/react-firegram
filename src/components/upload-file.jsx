import styled from 'styled-components'
import { useState } from 'react'

import ProgressBar from '../components/progress-bar'

const Error = styled.div`
  color: var(--error);
`

const Output = styled.div`
  height: 60px;
  font-size: 0.8rem;
`

const Form = styled.form`
  margin: 30px auto 10px;
  text-align: center;
`

const Label = styled.label`
  position: relative;
  display: block;
  width: 30px;
  height: 30px;
  border: 2px solid var(--primary);
  border-radius: 50%;
  margin: 10px auto;
  line-height: 30px;
  color: var(--primary);
  font-weight: bold;
  font-size: 24px;

  &:hover {
    background: var(--primary);
    color: white;
  }
`

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
`

const Span = styled.span`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const UploadFile = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const types = ['image/png', 'image/jpeg']

  const handleChange = ({ target: { files } }) => {
    const [selected] = files
    console.log(selected)

    if (types.includes(selected?.type)) {
      setFile(selected)
      setError(null)
    } else {
      setFile(null)
      setError('Please select an image file (png or jpeg)')
    }
  }

  return (
    <Form>
      <Label>
        <Input type="file" onChange={handleChange} />
        <Span>+</Span>
      </Label>

      <Output>
        {error && <Error>{error}</Error>}
        {file && (
          <>
            <div>{file.name}</div>
            <ProgressBar file={file} setFile={setFile} />
          </>
        )}
      </Output>
    </Form>
  )
}

export default UploadFile
