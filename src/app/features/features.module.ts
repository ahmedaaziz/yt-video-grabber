import { RouterModule } from '@angular/router';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HttpService } from "./services/http.service";
import { CustomDatePipe } from './pipes/customDate/custom-date.pipe';
import { NgxPaginationModule } from "ngx-pagination";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2OrderModule } from "ng2-order-pipe";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxStarRatingModule } from "ngx-star-rating";



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    DetailComponent,
    CustomDatePipe,
  ],
  exports:[
    HeaderComponent,
    HomeComponent,
    DetailComponent

  ],
  imports: [
    CommonModule,
    Ng2OrderModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NgxStarRatingModule,
    Ng2SearchPipeModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers:[
    HttpService
  ],

})
export class FeaturesModule { }
