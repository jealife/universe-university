
export default function Hero() {
  return (
    <section className="hero min-h-screen   bg-slate-950 w-full bg-hero bg-no-repeat bg-cover bg-fixed bg-center ">
      <div className="overlay grid place-items-center w-full h-screen bg-black/50 px-2">

        <div className="hero-content max-w-3xl   text-white flex flex-col items-center gap-5 text-center">
          <h1 className='lg:text-7xl text-4xl font-bold capitalize'>
            shaping the future through education and innovation
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, tempore voluptas. Asperiores soluta animi sunt!
          </p>
          <div className="btn-hero flex gap-5 py-7 flex-wrap">
            <button className='w-max px-6 py-2 text-lg outline-[0.5px] bg-[#0540F2] rounded-full hover:bg-blue-500 duration-500  hover:outline outline-offset-2  hover:outline-white '>Get started</button>
            <button className='w-max px-6 py-2 text-lg outline outline-[0.5px] outline-offset-2 hover:outline-white  hover:bg-white hover:text-blue-700  duration-500 rounded-full'>Learn More</button>
          </div>
        </div>

      </div>
    </section>
  )
}
