import { useEffect, useState } from 'react'
import { fireStore } from '../firebase'

const useFireStore = (collection) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const unsubscribe = fireStore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = []
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id })
        })
        setDocs(documents)
      })

    return () => unsubscribe()
  }, [collection])

  return [docs]
}

export default useFireStore
