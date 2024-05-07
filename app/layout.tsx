import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { VisualEditing, groq } from 'next-sanity'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { sanitize } from '@/util/src/sanitize'
import { sanityFetch } from '@/sanity/lib/fetch'
import { ROOT_QUERYResult } from '@/sanity.types'
import NavBar from './NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const ROOT_QUERY = groq`*[_type == 'settings'][0]`
export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const data = await sanityFetch<ROOT_QUERYResult>({ query: ROOT_QUERY })

  const defaultData = {
    backgroundColor: '#000000',
    backgroundAltColor: '#000000',
    foregroundColor: '#ffffff',
    accentColor: '#ffffff',
    accentAltColor: '#ffffff',
    bodyFont: {
      name: 'serif',
      linkType: 'link',
      linkSource: ''
    },
    headingFont: {
      name: 'serif',
      linkType: 'link',
      linkSource: ''
    }
  }

  const style = sanitize({
    '--bg': data?.backgroundColor ?? defaultData.backgroundColor,
    '--bg2': data?.backgroundAltColor ?? defaultData.backgroundAltColor,
    '--fg': data?.foregroundColor ?? defaultData.foregroundColor,
    '--accent': data?.accentColor ?? defaultData.accentColor,
    '--accent2': data?.accentAltColor ?? defaultData.accentAltColor,
    '--body': data?.bodyFont?.name ?? defaultData.bodyFont.name,
    '--heading': data?.headingFont?.name ?? defaultData.headingFont.name,
    '--topbar': '60px'
  })

  return (
    <html lang='en' style={style}>
      <head>
        {data?.bodyFont?.linkSource && (
          <link rel='stylesheet' href={data.bodyFont!.linkSource} />
        )}
        {data?.headingFont?.linkSource && (
          <link rel='stylesheet' href={data.headingFont!.linkSource} />
        )}
      </head>
      <body className={`bg-bg font-body text-fg ${inter.className}`}>
        <NavBar />
        {draftMode().isEnabled && (
          <div>
            <a className='p-4 bg-blue-300 block' href='/api/disable-draft'>
              Disable preview mode
            </a>
          </div>
        )}
        {children}
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  )
}