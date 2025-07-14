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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://slate-playground.github.io/home/" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google-site-verification" content="iRULVkB_YtQUDw3VuVHEm2NMbCAf7xNLwC04iawfkSM" />
        <meta name="description" content="Slate Link is a minimalist offline-first companion device built to help you think, focus, and live better. A tiny emotional computer built to be quietly powerful." />
        <meta property="og:title" content="Slate Link - A Minimalist Offline-First Companion Device" />
        <meta property="og:description" content="Slate Link is a minimalist offline-first companion device built to help you think, focus, and live better. A tiny emotional computer built to be quietly powerful." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://slate-playground.github.io/home/" />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Slate Link - A Minimalist Offline-First Companion Device" />
        <meta name="twitter:description" content="Slate Link is a minimalist offline-first companion device built to help you think, focus, and live better. A tiny emotional computer built to be quietly powerful." />
        <meta name="twitter:image" content="/favicon.ico" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Slate Link",
              "url": "https://slate-playground.github.io/home/",
              "logo": "/favicon.ico",
              "sameAs": [
                "https://x.com/finitecode"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://slate-playground.github.io/home/",
              "name": "Slate Link",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://slate-playground.github.io/home/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </head>
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
