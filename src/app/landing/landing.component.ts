import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'News', cols: 1, rows: 1 },
          { title: 'Kategorie1', cols: 1, rows: 1 },
          { title: 'Kategorie2', cols: 1, rows: 1 },
          { title: 'Kategorie3', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'News', cols: 3, rows: 1 },
        { title: 'Kategorie1', cols: 1, rows: 1 },
        { title: 'Kategorie2', cols: 1, rows: 1 },
        { title: 'Kategorie3', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
