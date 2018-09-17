import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private translate: TranslateService,
    private loginService: LoginService,
    private router: Router) {

  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
