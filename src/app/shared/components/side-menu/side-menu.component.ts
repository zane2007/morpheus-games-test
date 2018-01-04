import { Component, OnInit } from '@angular/core';
import { PhotoService } from '@app/photos/shared/photo.service';
import { Photo } from '@app/photos/shared/photo';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  photoSizeGb: number;
  photoSizePerc: number;
  totalSize: number;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoSizeGb = this.photoSizePerc = 0;
    this.totalSize = 100;

    let photoSize = 0;

    this.photoService
      .list()
      .subscribe((photos: Array<Photo>) => {
        photos.map((photo: Photo) => {
          photoSize += photo.size;
        });

        this.photoSizeGb = photoSize / 1000;
        this.photoSizePerc = this.photoSizeGb / this.totalSize * 100;
      });
  }

}
