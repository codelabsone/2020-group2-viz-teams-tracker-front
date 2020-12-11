import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Team } from '../models/team-interface';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PicsumService } from '../services/picsum.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { TeamsService } from '../services/teams.service';
import { TeamMembersService } from '../services/team-members.service';
import { Router } from '@angular/router';
import { Member } from '../models/member';

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements OnInit {
  teams: Team[];
  members: Member[];
  positions: string[] = ['Software Engineer', 'Quality Engineer', 'Team Anchor'];
  images = [];
  startPoint = 0;
  selectedImage: any;
  firstName: string;
  lastName: string;
  jobTitle: string;


  formGroup = new FormGroup({
    image: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    jobTitle: new FormControl('', Validators.required),
    team_id: new FormControl('', Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<AddMemberDialogComponent>,
    private picSumService: PicsumService,
    private teamsService: TeamsService,
    private memberService: TeamMembersService,
    @Inject(MAT_DIALOG_DATA) public data: {image: string, firstName: string, lastName: string, jobTitle: string, team: number},
    private router: Router,) { }

  ngOnInit(): void {
    this.teamsService.getAllTeams().subscribe((teams: Team[])=> {this.teams = teams})
    this.picSumService.getPictures().subscribe((images: any[])=> {this.images = images})
  }

  selected(image) {
    this.selectedImage = image

    }
  pageChange($event: PageEvent) {
    this.startPoint = $event.pageIndex * 5
  }

  // getErrorMessage() {
  //   if (this.lastName.hasError('required')) {
  //     return 'You must enter a name.';
  //   }
  // }

  setDefaultPic(member: Member): string {
    console.log("member works", member)
    if (member.image === null || this.setDefaultPic === undefined || member.image === "") {
      // console.log("it works")
      return 'assets/images/avatar.png'
    }
    return member.image

  }

  submit() {
    console.log("submitted")
    if (this.selectedImage) {
      this.formGroup.get("image").setValue(this.selectedImage.download_url)
    }

    const newMember = new Member(this.formGroup.value);
    console.log(this.formGroup.value);

    console.log(newMember);
    this.memberService.addNewMember(newMember).subscribe((data: Member) => {
      console.log(data)
      localStorage.setItem('image', data.image);
      localStorage.setItem('firstName', data.firstName);
      localStorage.setItem('lastName', data.lastName);
      localStorage.setItem('jobTitle', data.jobTitle);
      this.dialogRef.close(newMember)
    })
  }
}
