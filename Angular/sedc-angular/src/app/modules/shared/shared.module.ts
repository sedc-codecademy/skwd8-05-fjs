import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponent } from './components/shared/shared.component';



@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
