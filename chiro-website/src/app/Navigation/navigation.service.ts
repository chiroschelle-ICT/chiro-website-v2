import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private headerVisible = new BehaviorSubject<boolean>(true);
  headerVisible$ = this.headerVisible.asObservable();

  hideHeader() {
    this.headerVisible.next(false);
  }

  showHeader() {
    this.headerVisible.next(true);
  }
}
