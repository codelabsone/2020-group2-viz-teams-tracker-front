import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveTeamDialogComponent } from './archive-team-dialog.component';

describe('ArchiveTeamDialogComponent', () => {
  let component: ArchiveTeamDialogComponent;
  let fixture: ComponentFixture<ArchiveTeamDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveTeamDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveTeamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
