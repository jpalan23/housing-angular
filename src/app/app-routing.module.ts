import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HousesComponent } from './houses/houses.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { AddListingComponent } from './add-listing/add-listing.component';

const appRoutes: Routes = [
    {path: '', component: HousesComponent, pathMatch: 'full'},
    {path: 'house', component: HouseDetailComponent},
    {path: 'add', component: AddListingComponent}
  ];

@NgModule({
 imports: [
     RouterModule.forRoot(appRoutes)
 ],
 exports: [RouterModule]
})
export class AppRoutingModule {

}
