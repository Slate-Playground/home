'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Header from './components/layout/header'
import Footer from './components/layout/footer/Footer'
import ScrollToTop from './components/scroll-to-top'
import { SlatePassProvider } from '../contexts/SlatePassContext'
import PerformanceOptimizer from './components/shared/PerformanceOptimizer'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning className={inter.className}>
      <body>
        <SlatePassProvider>
          <ThemeProvider
            attribute='class'
            enableSystem={false}
            defaultTheme='light'>
            <PerformanceOptimizer>
              {/* ---------------------Header Starts-----------------  */}
              <Header />
              {/* ---------------------Header Ends-------------------  */}
              {children}
              {/* ---------------------Footer Starts-----------------  */}
              <Footer />
              {/* ---------------------Footer Ends-----------------  */}
              <ScrollToTop />
            </PerformanceOptimizer>
          </ThemeProvider>
        </SlatePassProvider>
      </body>
    </html>
  )
}
