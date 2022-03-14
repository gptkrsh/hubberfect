import { signOut, useSession } from "next-auth/react"

export function Home() {
  const { data: session } = useSession()

  return (
    <>
      Signed in as {session?.user?.email}, <button onClick={() => signOut()}>Logout</button>
    </>
  )
}
