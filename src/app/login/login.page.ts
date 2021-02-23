import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { FirebaseAuthService } from '../../providers/api-service/firebase-auth.service';
import { Usuario } from '../modelo/Usuario';
import {NuevoUsuarioPagePage} from '../nuevo-usuario-page/nuevo-usuario-page.page'

import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logger : FormGroup
  constructor( public formBuilder:FormBuilder, 
    private navController: NavController,
    private authService: FirebaseAuthService,
    public modalController: ModalController,
    private apiService: ApiServiceProvider,
    private toastController : ToastController) { }

  ngOnInit() {
    this.logger = this.formBuilder.group({
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
    console.log(datos['gmail']);
    this.authService.loginUser(datos['gmail'],datos['contrasena'])
      .then((data)=>{
        this.presentToast("Log in correcto");
        this.navController.navigateForward("/home");
      })
      .catch((error)=>{
        this.presentToast("ha ocurrido un error: "+error);
      })
    //this.navController.navigateForward("home");

  }
  async nuevoUsuario(){
    const modal = await this.modalController.create({
      component: NuevoUsuarioPagePage,
      componentProps:{
        'usuarioJson':JSON.stringify(new Usuario(-1,"",""))
      }
    });
    modal.onDidDismiss().then((data)=>{
      if(data['data']!=null){
        let usuarioJSON = JSON.parse(data['data']);
        let usuarioNuevo:Usuario = Usuario.createFromJsonObject(usuarioJSON);
  
        this.authService.registerUser(usuarioNuevo.gmail,usuarioNuevo.contrasena)
        .then((data)=>{
          this.presentToast("usuario registrado correctamente");
        })
        .catch((error:string)=>{
          //this.presentToast("Error al insertar: "+error);
          this.presentToast("Error "+error);
        });
      }
    });
    return await modal.present();
  }
  async presentToast(mensaje){
    const toast = await this.toastController.create({
      message: mensaje,
      duration:2000
    });
    toast.present();
  }

}
