import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  isHidden:boolean = true;
  imgsrc:string = "";

  pressimg(imagesrc:string){
    this.isHidden = false;
    this.imgsrc = imagesrc;
  }
  pressdiv(){
    this.isHidden = true;
  }
  preventclick(event:Event){
    event.stopPropagation();
  }
  
}
