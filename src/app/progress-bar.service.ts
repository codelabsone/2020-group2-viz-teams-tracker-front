import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  visible = false;
  public isLoading = new BehaviorSubject(false);
  constructor() { }
  show() {
    this.isLoading.next(this.visible = true)
  }
  hide() {
    this.isLoading.next(this.visible = false)
  }
}
