import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <div className='min-h-screen bg-slate-50'>

            <Head>
                <title>SpankBang downloader</title>
                <meta name='description' content='SpankBang downloader'/>
            </Head>

            <Navbar />

            <main>
                {children}
            </main>

        </div>
    )
}