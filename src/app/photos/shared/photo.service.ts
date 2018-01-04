import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { Photo } from './photo';

@Injectable()
export class PhotoService {

  private photos: Array<Photo>;

  constructor(private http: HttpClient) { }

  private readonly url = 'assets/photos.json';

  list(): Observable<Array<Photo>> {
    if (this.photos) {
      return Observable.of(this.photos);
    } else {
      return this.http
        .get<Array<Photo>>(this.url)
        .do((photos: Array<Photo>) => { this.photos = photos });
    }
  }

}
