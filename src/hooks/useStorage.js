import { useState, useEffect } from 'react'
import { fireStorage, fireStore, timestamp } from '../firebase'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    const storageRef = fireStorage.ref(file.name)
    const collectionRef = fireStore.collection('images')
    storageRef.put(file).on(
      'state-changed',
      (snap) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100
        setProgress(percentage)
      },
      (error) => setError(error),
      async () => {
        const url = await storageRef.getDownloadURL()
        const createdAt = timestamp()
        await collectionRef.add({ url, createdAt })
        setUrl(url)
      }
    )
  }, [file])

  return { progress, url, error }
}

export default useStorage
