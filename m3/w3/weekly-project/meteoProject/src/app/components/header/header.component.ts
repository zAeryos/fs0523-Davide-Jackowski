import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isLoggedIn$ = this.authService.isLoggedIn$;

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
