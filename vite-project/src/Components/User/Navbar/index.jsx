import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function index() {
  return (
    <>
    <section id="navbar">
      <div className="left">
       <Link>Start Bootstrap</Link>
       <Link>Home</Link>
       <Link> About</Link>
       <Link> Shop</Link>
       
      </div>
      <div className="right">
        <button>CART</button>
      </div>
    </section>
    <section id="banner">
      <h1>SHOP IN STYLE</h1>
    </section>
    </>
  )
}

export default index


