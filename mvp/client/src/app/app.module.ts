import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent, LoginComponent]
})
export class AppModule { }
