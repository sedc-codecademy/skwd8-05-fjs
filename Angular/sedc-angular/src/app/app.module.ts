import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { SecondUsersListComponent } from './components/second-users-list/second-users-list.component';
import { PlanetsComponent } from './components/planets/planets.component';

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
    ViewChildComponent,
    SecondUsersListComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
