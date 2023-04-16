import Category from "./Category"
import Payee from "./Payee"

class Transaction {
  id: Number
  date: Date
  payee: Payee
  status: String
  category: Category
  withdrawal: Number
  deposit: Number
  balance: Number
  notes: String

  constructor(
    id: Number,
    date: Date,
    payee: Payee,
    status: String,
    category: Category,
    withdrawal: Number,
    deposit: Number,
    balance: Number,
    notes: String
  ) {
    this.id = id
    this.date = date
    this.payee = payee
    this.status = status
    this.category = category
    this.withdrawal = withdrawal
    this.deposit = deposit
    this.balance = balance
    this.notes = notes
  }
}

export default Transaction
