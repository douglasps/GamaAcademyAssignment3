import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { TechnicalTestModule } from './technical-test/technical-test.module';
import { ThankYouModule } from './thank-you/thank-you.module';
import { RadioGroupModule } from './radio-group/radio-group.module';
import { RadioModule } from './radio/radio.module';
import { ProgressBarModule } from './progress-bar/progress-bar.module';
import { LoginModule } from './login/login.module';

// import { TechnicalTestComponent } from './technical-test/technical-test/technical-test.component';
// import { ThankYouComponent } from './thank-you/thank-you/thank-you.component';
// import { RadioGroupComponent } from './radio-group/radio-group/radio-group.component';
// import { RadioComponent } from './radio/radio/radio.component';
// import { ProgressBarComponent } from './progress-bar/progress-bar/progress-bar.component';
// import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,

    // TechnicalTestComponent,
    // ThankYouComponent,
    // RadioGroupComponent,
    // RadioComponent,
    // ProgressBarComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    TechnicalTestModule,
    ThankYouModule,
    RadioGroupModule,
    RadioModule,
    ProgressBarModule,
    LoginModule,

    AuthModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
