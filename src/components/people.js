import React from 'react'

export default function people() {
    class Person {
        constructor (firstName, age, address) {
            console.log("the class is being created");
            this.firstName = firstName;
            this.age = age;
            this.address = address;
        }

        increasePersonAge() {
            this.age = Number(this.age)+ 1
        }

        changePersonName(newName) {
            this.firstName = newName

        }
        changePersonAddress(newAddess){
            this.address = newAddess
        }
        getBirthYear(){
            new Date().getFullYear() - this.age 
        }
      
      }

      firstPerson.changePersonName('Mike')

      console.log(Person);
      // people1() {
      //   let person1 = new Person();
      //   console.log("person1");
      // }
      
      const firstPerson = new Person("Dan", 25, "Bauchi");
      const secondPerson = new Person("Ella", 28, "Lagos");
      const thirdPerson = new Person("Zubby", 30, "Ondo");
      const fourthPerson = new Person("Zinny", 27, "Delta");
      
      console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)

      
      
  return (
    <div>{Person}</div>
  )
}
