import clientPromise from "@/utils/mongodb"
import { InferGetServerSidePropsType } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>Welcome</h1>
      {isConnected ? (
        <h1 className="text-3xl font-bold underline">Connected!</h1>
      ) : (
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      )}
    </>
  )
}

export async function getServerSideProps(context: any) {
  try {
    const client = await clientPromise
    const db = client.db("money")
    console.log(db)
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
