'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import HeaderLink from './Navigation/HeaderLink'
import { headerData } from './Navigation/Menudata'
import Logo from './Logo'
import MobileHeader from './Navigation/MobileHeader'
import ThemeToggler from './ThemeToggle'
import { useSlatePass } from '../../../../contexts/SlatePassContext'
import ProfilePicture from '../../shared/ProfilePicture'

const Header = () => {
  const { user: slatePassUser, signOut: slatePassSignOut } = useSlatePass()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const pathname = usePathname()

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  const handleSignOut = () => {
    slatePassSignOut()
  }

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-300`}>
        <div className='container p-3'>
          <nav
            className={`flex items-center py-4 px-6 justify-between transition-all duration-500 ${
              sticky
                ? 'rounded-2xl shadow-2xl bg-white/80 dark:bg-dark_black/80 backdrop-blur-xl border border-white/20 dark:border-white/10'
                : 'rounded-2xl bg-white/40 dark:bg-dark_black/40 backdrop-blur-md border border-white/30 dark:border-white/10'
            } `}>
            <div className='flex items-center'>
              <Logo />
            </div>
            <div className='hidden lg:flex bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-2xl py-3 px-2 border border-white/30 dark:border-white/10 shadow-lg'>
              <ul className='flex gap-0 2xl:gap-1.5'>
                {headerData.map((item, index) => (
                  <HeaderLink key={index} item={item} />
                ))}
              </ul>
            </div>
            <div className='flex items-center gap-2 xl:gap-4'>
              {/* ---------------------Slate Pass Authentication-----------------  */}
              {slatePassUser ? (
                <div className='hidden lg:flex gap-4'>
                  <button
                    onClick={() => handleSignOut()}
                    className='flex group font-medium items-center gap-2 transition-all duration-300 ease-in-out text-white px-5 py-2.5 bg-gradient-to-r from-purple-600 to-emerald-600 rounded-full hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 border border-purple-500/20'>
                    Sign Out
                    <Icon icon='solar:logout-outline' width='20' height='20' />
                  </button>
                  <div className='relative group'>
                    <ProfilePicture
                      user={slatePassUser ?? {}}
                      size="md"
                      className='cursor-pointer ring-2 ring-white/20 hover:ring-purple-500/30 transition-all duration-300'
                    />
                    <p className='absolute w-fit text-sm text-center z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white/90 dark:bg-dark_black/90 backdrop-blur-md text-dark_black/80 dark:text-white/80 p-3 min-w-32 rounded-xl shadow-2xl top-full left-1/2 transform -translate-x-1/2 mt-3 border border-white/20 dark:border-white/10'>
                      {slatePassUser.user_metadata?.name || slatePassUser.email}
                    </p>
                  </div>
                </div>
              ) : (
                <div className='flex items-center gap-3'>
                  <Link
                    href={'/slate-pass'}
                    className='hidden lg:flex items-center gap-2 bg-transparent border border-purple-500/30 dark:border-purple-400/30 text-purple-600 dark:text-purple-400 px-5 py-2.5 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 font-medium'>
                    Slate Pass
                  </Link>
                </div>
              )}

              {/* ---------------------Light/Dark Mode button-------------------- */}
              <ThemeToggler />

              <div className='hidden max-lg:flex'>
                <button 
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className='p-2 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'>
                    <path
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeMiterlimit='10'
                      strokeWidth='1.5'
                      d='M4.5 12h15m-15 5.77h15M4.5 6.23h15'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* ------------------------- Mobile sidebar starts ------------------------- */}
        {sidebarOpen && (
          <div
            className='fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-40'
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white/95 dark:bg-dark_black/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 max-w-xs ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50 border-l border-white/20 dark:border-white/10`}>
          <div className='flex items-center justify-between p-6 border-b border-white/20 dark:border-white/10'>
            <h2 className='text-xl font-bold'>Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label='Close mobile menu'
              className='p-2 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'>
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='p-6'>
            <ul className='flex flex-col gap-2'>
              {headerData.map((item, index) => (
                <MobileHeader key={index} item={item} />
              ))}
              <div className='flex flex-col items-center gap-4 px-2 mt-6 pt-6 border-t border-white/20 dark:border-white/10'>
                {slatePassUser ? (
                  <>
                    <button
                      onClick={() => handleSignOut()}
                      className='flex w-full group font-medium items-center gap-3 transition-all duration-300 ease-in-out text-white px-5 py-3 bg-gradient-to-r from-purple-600 to-emerald-600 rounded-xl hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105'>
                      Sign Out
                      <Icon
                        icon='solar:logout-outline'
                        width='20'
                        height='20'
                      />
                    </button>
                    <div className='group flex gap-3 items-center w-full border border-purple-500/30 dark:border-purple-400/30 px-5 py-3 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300'>
                      <ProfilePicture
                        user={slatePassUser ?? {}}
                        size="sm"
                        className='cursor-pointer ring-2 ring-purple-500/20'
                      />
                      <p className='group-hover:text-purple-600 dark:group-hover:text-purple-400 text-dark_black dark:text-white w-full capitalize font-medium'>
                        {slatePassUser.user_metadata?.name || slatePassUser.email}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      href={'/slate-pass'}
                      className='w-full flex items-center justify-center gap-2 border border-purple-500/30 dark:border-purple-400/30 text-purple-600 dark:text-purple-400 px-5 py-3 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 font-medium'>
                      Slate Pass
                    </Link>
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
