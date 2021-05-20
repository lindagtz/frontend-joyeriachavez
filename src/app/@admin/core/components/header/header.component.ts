import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  toggledvalue= true;
  @Output() toggleChange = new EventEmitter<boolean>();

  toggled(){
    //para el menu
    if(this.toggledvalue===undefined){
      this.toggledvalue=true;
    }
    this.toggledvalue= !this.toggledvalue;
    console.log(this.toggledvalue);
    this.toggleChange.emit(this.toggledvalue);

  }

  //quitamos el oninit porq no lo usamos aqui
  
}
