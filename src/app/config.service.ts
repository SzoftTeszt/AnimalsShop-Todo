import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private todoColumns=[
    {key:"id", text:"#", type:"plain"},
    {key:"userId",text:"Felhasználó azon", type:"number"},
    {key:"title",text:"Cimke", type:"text"},
    {key:"completed",text:"Teljesítve", type:"boolean"},
  ]
  constructor() { }

  getTodoColumns(){
    return this.todoColumns
  }

}
