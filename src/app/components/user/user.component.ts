import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post[];
  isEdit: boolean = false;
  //hobbies : any[]; /*For any datatype */

  constructor(private dataService: DataService) {
    console.log('Constructor ran..');
   }

  ngOnInit() {
    console.log('ngOnInit ran..');

    this.name = 'Harriet Tubman';
    this.age = 30;
    this.email = 'HTubman@email.com';
    this.address = {
      street: '136 Cluain Riocaird',
      city: 'Galway',
      county: 'Galway'
    };
    this.hobbies =['Write code', 'Walk', 'Listen to music'];

    //Because getPosts returns an observerable we need to subscribe to it.
    //The subscribe will return something that we will name as posts here and carryout a function with this
    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    this.name ='Aoife Sweeney';    
  }

  toggleEdit(){ 
    //it will change the boolean
    this.isEdit = !this.isEdit;
  }

  addHobby(hobby){
    console.log('Hobby Added');
    //unshift is like push but pushes onto beginning rather than the end
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i=0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        //splice will remove item from array
        this.hobbies.splice(i, 1);
      }
    }
  }

}
interface Address{
  street:string,
  city:string,
  county: string
}

interface Post{
  id:string,
  title:string,
  body: string, 
  userId: number
}
