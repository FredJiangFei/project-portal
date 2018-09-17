import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
   private loginService: LoginService,
   private activedRoute: ActivatedRoute) { }

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
          const returnUrl = this.activedRoute.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
      });
    }, 2000);
  }
}
