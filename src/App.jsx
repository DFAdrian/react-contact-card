import React from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {

  return (
    <article className='card'>
      <Header />
      <Body />
      <Footer/>
    </article>
  )
}

export default App
