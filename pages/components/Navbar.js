import React from 'react'

export default function Navbar() {
    return (
        <nav className='p-5 bg-slate-500'>
            <div className='flex justify-between items-center'>

                <img className='h-10 cursor-pointer' src='https://assets.sb-cd.com/static/desktop/Images/logo_v5@2x.png' />

                <a target="_blank" href='https://www.buymeacoffee.com/manuellara'>
                    <img className='h-10' src='https://upcdn.io/FW25akz6LiLRaZC5uR1Sj1z' />
                </a>

            </div>
        </nav>
    )
}
