import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBar } from './components/navbar/navbar.component';
import { Footer } from './components/footer/footer.component';
import { Counter } from './components/counter/counter.component';
@NgModule({
  declarations: [AppComponent, NavBar, Footer, Counter],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
