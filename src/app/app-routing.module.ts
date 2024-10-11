import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { BrandComponent } from './componenti/brand/brand.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent }, // La home page
  { path: 'brand/:name', component: BrandComponent },
   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
