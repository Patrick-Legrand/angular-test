import { Component, OnInit } from '@angular/core';
import { BeetService } from './beet.service';
import { mergeAll, toArray, map, first } from 'rxjs/operators';
import { interval, merge } from 'rxjs';

@Component({
  selector: 'app-beet',
  templateUrl: './beet.component.html',
  styleUrls: ['./beet.component.scss']
})
export class BeetComponent implements OnInit {

  beets = [];

  constructor(
    private beetService: BeetService
  ) { }

  ngOnInit(): void {
    this.loadAllBeets();
  }

  private loadAllBeets() {
    this.beetService.getAll()
      .pipe(first())
      .subscribe(beets => this.beets = beets)
  }

  public showLatestBeets() {

    this.beetService.getDifferedPacks()
      .subscribe(beetsPack =>
        beetsPack.map(beets => this.beets.push(beets))
      )
  }

}
