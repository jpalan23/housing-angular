import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HousesComponent } from './houses/houses.component';
import { HouseListComponent } from './houses/house-list/house-list.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { HouseService} from './house.service';
import { AddListingComponent } from './add-listing/add-listing.component';

const appRoutes: Routes = [
  {path: '', component: HousesComponent},
  {path: 'house', component: HouseDetailComponent},
  {path: 'add', component: AddListingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HousesComponent,
    HouseListComponent,
    HouseDetailComponent,
    AddListingComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
