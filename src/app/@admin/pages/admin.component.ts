import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  //recibe el evento para esconder el menu
  toggledValue=true;
  toggled($event: boolean){
  console.log('admin', $event);
  this.toggledValue=$event;
}
 

}
