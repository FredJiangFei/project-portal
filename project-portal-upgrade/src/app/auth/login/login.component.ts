import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,
   private loginService: LoginService) { }

  login(value: any) {
    this.loginService.getDigest()
    .pipe(
      flatMap(auth => this.loginService.login(auth, value.username,  value.password, 1))
    ).subscribe(user => {
      this.router.navigate(['/myPage']);
      console.log(user);
    });
  }
}
