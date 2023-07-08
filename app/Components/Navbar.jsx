'use client'

import Image from "next/image"
import Link from "next/link"
import logo from '../../public/logo.jpeg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

  return (
    <nav className="w-full fixed z-[100] bg-[#ecf0f3] shadow-xl h-20">
        <div className="flex items-center sm:justify-start justify-between h-full w-full">
            <Link href="/">
                <Image 
                src={logo}
                alt="logo"
                width='80'
                height='80'
                priority
                />
            </Link>
            <div className="mr-6">
                <AiOutlineMenu onClick={handleMenu} className="sm:hidden text-2xl cursor-pointer" />
            </div>
             
        </div>
        {/* Mobile Version Listed Items */}
        <div className={
            menuOpen ? 'left-0 top-0 w-[65%] h-screen relative bg-[#ecf0f3] ease-in duration-500 flex flex-col justify-start z-50': 'hidden'
        }>
            <div className="flex absolute top-6 w-full justify-end items-center">
                <AiOutlineClose onClick={handleMenu} className="text-2xl text-black mb-4" />
            </div>
            <ul className="flex flex-col justify-center items-center mt-20">
                <li className="text-2xl text-black mb-4">
                    <Link href="/resources">Resources</Link>
                </li>
                <li className="text-2xl text-black mb-4">
                    <Link href="/services">Services</Link>
                </li> 
                <li className="text-2xl text-black mb-4">
                    <Link href="/plans&pricing">Plans & Pricing</Link>
                </li>
                <li className="text-2xl text-black mb-4">
                    <Link href="/upcomingevents">Upcoming Events</Link>
                </li>
                <li className="text-2xl text-black mb-4">
                    <Link href="/scantickets">Scan tickets</Link>
                </li>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar