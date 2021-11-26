import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:"./app-component.html",
  styleUrls: []
})
export class AppComponent {
  title = 'FrontEnd';

  showNav: boolean = false;

  constructor(private authService:AuthService){

  }

  ngOnInit(){
    this.authService.showNavEmitter.subscribe(
      show => this.showNav = show
    );
  }
}
