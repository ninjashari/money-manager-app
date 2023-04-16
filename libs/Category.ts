class Category {
  code: Number
  name: String
  subCategory: Category

  constructor(code: Number, name: String, subCategory: Category) {
    this.code = code
    this.name = name
    this.subCategory = subCategory
  }
}

export default Category
