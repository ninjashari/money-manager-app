import Currency from "./Currency"
import Transaction from "./Transaction"

class Bank {
  id: Number
  name: String
  type: String
  status: String
  initialBalance: Number
  currentBalance: Number
  openingDate: Date
  closingDate: Date
  currency: Currency
  createdAt: Date
  modifiedAt: Date
  description: String
  notes: String
  transactions: [Transaction]

  constructor(
    id: Number,
    name: String,
    type: String,
    status: String,
    initialBalance: Number,
    currentBalance: Number,
    openingDate: Date,
    closingDate: Date,
    currency: Currency,
    createdAt: Date,
    modifiedAt: Date,
    description: String,
    notes: String,
    transactions: [Transaction]
  ) {
    this.id = id
    this.name = name
    this.type = type
    this.status = status
    this.initialBalance = initialBalance
    this.currentBalance = currentBalance
    this.openingDate = openingDate
    this.closingDate = closingDate
    this.currency = currency
    this.createdAt = createdAt
    this.modifiedAt = modifiedAt
    this.description = description
    this.notes = notes
    this.transactions = transactions
  }
}

export default Bank
