import { signIn } from 'next-auth/react'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav
      className={[
        `font-display text-lg font-semibold`,
        `flex items-center justify-between w-full max-h-16`,
        `py-3 px-2 md:px-4 lg:px-10 xl:px-16 2xl:px-20`,
      ].join(' ')}
    >
      <Link href={'/'}>
        <a
          className={[
            `text-2xl`,
            `m-0`,
            `transition-transform hover:-translate-y-0.5 hover:scale-105`,
          ].join(' ')}
        >
          Hubberfect
        </a>
      </Link>
      <div className={[`inline-flex items-center justify-evenly`].join(' ')}>
        <button
          onClick={() => signIn('github')}
          className={[
            `bg-brand-500`,
            `border-brand-500 border-2`,
            `text-white font-semibold`,
            `transition-colors`,
            `hover:text-brand-500 hover:bg-transparent`,
            `px-2.5 py-0.5`,
            `rounded-sm`,
          ].join(' ')}
        >
          Connect with GitHub
        </button>
      </div>
    </nav>
  )
}
