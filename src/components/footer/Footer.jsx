

export default function Footer() {
    return (
        <div className='w-full max-w-7xl grid lg:grid-cols-4 grid-cols-1 gap-4 py-24 px-12'>
            <div className="univer text-white flex flex-col gap-5">
                <h2 className='text-5xl font-bold'>Univerz</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, totam?</p>
            </div>
            <div className="links  gap-5 flex felx-col">
                <h3 className="text-white font-semibold text-lg">Quicks links</h3>
                <div className="links flex flex-col text-white">
                    <a href="#"> Home </a>
                    <a href="#"> About Us</a>
                    <a href="#"> Our Service</a>
                    <a href="#"> Contat Us</a>
                </div>
            </div>
            <div className="links  gap-5 flex felx-col">
                <h3 className="text-white font-semibold text-lg">Pages</h3>
                <div className="links flex flex-col text-white">
                    <a href="#"> Our Blog </a>
                    <a href="#"> Our Team</a>
                    <a href="#"> Testimonial</a>
                    <a href="#"> CTA</a>
                </div>
            </div>
            <div className="links gap-5 flex felx-col">
                <h3 className="text-white font-semibold text-lg">Follow Us</h3>
                <div className="links flex flex-col text-white">
                    <a href="#"> Our Blog </a>
                    <a href="#"> Our Team</a>
                    <a href="#"> Testimonial</a>
                    <a href="#"> CTA</a>
                </div>
            </div>

        </div>
    )
}
