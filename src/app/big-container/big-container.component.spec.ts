import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigContainerComponent } from './big-container.component';

describe('BigContainerComponent', () => {
  let component: BigContainerComponent;
  let fixture: ComponentFixture<BigContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
