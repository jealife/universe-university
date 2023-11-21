
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='w-full max-w-7xl grid grid-cols-4 py-24 px-12'>
            <div className="univer text-white flex flex-col gap-5">
                <h2 className='text-5xl font-bold'>Univerz</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, totam?</p>
            </div>
            <div className="links">
                <h3>Quicks links</h3>
                <div className="links">
                    <Link> Home </Link>
                    <Link> About Us</Link>
                    <Link> Our Service</Link>
                    <Link> Contat Us</Link>
                </div>
            </div>
            <div className="links">
                <h3>Pages</h3>
                <div className="links">
                    <Link> Our Blog </Link>
                    <Link> Our Team</Link>
                    <Link> Testimonial</Link>
                    <Link> CTA</Link>
                </div>
            </div>
            <div className="links">
                <h3>Follow Us</h3>
                <div className="links">
                    <Link> Our Blog </Link>
                    <Link> Our Team</Link>
                    <Link> Testimonial</Link>
                    <Link> CTA</Link>
                </div>
            </div>

        </div>
    )
}
