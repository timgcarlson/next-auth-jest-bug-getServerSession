import { GetServerSideProps } from "next"
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"

export default function GetServerSessionPage() {
  return <h1>Example Page Using getServerSideProps</h1>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )

  console.log("Session:", session)

  return {
    props: {
      session,
    },
  }
}
