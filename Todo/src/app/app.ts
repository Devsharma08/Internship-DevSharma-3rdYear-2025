import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Todo';

  tasks:any = []
  task:any = ""
  num:any = 0

  bgColor= "black"
  textColor = "orange"
  px="10"

  submits(inputValue:string){
    this.task = inputValue;
  }

  handleClick(){
    this.tasks.push(this.task)
    this.task = ""
  }

  // handleDelete(event:any){
  //   console.log("clicked: ",event.currentTarget.id);
  //   const search = Number(event.currentTarget.id)
  //   this.tasks = this.tasks.filter((_:null,ind:any)=> search != ind);
  // }

handleDelete(event: any) {
  const index = Number(event);
  console.log(event);
   // ✅ Use currentTarget instead of target
  this.tasks = this.tasks.filter((_:any, i:any) => i !== index);
}

}
