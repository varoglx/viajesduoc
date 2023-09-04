import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string='';
  userInput:string='No hay ningun usuario logeado';

  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.user = user;
    });
    this.updateUser(this.userInput);
  }


  updateUser(userInput: string) {
    this.userService.setUser(userInput);
  }




  
}
