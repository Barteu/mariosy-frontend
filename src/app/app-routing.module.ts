import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateMariosComponent } from './components/create-marios/create-marios.component';
import { ReceivedSentMariosComponent } from './components/received-sent-marios/received-sent-marios.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'received', component: ReceivedSentMariosComponent },
  { path: 'sent', component: ReceivedSentMariosComponent },
  { path: 'create', component: CreateMariosComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
