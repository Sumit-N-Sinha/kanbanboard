import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Kanban } from "src/shared/Kanban";
import { KanbanService } from "./home.service";

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls : ['./home.component.css']
})
export class HomeComponent {
    constructor(private kanbanService:KanbanService,
            private router:Router){}

    public kanban:Kanban=new Kanban();
    
    onSubmit():void{
        console.log("the button is clicked");
        this.kanbanService.postKanban(this.kanban).subscribe((response:any)=>{
            console.log(response)
            alert("New kanban has been added");
        });
        
        this.kanban.title='';
    }
    onNavigate():void{
        this.router.navigate(['/getAllKanbans']);
    }
}