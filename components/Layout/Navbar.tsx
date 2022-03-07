import Link from 'next/link'

export function Navbar() {
  return (
    <nav
      className={[
        /** Font & Text */
        `font-display text-lg font-semibold`,
        /** Flex */
        `flex items-center justify-between w-full max-h-14`,
        /** Padding */
        `py-3 px-2 md:px-4 lg:px-10 xl:px-16 2xl:px-20`,
      ].join(' ')}
    >
      <Link href={'/'}>
        <a
          className={
            'm-0 transition-transform hover:-translate-y-0.5 hover:scale-110'
          }
        >
          Hubberfect!
        </a>
      </Link>
      <div className="inline-flex items-center justify-evenly"></div>
    </nav>
  )
}
