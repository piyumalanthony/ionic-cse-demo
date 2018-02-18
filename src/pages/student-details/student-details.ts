import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StudentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-details',
  templateUrl: 'student-details.html',
})
export class StudentDetailsPage {
  
  name:string;
  age:number;
  address:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.name = this.navParams.get('name');
     this.address = this.navParams.get('address');
     this.age = this.navParams.get('age');
    
    
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentDetailsPage');
  }

}
