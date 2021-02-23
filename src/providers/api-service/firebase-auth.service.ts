import {Injectable} from '@angular/core'

import {AngularFireAuth} from '@angular/fire/auth'

@Injectable()
export class FirebaseAuthService{

    constructor(public angularFireAuth: AngularFireAuth){

    }

    registerUser(email:string, password:string):Promise<any>{
        return this.angularFireAuth.createUserWithEmailAndPassword(email,password);
    }

    loginUser(email:string,password:string):Promise<any>{
        return this.angularFireAuth.signInWithEmailAndPassword(email,password);
    }

    logOutUser():Promise<any>{
        return new Promise((resolve,reject)=>{
            if(this.angularFireAuth.currentUser){
                this.angularFireAuth.signOut()
                    .then(()=>{
                        console.log("LOG OUT");
                        resolve(null);
                    }).catch((error)=>{
                        reject();
                    });
            }
        })
    }

    userDetails(){
        return this.angularFireAuth.user;
    }
}