import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { MariosCardComponent } from './shared/marios-card/marios-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MariosDialogComponent } from './shared/marios-dialog/marios-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { CreateMariosComponent } from './components/create-marios/create-marios.component';
import { MariosGridComponent } from './shared/marios-grid/marios-grid.component';
import { ReceivedSentMariosComponent } from './components/received-sent-marios/received-sent-marios.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor, AsyncPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    InfoCardComponent,
    MariosCardComponent,
    MariosDialogComponent,
    CreateMariosComponent,
    MariosGridComponent,
    ReceivedSentMariosComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    NgFor,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    AsyncPipe,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
