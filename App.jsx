/* eslint-disable no-undef */
import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
export function App () {
  const [fact, setFact] = useState()
  // no puedes usar react query, SWR, axios, etc
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(Response => Response.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>Aplicacion de gatos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
