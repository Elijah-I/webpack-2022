class Car {
  constructor(name) {
    this.name = name
  }
  get info() {
    return this.name
  }
}

const audi = new Car("Audi")
console.log(audi.info)
