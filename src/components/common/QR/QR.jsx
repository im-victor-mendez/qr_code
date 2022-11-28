import './QR.scss'
import React from 'react'

function QR({ img, title, description }) {
  return <section className='qr'>
    <img src={img} alt="" />

    <div className='qr-text'>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  </section>
}

export default QR