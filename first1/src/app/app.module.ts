import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './comp/first/first.component';
import { SecComponent } from './comp/sec/sec.component';
import { ThirdComponent } from './comp/third/third.component';
import { FourComponent } from './comp/four/four.component';
import { KishDirective } from './kish.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecComponent,
    ThirdComponent,
    FourComponent,
    KishDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
