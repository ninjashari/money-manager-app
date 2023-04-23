import Bank from "@/libs/Bank"
import Category from "./Category"
import Payee from "./Payee"

class User {
  code: Number
  name: String
  username: String
  password: String
  modifiedAt: Date
  createdAt: Date
  banks: [Bank]
  categories: [Category]
  payees: [Payee]

  constructor(
    code: Number,
    name: String,
    username: String,
    password: String,
    modifiedAt: Date,
    createdAt: Date,
    banks: [Bank],
    categories: [Category],
    payees: [Payee]
  ) {
    this.code = code
    this.name = name
    this.username = username
    this.password = password
    this.modifiedAt = modifiedAt
    this.createdAt = createdAt
    this.banks = banks
    this.categories = categories
    this.payees = payees
  }
}

export default User
