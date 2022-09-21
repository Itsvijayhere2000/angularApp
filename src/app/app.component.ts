import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newArray:any=[]
  title = 'angularApp'

  emit(event:any){
    this.newArray.push(event)
    console.log(this.newArray);
  }

}




