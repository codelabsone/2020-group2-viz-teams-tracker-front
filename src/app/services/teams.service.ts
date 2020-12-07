import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Team } from '../models/team-interface';
// import { TEAMS } from '../mock-files/mock-teams';
import { Router } from "@angular/router";
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {
// private teamUrl = './mock-teams'
selectedTeam: BehaviorSubject<Team> = new BehaviorSubject(null)
private apiUrl: string

constructor(
  private router: Router,
  private http: HttpClient
  ) {

    this.apiUrl = `${environment.apiUrl}api/teams`
   }

   getTeambyId(params) {
     return this.http.get<any>(`${this.apiUrl}/show?id=${params.id}`);
   }

   getTeam( id: number): Observable<Team> {
     return null
    //  return this.getAllTeams()
    //  .pipe(
    //   map((thisTeam: Team) => thisTeam.find(p => p.id === id))
    // );
   }

   getAllTeams() {
    return this.http.get<any>(`${this.apiUrl}/index`)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),)
   }


   addNewTeam(params) {
    return this.http.post<any>(`${this.apiUrl}/create`, params);
   }

  }

  // @Injectable({
//   providedIn: 'root'
// })
// export class TeamsService {
// private teamUrl = './mock-teams'
// baseUr
//   selectedTeam: BehaviorSubject<Team> = new BehaviorSubject(null)
//   constructor( private http: HttpClient) {
//    }

//    getTeambyId(params) {
//      return this.http.get<any>(`${this.teamUrl}/show?id=${params.id}`);
//    }

//    getTeam( id: number): Observable<Team> {
//      return null
//     //  return this.getAllTeams()
//     //  .pipe(
//     //   map((thisTeam: Team) => thisTeam.find(p => p.id === id))
//     // );
//    }

//    getAllTeams(): Observable <Team[]> {
//     return this.http.get<Team[]>(this.teamUrl)
//     .pipe(
//       tap(data => console.log('All: ' + JSON.stringify(data))),

//     );
//     return of(TEAMS)
//    }



  // }

