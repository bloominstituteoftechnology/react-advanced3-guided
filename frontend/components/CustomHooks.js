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
  return quote
}

function useCount(initial) {
  const [value, setValue] = useState(initial)
  const inc = () => {
    setValue(value + 1)
  }
  const dec = () => {
    setValue(value - 1)
  }
  return [value, inc, dec]
}

function useForm(initial) {
  const [values, setValues] = useState(initial)

  const onChange = (evt) => {
    const { name, value } = evt.target
    setValues({ ...values, [name]: value })
  }

  return [values, onChange]
}

function useLS(key, value) { // work just like `useState('foobar', [1,2,3])`
  // window.localStorage.setItem('foobar', JSON.stringify([1, 2, 3]))
  const []
}

export default function App() {
  const quoteOfTheDay = useRandomQuote()
  const [count, inc, dec] = useCount(19)
  const [values, onChange] = useForm({ foo: '', bar: '', baz: '' })

  return (
    <>
      <h2>Custom Hooks</h2>

      <p>{quoteOfTheDay.text}</p>

      <p>{count} <button onClick={inc}>inc</button><button onClick={dec}>dec</button></p>

      <form>
        <input value={values.foo} onChange={onChange} name="foo" placeholder="type foo" /><br />
        <input value={values.bar} onChange={onChange} name="bar" placeholder="type bar" /><br />
        <input value={values.baz} onChange={onChange} name="baz" placeholder="type baz" />
      </form>
    </>
  )
}
