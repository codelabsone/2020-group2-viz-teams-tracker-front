import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Team } from './models/team';
import { TEAMS } from './mock-files/mock-teams';





@Injectable({
  providedIn: 'root'
})
export class TeamsService {
private teamUrl = './mock-teams'
  constructor( private http: HttpClient) {
   }

   getTeambyId(params) {
     return this.http.get<any>(`${this.teamUrl}/show?id=${params.id}`);
   }

   getTeam( id: number): Observable<Team | undefined> {
     return this.getAllTeams()
     .pipe(
      map((thisTeam: Team[]) => thisTeam.find(p => p.id === id))
    );
   }

   getAllTeams() {
    // return this.http.get<Team[]>(this.teamUrl)
    // .pipe(
    //   tap(data => console.log('All: ' + JSON.stringify(data))),

    // );
    return of(TEAMS)
   }
  }


