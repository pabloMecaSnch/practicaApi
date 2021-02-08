import {Injectable} from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';
import { Alumno } from 'src/app/modelo/Alumno';



@Injectable()
export class ApiServiceProvider{

  constructor(private angularFirestore: AngularFirestore){

  }

  getAlumnos():Observable<any>{
    return this.angularFirestore.collection("alumnos").snapshotChanges();
  }

  eliminarAlumno(id:number):Promise<void>{
    return this.angularFirestore.collection("alumnos").doc(""+id).delete();
  }

  modificarAlumno(idAlumno:number, nuevosDatosAlumno: Alumno):Promise<void>{
    let nuevosDatosAlumnoJson = nuevosDatosAlumno.getJsonObject();
    delete nuevosDatosAlumno.id;
    return this.angularFirestore.collection("alumnos").doc(""+idAlumno).set(nuevosDatosAlumnoJson);
  }
  insertarAlumno(datosNuevoAlumno:Alumno):Promise<any>{
    let alumnoJson = datosNuevoAlumno.getJsonObject();
    delete alumnoJson.id;
    return this.angularFirestore.collection("alumnos").add(alumnoJson);
  }
  actualizar(documentId,datos){
    return this.angularFirestore.collection("alumnos").doc(documentId).set(datos);
  }
}