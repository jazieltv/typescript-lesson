class restaurantWorkers {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  giveInfo() {
    return this.name + " is making " + this.salary;
  }
}
let restaurantWorker = new restaurantWorkers("Jaziel", 28);
