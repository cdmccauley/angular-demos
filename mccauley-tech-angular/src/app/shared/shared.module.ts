import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MockupComponent } from './mockup/mockup.component';

@NgModule({
  imports: [
    CommonModule,
    MockupComponent
  ],
  declarations: [MockupComponent]
})
export class SharedModule { }
