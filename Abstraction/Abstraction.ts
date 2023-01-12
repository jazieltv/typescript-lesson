class Character {
  public name: string;
  public damage: number;
  public attackSpeed: number;

  constructor(name: string, damage: number, speed: number) {
    this.name = name;
    this.damage = damage;
    this.attackSpeed = speed;
  }

  public damagePerSecond(): number;

  public damagePerMinute(): number;
}

class Goblin extends Character {
  constructor(name: string, damage: number, speed: number) {
    super(name, damage, speed);
  }

  public damagePerSecond(): number {
    return this.damage * this.attackSpeed;
  }

  public damagePerMinute(): number {
    return this.damage * this.attackSpeed * 60;
  }
}

//the process of hiding the internal details of an application from the outer world(ONLY SHOWING THE ESSENTIAL FEATURES)
//dvd player examples---when pressing a button on it, it plays/pauses/etc... and we dont see the
//                      whole process and details that go into making it do that specific task
//  so in OOP terms we are hiding the properties and methods
//reduce the impact of change and makes the interface similar(less properties and methods to understand)
