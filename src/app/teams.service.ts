import { Team } from 'src/app/team';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { TEAMS } from './mock-files/mock-teams';





@Injectable({
  providedIn: 'root'
})
export class TeamsService {
private teamUrl = './mock-teams'
  selectedTeam: BehaviorSubject<Team> = new BehaviorSubject(null)
  constructor( private http: HttpClient) {
   }

   getTeambyId(params) {
     return this.http.get<any>(`${this.teamUrl}/show?id=${params.id}`);
   }

   getTeam( id: number): Observable<Team> {
     return null
    //  return this.getAllTeams()
    //  .pipe(
    //   map((thisTeam: Team) => thisTeam.find(p => p.id === id))
    // );
   }

   getAllTeams(): Observable <Team[]> {
    // return this.http.get<Team[]>(this.teamUrl)
    // .pipe(
    //   tap(data => console.log('All: ' + JSON.stringify(data))),

    // );
    return of(TEAMS)
   }



  }
