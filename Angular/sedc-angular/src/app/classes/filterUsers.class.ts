import { iUser } from "../interfaces/user.interface";

export class FilterUsers
{
	users:Array<iUser> = []

	searchKeyword:string;
	filterBy:string = 'firstname';

	filteredUsers()
	{
	  return this.users.filter(user => user[this.filterBy].match(this.searchKeyword))
	}
}