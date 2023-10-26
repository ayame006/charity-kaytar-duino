'use client'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks, resNavLinks } from '@/constants'
import { useState } from 'react'
import Button from './Button'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <header className='lg:flexStart flexBetween max-container padding-container relative z-30 py-5 gap-[65px]'>
        <Link href='/'>
            <Image src='/logo.svg' alt='logo kaytar duino' width={176} height={53} />
        </Link>

        <ul className='hidden gap-12 lg:flex'>
            {navLinks.map((link) => (
                <Link className="text-font-small flexCenter pb-1.5 hover:text-primary-green" href={link.href} key={link.key}>
                    {link.text}
                </Link>
            ))}
        </ul>
        
        <div className="cursor-pointer pr-4 z-10 lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {
                menuOpen ? <Image className='fixed right-10 top-8' src='/Close.svg' width={32} height={32} alt='#' /> : <Image src='/menu.svg' width={32} height={32} alt='#' />
            }
        </div>

        {menuOpen && (
            <div
            className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50"
            onClick={() => setMenuOpen(false)}
            ></div>
        )}
                
            {
                menuOpen && (
                    <ul className="fixed flex flex-col justify-start items-start gap-8 top-0 right-0 w-[311px] h-screen bg-white py-20">
                        {
                            resNavLinks.map((link) => (
                                <Link className="text-font-medium text-gray-dark px-4" href={link.href} key={link.key}>
                                    {link.text}
                                </Link>
                            ))
                        }
    
                        <div className="px-4 absolute bottom-10">
                            <div className="flexStart gap-4">
                                <Link href='/'><Image src='/whatsapp.svg' alt="#" width={24} height={24} /></Link>
                                <Link href='/'><Image src='/telegram.svg' alt="#" width={24} height={24} /></Link>
                                <Link href='/'><Image src='/instagram.svg' alt="#" width={24} height={24} /></Link>
                            </div>
                            <Button type="button" title="Контакты" variant="btn_contact" />
                        </div>
                    </ul>
                    )
            }
    </header>
  )
}

export default Header
