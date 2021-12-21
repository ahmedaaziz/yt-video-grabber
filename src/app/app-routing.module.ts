import { HomeComponent } from './features/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from "./features/pages/detail/detail.component";

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'video/:id',
    component:DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
