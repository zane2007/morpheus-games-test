import { NgModule, OnInit } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { PhotoService } from './shared/photo.service';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosRoutingModule } from './photos-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PhotosRoutingModule
  ],
  declarations: [
    PhotosListComponent
  ],
  providers: [
  ]
})
export class PhotosModule {

}
