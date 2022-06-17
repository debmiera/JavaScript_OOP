console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor(name, pets, residence, hobbies) {
      this.name = name;
      this.pets = pets;
      this.residence = residence;
      this.hobbies = hobbies;
    }
  
    addHobby(hobby) {
      this.hobbies.push(hobby);
    }
  
    removeHobby(rmHobby) {
      let foundIdx = this.hobbies.indexOf(rmHobby);
      this.hobbies.splice(foundIdx, 1);
    }
  
    greeting() {
      console.log("Hello fellow person!");
    }
  
   
    toString() {
      return Object.entries(this).toString();
    }
  }

 // Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies);
        this.occupation = occupation;
    }

    greeting() {
        console.log("Hello, I am a coder!");
    }

    static from(person) {
        return new Coder(...Object.values(person));
      }
}

  // Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

 let person = new Person("Deb", 1, "Charleston", ["running", "games"]);
 console.log(person);



 // Exercise 4 Section
 console.log("EXERCISE 4:\n==========\n");

 class Calculator {
     result = 0;
     
     add(a, b) {
        let res;
    
        if (b == undefined) {
          res = this.result + a;
        } else {
          res = a + b;
        }
    
        this.result = res;
        return this.result;
      }
    
      subtract(a, b) {
        let res;
    
        if (b == undefined) {
          res = this.result - a;
        } else {
          res = a - b;
        }
    
        this.result = res;
        return this.result;
      }
    
      multiply(a, b) {
        let res;
    
        if (b == undefined) {
          res = this.result * a;
        } else {
          res = a * b;
        }
    
        this.result = res;
        return this.result;
      }
    
      divide(a, b) {
        let res;
    
        if (b == undefined) {
          res = this.result / a;
        } else {
          res = a / b;
        }
    
        this.result = res;
        return this.result;
      }
    
      display() {
        console.log(this.result);
      }
    }
    
    let calc = new Calculator();

 console.log (calc.add(2, 4));