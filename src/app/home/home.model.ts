export class User {
    id: string;
    firstname: string;
    lastname: string;
    course: string[];
    section: number[];
    dateEnrolled: Date;
    gwa: number;
    isGraduated: boolean = false;
  
    constructor(
      id: string = '',
      firstname: string = '',
      lastname: string = '',
      course: string[] = [],
      section: number[] = [],
      dateEnrolled: Date = new Date(),
      gwa: number = 0,
      isGraduated: boolean = false
    ) {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.course = course;
      this.section = section;
      this.dateEnrolled = dateEnrolled;
      this.gwa = gwa;
      this.isGraduated = isGraduated;
    }
  }
  
  export interface iUser {
    id: string;
    firstname: string;
    lastname: string;
    course: string[];
    section: number[];
    dateEnrolled: Date;
    gwa: number;
    isGraduated: boolean;
  }
  