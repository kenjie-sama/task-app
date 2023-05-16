// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Costum Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBar } from './components/navbar/navbar.component';
import { Footer } from './components/footer/footer.component';
import { Counter } from './components/counter/counter.component';
import { TaskList } from './components/tasks/task-list.component';
import { TaskInput } from './components/tasks/task-input.component';

@NgModule({
  declarations: [AppComponent, NavBar, Footer, Counter, TaskList, TaskInput],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
