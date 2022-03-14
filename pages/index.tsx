import { Home } from 'components/Home'
import { Landing } from 'components/Landing'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'

const Index: NextPage = () => {
  const { data: session } = useSession()

  if (session) {
    return <Home />
  } else {
    return <Landing />
  }
}

export default Index
