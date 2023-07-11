const x: Number = 100;
console.log(<String>(<unknown>x));

class Person {
  public constructor(public name: String) {
    console.log(this.name);
  }
  protected getName() {
    return this.name;
  }
  public kd() {
    return this.getName();
  }
}

class KK extends Person {
  constructor(public name: String, public age: Number) {
    super(name);
    console.log(super.getName());
  }
}

class JJ extends KK {
  constructor(public name: String, public age: Number) {
    super(name, age);
  }
}

const classData = new Person("kish");
