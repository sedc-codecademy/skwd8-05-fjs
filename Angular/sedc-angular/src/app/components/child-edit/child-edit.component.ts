import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-child-edit',
  templateUrl: './child-edit.component.html',
  styleUrls: ['./child-edit.component.css']
})
export class ChildEditComponent implements OnInit {

  @Input() userData:any;
  @Output() userDataEdited:EventEmitter<any> = new EventEmitter();
  @Output() loadAllUSersEvent:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editUser(user:NgForm)
  {
    if(user.valid)
    {
      this.userDataEdited.emit(user.value);
    }
    else
    alert('All fields are required');
  }

  parentAllUsersEvent()
  {
    this.loadAllUSersEvent.emit();
  }
}
