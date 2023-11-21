import Hero from "./hero/Hero"
import Nav from "./nav/Nav"

export default function Home() {
  return (
    <>
      <header className="w-full flex items-center justify-center lg:p-7 px-3 top-0 left-0 absolute text-white ">
        <Nav />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <Hero/>

      </main>
    </>
  )
}
