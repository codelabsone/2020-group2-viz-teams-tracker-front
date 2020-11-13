import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Team } from 'src/app/team';
import { TEAMS } from './../mock-teams';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TeamsService } from '../teams.service';
import { PicsumService } from '../picsum.service';

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements OnInit {
  teams: Team[] = TEAMS;
  positions = ['Software Engineer', 'Quality Engineer', 'Team Anchor'];
  images = [];
  
  constructor(private picSumService: PicsumService,private teamService: TeamsService, @Inject(MAT_DIALOG_DATA) public data: {name: string}) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe((teams: Team[])=> {this.teams = teams})
    this.picSumService.getPictures().subscribe((images: any[])=> {this.images = images})
  }
}