import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
      title:string=" "
      isdisabled:boolean=true;
        isActive:boolean=true;
        planets = [{planetId:1,planetName:'earth'},
        {planetId:1,planetName:'sun'},
        {planetId:1,planetName:'moon'}]
  constructor() { }
   
  ngOnInit(): void {
  }
myButtons(){
  console.log("clicked")
  this.isdisabled=true;
  this.title=""

}
onclick(event:any){
this.title=event.target.value
this.isdisabled=false;
}
clicking(){
  this.isdisabled=false;
 

}
}
