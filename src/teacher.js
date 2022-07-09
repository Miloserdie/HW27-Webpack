import {Person} from './person'

export class Teacher extends Person{
	constructor(...args) {
		super(...args);
	}

	subject() {
		console.log(`This is ${this.gender}!`);
		
	}
}