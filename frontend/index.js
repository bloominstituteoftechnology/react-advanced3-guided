import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import CustomHooks from './components/CustomHooks'
import './styles/reset.css'
import './styles/styles.css'


const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <h1>3.1 - Advanced React</h1>
    <nav>
      <NavLink to="/">Custom Hooks</NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<CustomHooks />} />
    </Routes>
  </BrowserRouter>
)
