import User from "@/libs/User"
import { dbConnect } from "./db-connect"

const dbName = "money"
const collectionName = "users"

export const addUser = async (userData: User) => {
  try {
    const db = await dbConnect(dbName)
    const collection = db?.collection(collectionName)
    const result = await collection?.insertOne(userData)
    return result
  } catch (e) {
    console.error(e)
    return undefined
  }
}
