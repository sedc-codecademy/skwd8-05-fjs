export const f2_a = 10;

interface User
{
	firstname: string;
	lastname: string;
	dob: string;
	role: string;
}

interface Admin
{
	name:string;
	role: string;
}

type Person = User | Admin;

const combineTypes = (user:User | Admin, user2:Person) => {
	return user;
}

const genericType =  <User,Admin>(user:User, admin:Admin):[Admin, User] => {
	//return [user, admin]; 
	return [admin, user];
}

let a:Admin = {name: 'Admin name', role: 'admin'}, b:User = {firstname: 'John', lastname: 'Doe', dob: '123123', role: 'User'};

let [admin, user] = genericType(b, a);

console.log(admin, user);

interface Address {
	street: string;
}
interface Order{
	uuid: number;
}

const customMethod = <User,Address,Admin,Order>(user:User, address:Address, admin:Admin, orders:Array<Order>):[User, Admin, Address, Order[]] =>
{
	return [user, admin, address, orders]
}


let u:User;
let add:Address;
let o:Array<Order>;
let adm:Admin;

let [address1, user1, order1, admin1] = customMethod(u, add, adm, o);
