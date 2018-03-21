import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) { 
    console.log('Data Service Connected....');
  }

  getPosts(){
    //this get will return an observable so we need map 
    return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res =>res.json());

  }
 
}
