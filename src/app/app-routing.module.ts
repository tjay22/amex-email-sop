import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopersComponent } from './developers/developers.component';
import { NonDevelopersComponent } from './non-developers/non-developers.component';
import { DownloadsComponent } from './downloads/downloads.component';

const routes: Routes = [
  { path: '', redirectTo:'/developers', pathMatch:'full' },
  { path: 'developers', component: DevelopersComponent,
    children: [
      { path: 'template', component: DevelopersComponent },
    ]
  },
  { path: 'non-developers', component: NonDevelopersComponent },
  { path: 'downloads', component: DownloadsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
