import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../environments/environment';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  title = 'app-sample1';

  @Input('state')
  set state(state: string) {
    console.debug('client-a received state', state);
  }

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
  }

}
