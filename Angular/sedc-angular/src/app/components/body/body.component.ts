import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { NgForm } from '@angular/forms';
import { iUser } from 'src/app/interfaces/user.interface';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  entryComponents: [ViewChildComponent]
})
export class BodyComponent implements OnInit {

  //@ViewChild(ViewChildComponent, {static: false}) vcc:ViewChildComponent; //Looks for rendered component with name ViewChildComponent <app-view-child>
  @ViewChild('viewChild', {read: ViewContainerRef , static: false}) childComponent:ViewContainerRef; //Create new instance of component and link it with #viewChild
  @ViewChild('viewChild2', {read: ViewContainerRef , static: false}) childComponent2:ViewContainerRef; 

  @Input() user:iUser = {
    firstname: undefined,
    lastname: undefined,
    email: undefined
  }

  dob = new Date();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit()
  {
    //this.initViewChild();
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

  initViewChild()
  {
    let child = this.componentFactoryResolver.resolveComponentFactory(ViewChildComponent);
    let cmp = this.childComponent.createComponent(child);
    cmp.instance.setValue(10);

    let cmp2 = this.childComponent2.createComponent(child);
    
    cmp2.instance.someChange.subscribe((data) => {
      if((data % 2) == 0)
      cmp.instance.setValue(++cmp.instance.counter);
    })

    cmp2.instance.setValue(20);
    // console.log(this.vcc.counter);
    // this.vcc.someChange.subscribe((data) => {console.log(data)})
    // setTimeout( () => {

    //   this.vcc.setValue(1);
    // }, 500)
  }

}
