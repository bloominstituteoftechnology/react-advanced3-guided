import React, { useState, useEffect } from 'react'
import axios from 'axios'

function useRandomQuote() {
  let [quote, setQuote] = useState({})
  useEffect(() => {
    axios.get('http://localhost:9000/api/quotes')
      .then(res => {
        const length = res.data.quotes.length
        const randomNum = Math.floor(Math.random(length) * length)
        const randomQuote = res.data.quotes[randomNum]
        setQuote(randomQuote)
      })
  }, [])
  return quote
}

function useLS(key, value) {
  const [valueLS, setValueLS] = useState(() => {
    const item = window.localStorage.getItem(key)
    return JSON.parse(item) || value
  })
  const setValue = (value) => {
    const stringifiedValue = JSON.stringify(value)
    window.localStorage.setItem(key, stringifiedValue)
    setValueLS(value)
  }
  return [valueLS, setValue]
}

function useForm(key, keys) {
  const [form, setForm] = useLS(key, keys)
  const onChange = ({ target: { name, value } }) =>
    setForm({ ...form, [name]: value })
  return [form, onChange]
}

export default function App() {
  const [form, onChange] = useForm('form', { foo: '', bar: '', baz: '' })
  const quote = useRandomQuote()
  return (
    <form>
      <h2>Custom Hooks {quote.text}</h2>
      <input onChange={onChange} value={form.foo} name="foo" placeholder="type foo" />
      <input onChange={onChange} value={form.bar} name="bar" placeholder="type bar" />
      <input onChange={onChange} value={form.baz} name="baz" placeholder="type baz" />
    </form>
  )
}
