import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFire,AuthProviders,AuthMethods,FirebaseListObservable} from 'angularfire2';
import { Moto } from './Commons/Interfaces/moto'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app works!';
ModelAnuncioMotoFirebase:any;
 ModelMoto:Moto;
 constructor(private af:AngularFire) { }


  ngOnInit() {
    this.ModelAnuncioMotoFirebase = this.af.database.list('AnuncioMotos');
/*
 this.ModelMoto.Ciuda='medellin';
 this.ModelMoto.Color='verde';
 this.ModelMoto.Concecionario='poblado';
 this.ModelMoto.Correo = 'jorge@gmail.com';
 this.ModelMoto.TelefonoContacto= '34344';
 this.ModelMoto.Descripcion= 'Moto en buen estado';
 this.ModelMoto.Images.Name = 'image1';
 this.ModelMoto.Images.Url='image11';
 */

  }
}
