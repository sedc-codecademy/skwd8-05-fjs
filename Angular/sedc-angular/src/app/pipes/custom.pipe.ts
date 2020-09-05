import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    let [filterBy, keyword] = args;
    return value.filter(item => item[filterBy].match(keyword));
    //users.filter(user => user.firstname.match(/john/))
  }

}
