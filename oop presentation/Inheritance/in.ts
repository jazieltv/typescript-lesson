class Character {
  public name: string;
  public damage: number;

  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }

  public talk(): void {
    console.log("Says something ...");
  }
}

//here the child class is Orc and it will INHERIT
class Orc extends Character {
  public weapon: string;

  constructor(name: string, damage: number, weapon: string) {
    super(name, damage);

    this.weapon = weapon;
  }

  public attack(): void {
    console.log(`Attacks his target with his ${this.weapon}.`);
  }
}

//mechanism that alows you to eliminate redundant code and also have cpde reuseability
