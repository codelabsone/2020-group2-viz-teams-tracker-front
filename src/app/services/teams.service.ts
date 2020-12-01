import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { TEAMS } from '../mock-files/mock-teams';
import { Router } from "@angular/router";
import {BehaviorSubject} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class TeamsService {
// private teamUrl = './mock-teams'
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
   }

   addNewTeam(params) {
    return this.http.post<any>(`${this.apiUrl}/create`, params);
   }



  }
