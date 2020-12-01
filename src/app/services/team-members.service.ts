import { TEAMS } from '../mock-files/mock-teams';
import { Member } from "../models/member";
// import { MEMBERS  } from "./mock-files/mock-members";
import { Team } from "../models/team";
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {
private memberUrl = './mock-members.ts'
  constructor( private http: HttpClient) {
   }

   getMemberbyId(params) {
     return this.http.get<any>(`${this.memberUrl}/show?id=${params.id}`);
   }

   getMember(id: number): Observable<Member | undefined> {
    return this.getAllMembers()
      .pipe(
        map((thisMember: Member[]) => thisMember.find(p => p.id === id))
      );
  }

  getAllMembers() {
    return this.http.get<Member[]>(this.memberUrl)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
    );
  }
}
