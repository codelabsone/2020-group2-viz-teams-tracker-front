// import { TEAMS } from '../mock-files/mock-teams';
import { Member } from "../models/member";
// import { MEMBERS  } from "./mock-files/mock-members";
import { environment } from '../../environments/environment';
import { Team } from "../models/team-interface";
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {
  memberSelected: BehaviorSubject<Member> = new BehaviorSubject(null);
private apiUrl: string

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {

    this.apiUrl = `${environment.apiUrl}api/members`
   }

   addNewMember(params) {
    return this.http.post<any>(`${this.apiUrl}/create`, params);
   }

   getMemberbyId(params) {
     return this.http.get<any>(`${this.apiUrl}/show?id=${params.id}`);
   }

   getMember(id: number): Observable<Member | undefined> {
    return this.getAllMembers()
      .pipe(
        map((thisMember: Member[]) => thisMember.find(p => p.id === id))
      );
  }

  getAllMembers() {
    return this.http.get<Member[]>(this.apiUrl)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
    );
  }
}
