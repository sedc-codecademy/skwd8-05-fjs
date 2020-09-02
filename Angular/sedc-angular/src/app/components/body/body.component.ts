import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  user = {
    firstname: 'Igor',
    lastname: 'Joshevski',
    email: 'gigo.j44'
  }

  constructor() { }

  ngOnInit() {
  }

  formSubmit(form:NgForm)
  {
    // console.log(form.controls.firstname.value);
    if(form.valid)
    {
      //this.sendToBackend(form.value);
    }
    else
    {
      //this.showErrorWhatIsmissing();
    }
    console.log(form.value, form.valid);
  }

}
