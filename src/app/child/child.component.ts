import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@ Input() user:any;
@ Output() newItemEvent=new EventEmitter<string>();
  value:any
  constructor() { }

  
  ngOnInit(): void {

  }
  clicked(){
    this.newItemEvent.emit(this.value)
  }

}
