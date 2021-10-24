// const interface = require('./types')
import {
  firstNameQuestion,
  rl,
  lastNameQuestion,
  emailQuestion,
  cityQuestion,
  stateQuestion,
  countryQuestion,
  passwordQuestion
} from "./questions";

interface IAddress {
  city: string;
  state: string;
  country: string;
  getAddress?: () => string;
}

interface IUserData {
  firstname: string;
  lastname: string;
  email: string;
  password: string | number;
  getUserData(): string;
}

class Address implements IAddress {

  city;
  state;
  country;

  constructor( city: string, state: string, country: string) {
    
    this.city = city;
    this.state = state;
    this.country = country;
  }

  getAddress() {
    
    let city = `City : ${this.city}`;
    let state = `State : ${this.state}`;
    let country = `Country : ${this.country}`;

    return ` \n ${city} \n ${state} \n ${country}\n`;
  }
}

class User extends Address implements IUserData {
  firstname;
  lastname;
  email;
  password;
  address: IAddress;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    ...address
  ) {
    super(address[0], address[1], address[2]);
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
  }

  getUserData() {
    let breaker = "=========================================="
    let heading = "User Details"
    let subheading = "Address"
    let name = `Full Name: ${this.firstname} ${this.lastname}`;
    let email = `Email :${this.email}`;
    return `\n${heading}\n${breaker}\n ${name} \n ${email} \n\n${subheading}\n${breaker} ${this.getAddress()}${breaker}\n`;
  }
}



(async () => {
  const firstName = await firstNameQuestion();
  const lastName = await lastNameQuestion();
  const email = await emailQuestion()
  const password = await passwordQuestion()
  const city = await cityQuestion()
  const state = await stateQuestion()
  const country = await countryQuestion()

  const userDetails = new User(
    firstName,
    lastName,
    email,
    password,
    city,
    state,
    country,
  );
  console.log(userDetails.getUserData());
  rl.close();
})();

