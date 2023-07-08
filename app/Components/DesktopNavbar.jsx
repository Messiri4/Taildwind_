import {slArrowUp} from 'react-icons/sl'
import Link from "next/link";

const DesktopNavbar = () => {
  return (
    <div className="fixed hidden sm:flex w-full bottom-10 z-40 text-center items-center justify-center">
        <div className="bg-black flex items-center text-white rounded-full mx-auto max-w-[660px] px-3 py-5">
            <ul className='flex gap-10 justify-around text-xl items-center'>
                <li className='rounded-full bg-gray-700 p-3 flex-nowrap'>
                   <slArrowUp className="text-2xl mx-auto cursor-pointer" />
                </li>
                <Link href="/resources">
                    <li className='hover:bg-white hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer'>
                        Resources
                    </li>
                </Link>
                <Link href="/resources">
                    <li className='hover:bg-white hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer'>
                        Services
                    </li>
                </Link>
                <Link href="/resources">
                    <li className='hover:bg-white hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer'>
                        Pricing
                    </li>
                </Link>
                <Link href="/resources">
                    <li className='hover:bg-white hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer'>
                        Upcoming Events
                    </li>
                </Link>
            </ul>

        </div> 

    </div>
  )
}

export default DesktopNavbar