import { Injectable } from '@angular/core';

import { addDoc, collection, getFirestore, getDocs, updateDoc, doc, deleteDoc, Firestore } from "firebase/firestore";
import { AlertController, ToastController } from '@ionic/angular';
import { User, iUser } from './home.model';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  users: User = new User();

  newUserList: iUser[] = [];

  constructor(private alertController: AlertController, private toastController: ToastController) { }

  async getUsers(): Promise<iUser[]>{
  const app = initializeApp (environment.firebaseConfig);
  const firestore = getFirestore(app);

  const users: User[] = [];

  const querySnapshot = await getDocs(collection(firestore, "users"));
  querySnapshot.forEach((doc) =>{
  const user = doc.data() as User;
  user.id = doc.id;
  users.push(user);

  });

  return users;

   }

   async addData (user: User) {
    const app = initializeApp (environment.firebaseConfig);
    const firestore = getFirestore(app);

    try {
      const addInfo = await addDoc(collection (firestore, "users"),{
        firstname: user.firstname,
        lastname: user.lastname,
        course: user.course,
        section: user.section,
        dateEnrolled: user.dateEnrolled,
        gwa: user.gwa,
        isGraduated: user.isGraduated
      });

      console.log("Document written with ID: ", addInfo.id)
    } catch (e) {
      console.error("Error in adding document: ", e);
    }
   }

  async updateData(user: User){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try {
      const updateInfo = doc(firestore, "users", user.id);
      await updateDoc(updateInfo, {firstname: user.firstname,
        lastname: user.lastname,
        course: user.course,
        section: user.section,
        dateEnrolled: user.dateEnrolled,
        gwa: user.gwa,
        isGraduated: user.isGraduated});
      } catch (e) {
        console.error("Error adding document: ", e);
        }
    }
    async deleteData(user: User){
      const app = initializeApp (environment.firebaseConfig);
      const firestore = getFirestore(app);

      try {
        const deleteInfo = doc(firestore, "users", user.id);
        await deleteDoc(deleteInfo);
      } catch (e){
        console.error("Error adding document: ", e);
      }
    }

    async presentAlert(header: string, message: string){
      const alert = await this.alertController.create({
        header: header,
        message: message,
        buttons: ['OK']
      });
    
      await alert.present();
    }
  }

  
