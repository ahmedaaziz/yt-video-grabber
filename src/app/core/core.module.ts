import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomeDatePipe } from './pipes/customeDate/custome-date.pipe';



@NgModule({
  declarations: [
    CustomeDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomeDatePipe
  ]
})
export class CoreModule { }
