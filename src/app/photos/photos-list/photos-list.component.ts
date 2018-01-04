import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../shared/photo.service';
import { Photo } from '../shared/photo';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {

  photos: Array<Photo>;
  sortDir: number;
  sortType: string;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.sortDir = 1;
    this.sortType = '';

    this.getPhotos();
  }

  sortBy(sortType: string): void {
    if (this.sortType !== sortType) {
      this.sortDir = 1;
      this.sortType = sortType;
    } else {
      this.sortDir = -this.sortDir;
    }

    switch (sortType) {
      case 'name':
        this.photos.sort((a: Photo, b: Photo) => {
          return a.fileName.localeCompare(b.fileName) * this.sortDir;
        })
        break;
      case 'size':
        this.photos.sort((a: Photo, b: Photo) => {
          return (a.size - b.size) * this.sortDir;
        })
        break;
      case 'modified':
        this.photos.sort((a: Photo, b: Photo) => {
          let res = new Date(a.modifiedDate) < new Date(b.modifiedDate) ? 1 : -1;

          return res * this.sortDir;
        })
        break;
    }
  }

  private getPhotos(): void {
    this.photos = [];

    this.photoService
      .list()
      .subscribe((photos: Array<Photo>) => {
        this.photos = photos
        this.sortBy('modified');
      });
  }
}
