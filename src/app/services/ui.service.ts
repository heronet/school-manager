import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private pageHeaderSubject = new ReplaySubject<string>();
  pageHeader$ = this.pageHeaderSubject.asObservable();

  constructor() { }

  setPeageHeader(title: string) {
    this.pageHeaderSubject.next(title);
  }
}
