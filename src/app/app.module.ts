import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RecipeOverviewComponent} from './recipe-overview/recipe-overview.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing';
import {SettingsService} from './_services/settings.service';
import {WebStorageModule} from 'ngx-store';
import {SettingsComponent} from './settings/settings.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModuleViewComponent} from './module-view/module-view.component';
import {BackendService} from './backend.service';
import {WebsocketService} from './websocket.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    RecipeOverviewComponent,
    SettingsComponent,
    ModuleViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatExpansionModule,
    AppRoutingModule,
    HttpClientModule,
    WebStorageModule
  ],
  providers: [SettingsService, BackendService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
