import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scrolled:boolean = false;
    onscrolled(){
      console.log("hello")
      window.addEventListener("scroll",()=>{
        if(window.scrollY>0){
          this.scrolled = true;
        }
        else{
          this.scrolled = false;
        }
      })
    }
}




