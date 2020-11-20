import { TEAMS } from './../mock-files/mock-teams';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Team } from 'src/app/team';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TeamsService } from '../teams.service';
import { PicsumService } from '../picsum.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements OnInit {
  teams: Team[] = TEAMS;
  positions = ['Software Engineer', 'Quality Engineer', 'Team Anchor'];
  images = [];
  startPoint = 0;
  selectedImage: any;

  constructor(private picSumService: PicsumService,private teamService: TeamsService, @Inject(MAT_DIALOG_DATA) public data: {name: string}) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe((teams: Team[])=> {this.teams = teams})
    this.picSumService.getPictures().subscribe((images: any[])=> {this.images = images})
  }

  selected(image) {
    this.selectedImage = image

    }
  pageChange($event: PageEvent) {
    this.startPoint = $event.pageIndex * 5
  }

}

