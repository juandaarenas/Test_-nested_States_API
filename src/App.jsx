import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  // no puedes usar react query, SWR, axios, etc

  // para sacar las palabras en un orden de la API
  // const firstWord = fact.split(' ')[0]
  // const ThreeWord = fact.split(' ').slice(0, 3).join(' ')
  // const ThreeWord = fact.split(' ', 3).join(' ')
  // console.log(ThreeWord)

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Aplicacion de gatos</h1>
      <button onClick={handleClick}>Get New Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the firstThree words for ${fact}`} />}
    </main>
  )
}
