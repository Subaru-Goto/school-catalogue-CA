/* Using a prefix # for private variables cause error in Code Academy.
Therefore, I use _ instead of # */

class School {
  constructor(name, level, numberOfStudents) {
    /* Add a safety */
    if (!Number.isInteger(numberOfStudents)) {
      throw new Error('Invalid input: numberOfStudents must be set to a Number.');
    }

    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (!Number.isInteger(newNumberOfStudents)) {
      throw new Error('Invalid input: numberOfStudents must be set to a Number.');
    } else {
      this._numberOfStudents = newNumberOfStudents;
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    /* Make sure that input parameter is always an array of string */
    if (!Array.isArray(substituteTeachers)
        || !substituteTeachers.every(teacher => typeof teacher === 'string')) {
      throw new Error('Invalid input: substituteTeachers must be an array of strings.');
    }

    const index = Math.floor(Math.random()*(substituteTeachers.length));
    return substituteTeachers[index];
  }

}

/* Primary */
class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

// Create an primary school instance 
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
// Find a substitute teacher
const listOfSubstituteTeacher = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
// Log who can be a substitute
console.log(School.pickSubstituteTeacher(listOfSubstituteTeacher));


/* Highschool */
class Highschool extends School{
  constructor(name, numberOfStudents, sportsTeam) {
    super(name, 'highschool', numberOfStudents);

    if (!Array.isArray(sportsTeam)
        || !sportsTeam.every(team => typeof team === 'string')) {
      throw new Error('Invalid input: sportsTeam must be an array of strings.');
    }
    this._sportsTeam = sportsTeam; 
  }

  get sportsTeam() {
    console.log(this._sportsTeam);
  }
}

// Create a highschool instance
const alSmith = new Highschool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
// Log sports team
alSmith.sportsTeam
