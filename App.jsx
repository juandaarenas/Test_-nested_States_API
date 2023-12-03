/* eslint-disable no-undef */
import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  // no puedes usar react query, SWR, axios, etc
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        // para sacar las palabras en un orden de la API
        // const firstWord = fact.split(' ')[0]
        // const ThreeWord = fact.split(' ').slice(0, 3).join(' ')
        // const ThreeWord = fact.split(' ', 3).join(' ')
        // console.log(ThreeWord)
        const firstWord = fact.split(' ', 3).join(' ')
        console.log(firstWord)

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
          .then(Response => Response.json())
          .then(data => {
            const { url } = data
            setImageUrl(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>Aplicacion de gatos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first word for ${fact}`} />}
    </main>
  )
}
