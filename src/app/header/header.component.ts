import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
      title:any="enter your name"
      isdisabled:boolean=false;
  constructor() { }
   
  ngOnInit(): void {
  }
myButton(){
  console.log("clicked ")
  this.isdisabled=true;

}
onclick(event:any){
this.title=event.target.value
}
clicking(){
  this.isdisabled=false;
}
}
