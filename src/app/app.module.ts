import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
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
   /*RouterModule.forRoot([
     
        
      
      
    ])*/
  ],

  declarations: [ 
    AppComponent,
    HelloComponent,
    TopBarComponent,
     ],

  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
