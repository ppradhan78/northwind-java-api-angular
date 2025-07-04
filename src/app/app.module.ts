import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
