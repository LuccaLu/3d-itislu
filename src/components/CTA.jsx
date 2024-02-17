import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Want to hire me immediately?  <br className='sm:block hidden'/>
        Let's create the impossible together.</p>
        <Link to='/contact' className='btn'>
            Contact
        </Link>
    </section>
    ) 
}

export default CTA