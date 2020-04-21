import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService } from './user.service';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [LogInComponent,
    SignUpComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'register', component: SignUpComponent },
      { path: 'log-in', component: LogInComponent },
      { path: 'profile', component: ProfileComponent }
    ])
  ],
  providers: [
    UserService,
    AuthService
  ]
})
export class UserModule { }
