interface MainMustHave
{
	start():boolean;
	stop():void;
	isStarted:boolean;
}

interface MainOptionalToHave
{
	isStartedAlready?():boolean
}

class Parent
{
	name:string;
	age:number;

	constructor(name, age)
	{
		this.name = name;
		this.age = age;
	}

	getName():string
	{
		return this.name;
	}

	getAge():number
	{
		return this.age;
	}

	setAge(age:number):boolean
	{
		this.age = age;
		return true;
	}
}

class Main extends Parent implements MainMustHave, MainOptionalToHave
{
	isStarted:boolean = false;

	constructor(){
		super('Igor', '32')
	}

	start():boolean
	{
		this.isStarted = ! this.isStarted;
		return this.isStarted;
	}

	stop():void
	{
		this.isStarted = false;
	}

	isStartedAlready():boolean
	{
		return this.isStarted;
	}

	//@Overwrite of the getName from Parent
	getName()
	{
		return 'This is name from Main not Parent';
	}
}