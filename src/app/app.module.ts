import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/app.reducer';
import { environment } from 'src/environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterSerializer } from './state/router.serializer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TdeeFormComponent } from './components/tdee-form/tdee-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatStepperModule,
  MatChipsModule,
  MatCardModule,
  MatToolbarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TdeeShellComponent } from './containers/tdee-shell/tdee-shell.component';

@NgModule({
  declarations: [
    AppComponent,
    TdeeFormComponent,
    TdeeShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retain last 25 states
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer
    } as any),
    FormsModule,
    ReactiveFormsModule,

    // Material components
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatChipsModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
