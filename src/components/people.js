import React from 'react'

export default function people() {
    class Person {
        constructor (firstName, age, address) {
            console.log("the class is being created");
            this.firstName = firstName;
            this.age = age;
            this.address = address;
        }
      
      }
      console.log(Person);
      // people1() {
      //   let person1 = new Person();
      //   console.log("person1");
      // }
      
      let person1 = new Person("Dan", 25, "Bauchi");
      let person2 = new Person("Ella", 28, "Lagos");
      let person3 = new Person("Zubby", 30, "Ondo");
      let person4 = new Person("Zinny", 27, "Delta");
      
      console.log(person1, person2, person3, person4)
      
      
  return (
    <div>{Person}</div>
  )
}
