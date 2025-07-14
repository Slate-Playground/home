import React from 'react'
import Link from 'next/link'
import Logo from '../header/Logo'

const Footer = () => {
  return (
    <footer className='xl:pt-20 pb-6'>
      <div className='container'>
        <div className='flex flex-col xl:flex-row py-16 gap-10 justify-between border-b border-dark_black/10 dark:border-white/10'>
          <div className='flex flex-col gap-6 max-w-md'>
            <Logo />
            <p className='opacity-60 text-dark_black/70 dark:text-white/70'>
              Slate Link is a minimalist, offline-first companion device designed for clarity, focus, and intentional living in the digital age.
            </p>
            <div className='flex gap-4 mt-2'>
              <Link
                href='https://x.com/finitecode'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:opacity-60 text-dark_black/60 dark:text-white/60 hover:text-purple-600 dark:hover:text-purple-400'
                aria-label='X (Twitter)'
              >
                {/* X (Twitter) icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className='grid sm:grid-cols-3 gap-6'>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-dark_black dark:text-white'>Product</p>
              <ul className='flex flex-col gap-3'>
                <li className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                  <Link href='#features'>Features</Link>
                </li>
                <li className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                  <Link href='#technology'>Technology</Link>
                </li>
                <li className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                  <Link href='#pricing'>Pricing</Link>
                </li>
                <li className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                  <Link href='#faq'>FAQ</Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-dark_black dark:text-white'>Company</p>
              <ul className='flex flex-col gap-3'>
                <li className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                  <Link href='#about'>About Slate Link</Link>
                </li>
                <li className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                  <Link href='/contact'>Contact</Link>
                </li>
                <li className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                  <Link href='/privacy-policy'>Privacy Policy</Link>
                </li>
                <li className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                  <Link href='/terms-and-conditions'>Terms</Link>
                </li>
              </ul>
            </div>
            {/* Removed Contact section with address and email */}
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <p className='text-dark_black/60 dark:text-white/60'>
            © 2025 Slate Link. All rights reserved. Built to be quietly powerful. <br />
            Monday, 14 July 2025
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
