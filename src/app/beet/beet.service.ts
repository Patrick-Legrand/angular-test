import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, map, concatAll } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeetService {
  private config = environment.config;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[]>(`${this.config.apiUrl}/beets`);
  }
  
  /**
   * Return a beetPack every 2 secondes
   */
  getDifferedPacks() {
    
    return of(["Beet1", "Beet2"],["Beet3"],["Beet4","Beet5","Beet6","Beet7","Beet8"])
      .pipe(map(value => of(value)
        .pipe(delay(2000))
      ))
      .pipe(concatAll())
  }

}
