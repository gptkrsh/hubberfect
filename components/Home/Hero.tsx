import Link from 'next/link'
import Image from 'next/image'
// import svg from 'assets/images/hero.svg'

const css = {
  height: 'calc(100vh - 4rem)',
}

function Hero() {
  return (
    <header
      className="flex w-full items-center justify-evenly px-2 font-display md:px-4 lg:px-10 xl:px-16 2xl:px-20"
      style={css}
    >
      <div className="flex w-full flex-col items-center text-center lg:block lg:text-left">
        <div className="mb-5 space-y-2 text-4xl font-black">
          <h1>A hubber's best friend,</h1>
          <h1 className="text-brand-500">Hubberfect!</h1>
        </div>
        <p className="mb-5 max-w-prose p-4 text-lg text-opacity-70 lg:p-0">
          HubberFect is a test EddieHub project, thanks!
        </p>
        <div className="flex flex-row space-x-5 text-lg">
          <Link href="/projects">
            <a className="max-w-max rounded-sm border-4 border-brand-500 bg-brand-500 px-4 py-1 text-white transition-colors hover:bg-opacity-0 hover:text-black">
              <span className="hidden md:inline">Sign</span> Up
            </a>
          </Link>
        </div>
      </div>
      {/* <div className="hidden w-full lg:flex items-center flex-col">
        <Image src={svg} />
      </div> */}
    </header>
  )
}

export default Hero
