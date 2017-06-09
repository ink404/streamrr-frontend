import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { HomepageComponent } from './homepage/homepage.component';
import { StreamrrStaticRoutingModule } from './streamrr-static-routing.module';
import { StaticHeaderComponent } from './partials/static-header/static-header.component';

@NgModule({
  imports:      [
    CommonModule,
    StreamrrStaticRoutingModule
  ],
  declarations: [
    HomepageComponent,
    StaticHeaderComponent
  ],
  providers:    [  ]
})
export class StreamrrStaticModule {}
