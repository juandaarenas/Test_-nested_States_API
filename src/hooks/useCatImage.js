import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
// esta funcion devolvera el enlace de la imagen
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(Response => Response.json())
      .then(data => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
