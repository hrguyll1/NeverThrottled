import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  // {path: '', redirectTo: '/aboutus', pathMatch: 'full'},
  {path: 'aboutus', component: AboutusComponent},
  {path: '', component: ProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent},
  {path: '**', redirectTo: '/', pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
