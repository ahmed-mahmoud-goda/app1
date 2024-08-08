import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isname:boolean = false;
  isage:boolean = false;
  isemail:boolean = false;
  ispassword:boolean = false;
  name:string = "";
  age:string = "";
  email:string = "";
  password:string = "";
  onnamechange(){
    if(this.name != ""){
      this.isname = true;
    }
    else{
      this.isname = false;
    }
  }
  onagechange(){
    if(this.age != ""){
      this.isage = true;
    }
    else{
      this.isage = false;
    }
  }
  onemailchange(){
    if(this.email != ""){
      this.isemail = true;
    }
    else{
      this.isemail = false;
    }
  }
  onpasswordchange(){
    if(this.password != ""){
      this.ispassword = true;
    }
    else{
      this.ispassword = false;
    }
  }
}
