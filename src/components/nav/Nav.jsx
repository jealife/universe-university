
import { Navigation } from './Navigation'
import './nav.css'
import a from 'next/link'

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/blog' },
]

function Nav() {
    return (
        <nav className=' flex  lg: flex-row lg:justify-between items-center w-full max-w-6xl justify-center py-5'>
            <menu className='lg:flex lg:flex-row flex-col gap-3  items-center  hidden' >
                <Navigation  navLinks={navLinks} />
            </menu>

            <div className="logo">
                <a href='/' > <h2 className='font-bold text-2xl'>Univerz University</h2> </a>
            </div>
 
            <div className='btn_nav lg:flex lg:flex-row flex-col gap-3 hidden'>
                <a href='/login' className='btn_link font-semibold text-white  duration-300 hover:text-[#799aff] '>Courses 
                </a>
                <a href='/login' className='btn_link font-semibold text-white duration-300 hover:text-[#799aff] '>blog 
                </a>
            </div>
        </nav>
    )
}

export default Nav