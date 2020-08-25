import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';

/*<--const appRoutes: Routes = [
  { path: 'comm', component: CommComponent },
  { path: 'resi',      component: ResiComponent },
  {
    path: 'comm',
    component: ResiComponent,
    data: { title: 'Residential' }
  },
  { path: '',
    redirectTo: '/comm',
    pathMatch: 'full'
  },
  { path: '**', component: RatesComponent }
];
*/

@NgModule({
  imports: [ BrowserModule,
   FormsModule,
   RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'free', component: FreeComponent },
      { path: 'subsc', component: SubscComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'news', component: NewsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'podcast', component: PodcastComponent },
      { path: 'advert', component: AdvertComponent },
      { path: 'about', component: AboutComponent },
      { path: 'thanks', component: ThanksComponent },
      { path: 'comm', component: CommComponent },
      { path: 'resi', component: ResiComponent },
      { path: 'inter', component: InterComponent },
      { path: 'landl', component: LandlComponent },
      { path: 'readtm', component: ReadtmComponent },
      { path: 'readchar', component: ReadcharComponent },
      { path: 'benefits', component: BenefitsComponent },
      { path: 'rates', component: RatesComponent },
      { path: 'sections', component: SectionsComponent },
      { path: 'deeds', component: DeedsComponent },
      { path: 'remax', component: RemaxComponent },
      { path: 'hinsure', component: HinsureComponent },
      { path: 'swaprop', component: SwapropComponent },
      { path: 'housef', component: HousefComponent },
      { path: 'commd', component: CommdComponent },
      { path: 'resid', component: ResidComponent },
      { path: 'covid', component: CovidComponent },
      { path: 'loan', component: LoanComponent },
      { path: 'rent', component: RentComponent },
      { path: 'rent2', component: Rent2Component },
      { path: 'repo', component: RepoComponent },
      { path: 'repof', component: RepofComponent },
      { path: 'presss', component: PresssComponent },
      { path: '**', component: PageNotFoundComponent },
      { path: '',   redirectTo: '/sections', pathMatch: 'full' },
      
      
    ])
  ],

  declarations: [ 
    AppComponent,
    HelloComponent,
    TopBarComponent,
     ],

  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
