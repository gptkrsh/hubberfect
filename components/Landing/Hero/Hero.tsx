import Typist from 'react-typist'

export function Hero() {
  return (
    <header
      className={[
        `flex items-center justify-center`,
        `font-bold font-display`,
      ].join(' ')}
      style={{ height: 'calc(100vh - 4rem)' }}
    >
      <h1 className={[`text-8xl text-center`].join(' ')}>
        Another name for
        <Typist className={[`my-4`, `text-brand-500`].join(' ')}>
          <span>Community</span>
        </Typist>
      </h1>
    </header>
  )
}
