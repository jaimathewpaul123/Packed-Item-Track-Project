import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageItemComponent } from './manage-item/manage-item.component';

const routes: Routes = [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: ManageItemComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
