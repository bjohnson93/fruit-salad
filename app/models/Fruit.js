
export class Fruit {
  constructor(data) {
    this.name = data.name
  }

  get fruitTemplate() {
    return `
    <section class="row justify-content-center">
    <div class="col-10 text-center p-4 bg-primary">
      <p class="fs-1 text-light">FRUIT GOES HERE</p>
      <input type="text">
    </div>
  </section>
    `
  }


}

