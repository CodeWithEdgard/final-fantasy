
class Person {
  constructor(name, age) {
    this._age = age;
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set age(x) {
    this._age = x;
  }

  get name() {
    return this._name;
  }

  set name(x) {
    this._name = x;
  }
};

class Student extends Person {

  constructor(id, name, age) {
    super(name, age);
    this.id = id;
  }

  sayHi() {
    console.log(`Nome: ${this.name}, Idade: ${this.age}, ID: ${this.id}`);
  }

};


let p = new Student(123, 'Leonardo', 1);
console.log(p);

p.age = 10;
p.name = 'Leonardo Mendes';
p.sayHi();