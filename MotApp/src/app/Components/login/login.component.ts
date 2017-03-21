import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFire,AuthProviders,AuthMethods,FirebaseListObservable} from 'angularfire2';
import { Moto } from '../../Commons/Interfaces/moto'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private af:AngularFire) { }
ModelAnuncioMotoFirebase:any;
 ModelMoto:Moto;

  ngOnInit() {
    this.ModelAnuncioMotoFirebase = this.af.database.list('AnuncioMotos');
 this.ModelMoto.AnioUso='20017';
 this.ModelMoto.Ciuda='medellin';
 this.ModelMoto.Color='verde';
 this.ModelMoto.Concecionario='poblado';
 this.ModelMoto.Correo = 'jorge@gmail.com';
 this.ModelMoto.TelefonoContacto= '34344';
 this.ModelMoto.Descripcion= 'Moto en buen estado';
 this.ModelMoto.Images.Name = 'image1';
 this.ModelMoto.Images.Url='image11';
 
  this.ModelAnuncioMotoFirebase.push(this.ModelMoto);
}



  loginFacebook():void{
    this.af.auth.login({
      provider:AuthProviders.Facebook,
      method:AuthMethods.Popup
    });
  }

  loginGoogle():void{

    this.af.auth.login({
      provider:AuthProviders.Google,
      method:AuthMethods.Popup
    })
  }

  createlistFirebase():void{
 console.log(this.ModelAnuncioMotoFirebase = this.af.database.list('AnuncioMotos'));
 this.ModelMoto.AnioUso='20017';
 this.ModelMoto.Ciuda='medellin';
 this.ModelMoto.Color='verde';
 this.ModelMoto.Concecionario='poblado';
 this.ModelMoto.Correo = 'jorge@gmail.com';
 this.ModelMoto.TelefonoContacto= '34344';
 this.ModelMoto.Descripcion= 'Moto en buen estado';
 this.ModelMoto.Images.Name = 'image1';
 this.ModelMoto.Images.Url='image11';

  this.ModelAnuncioMotoFirebase.push(this.ModelMoto);
}



}
