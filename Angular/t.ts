//npm install ts-node -g 

//number, string, boolean, array, any, void
import {f2_a} from './f2';

let ts:string = "This is string";
let unk:string;

let o = {
	"a":1,
	"b":2,
	"c":3
}

//ts = 1;

const testFunction = (a:number, b:number):number => {
	return a + b;
}

//Error in types
//unk = testFunction();

//testFunction(1, 2);

const testAnotherFunction = (a, b) => {
	return a + b;
}

o.a =10;
o.b = 15;

unk = testAnotherFunction(10, 5);

console.log(unk, o);


//Void function is not returning a value back
const voidFunction = ():void => {
	//testFunction(1, 2)
	//testAnotherFunction(2, 3);

	//unk = undefined;

	o = {
		"a":1,
		"b":2,
		"c":3
	}
}

voidFunction();
console.log(o);

let a1:Array<string> = [];
//a1.push(2);

let a2:Array<any> = [];
a2.push(2, "a", []);

const arrayFunction = ():Array<string> => {
	return [];
}

a2 = arrayFunction();

export interface Person{
	firstname: string;
	lastname: string;
	email: string;
	age:number;
	addresses:Array<string>;
	married:boolean;
	dob?:string; //Optional
	car?:Car;
}

export interface ClassPerson
{
	makeCall():number;
	voidCall():void;
	optionalCall?():any
}

export interface Car{
	own: boolean;
	type: string;
	year: number;
}

let person:Person = {
	firstname: "Igor",
	lastname: "Joshevski",
	email: "email@mail",
	age: 12312312,
	addresses: ['address1', 'address2'],
	married: true,
	dob:'234'
};

const createEmptyPerson = ():Person => {
	return {
		firstname: undefined,
		lastname: undefined,
		email: undefined,
		age: undefined,
		addresses: [],
		married: undefined
	}
}

let person2:Person = createEmptyPerson();

let arrayofPersons:Array<Person> = [];

arrayofPersons.push(person2);
 console.log(arrayofPersons)
// if(o?.a?.b === 3) // if(o && o.a && o.a.b && o.a.b === 3)
// {

// }

class Human implements ClassPerson
{
	constructor(){}

	makeCall():number
	{
		return 1;
	}

	voidCall()
	{
		return "A";
	}

	optionalCall()
	{
		return 123;
	}
}

//enum
export enum CoreValues {
	MAIN = 5,
	UPPER = 2,
	LOWER = 3
}

let level:CoreValues;

let enumLevel = CoreValues;
level = enumLevel.MAIN;


//console.log(Object.keys(CoreValues), Object.keys(CoreValues).map(k => CoreValues[k]));

let a = 5;
if(a === CoreValues.MAIN)
{
	console.log(f2_a);
}

class A
{

	makeCall():string {
		return "1";
	}

	waitCall():number {
		return 2;
	}
}

class B implements A 
{
	constructor(){}

	makeCall():string{
		return "C";
	}

	waitCall():number{
		return 2;
	}
}

let m = new A();
let n = new B();

console.log(m.makeCall() === n.makeCall() ? true : false); 
console.log(m.waitCall() === n.waitCall() ? true : false);

class newClass
{
	name = '';
	lastname = 'Joshevski';

	constructor()
	{
		this.name = 'Igor';
	}
}

let nc = new newClass();
nc.name;
nc.lastname;

let newClassCopy = newClass;

let ncc = new newClassCopy();

ncc.name; ncc.lastname;