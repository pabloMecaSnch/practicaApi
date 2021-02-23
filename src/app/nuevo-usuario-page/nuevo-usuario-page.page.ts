import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-usuario-page',
  templateUrl: './nuevo-usuario-page.page.html',
  styleUrls: ['./nuevo-usuario-page.page.scss'],
})
export class NuevoUsuarioPagePage implements OnInit {

  register:FormGroup;
  constructor(private formBuilder:FormBuilder, private modalCtrl:ModalController) { }

  ngOnInit() {
    this.register= this.formBuilder.group({
      gmail: new FormControl("@",Validators.compose([
        Validators.required,
        Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$'),
        //Validators.pattern('/\S+@\S+\.\S+/')
      ])),
      contrasena: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    })
  }
  onSubmit(datos){
    console.log(datos)
    this.modalCtrl.dismiss(JSON.stringify(datos));
  }
  public closeModal(){
    this.modalCtrl.dismiss();
  }

}
