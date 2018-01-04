import { NgModule } from '@angular/core';
import { FilesComponent } from './files.component';
import { FilesRoutingModule } from './files-routing.module';

@NgModule({
  imports: [
    FilesRoutingModule
  ],
  declarations: [
    FilesComponent
  ]
})
export class FilesModule { }
