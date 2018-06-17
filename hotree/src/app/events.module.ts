import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsComponent } from './events.component';
import { EventsService } from './events.service';

@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventsService
  ],
  bootstrap: [EventsComponent]
})
export class EventsModule { }
