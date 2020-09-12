import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlighDirective } from './directives/highligh.directive';
import { ClickDirective } from './directives/click.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { PlanetsComponent } from './components/planets/planets.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { FilmsComponent } from './components/films/films.component';
import { ResidentsComponent } from './components/residents/residents.component';
import { SharedModule } from './modules/shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HighlighDirective,
    ClickDirective,
    CustomPipe,
    PlanetsComponent,
    MainWrapperComponent,
    FilmsComponent,
    ResidentsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
