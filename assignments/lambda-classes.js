// CODE here for your Lambda Classes

class Person{
    constructor(personAttributes){  
    this.name = personAttributes.name;  
    this.age = personAttributes.age;  
    this.location = personAttributes.location  
    }
  
    speak(){  
     return `Hello, my name is ${this.name}, I am from ${this.location}.`;  
     }  
  }  
     
  class Instructor extends Person{  
    constructor(instructorAttributes){  
    super(instructorAttributes);  
    this.specialty = instructorAttributes.specialty;  
    this.favLanguage = instructorAttributes.favLanguage;  
    this.catchPhrase = instructorAttributes.catchPhrase;  
    
      }
     
      demo(subject) {  
   return `Today we are learning about ${subject}`;  
    }
     
      grade(student,subject){  
    return `${student.name} receives a perfect score on ${subject}`  
     }
    }
  
     
  class Student extends Person{  
    constructor(studentAttributes){  
    super(studentAttributes);  
    this.previousBackground = studentAttributes.previousBackground;  
    this.className = studentAttributes.className;  
    this.favSubjects = studentAttributes.favSubjects;  
     }  
    listsSubjects() {  
    return `${this.favSubjects}`;  
     }  
    prAssignment(subject) {  
    return `${this.name} has submitted a PR for ${subject}.`;  
     }  
    sprintChallenge() {  
    return `${this.name} has begun a sprint challenge on ${this.className}.`;  
   }  
  }  
     
  class PM extends Instructor{  
    constructor(pmAttributes){  
    super(pmAttributes);  
    this.gradClassName = pmAttributes.gradClassName;  
    this.favInstructor = pmAttributes.favInstructor;  
    }  
    standUp(channel) {  
      return `${this.name} announces to ${channel}, @channel standy times!`;  
    }
  
    debugsCode(student, subject) {  
      return `${this.name} debugs {student.name}'s code on ${subject}`;  
    }  
  }
     
      const mike = new Instructor({  
      name: 'Mike',  
      age:22,  
      location: 'San Diego',  
      specialty: 'Kung fu',  
      favLanguage: 'Javascript',  
      catchPhrase: 'I have a dream',  
    });
     
      const luke = new Instructor({  
      name: 'Luke',  
      age:20,  
      location: 'Tatooine',  
      specialty: 'The Force',  
      favLanguage: 'Javascript',  
      catchPhrase: 'Whats that flashing?',  
    });
  
     
    const sally = new Student({  
      name: 'Sally',  
      age:25,  
      location: 'San Francisco',  
      specialty: 'Computer Science',  
      favLanguage: 'Python',  
      catchPhrase: 'Something something',  
      previousBackground: "Waitress",  
      className: "CS132",  
      favSubjects: ["Html","CSS","Javascript"],  
    });
  
     
    const arnold = new Student({  
      name: 'Arnold',  
      age:50,  
      location: 'Austria',  
      specialty: 'Weight lifting',  
      favLanguage: 'Austrian',  
      catchPhrase: 'Get to the choppa',  
      previousBackground: "Bodybuilder",  
      className: "CS1114",  
      favSubjects: ["Math","Biology"],  
    });
  
     
    const fred = new PM({  
      name: 'fred',  
      age:35,  
      location: 'Hawaii',  
      specialty: 'Software development',  
      favLanguage: 'Ruby',  
      catchPhrase: 'Id rather be surfing',  
      gradClassName: "CS1",  
      favInstructor: "Luke",  
    })
       
    const ashley = new PM({  
      name: 'Ashley',  
      age:27,  
      location: 'Miami',  
      specialty: 'Chewing gum',  
      favLanguage: 'HTML',  
      catchPhrase: 'Check out my Instagram',  
      gradClassName: "CS450",  
      favInstructor: "John",  
    })
  
   