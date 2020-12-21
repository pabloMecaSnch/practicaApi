import { Component, OnInit } from '@angular/core';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Alumno } from '../modelo/Alumno';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private alumnos = new Array<Alumno>();

  constructor(private apiService : ApiServiceProvider) {}
  
  
  ngOnInit(): void {
   this.apiService.getAlumnos().then((alumnos:Alumno[])=>{
     this.alumnos = alumnos;
     console.log(this.alumnos);
   })
   .catch((error:string)=>{
     console.log(error);
   });
  }

  eliminarAlumno(indice:number){
    this.apiService.eliminarAlumno(this.alumnos[indice].id)
    .then( (correcto:boolean ) => {
      console.log("Borrado correcto del alumno con indice: "+indice);
      this.alumnos.splice(indice,1);
    })
    .catch( (error:string) => {
        console.log("Error al borrar: "+error);
    });
  }
}


