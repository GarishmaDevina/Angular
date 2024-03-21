import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title:string= 'DemoApp';
  city:string="Hyderabad";
  n:string="App";
  d:string=new Date().toLocaleTimeString();
  timeid=setInterval(()=>{
    this.d=new Date().toLocaleTimeString();
  },1000)
  changeName(e:any){
     console.log(e);
     console.log(e.target);
     console.log(e.target.value);
     
     
  }
}
