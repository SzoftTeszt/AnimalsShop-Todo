import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
 todo:any

constructor(private base:BaseService){
  this.base.getTodo().subscribe(
    (adatok)=>this.todo=adatok
  )
}

}
