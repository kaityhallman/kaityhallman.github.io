import React from 'react';
import kaity from '../assets/kaity.jpg'; 

export default function Header() {
  return (
    <header>
      <img src={kaity} alt='Kaity smirking at the camera' className='kaity'/>
      <h1>Hi, I'm Kaity</h1>
    </header>
  );
}