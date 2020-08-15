import { UserFormComponent } from './user-form/user-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'users', component: UserFormComponent },
  { path: 'users/:id', component: UserFormComponent },
  { path: '', component: FormArrayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
