import { NgModule } from '@angular/core';
import { EventsComponent } from './events.component';
import { EventsRoutingModule } from './/events-routing.module';

@NgModule({
  imports: [
    EventsRoutingModule
  ],
  declarations: [
    EventsComponent
  ]
})
export class EventsModule { }
