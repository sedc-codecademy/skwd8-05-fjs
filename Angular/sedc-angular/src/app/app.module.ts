import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlighDirective } from './directives/highligh.directive';
import { ClickDirective } from './directives/click.directive';
import { UserListComponent } from './components/user-list/user-list.component';
import { CustomPipe } from './pipes/custom.pipe';
import { ViewChildComponent } from './components/view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HighlighDirective,
    ClickDirective,
    UserListComponent,
    CustomPipe,
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
