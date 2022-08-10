import React, { useState, useEffect } from 'react'
import axios from 'axios'

function useRandomQuote() {
  const [quote, setQuote] = useState({})
  useEffect(() => {
    axios.get('http://localhost:9000/api/quotes')
      .then(res => {
        const numOfQuotes = res.data.quotes.length
        const randomIdx = Math.floor(Math.random() * numOfQuotes)
        const randomQuote = res.data.quotes[randomIdx]

        setQuote(randomQuote)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])
}

function useCount(initial) {

}

function useForm(key, values) {

}

function useLS(key, value) {

}

export default function App() {
  const quoteOfTheDay = useRandomQuote()
  return (
    <>
      <h2>Custom Hooks</h2>

      <p>The more clearly we can focus our attention on the wonders and realities
        of the universe about us, the less taste we shall have for destruction.</p>

      <p>7 <button>inc</button><button>dec</button></p>

      <form>
        <input name="foo" placeholder="type foo" /><br />
        <input name="bar" placeholder="type bar" /><br />
        <input name="baz" placeholder="type baz" />
      </form>
    </>
  )
}
