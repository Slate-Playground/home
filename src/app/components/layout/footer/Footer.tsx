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
              A human-first technology studio focused on building tools that restore clarity, focus, and intentionality in the digital age.
            </p>
            <div className='flex gap-4'>
              <Link
                href='https://twitter.com/slate'
                target='_blank'
                className='hover:opacity-60 text-dark_black/60 dark:text-white/60 hover:text-purple-600 dark:hover:text-purple-400'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link
                href='https://linkedin.com/company/slate'
                target='_blank'
                className='hover:opacity-60 text-dark_black/60 dark:text-white/60 hover:text-purple-600 dark:hover:text-purple-400'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
                  <Link href='#about'>About Slate</Link>
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
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-dark_black dark:text-white'>Contact</p>
              <p className='text-dark_black/60 dark:text-white/60'>
                San Francisco, CA
              </p>
              <p className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                <Link href='mailto:hello@slate.com'>
                  hello@slate.com
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <p className='text-dark_black/60 dark:text-white/60'>
            © 2024 Slate. All rights reserved. Built to be quietly powerful.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
