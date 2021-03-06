import { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import useStorage from '../hooks/useStorage'

const Progress = styled.div`
  height: 5px;
  background: var(--primary);
  width: ${(props) => props.progress || 0}%;
  margin-top: 20px;
`

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file)

  useEffect(() => {
    if (url && progress === 100) {
      setFile(null)
    }
  }, [url, progress, setFile])

  console.log(progress, url)
  return <Progress progress={progress}></Progress>
}

ProgressBar.propTypes = {
  file: PropTypes.object.isRequired,
  setFile: PropTypes.func.isRequired,
}

export default ProgressBar
