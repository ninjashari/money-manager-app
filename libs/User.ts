import Bank from "@/libs/Bank"

class User {
  code: Number
  name: String
  username: String
  password: String
  modifiedAt: Date
  createdAt: Date
  banks: [Bank]

  constructor(
    code: Number,
    name: String,
    username: String,
    password: String,
    modifiedAt: Date,
    createdAt: Date,
    banks: [Bank]
  ) {
    this.code = code
    this.name = name
    this.username = username
    this.password = password
    this.modifiedAt = modifiedAt
    this.createdAt = createdAt
    this.banks = banks
  }
}
