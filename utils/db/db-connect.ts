import clientPromise from "../mongodb"

export const dbConnect = async (dbName: string) => {
  try {
    const client = await clientPromise
    const db = client.db(dbName)
    return db
  } catch (e) {
    console.error(e)
    return undefined
  }
}
