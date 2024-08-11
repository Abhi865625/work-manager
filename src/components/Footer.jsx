"use client"
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-30 bg-blue-600 text-white mt-5'>
      <div className='flex p-5 justify-around text-center'>
        <div className='text-center flex flex-col items-center'>
          <h1 className='text-3xl'>Welcome to work manager</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, ullam?</p>
        </div>
        <div>
          <h1>Important Links</h1>
          <ul>
            <li><Link href={'#!'}>Facebook</Link></li>
            <li><Link href={'#!'}>Youtube</Link></li>
            <li><Link href={'#!'}>Twitter</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer