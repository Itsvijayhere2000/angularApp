import { Component, Input, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
  @Input('userDetail') user:any;
  @Input() userIndex:any;
  @Output() removeUserEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
   removeUser(){
   this.removeUserEvent.emit(this.userIndex)
    
   }
}
