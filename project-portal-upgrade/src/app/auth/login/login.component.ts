import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,
   private loginService: LoginService) { }

  login(value: any) {
    this.router.navigate(['/myPage']);
    // this.loginService.getDigest()
    // .subscribe(result =>
    //   this.loginService.login(result, value.username,  value.password, 1)
    //   .subscribe(user => {
    //     console.log(user);
    //   })
    // );
  }
}
