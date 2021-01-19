import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  //currentUser;
  // localdata;
  ngOnInit(){
    // this.localdata = localStorage.getItem('user');

  //  if(this.localdata){
  //   this.currentUser = JSON.parse(this.localdata);
  //   this.userAuthenticated = true;
  // }
  }
}
