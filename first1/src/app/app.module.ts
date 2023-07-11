import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './comp/first/first.component';
import { SecComponent } from './comp/sec/sec.component';
import { ThirdComponent } from './comp/third/third.component';
import { FourComponent } from './comp/four/four.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecComponent, ThirdComponent, FourComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
