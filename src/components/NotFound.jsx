import React from 'react'
import { Link } from 'react-router-dom';
import { Home } from '../pages/Home';

export const NotFound = () => {
  return (
    <section className='NotFound'>
        <h1>404</h1>
        <p>page not found</p>

        <Link to="/">
            home page
        </Link>      
    </section>
  )
}
