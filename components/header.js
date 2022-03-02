import Link from 'next/link'
import { useState } from 'react'
import { locators } from '../locators/header.locator'; 

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute z-10 top-0 left-0 h-screen w-screen bg-indigo-900 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-indigo-900 h-20">
                <a data-testid={locators.homeMobile} className="text-md text-white font-semibold" href="/">VIDEO APP</a>
            </div>
            <div className="flex flex-col ml-4">
                    <Link href="/funzone">
                        <a data-testid={locators.funzoneMobile} className="block mt-4 lg:inline-block lg:mt-0 mr-4" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Funzone</a>
                    </Link>
                    <Link href="/testimoniales">
                        <a data-testid={locators.testimonialesMobile} className="block mt-4 lg:inline-block lg:mt-0" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>Testimoniales</a>
                    </Link>
            </div>  
        </div>
    )
}

export default function Header() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-4/12 flex items-center">
                <a data-testid={locators.home} className="text-2xl text-white font-semibold" href="/">VIDEO APP</a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <Link href="/funzone">
                        <a data-testid={locators.funzone} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Funzone</a>
                    </Link>
                    <Link href="/testimoniales">
                        <a data-testid={locators.testimoniales} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">Testimoniales</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}