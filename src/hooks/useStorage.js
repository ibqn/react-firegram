import { useState, useEffect } from 'react'
import { fireStorage } from '../firebase'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    const storageRef = fireStorage.ref(file.name)
    storageRef.put(file).on(
      'state-changed',
      (snap) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100
        setProgress(percentage)
      },
      (error) => setError(error),
      async () => {
        const url = await storageRef.getDownloadURL()
        setUrl(url)
      }
    )
  }, [file])

  return { progress, url, error }
}

export default useStorage
