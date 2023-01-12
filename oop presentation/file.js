var restaurantWorkers = /** @class */ (function () {
  function restaurantWorkers(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  restaurantWorkers.prototype.giveInfo = function () {
    return this.name + " is making " + this.salary;
  };
  return restaurantWorkers;
})();
var restaurantWorker = new restaurantWorkers("Jaziel", 28);
console.log(restaurantWorker);
