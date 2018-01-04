import { NgModule } from '@angular/core';
import { GetStartedComponent } from './get-started.component';
import { GetStartedRoutingModule } from './/get-started-routing.module';

@NgModule({
  imports: [
    GetStartedRoutingModule
  ],
  declarations: [
    GetStartedComponent
  ]
})
export class GetStartedModule { }
