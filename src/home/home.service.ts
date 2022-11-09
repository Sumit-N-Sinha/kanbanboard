import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Kanban } from "src/shared/Kanban";

@Injectable({
    providedIn: 'root'
})
export class KanbanService implements OnInit{

   
    constructor(private http: HttpClient) { }
    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    baseUrl = environment.API_BASE_URL;

    postKanban(kanban: Kanban): Observable<any> {
        console.log(kanban);
        return this.http.post<any>(this.baseUrl + "/kanban/createkanban", kanban);
    }
    getAllKanban(): Observable<Kanban[]> {
        return this.http.get<Kanban[]>(this.baseUrl + "/kanban/getAll");
    }

    getBy(id: string): Observable<Kanban[]> {
        return this.http.get<Kanban[]>(this.baseUrl + "/kanban/getbytitle/"+id);
    }

    updateBy(id: string): Observable<Kanban[]> {
        return this.http.get<Kanban[]>(this.baseUrl + "/kanban/updatebyid/"+id);
    }
}