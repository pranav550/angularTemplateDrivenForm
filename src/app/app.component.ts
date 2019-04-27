import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartemplatedrivenform';
  
  Register(regForm:any){
    var firstname=regForm.controls.firstname.value;
    var lastname=regForm.controls.lastname.value;
    var email=regForm.controls.email.value;
  console.log(regForm)
  }
}
