import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/app/models/login.model';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  public titulo : string;
  public user : Usuario;
  public status : string;
  
  constructor(private _userService: UserService) {     
    this.user = new Usuario('','','Admin');
  }

  onSubmit(form){
    console.log(this.user);
    this._userService.acceder(this.user).subscribe(
      response=>{
        if(response.user){

          this.status ="ok";
        }
        else{
          this.status ="error";
        }
      },
      error=>{
        this.status ="error";
      }
    );
  }

  ngOnInit() {
    this.titulo = 'IDENTIFICATE ES UN TEST';
  }

}
