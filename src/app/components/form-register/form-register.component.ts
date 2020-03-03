import { Component, OnInit } from '@angular/core';
import { User } from '../../models/usuario.model';
import { UserService }  from '../../services/user.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']  
})

export class FormRegisterComponent implements OnInit {
  public tipoDocumento : ValueAndText[];
  public estadoCivil : ValueAndText[];
  public uploadedFiles : Array<File>;
  public usuario : User;
  public status : String;

  constructor(private userService :UserService) {
    this.tipoDocumento = [    
    new ValueAndText(1,"CC"),
    new ValueAndText(2,"CE"),
    new ValueAndText(3,"TI"),
    new ValueAndText(4,"PASAPORTE")];

    this.estadoCivil = [      
      new ValueAndText(1,"Soltero/a."),
      new ValueAndText(2,"Comprometido/a."),
      new ValueAndText(3,"Casado/a."),
      new ValueAndText(4,"Unión libre"),
      new ValueAndText(5,"Separado/a."),
      new ValueAndText(6,"Divorciado/a."),
      new ValueAndText(7,"Viudo/a.")];

    this.usuario = new User('',null,'','','','','','');    
  } 

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.usuario);
    this.userService.register(this.usuario).subscribe(
      response=>{
        if(response.user){
          this.status='success';
        }
      },
      error=>{        
        console.log(error);
        this.status='error';
      }
    );
  }

  onUpload(){
    let formData = new FormData();
    for(let i = 0; i <this.uploadedFiles.length; i++){
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
  }

  onFileChange(file){
    console.log('Filechange',file);
  }
}

class ValueAndText {
  constructor(public Value: number, public Text: string) { }
}
