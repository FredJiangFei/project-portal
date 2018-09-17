import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { flatMap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logining: boolean;
  constructor(private router: Router,
   private loginService: LoginService) { }

  login(value: any) {
    this.logining = true;
    setTimeout(() => {
      this.loginService.getDigest()
      .pipe(
        flatMap(auth => this.loginService.login(auth, value.username,  value.password, 1)),
        finalize(() => this.logining = false)
      ).subscribe(_ => {
        const loginUser = this.loginService.loginUser();
        if (!!loginUser) {
          this.router.navigate(['/myPage']);
        }
      });
    }, 2000);
  }
}
