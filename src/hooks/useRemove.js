import { useEffect, useState, useCallback } from 'react'
import { fireStore, fireStorage } from '../firebase'

const useRemove = (cleanUp) => {
  const [url, setUrl] = useState(null)
  const [error, setError] = useState(null)

  const removeImage = useCallback((img) => setUrl(img), [])

  useEffect(() => {
    const effect = async () => {
      try {
        const images = await fireStore
          .collection('images')
          .where('url', '==', url)
          .get()

        const batch = fireStore.batch()
        images.forEach((doc) => batch.delete(doc.ref))
        await batch.commit()

        const imageRef = fireStorage.refFromURL(url)
        await imageRef.delete()

        setError(null)
        cleanUp()
      } catch (error) {
        console.log(error)
        setError(error)
      }
    }

    if (url) {
      effect()
    }
  }, [url, cleanUp])

  return [removeImage, error]
}

export default useRemove
